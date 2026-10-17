export function selectAssignmentsByStudent(
  db: {
    select: () => {
      from: (table: unknown) => {
        innerJoin: (
          table: unknown,
          on: unknown,
        ) => {
          innerJoin: (
            table: unknown,
            on: unknown,
          ) => {
            where: (condition: unknown) => unknown;
          };
        };
      };
    };
  },
  studentsTable: {
    id: unknown;
  },
  gradesTable: {
    studentId: unknown;
    assignmentId: unknown;
  },
  assignmentsTable: {
    id: unknown;
  },
  eq: (left: unknown, right: unknown) => unknown,
  studentId: number,
) {
  return db
    .select()
    .from(studentsTable)
    .innerJoin(gradesTable, eq(studentsTable.id, gradesTable.studentId))
    .innerJoin(assignmentsTable, eq(gradesTable.assignmentId, assignmentsTable.id))
    .where(eq(studentsTable.id, studentId));
}
