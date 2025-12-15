import type { ChargingWindowResult } from "@/types";

interface ChargingWindowProps {
  result: ChargingWindowResult;
}

export const ChargingWindow = ({ result }: ChargingWindowProps) => {
  return (
    <article className="mt-4 rounded-md border border-slate-200 bg-white sm:p-4 p-2">
      <h3 className="text-sm font-semibold">Recommended charging window</h3>

      <dl className="mt-3 grid grid-cols-3 sm:gap-4 gap-2">
        <div className="rounded-md bg-slate-50 p-2 sm:w-full text-xs">
          <dt className="font-medium text-slate-500">Start</dt>
          <dd className="mt-1 text-sm font-semibold">{result.startDate.toLocaleString()}</dd>
        </div>

        <div className="rounded-md bg-slate-50 p-2 sm:w-full text-xs">
          <dt className="font-medium text-slate-500">End</dt>
          <dd className="mt-1 text-sm font-semibold">{result.endDate.toLocaleString()}</dd>
        </div>

        <div className="rounded-md bg-slate-50 p-2 sm:w-full text-xs">
          <dt className="font-medium text-slate-500">Avg. clean energy</dt>
          <dd className="mt-1 text-sm  font-semibold">{result.averageCleanEnergyUsage}%</dd>
        </div>
      </dl>
    </article>
  );
};
