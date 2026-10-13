async function getData() {
  // на сервере fetch нужен абсолютный адрес
  const res = await fetch("http://localhost:3000/api/nextjs12", {
    cache: "no-store",
  });
  return (await res.json()) as { message: string; timestamp: string };
}

async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Dynamic Rendering for Real-Time Data
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Real-Time Data</h2>
          
          <div className="p-4 bg-gray-50 rounded">
            <p className="text-lg">{data.message}</p>
            <p className="text-sm text-gray-500 mt-2">
              Timestamp: <span id="timestamp">{data.timestamp}</span>
            </p>
          </div>
        </div>

        <p className="text-gray-600 mt-4">
          This page fetches fresh data on every request
        </p>
      </div>
    </main>
  );
}

export default Home;