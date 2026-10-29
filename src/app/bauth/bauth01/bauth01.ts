import { betterAuth } from "better-auth";

export type AuthConfig = {
  secret: string;
};

export function createAuthService(config: AuthConfig) {
  return betterAuth(config);
}
