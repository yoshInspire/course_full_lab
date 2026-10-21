import { router, publicProcedure } from "../_core/trpc";
import { TRPCError } from "@trpc/server";

const requireRequestId = publicProcedure.use(({ ctx, next }) => {
  if (!ctx.requestId) {
    throw new TRPCError({ code: "BAD_REQUEST", message: "requestId is missing" });
  }
  return next({ ctx: { requestId: ctx.requestId } });
});

export const appRouter = router({
  info: requireRequestId.query(({ ctx }) => ({ requestId: ctx.requestId })),
});

export type AppRouter = typeof appRouter;
