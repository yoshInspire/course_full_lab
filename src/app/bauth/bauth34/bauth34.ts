export type Role = 'USER' | 'ADMIN'

export type User = {
  id: string
  email: string
  role: Role
}

export function renderForRole(
  user: User | null,
  requiredRole: Role,
  content: string
): string | null {
  if (!user || user.role !== requiredRole) {
    return null
  }

  return content
}
