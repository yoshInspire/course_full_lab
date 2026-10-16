export function selectStudentEmails(
  db: {
    select: (fields: unknown) => {
      from: (table: unknown) => unknown;
    };
  },
  studentsTable: {
    id: unknown;
    email: unknown;
  },
) {
  return db
    .select({ id: studentsTable.id, email: studentsTable.email })
    .from(studentsTable);
}
