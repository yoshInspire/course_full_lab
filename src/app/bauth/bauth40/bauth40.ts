export class UnauthorizedError extends Error {}

export type Session = {
  id: string
  userId: string
}

export type SessionStorage = {
  find: (id: string) => Session | null
}

export type Resource = {
  id: string
  ownerId: string
  data: string
}

export function executeUpdateFlow(
  cookie: string | null,
  storage: SessionStorage,
  resource: Resource,
  newData: string,
  updateAccess: (
    userId: string,
    resource: Resource,
    data: string
  ) => Resource
): Resource {
  const session = cookie ? storage.find(cookie) : null

  if (!session) {
    throw new UnauthorizedError('UNAUTHORIZED')
  }

  const user = { id: session.userId }

  return updateAccess(user.id, resource, newData)
}
