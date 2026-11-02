export class UnauthorizedError extends Error {
  constructor() {
    super("UNAUTHORIZED");
  }
}

export class ForbiddenError extends Error {
  constructor() {
    super("FORBIDDEN");
  }
}

export function checkAccess(
  userId: string | null,
  hasPermission: boolean
): true {
  if (!userId) {
    throw new UnauthorizedError();
  }

  if (!hasPermission) {
    throw new ForbiddenError();
  }

  return true;
}
