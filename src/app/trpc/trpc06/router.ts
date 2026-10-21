import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";

export const appRouter = router({
  setName: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(({ input }) => ({ status: "ok" as const, name: input.name })),
});

export type AppRouter = typeof appRouter;
