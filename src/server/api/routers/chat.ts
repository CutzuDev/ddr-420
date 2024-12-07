import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { userId, message } = req.body;

        //modelul NLP
        const botResponse = await analyzeMessage(message);

        // Salvează conversația
        const chat = await prisma.chat.create({
            data: {
                userId,
                messages: {
                    create: [
                        { sender: "user", content: message, status: "pending", },
                        { sender: "bot", content: botResponse, status: "pending", },
                    ],
                },
            },
        });

        res.json(chat);
    } else {
        res.status(405).end();
    }
}

async function analyzeMessage(message: string) {
    // Logică pentru a analiza mesajul cu "medical-nlp_ro.csv"
    return "Răspuns preliminar generat de bot.";
}
