export class UnauthorizedError extends Error {}

export type Session = {
  id: string
}

export type User = {
  id: string
}

export function routeGuard(session: Session | null): true {
  if (!session) {
    throw new UnauthorizedError('UNAUTHORIZED')
  }

  return true
}

export function procedureGuard(user: User | null): true {
  if (!user) {
    throw new UnauthorizedError('UNAUTHORIZED')
  }

  return true
}
