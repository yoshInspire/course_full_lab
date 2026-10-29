import { betterAuth } from "better-auth";

export type AuthConfig = {
  secret: string;
};

export type Database = {
  __brand: "DrizzleDatabase";
};

export function createAuthService(
  config: AuthConfig,
  db: Database
) {
  return betterAuth({
    ...config,
    database: db,
  });
}
