export type AuthService = {
  register: (params: {
    email: string;
    password: string;
  }) => Promise<{ id: string; email: string }>;
};

export async function registerUser(
  authService: AuthService,
  email: string,
  password: string
) {
  return authService.register({ email, password });
}
