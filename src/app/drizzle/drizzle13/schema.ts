export function selectStudentsPage(
  db: {
    select: () => {
      from: (table: unknown) => {
        limit: (value: number) => {
          offset: (value: number) => unknown;
        };
      };
    };
  },
  studentsTable: unknown,
  limitValue: number,
  offsetValue: number,
) {
  return db.select().from(studentsTable).limit(limitValue).offset(offsetValue);
}
