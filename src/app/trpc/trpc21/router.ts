import { TRPCError } from '@trpc/server'
import { router, publicProcedure } from '../_core/trpc'

export const appRouter = router({
  getRequestId: publicProcedure.query(({ ctx }) => {
    if (!ctx.requestId) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'requestId is missing',
      })
    }

    return ctx.requestId
  }),
})

export type AppRouter = typeof appRouter
