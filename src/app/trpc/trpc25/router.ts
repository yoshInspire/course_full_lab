import { router } from '../_core/trpc'
import { protectedProcedure } from '../_core/protected'
import { TRPCError } from '@trpc/server'

export const adminProcedure = protectedProcedure.use(
  async ({ ctx, next }) => {
    if (ctx.user?.role !== 'ADMIN') {
      throw new TRPCError({ code: 'UNAUTHORIZED' })
    }

    return next()
  }
)

export const appRouter = router({
  getSecret: adminProcedure.query(() => {
    return 'secret'
  }),
})

export type AppRouter = typeof appRouter
