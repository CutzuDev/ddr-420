// src/server/api/routers/assistant.ts
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { z } from 'zod';
import { getAIResponse } from '~/utils/aiClient';

export const assistantRouter = createTRPCRouter({
    ask: publicProcedure.input(z.string()).query(async ({ input }) => {
        const answer = await getAIResponse(input);
        return { answer };
    }),
});
