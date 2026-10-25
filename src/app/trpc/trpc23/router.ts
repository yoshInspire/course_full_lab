import { router, publicProcedure, middleware } from '../_core/trpc'

export const auditMiddleware = middleware(async ({ ctx, path, next }) => {
  const result = await next()

  if (result.ok) {
    ctx.auditService?.record({ path, result: result.data })
  }

  return result
})

export const appRouter = router({
  hello: publicProcedure
    .use(auditMiddleware)
    .query(() => {
      return 'world'
    }),
})

export type AppRouter = typeof appRouter
