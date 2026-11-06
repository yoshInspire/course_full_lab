export class UnauthorizedError extends Error {}

export type User = {
  id: string
}

export function updateEmailRouter(
  user: User | null,
  newEmail: string,
  accessUpdate: (userId: string, email: string) => string
): string {
  if (!user) {
    throw new UnauthorizedError()
  }

  // валидация email выполняется в access-layer
  return accessUpdate(user.id, newEmail)
}
