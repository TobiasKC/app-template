import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const examplePrivateRouter = createTRPCRouter({
  secretHello: privateProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello. The following messages is coming from a { private }  route ${input.text}`,
      };
    }),
  getAll: privateProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
});
