import { trpc } from '../client_core/trpc'

export function useCreateUserWithSuccess() {
  return trpc.user.create.useMutation({
    onSuccess: () => {
      console.log('success')
    },
  })
}
