export default function Loading() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <p className="text-xl mb-4">Loading...</p>
      <div className="w-full max-w-5xl animate-pulse space-y-4">
        <div className="h-10 bg-gray-200 rounded" />
        <div className="h-40 bg-gray-200 rounded-lg" />
      </div>
    </main>
  );
}
