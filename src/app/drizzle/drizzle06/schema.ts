export type StudentInsert = {
  name: string;
  email: string;
};

export function insertStudent(
  db: {
    insert: (table: unknown) => {
      values: (data: unknown) => unknown;
    };
  },
  studentsTable: unknown,
  data: StudentInsert,
) {
  return db.insert(studentsTable).values(data);
}
