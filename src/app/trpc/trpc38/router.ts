import { trpc } from '../client_core/trpc'

const userHooks = {
  useUsers: () => trpc.user.getAll.useQuery(),
}

const postHooks = {
  usePosts: () => trpc.post.getAll.useQuery(),
}

export const hooks = {
  user: userHooks,
  post: postHooks,
}
