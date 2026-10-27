import { trpc } from '../client_core/trpc'

export function useCreateUser() {
  return trpc.user.create.useMutation()
}
