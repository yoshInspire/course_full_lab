import { trpc } from '../client_core/trpc'

export function useUserModule() {
  const users = trpc.user.getAll.useQuery()
  const createUser = trpc.user.create.useMutation()
  const utils = trpc.useUtils()
  void utils.user.getAll.invalidate()
  return { users, createUser }
}
