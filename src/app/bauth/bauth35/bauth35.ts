export async function executeProtectedMutation(
  mutation: () => Promise<string>
): Promise<string> {
  try {
    return await mutation()
  } catch (error) {
    if (error instanceof Error && error.name === 'UnauthorizedError') {
      return 'redirect:/login'
    }

    throw error
  }
}
