export function countGradesByAssignment(
  db: {
    select: (fields: unknown) => {
      from: (table: unknown) => {
        innerJoin: (
          table: unknown,
          on: unknown,
        ) => {
          groupBy: (field: unknown) => unknown;
        };
      };
    };
  },
  assignmentsTable: {
    id: unknown;
  },
  gradesTable: {
    assignmentId: unknown;
  },
  eq: (left: unknown, right: unknown) => unknown,
  count: (arg: unknown) => unknown,
) {
  return db
    .select({ assignmentId: assignmentsTable.id, count: count(gradesTable) })
    .from(assignmentsTable)
    .innerJoin(gradesTable, eq(assignmentsTable.id, gradesTable.assignmentId))
    .groupBy(assignmentsTable.id);
}
