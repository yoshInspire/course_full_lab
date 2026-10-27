import { trpc } from '../client_core/trpc'

export function useUserById(id: string) {
  return trpc.user.getById.useQuery({ id })
}
