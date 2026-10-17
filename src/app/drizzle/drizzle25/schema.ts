export function createGradeWithRollback(
  db: {
    transaction: (
      fn: (tx: unknown) => unknown,
    ) => unknown;
  },
  firstOperation: (tx: unknown, data: unknown) => unknown,
  secondOperation: (tx: unknown, data: unknown) => unknown,
  firstData: unknown,
  secondData: unknown,
) {
  // ошибка второй операции не перехватывается и откатывает транзакцию
  return db.transaction((tx) => {
    firstOperation(tx, firstData);
    return secondOperation(tx, secondData);
  });
}
