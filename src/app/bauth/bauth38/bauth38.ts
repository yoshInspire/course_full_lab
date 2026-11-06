export class UnauthorizedError extends Error {}
export class ForbiddenError extends Error {}

export type Role = 'USER' | 'ADMIN'

export type User = {
  id: string
  role: Role
}

export function uiOnlyDelete(
  user: User | null,
  deleteFromDb: () => string
): string {
  // проверка роли на сервере, UI не считается защитой
  if (!user) {
    throw new UnauthorizedError('UNAUTHORIZED')
  }

  if (user.role !== 'ADMIN') {
    throw new ForbiddenError('FORBIDDEN')
  }

  return deleteFromDb()
}
