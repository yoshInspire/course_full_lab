export function getStudentsCountAction(
  getStudents: () => unknown[],
) {
  return getStudents().length;
}
