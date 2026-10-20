export function getStudentsLimited(
  db: {
    select: () => {
      limit: (value: number) => unknown;
    };
  },
  limit: number,
) {
  return db.select().limit(limit);
}
