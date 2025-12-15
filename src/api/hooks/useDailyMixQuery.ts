import type { DailyMix } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { EnergyApi } from "../energy.api";

export const energyQueryKeys = {
  dailyMix: ["energy", "dailyMix"] as const,
};

export const useDailyMixQuery = () => {
  return useQuery<DailyMix[]>({
    queryKey: energyQueryKeys.dailyMix,
    queryFn: EnergyApi.getDailyMix,
    staleTime: 60_000,
  });
};
