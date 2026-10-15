export function selectStudentByEmail(
  db: {
    select: () => {
      from: (table: unknown) => {
        where: (condition: unknown) => unknown;
      };
    };
  },
  studentsTable: {
    email: unknown;
  },
  eq: (left: unknown, right: unknown) => unknown,
  email: string,
) {
  return db.select().from(studentsTable).where(eq(studentsTable.email, email));
}
