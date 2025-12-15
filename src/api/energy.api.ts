import { apiClient } from "./axios.instance";
import { type DailyMix } from "@/types";

export const EnergyApi = {
  getDailyMix: async (): Promise<DailyMix[]> => {
    const response = await apiClient.get<DailyMix[]>("/energy/daily-mix/3");
    return response.data;
  },
};
