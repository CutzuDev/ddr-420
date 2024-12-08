import { auth } from "~/server/auth";
import { type DefaultSession } from "next-auth";
import { PrismaClient, type User, type Session } from "@prisma/client";

interface ExtendedSession extends DefaultSession {
  user?: User & DefaultSession["user"];
}
const session = await auth();

export async function MedicToken() {
  // Type assertion to show what properties are available
  const user = session?.user as User | undefined;
  const prisma = new PrismaClient();
  const token = await prisma.medicToken.findFirst({
    where: {
      medicId: user?.id,
    },
  });
  return token;
}
