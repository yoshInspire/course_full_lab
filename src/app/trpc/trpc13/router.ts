import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";

type User = { id: string; name: string };

type UserAccess = {
  getUserById: (id: string) => User | null | Promise<User | null>;
};

export const appRouter = router({
  getUserById: publicProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(({ ctx, input }) => (ctx.dataAccess as UserAccess).getUserById(input.id)),
});

export type AppRouter = typeof appRouter;
