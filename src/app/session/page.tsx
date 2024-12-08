import { PrismaClient } from "@prisma/client";

// use `prisma` in your application to read and write data in your DB
const prisma = new PrismaClient();

export default async function Session() {
  const data = await prisma.medicToken.findMany({
    where: {
      medicId: "cm4elui26000010mhzwgmrz2r",
      isUsed: true,
      clientId: {
        not: null,
      },
    },
    include: {
      client: {
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      },
    },
  });
  console.log(data);

  return <div></div>;
}
