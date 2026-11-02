export type Role = "USER" | "ADMIN";

export type User = {
  id: string;
  email: string;
  role: Role;
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

async function ownershipCheck<T>(
  currentUserId: string,
  targetUserId: string,
  operation: () => Promise<T>
): Promise<T> {
  if (currentUserId !== targetUserId) {
    throw new ForbiddenError();
  }

  return operation();
}

export async function updateUser<T>(
  ctx: Context,
  targetUserId: string,
  operation: () => Promise<T>
): Promise<T> {
  if (!ctx.user) {
    throw new UnauthorizedError();
  }

  if (ctx.user.role !== "ADMIN") {
    throw new ForbiddenError();
  }

  return ownershipCheck(ctx.user.id, targetUserId, operation);
}
