import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";

type UserAccess = {
  updateUser: (id: string, name: string) => boolean | Promise<boolean>;
};

export const appRouter = router({
  updateUser: publicProcedure
    .input(z.object({ id: z.string().min(1), name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const success = await (ctx.dataAccess as UserAccess).updateUser(
        input.id,
        input.name
      );
      return { success };
    }),
});

export type AppRouter = typeof appRouter;
