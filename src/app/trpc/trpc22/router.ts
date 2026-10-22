import { router, publicProcedure, middleware } from '../_core/trpc'

export const timingMiddleware = middleware(async ({ ctx, next }) => {
  const start = Date.now()
  const result = await next()
  const duration = Date.now() - start

  ctx.logger?.info(`Procedure executed in ${duration}ms`)

  return result
})

export const appRouter = router({
  ping: publicProcedure
    .use(timingMiddleware)
    .query(() => {
      return 'pong'
    }),
})

export type AppRouter = typeof appRouter
