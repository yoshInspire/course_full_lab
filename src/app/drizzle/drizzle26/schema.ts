// server-only функция работает только с серверным db
export function serverSelect(
  db: {
    select: () => unknown;
  },
) {
  if (typeof db.select !== "function") {
    throw new Error("Server-only db required");
  }

  return db.select();
}
