import { PrismaClient } from "@prisma/client";

// use `prisma` in your application to read and write data in your DB
const prisma = new PrismaClient();

export default async function Session() {
  const medikTokenObj = await prisma.medicToken.findUnique({
    where: {
      id: "cm4f5kfrr00b7gjl7dgahk5io",
    },
  });
  console.log(medikTokenObj);

  return <div></div>;
}
