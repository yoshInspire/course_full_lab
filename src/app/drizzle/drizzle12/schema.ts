export function selectAssignmentsOrderedByMaxScore(
  db: {
    select: () => {
      from: (table: unknown) => {
        orderBy: (order: unknown) => unknown;
      };
    };
  },
  assignmentsTable: {
    maxScore: unknown;
  },
  desc: (column: unknown) => unknown,
) {
  return db.select().from(assignmentsTable).orderBy(desc(assignmentsTable.maxScore));
}
