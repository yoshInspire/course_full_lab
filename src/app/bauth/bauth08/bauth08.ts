export type Session = {
  id: string;
  userId: string;
  expiresAt: Date;
};

export type Clock = () => Date;

export function validateSession(
  session: Session,
  clock: Clock
): Session | null {
  if (session.expiresAt.getTime() <= clock().getTime()) {
    return null;
  }

  return session;
}
