export type User = {
  id: string;
  email: string;
};

export type Session = {
  id: string;
  userId: string;
  expiresAt: Date;
};

export type AuthService = {
  register: (params: {
    email: string;
    password: string;
  }) => Promise<User>;

  login: (params: {
    email: string;
    password: string;
  }) => Promise<{ user: User; session: Session }>;

  getSession: (request: unknown) => Promise<Session | null>;

  invalidateSession: (sessionId: string) => Promise<void>;
};

export async function runAuthLifecycle(
  authService: AuthService,
  email: string,
  password: string,
  request: unknown
) {
  const user = await authService.register({ email, password });
  const loginResult = await authService.login({ email, password });
  const session = await authService.getSession(request);
  await authService.invalidateSession(loginResult.session.id);

  return { user, loginResult, session };
}
