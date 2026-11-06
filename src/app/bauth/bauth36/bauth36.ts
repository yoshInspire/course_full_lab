export function handleAccessError(error: unknown): string {
  if (error instanceof Error && error.name === 'UnauthorizedError') {
    return 'redirect:/login'
  }

  if (error instanceof Error && error.name === 'ForbiddenError') {
    return 'show:forbidden'
  }

  return 'show:generic-error'
}
