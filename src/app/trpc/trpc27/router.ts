import { router, publicProcedure } from '../_core/trpc'
import {
  EntityNotFoundError,
  createNotFoundError,
} from '../_core/errors'

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
      try {
        if (input.id !== '1') {
          throw new EntityNotFoundError('Item')
        }

        return 'item-1'
      } catch (error) {
        if (error instanceof EntityNotFoundError) {
          throw createNotFoundError('Item')
        }
        throw error
      }
    }),
})

export type AppRouter = typeof appRouter