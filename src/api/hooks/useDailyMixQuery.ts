import type { DailyMix } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { fetchDailyMixMock } from "./mock-daily-mix";

export const energyQueryKeys = {
  dailyMix: ["energy", "dailyMix"] as const,
};

export const useDailyMixQuery = () => {
  return useQuery<DailyMix[]>({
    queryKey: energyQueryKeys.dailyMix,
    queryFn: fetchDailyMixMock,
    staleTime: 60_000,
  });
};
