export function selectAllStudents(
  db: {
    select: () => {
      from: (table: unknown) => unknown;
    };
  },
  studentsTable: unknown,
) {
  return db.select().from(studentsTable);
}
