import { getUsers, getTasks } from "./data";

export default async function Home() {
  const [users, tasks] = await Promise.all([getUsers(), getTasks()]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Async Data Fetching Demo
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">User List</h2>

          <ul className="space-y-2">
            {users.map((user) => (
              <li key={user.id} className="p-3 bg-gray-50 rounded">
                {user.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-semibold mb-4">Task List</h2>

          <ul className="space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="p-3 bg-gray-50 rounded">
                {task.title} — <span className="text-gray-500">{task.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-gray-600 mt-4">
          Data fetched in parallel using Promise.all
        </p>
      </div>
    </main>
  );
}
