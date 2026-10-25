import { router, publicProcedure } from '../_core/trpc'
import { createNotFoundError } from '../_core/errors'

export const appRouter = router({
  getItem: publicProcedure
    .input((val: unknown) => {
      if (
        typeof val === 'object' &&
        val !== null &&
        'id' in val &&
        typeof (val as { id: unknown }).id === 'string'
      ) {
        return val as { id: string }
      }
      throw new Error('Invalid input')
    })
    .query(({ input }) => {
      if (input.id !== '1') {
        throw createNotFoundError('Item')
      }

      return 'item-1'
    }),
})

export type AppRouter = typeof appRouter