"use client";

import { useEffect, useState } from "react";
import { getUsers, getTasks, type User, type Task } from "./data";

export default function DashboardContent() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const load = async () => {
      const [usersData, tasksData] = await Promise.all([getUsers(), getTasks()]);
      setUsers(usersData);
      setTasks(tasksData);
      setLoading(false);
    };
    void load();
  }, []);

  if (loading) {
    return (
      <div data-testid="loading-skeleton" className="space-y-4 animate-pulse">
        <div className="h-40 bg-gray-200 rounded-lg" />
        <div className="h-40 bg-gray-200 rounded-lg" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
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
    </div>
  );
}