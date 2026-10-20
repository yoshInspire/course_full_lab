export async function safeLoadStudents(
  load: () => Promise<unknown>,
) {
  try {
    return await load();
  } catch {
    throw new Error("Database error");
  }
}
