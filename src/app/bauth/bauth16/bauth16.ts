export type User = {
  id: string;
  email: string;
};

export type Context = {
  user: User | null;
};

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

export async function updateProfile<T>(
  ctx: Context,
  ownerId: string,
  handler: () => Promise<T>
): Promise<T> {
  if (!ctx.user) {
    throw new UnauthorizedError();
  }

  if (ctx.user.id !== ownerId) {
    throw new ForbiddenError();
  }

  return handler();
}
