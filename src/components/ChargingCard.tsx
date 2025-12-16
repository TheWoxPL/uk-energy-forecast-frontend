import { useEffect, useState } from "react";
import carChargingImg from "@/assets/images/car-charging.png";
import { ChargingWindow } from "./ChargingWindow";
import { useChargingWindowQuery } from "@/api/hooks";
import { ErrorScreen } from "./ErrorScreen";
import { createPortal } from "react-dom";

export const ChargingCard = () => {
  const [hoursInput, setHoursInput] = useState<string>("");
  const [submittedHours, setSubmittedHours] = useState<number>(0);
  const { data, isLoading, isError, error, refetch, isFetching } = useChargingWindowQuery(
    Number(submittedHours),
    {
      enabled: false,
    },
  );

  useEffect(() => {
    if (submittedHours > 0) {
      refetch();
    }
  }, [submittedHours, refetch]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = Number(hoursInput);

    if (val >= 1 && val <= 6) {
      setSubmittedHours(val);
    } else {
      alert("Proszę wpisać liczbę godzin od 1 do 6");
    }
  };

  if (isError) {
    return createPortal(
      <div className="fixed inset-0 z-50 bg-white">
        {" "}
        <ErrorScreen message={error.message} onRetry={() => refetch()} />
      </div>,
      document.body,
    );
  }

  return (
    <section className="w-full px-4 py-10 bg-sky-100 flex flex-col items-center">
      <h1 className="font-bold text-lg mb-4 max-w-7xl text-left w-full">When charge your car?</h1>
      <article className="mx-auto grid max-w-7xl grid-cols-1 gap-6 rounded-lg border border-emerald-600 border-2 bg-white p-4 md:grid-cols-3 md:p-6">
        <figure className="md:col-span-1 flex items-center ">
          <div className="w-full rounded-md">
            <img
              src={carChargingImg}
              alt="Electric car charging"
              className="h-[200px] mx-auto md:h-full"
            />
          </div>
        </figure>

        <div className="md:col-span-2">
          <header>
            <h2 className="text-lg font-semibold text-slate-900">Best time to charge</h2>
            <p className="mt-1 text-sm text-slate-600">Enter how many hours you want to charge.</p>
          </header>

          <form onSubmit={onSubmit} className="mt-4">
            <label htmlFor="duration" className="block text-sm text-slate-900">
              Duration (hours)
            </label>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input
                id="duration"
                name="duration"
                type="number"
                min={1}
                step={1}
                max={6}
                required
                value={hoursInput}
                onChange={(e) => setHoursInput(e.target.value)}
                placeholder="e.g. 2"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600 sm:max-w-xs"
              />

              <button
                disabled={isLoading || isFetching}
                type="submit"
                className="rounded-md bg-emerald-600 px-4 py-2 text-sm outline-none font-semibold text-white hover:bg-emerald-700 focus:ring-emerald-600"
              >
                {isLoading || isFetching ? "calculating..." : "Find"}
              </button>
            </div>
            {data && <ChargingWindow result={data} />}
          </form>
        </div>
      </article>
    </section>
  );
};
