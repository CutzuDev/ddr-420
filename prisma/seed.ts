import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  const botId = "bot_system_user";

  try {
    // First create the bot system user if it doesn't exist

    const medicTokenObj = await prisma.medicToken.findUnique({
      where: {
        id: "cm4f7vdms009v12vmg8czjpl3",
      },
      include: {
        medic: true,
        client: true,
      },
    });


    if (!medicTokenObj?.id) {
      throw new Error("Medic token ID is undefined");
    }

    const chat = await prisma.chat.create({
      data: {
        medicTokenId: medicTokenObj.id,
        messages: {
          create: [
            {
              role: "doctor",
              senderId: medicTokenObj?.medicId ?? "",
              content: "Hello! How can I help you today?",
              status: "confirmed",
              sentAt: new Date(),
            },
            {
              role: "client",
              senderId: medicTokenObj?.clientId ?? "",
              content:
                "Hi doctor, I have some questions about my recent symptoms.",
              status: "confirmed",
              sentAt: new Date(Date.now() + 1000),
            },
            {
              role: "doctor",
              senderId: medicTokenObj?.medicId ?? "",
              content: "Of course, please describe your symptoms.",
              status: "confirmed",
              sentAt: new Date(Date.now() + 2000),
            },
            {
              role: "client",
              senderId: medicTokenObj?.clientId ?? "",
              content:
                "I've been experiencing headaches and fatigue for the past week.",
              status: "confirmed",
              sentAt: new Date(Date.now() + 3000),
            },
            {
              role: "bot",
              senderId: botId,
              content: "Please follow the instructions provided by the doctor.",
              status: "confirmed",
              sentAt: new Date(Date.now() + 4000),
            },
          ],
        },
      },
      include: {
        messages: true,
      },
    });

    console.log("Seed completed successfully!");
    return chat;
  } catch (error) {
    console.error("Error seeding data:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Execute the seed function
seed()
  .then((result) => {
    console.log("Seeding completed:", result);
  })
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  });
