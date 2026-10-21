import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";

type UserAccess = {
  createUser: (name: string) => string | Promise<string>;
};

export const appRouter = router({
  createUser: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const id = await (ctx.dataAccess as UserAccess).createUser(input.name);
      return { id };
    }),
});

export type AppRouter = typeof appRouter;
