export class UnauthorizedError extends Error {}

export type User = {
  id: string
  email: string
}

export type Context = {
  user: User | null
}

export function currentUserQuery(ctx: Context): User {
  if (!ctx.user) {
    throw new UnauthorizedError('UNAUTHORIZED')
  }

  return ctx.user
}
