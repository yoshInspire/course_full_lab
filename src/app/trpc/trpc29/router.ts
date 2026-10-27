import { router, publicProcedure, middleware } from '../_core/trpc'

export const prefixMiddleware = middleware(async (opts) => {
  const result = await opts.next()

  if (!result.ok) {
    return result
  }

  return { ...result, data: `prefix-${String(result.data)}` }
})

export const suffixMiddleware = middleware(async (opts) => {
  const result = await opts.next()

  if (!result.ok) {
    return result
  }

  return { ...result, data: `${String(result.data)}-suffix` }
})

export const appRouter = router({
  getValue: publicProcedure
    .use(prefixMiddleware)
    .use(suffixMiddleware)
    .query(() => {
      return 'value'
    }),
})

export type AppRouter = typeof appRouter
