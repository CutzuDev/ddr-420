import { PrismaClient } from "@prisma/client";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

const prisma = new PrismaClient();

export const medicRouter = createTRPCRouter({
  token: publicProcedure
    .input(z.string())
    .query(({ input }: { input: string }) => {
      return prisma.medicToken.findFirst({
        where: {
          medicId: input,
        },
      });
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
