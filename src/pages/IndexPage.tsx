import { useDailyMixQuery } from "@/api/hooks";
import { ChargingCard, ChartCard, Hero } from "@/components";

export const IndexPage = () => {
  const { data, isLoading, error } = useDailyMixQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading daily mix data</p>;

  return (
    <main className="min-h-screen w-full">
      <Hero />
      <section className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-sky-100 p-4 sm:pb-15">
        <h1 className="font-bold text-lg text-left w-full max-w-7xl mb-4">Daily Energy Mix</h1>
        <div className="w-full max-w-7xl grid grid-cols-1 gap-30 lg:grid-cols-3 lg:gap-5 md:grid-cols-1">
          {data?.map((dailyMix) => (
            <ChartCard key={dailyMix.date} dailyMix={dailyMix} />
          ))}
        </div>
      </section>
      <ChargingCard />
    </main>
  );
};
