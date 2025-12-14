import { useDailyMixQuery } from "@/api/hooks";
import { ChartCard, Hero } from "@/components";

export const IndexPage = () => {
  const { data, isLoading, error } = useDailyMixQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading daily mix data</p>;

  return (
    <main className="min-h-screen w-full">
      <Hero />
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 bg-sky-100">
        {data?.map((dailyMix) => (
          <ChartCard key={dailyMix.date} dailyMix={dailyMix} />
        ))}
      </section>
    </main>
  );
};
