import { PrismaClient } from "@prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();

function generateToken(length: number = 32): string {
  return crypto.randomBytes(length).toString("hex");
}

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

async function createBotUser() {
  return prisma.user.upsert({
    where: { email: "bot@system.local" },
    update: {},
    create: {
      id: "bot_system_user",
      name: "System Bot",
      email: "bot@system.local",
      emailVerified: new Date(),
    },
  });
}

async function main() {
  try {
    // Clean up existing data
    console.log("Cleaning up existing data...");
    await prisma.message.deleteMany();
    await prisma.chat.deleteMany();
    await prisma.medicToken.deleteMany();
    await prisma.session.deleteMany();
    await prisma.account.deleteMany();
    await prisma.user.deleteMany();

    // Create bot user
    console.log("Creating bot user...");
    await createBotUser();

    // Create medics
    console.log("Creating medics...");
    const medicNames = [
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
    ];
    const medics = await Promise.all(
      medicNames.map(async (lastName, i) => {
        const medicNumber = i + 1;
        const user = await prisma.user.create({
          data: {
            name: `Dr. ${lastName}`,
            email: `doctor${medicNumber}@medical.com`,
            emailVerified: new Date(),
            image: `https://api.dicebear.com/7.x/avataaars/svg?seed=doctor${medicNumber}`,
          },
        });

        await createGoogleAccount(user.id);
        return user;
      }),
    );

    // Create clients
    console.log("Creating clients...");
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

    const clients = await Promise.all(
      Array.from({ length: 100 }, async (_, i) => {
        const randomFirstName =
          firstNames[Math.floor(Math.random() * firstNames.length)];
        const randomLastName =
          lastNames[Math.floor(Math.random() * lastNames.length)];

        const user = await prisma.user.create({
          data: {
            name: `${randomFirstName} ${randomLastName}`,
            email: `patient${i + 1}@example.com`,
            emailVerified: new Date(),
            image: `https://api.dicebear.com/7.x/avataaars/svg?seed=patient${i + 1}`,
          },
        });

        await createGoogleAccount(user.id);
        return user;
      }),
    );

    // Create sessions
    console.log("Creating sessions...");
    const sessionUsers = [...medics, ...clients].slice(0, 20);
    const sessions = await prisma.session.createMany({
      data: sessionUsers.map((user) => ({
        sessionToken: crypto.randomBytes(32).toString("hex"),
        userId: user.id,
        expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      })),
    });

    // Create tokens for medics
    console.log("Creating medic tokens...");
    const tokensData = medics.flatMap((medic) =>
      Array.from({ length: 5 }, () => {
        const isUsed = Math.random() < 0.6;
        const randomClient = isUsed
          ? clients[Math.floor(Math.random() * clients.length)]
          : null;

        return {
          token: generateToken(),
          medicId: medic.id,
          isUsed,
          clientId: isUsed ? randomClient?.id : null,
        };
      }),
    );

    const tokens = await prisma.medicToken.createMany({
      data: tokensData,
    });

    // Generate statistics
    const usedTokensCount = tokensData.filter((token) => token.isUsed).length;

    // Log summary
    console.log("\nSeed Results:");
    console.log(`✓ Created ${medics.length} medics`);
    console.log(`✓ Created ${clients.length} clients`);
    console.log(`✓ Created ${sessions.count} active sessions`);
    console.log(`✓ Created ${tokens.count} tokens (${usedTokensCount} used)`);

    // Sample data verification
    const sampleMedic = await prisma.user.findFirst({
      where: { email: "doctor1@medical.com" },
      include: {
        accounts: true,
        sessions: true,
        medicTokens: {
          include: { client: true },
          take: 5,
        },
      },
    });

    if (sampleMedic) {
      console.log("\nSample Medic Data:");
      console.log(JSON.stringify(sampleMedic, null, 2));
    }

    // Sample unused tokens
    const unusedTokens = await prisma.medicToken.findMany({
      where: { isUsed: false },
      take: 5,
      include: {
        medic: true,
      },
    });

    console.log("\nSample Unused Tokens:");
    unusedTokens.forEach((token) => {
      console.log(`Token: ${token.token} (Medic: ${token.medic.name})`);
    });
  } catch (error) {
    console.error("Seed failed:", error);
    throw error;
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
