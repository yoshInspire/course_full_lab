export function selectStudentEmailAndGrade(
  db: {
    select: (fields: unknown) => {
      from: (table: unknown) => {
        innerJoin: (
          table: unknown,
          on: unknown,
        ) => unknown;
      };
    };
  },
  gradesTable: {
    studentId: unknown;
    score: unknown;
  },
  studentsTable: {
    id: unknown;
    email: unknown;
  },
  eq: (left: unknown, right: unknown) => unknown,
) {
  return db
    .select({ email: studentsTable.email, score: gradesTable.score })
    .from(gradesTable)
    .innerJoin(studentsTable, eq(gradesTable.studentId, studentsTable.id));
}
