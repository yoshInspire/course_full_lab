import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";

type UserAccess = {
  deleteUser: (id: string) => boolean | Promise<boolean>;
};

export const appRouter = router({
  deleteUser: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const success = await (ctx.dataAccess as UserAccess).deleteUser(input.id);
      return { success };
    }),
});

export type AppRouter = typeof appRouter;
