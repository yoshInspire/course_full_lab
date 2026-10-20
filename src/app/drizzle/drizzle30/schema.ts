export async function loadStudents(
  load: () => Promise<unknown[] | null | undefined>,
  fallback: unknown[],
) {
  const students = await load();

  if (!students || students.length === 0) {
    return fallback;
  }

  return students;
}
