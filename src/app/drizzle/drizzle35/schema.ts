export function studentsCountFlow(
  serverAction: (fn: () => unknown) => unknown,
  dataAccess: (db: unknown) => unknown,
  db: unknown,
) {
  return serverAction(() => dataAccess(db));
}
