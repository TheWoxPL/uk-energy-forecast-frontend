import type { FuelStat } from "./FuelStat.types";

export interface DailyMix {
  date: string;
  cleanEnergyPercent: number;
  metrics: FuelStat[];
}
