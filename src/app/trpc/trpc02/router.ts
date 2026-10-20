import { router, publicProcedure } from "../_core/trpc";

export const appRouter = router({
  hello: publicProcedure.query(() => "hello"),
});

export type AppRouter = typeof appRouter;
