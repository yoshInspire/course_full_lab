let db: unknown;

export function getDb(createDb: () => unknown) {
  db ??= createDb();
  return db;
}
