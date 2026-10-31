export type AuthService = {
  invalidateSession: (sessionId: string) => Promise<void>;
};

export async function logoutUser(
  authService: AuthService,
  sessionId: string
) {
  await authService.invalidateSession(sessionId);
}
