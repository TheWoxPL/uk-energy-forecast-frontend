import type { DailyMix } from "@/types/DailyMix.types";
import { ResponsivePie } from "@nivo/pie";

interface ChartCardProps {
  dailyMix: DailyMix;
}

const FUEL_COLORS: Record<string, string> = {
  biomass: "#34d399",
  wind: "#22c55e",
  solar: "#86efac",
  hydro: "#a3f3c0ff",
  nuclear: "#c9f7daff",

  gas: "#9ca3af",
  coal: "#6b7280",
  imports: "#94a3b8",
  other: "#64748b",
};

const getFuelColor = (fuel: string) => FUEL_COLORS[fuel] ?? "#cbd5e1";

export const ChartCard = ({ dailyMix }: ChartCardProps) => {
  const data = dailyMix.metrics.map((m) => ({
    id: m.fuel,
    label: m.fuel,
    value: m.percentage,
    color: getFuelColor(m.fuel),
  }));

  return (
    <div className="w-full rounded-lg mb-5">
      <p className="text-sm text-slate-600 w-full text-center font-bold">{dailyMix.date}</p>
      <div className="min-h-[250px] sm:h-full">
        <ResponsivePie
          data={data}
          colors={{ datum: "data.color" }}
          margin={{ top: 20, bottom: 20 }}
          innerRadius={0.5}
          padAngle={1.2}
          cornerRadius={3}
          activeOuterRadiusOffset={10}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.35]] }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2.2]] }}
          arcLinkLabelsSkipAngle={6}
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          animate={true}
          motionConfig="gentle"
          valueFormat={(v) => `${v}%`}
        />
      </div>
      <p className="text-sm text-slate-500 w-full text-center font-bold">
        Clean energy: {dailyMix.cleanEnergyPercent}%
      </p>
    </div>
  );
};
