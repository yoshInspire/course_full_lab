import { router, publicProcedure, middleware } from '../_core/trpc'

export const requestIdMiddleware = middleware(async (opts) => {
  return opts.next({
    ctx: {
      ...opts.ctx,
      requestId: 'req-123',
    },
  })
})

export const appRouter = router({
  getInfo: publicProcedure
    .use(requestIdMiddleware)
    .query(({ ctx }) => {
      return `request:${ctx.requestId}`
    }),
})

export type AppRouter = typeof appRouter
