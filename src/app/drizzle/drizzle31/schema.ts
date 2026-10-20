export async function getStudentOrNull(
  loadStudent: () => Promise<unknown | null | undefined>,
) {
  const student = await loadStudent();

  return student ?? null;
}
