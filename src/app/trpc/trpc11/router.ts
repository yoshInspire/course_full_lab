import { router, publicProcedure } from "../_core/trpc";

type VersionAccess = {
  getVersion: () => string | Promise<string>;
};

export const appRouter = router({
  getVersion: publicProcedure.query(async ({ ctx }) => {
    const version = await (ctx.dataAccess as VersionAccess).getVersion();
    return { version };
  }),
});

export type AppRouter = typeof appRouter;
