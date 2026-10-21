import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";

export const appRouter = router({
  greet: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => ({ message: `Hello, ${input.name}` })),
});

export type AppRouter = typeof appRouter;
