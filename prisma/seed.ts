import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
const prisma = new PrismaClient();

// Function to generate a random token
function generateToken(length: number = 32): string {
  return crypto.randomBytes(length).toString("hex");
}

// Function to create a Google account for a user
async function createGoogleAccount(userId: string) {
  return prisma.account.create({
    data: {
      userId,
      type: "oauth",
      provider: "google",
      providerAccountId: crypto.randomBytes(16).toString("hex"),
      refresh_token: crypto.randomBytes(64).toString("base64"),
      access_token: crypto.randomBytes(64).toString("base64"),
      expires_at: Math.floor(Date.now() / 1000) + 3600,
      token_type: "Bearer",
      scope: "openid profile email",
      id_token: crypto.randomBytes(64).toString("base64"),
      session_state: crypto.randomBytes(32).toString("hex"),
    },
  });
}

async function main() {
  // Clean up existing data
  await prisma.medicToken.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.user.deleteMany();

  // Create 10 medics
  const medics = await Promise.all(
    Array.from({ length: 10 }, async (_, i) => {
      const medicNumber = i + 1;
      const user = await prisma.user.create({
        data: {
          name: `Dr. ${["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez"][i]}`,
          email: `doctor${medicNumber}@medical.com`,
          emailVerified: new Date(),
          image: `https://api.dicebear.com/7.x/avataaars/svg?seed=doctor${medicNumber}`,
        },
      });

      // Create Google account for each medic
      await createGoogleAccount(user.id);

      return user;
    }),
  );

  // Create 100 clients
  const clients = await Promise.all(
    Array.from({ length: 100 }, async (_, i) => {
      const clientNumber = i + 1;
      const firstNames = [
        "James",
        "John",
        "Robert",
        "Michael",
        "William",
        "David",
        "Richard",
        "Joseph",
        "Thomas",
        "Charles",
        "Mary",
        "Patricia",
        "Jennifer",
        "Linda",
        "Elizabeth",
        "Barbara",
        "Susan",
        "Jessica",
        "Sarah",
        "Karen",
      ];
      const lastNames = [
        "Smith",
        "Johnson",
        "Williams",
        "Brown",
        "Jones",
        "Garcia",
        "Miller",
        "Davis",
        "Rodriguez",
        "Martinez",
        "Anderson",
        "Taylor",
        "Thomas",
        "Moore",
        "Jackson",
        "Martin",
        "Lee",
        "Thompson",
        "White",
        "Harris",
      ];

      const randomFirstName =
        firstNames[Math.floor(Math.random() * firstNames.length)];
      const randomLastName =
        lastNames[Math.floor(Math.random() * lastNames.length)];

      const user = await prisma.user.create({
        data: {
          name: `${randomFirstName} ${randomLastName}`,
          email: `patient${clientNumber}@example.com`,
          emailVerified: new Date(),
          image: `https://api.dicebear.com/7.x/avataaars/svg?seed=patient${clientNumber}`,
        },
      });

      // Create Google account for each client
      await createGoogleAccount(user.id);

      return user;
    }),
  );

  // Create some active sessions for random users
  const sessions = await Promise.all(
    [...medics, ...clients]
      .slice(0, 20) // Create sessions for 20 random users
      .map((user) =>
        prisma.session.create({
          data: {
            sessionToken: crypto.randomBytes(32).toString("hex"),
            userId: user.id,
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
          },
        }),
      ),
  );

  // Create tokens for medics - each medic gets 5 tokens
  const tokens = await Promise.all(
    medics.flatMap((medic) =>
      Array.from({ length: 5 }, async () => {
        const isUsed = Math.random() < 0.6; // 60% chance of token being used
        const randomClient = isUsed
          ? clients[Math.floor(Math.random() * clients.length)]
          : null;

        return prisma.medicToken.create({
          data: {
            token: generateToken(),
            medicId: medic.id,
            isUsed,
            clientId: isUsed ? randomClient?.id : null,
          },
        });
      }),
    ),
  );

  // Log summary
  console.log(`Created ${medics.length} medics`);
  console.log(`Created ${clients.length} clients`);
  console.log(`Created ${tokens.length} tokens`);
  console.log(`Created ${sessions.length} active sessions`);

  // Example query to verify relationships and show complete user data
  const sampleMedicWithAllData = await prisma.user.findFirst({
    where: {
      email: "doctor1@medical.com",
    },
    include: {
      accounts: true,
      sessions: true,
      medicTokens: {
        include: {
          client: true,
        },
      },
    },
  });

  console.log("\nSample medic with complete data:");
  console.log(JSON.stringify(sampleMedicWithAllData, null, 2));

  // Print some statistics
  const usedTokensCount = tokens.filter((token) => token.isUsed).length;
  console.log("\nStatistics:");
  console.log(`Total tokens: ${tokens.length}`);
  console.log(`Used tokens: ${usedTokensCount}`);
  console.log(`Unused tokens: ${tokens.length - usedTokensCount}`);

  // Show some sample unused tokens
  const unusedTokens = await prisma.medicToken.findMany({
    where: {
      isUsed: false,
    },
    take: 5,
    include: {
      medic: {
        include: {
          accounts: true,
        },
      },
    },
  });

  console.log("\nSample unused tokens:");
  unusedTokens.forEach((token) => {
    console.log(
      `Token: ${token.token} (Medic: ${token.medic.name}, Email: ${token.medic.email})`,
    );
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
