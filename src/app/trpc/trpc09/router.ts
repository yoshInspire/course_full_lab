import { router, publicProcedure } from "../_core/trpc";
import { TRPCError } from "@trpc/server";

const protectedProcedure = publicProcedure.use(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({ ctx: { user: ctx.user } });
});

export const appRouter = router({
  me: protectedProcedure.query(({ ctx }) => ({ userId: ctx.user.id })),
});

export type AppRouter = typeof appRouter;
