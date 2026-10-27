import { trpc } from '../client_core/trpc'

export function useCreateUserWithError() {
  return trpc.user.create.useMutation({
    onError: () => {
      console.error('error')
    },
  })
}
