import { useDailyMixQuery } from "@/api/hooks";
import { ChargingCard, ChartCard, ErrorScreen, Hero, LoadingScreen } from "@/components";
import { motion } from "framer-motion";

export const IndexPage = () => {
  const { data, isLoading, error, refetch } = useDailyMixQuery();

  if (isLoading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error.message} onRetry={refetch} />;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full"
    >
      <Hero />
      <section className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-emerald-50 via-white to-sky-100 p-4 sm:pb-15">
        <h1 className="font-bold text-lg text-left w-full max-w-7xl mb-4">Daily Energy Mix</h1>
        <div className="w-full max-w-7xl grid grid-cols-1 gap-15 lg:grid-cols-3 lg:gap-5 md:grid-cols-1">
          {data?.map((dailyMix) => (
            <ChartCard key={dailyMix.date} dailyMix={dailyMix} />
          ))}
        </div>
      </section>
      <ChargingCard />
    </motion.main>
  );
};
