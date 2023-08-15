import { examplePublicRouter } from "~/server/api/routers/publicExample";
import { examplePrivateRouter } from "~/server/api/routers/privateExample";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  publicExample: examplePublicRouter,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  privateExample: examplePrivateRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
