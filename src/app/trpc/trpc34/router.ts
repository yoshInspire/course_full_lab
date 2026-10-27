import { trpc } from '../client_core/trpc'

export function useCreateUserWithInvalidate() {
  const mutation = trpc.user.create.useMutation()
  const utils = trpc.useUtils()
  void utils.user.getAll.invalidate()
  return mutation
}
