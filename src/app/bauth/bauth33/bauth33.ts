export type User = {
  id: string
  email: string
}

export type LayoutResult =
  | { redirectTo: string }
  | { allow: true }

export function layoutGuard(
  user: User | null,
  currentPath: string
): LayoutResult {
  if (!user) {
    return { redirectTo: '/login' }
  }

  return { allow: true }
}
