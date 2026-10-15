export function deleteAssignmentById(
  db: {
    delete: (table: unknown) => {
      where: (condition: unknown) => unknown;
    };
  },
  assignmentsTable: {
    id: unknown;
  },
  eq: (left: unknown, right: unknown) => unknown,
  id: number,
) {
  return db.delete(assignmentsTable).where(eq(assignmentsTable.id, id));
}
