import { router, publicProcedure } from "../_core/trpc";

export const appRouter = router({
  info: publicProcedure.query(({ ctx }) => ({ requestId: ctx.requestId })),
});

export type AppRouter = typeof appRouter;
