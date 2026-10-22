import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

type User = { id: string; name: string };

type UserAccess = {
  getUserById: (id: string) => User | null | Promise<User | null>;
};

export const appRouter = router({
  getUserById: publicProcedure
    .input(
      z.object({
        id: z.string().min(1),
      })
    )
    .query(async ({ input, ctx }) => {
      const user = await (ctx.dataAccess as UserAccess).getUserById(input.id);
      if (!user) {
        throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
      }
      return user;
    }),
});

export type AppRouter = typeof appRouter;
