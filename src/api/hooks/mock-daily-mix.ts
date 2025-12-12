import type { DailyMix } from "@/types";

const MOCK_DAILY_MIX: DailyMix[] = [
  {
    date: "2025-12-10",
    cleanEnergyPercent: 62,
    metrics: [
      {
        fuel: "gas",
        percentage: 43.6,
      },
      {
        fuel: "coal",
        percentage: 0.7,
      },
      {
        fuel: "biomass",
        percentage: 4.2,
      },
      {
        fuel: "nuclear",
        percentage: 17.6,
      },
      {
        fuel: "hydro",
        percentage: 1.1,
      },
      {
        fuel: "imports",
        percentage: 6.5,
      },
      {
        fuel: "other",
        percentage: 0.3,
      },
      {
        fuel: "wind",
        percentage: 6.8,
      },
      {
        fuel: "solar",
        percentage: 18.1,
      },
    ],
  },
  {
    date: "2025-12-11",
    cleanEnergyPercent: 71,
    metrics: [
      {
        fuel: "gas",
        percentage: 0.7,
      },
      {
        fuel: "coal",
        percentage: 43.6,
      },
      {
        fuel: "biomass",
        percentage: 17.6,
      },
      {
        fuel: "nuclear",
        percentage: 4.2,
      },
      {
        fuel: "hydro",
        percentage: 18.1,
      },
      {
        fuel: "imports",
        percentage: 6.8,
      },
      {
        fuel: "other",
        percentage: 0.3,
      },
      {
        fuel: "wind",
        percentage: 6.5,
      },
      {
        fuel: "solar",
        percentage: 1.1,
      },
    ],
  },
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const fetchDailyMixMock = async (): Promise<DailyMix[]> => {
  await sleep(400);
  return MOCK_DAILY_MIX;
};
