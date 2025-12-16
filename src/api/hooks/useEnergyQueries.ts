import type { DailyMix, ChargingWindowResult } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { EnergyApi } from "../energy.api";

export const energyQueryKeys = {
  dailyMix: ["energy", "dailyMix"] as const,
  chargingWindow: (hours: number) => ["energy", "chargingWindow", hours] as const,
};

export const useDailyMixQuery = () => {
  return useQuery<DailyMix[]>({
    queryKey: energyQueryKeys.dailyMix,
    queryFn: EnergyApi.getDailyMix,
    staleTime: 60_000,
  });
};

export const useChargingWindowQuery = (numberOfHours: number, options?: { enabled?: boolean }) => {
  return useQuery<ChargingWindowResult>({
    queryKey: energyQueryKeys.chargingWindow(numberOfHours),
    queryFn: () => EnergyApi.getChargingWindow(numberOfHours),
    enabled: options?.enabled ?? (numberOfHours >= 1 && numberOfHours <= 6),
    staleTime: 60_000,
    retry: false,
  });
};
