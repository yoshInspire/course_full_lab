export type User = {
  id: string
  email: string
}

export function uiGuard(
  user: User | null,
  content: string
): string | null {
  if (!user) {
    return null
  }

  return content
}
