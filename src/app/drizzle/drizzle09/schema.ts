export function updateStudentNameById(
  db: {
    update: (table: unknown) => {
      set: (values: unknown) => {
        where: (condition: unknown) => unknown;
      };
    };
  },
  studentsTable: {
    id: unknown;
  },
  eq: (left: unknown, right: unknown) => unknown,
  id: number,
  name: string,
) {
  return db
    .update(studentsTable)
    .set({ name })
    .where(eq(studentsTable.id, id));
}
