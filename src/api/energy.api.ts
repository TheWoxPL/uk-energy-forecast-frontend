import { apiClient } from "./axios.instance";
import type { ChargingWindowResult, DailyMix } from "@/types";

export const EnergyApi = {
  getDailyMix: async (): Promise<DailyMix[]> => {
    const response = await apiClient.get<DailyMix[]>("/energy/daily-mix/3");
    return response.data;
  },

  getChargingWindow: async (numberOfHours: number): Promise<ChargingWindowResult> => {
    const response = await apiClient.get<ChargingWindowResult>(
      `/energy/charging-window/${numberOfHours}`,
    );
    return response.data;
  },
};
