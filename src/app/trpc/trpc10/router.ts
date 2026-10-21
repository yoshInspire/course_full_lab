import { router, publicProcedure } from "../_core/trpc";
import { TRPCError } from "@trpc/server";

const protectedProcedure = publicProcedure.use(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({ ctx: { user: ctx.user } });
});

const userRouter = router({
  me: protectedProcedure.query(({ ctx }) => ({ userId: ctx.user.id })),
});

const systemRouter = router({
  ping: publicProcedure.query(() => ({ status: "ok" as const })),
});

export const appRouter = router({
  user: userRouter,
  system: systemRouter,
});

export type AppRouter = typeof appRouter;
