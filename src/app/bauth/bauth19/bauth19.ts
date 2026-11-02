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

export function getProfile(ctx: Context): string {
  if (!ctx.user) {
    throw new UnauthorizedError();
  }

  return ctx.user.id;
}
