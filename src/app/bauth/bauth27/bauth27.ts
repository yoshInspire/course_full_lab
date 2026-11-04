export class CsrfError extends Error {}

export function validateCsrf(
  sessionToken: string | null,
  requestToken: string | null
): true {
  if (!sessionToken || !requestToken) {
    throw new CsrfError('CSRF token is missing')
  }

  if (sessionToken !== requestToken) {
    throw new CsrfError('CSRF token mismatch')
  }

  return true
}
