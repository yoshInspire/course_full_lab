export function countGradesByStudent(
  db: {
    select: (fields: unknown) => {
      from: (table: unknown) => {
        innerJoin: (
          table: unknown,
          on: unknown,
        ) => {
          where: (condition: unknown) => unknown;
        };
      };
    };
  },
  studentsTable: {
    id: unknown;
  },
  gradesTable: {
    studentId: unknown;
  },
  eq: (left: unknown, right: unknown) => unknown,
  count: (arg: unknown) => unknown,
  studentId: number,
) {
  return db
    .select({ count: count(gradesTable) })
    .from(studentsTable)
    .innerJoin(gradesTable, eq(studentsTable.id, gradesTable.studentId))
    .where(eq(studentsTable.id, studentId));
}
