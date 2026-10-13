import { Suspense } from "react";
import { fetchStats } from "./data";
import Header from "./Header";
import Stats from "./Stats";
import RevenueChart, { RevenueChartSkeleton } from "./RevenueChart";

export default async function DashboardPage() {
  const statsData = await fetchStats();

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <Header />
        <Stats data={statsData} />
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
      </div>
    </main>
  );
}