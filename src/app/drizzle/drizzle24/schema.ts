export function createGradeWithCounterUpdate(
  db: {
    transaction: (
      fn: (tx: unknown) => unknown,
    ) => unknown;
  },
  insertGrade: (tx: unknown, data: unknown) => unknown,
  updateStudentCounter: (tx: unknown, data: unknown) => unknown,
  gradeData: unknown,
  counterData: unknown,
) {
  return db.transaction((tx) => {
    insertGrade(tx, gradeData);
    updateStudentCounter(tx, counterData);
  });
}
