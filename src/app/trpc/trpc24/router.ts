import { router, publicProcedure, middleware } from '../_core/trpc'

export const wrapResultMiddleware = middleware(async ({ ctx, next }) => {
  const result = await next()

  if (!result.ok) {
    return result
  }

  return {
    ...result,
    data: {
      data: result.data,
      requestId: ctx.requestId,
    },
  }
})

export const appRouter = router({
  getMessage: publicProcedure
    .use(wrapResultMiddleware)
    .query(() => {
      return 'hello'
    }),
})

export type AppRouter = typeof appRouter
