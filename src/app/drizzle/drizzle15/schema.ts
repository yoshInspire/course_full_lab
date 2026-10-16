export function countStudents(
  db: {
    select: (fields: unknown) => {
      from: (table: unknown) => unknown;
    };
  },
  studentsTable: unknown,
  count: (arg: unknown) => unknown,
) {
  return db.select({ count: count(studentsTable) }).from(studentsTable);
}
