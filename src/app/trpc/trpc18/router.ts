import { router, publicProcedure } from "../_core/trpc";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

/**
 * userRouter уже реализован.
 * Его изменять нельзя.
 */
const userRouter = router({});

type Post = { id: string; title: string };

type PostAccess = {
  createPost: (title: string) => string | Promise<string>;
  getPostById: (id: string) => Post | null | Promise<Post | null>;
};

const postRouter = router({
  createPost: publicProcedure
    .input(
      z.object({
        title: z.string().min(1),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const id = await (ctx.dataAccess as PostAccess).createPost(input.title);
      return { id };
    }),

  getPostById: publicProcedure
    .input(
      z.object({
        id: z.string().min(1),
      })
    )
    .query(async ({ input, ctx }) => {
      const post = await (ctx.dataAccess as PostAccess).getPostById(input.id);
      if (!post) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Post not found" });
      }
      return post;
    }),
});

/**
 * appRouter уже собран.
 * Его изменять нельзя.
 */
export const appRouter = router({
  user: userRouter,
  post: postRouter,
});

export type AppRouter = typeof appRouter;
