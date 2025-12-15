import { useState } from "react";
import carChargingImg from "@/assets/images/car-charging.png";

export const ChargingCard = () => {
  const [hours, setHours] = useState<string>("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Charging duration (hours):", hours);
  };

  return (
    <section className="w-full px-4 py-10 bg-sky-100">
      <article className="mx-auto grid max-w-6xl grid-cols-1 gap-6 rounded-lg border border-emerald-600 border-2 bg-white p-4 md:grid-cols-3 md:p-6">
        <figure className="md:col-span-1">
          <div className="w-fullrounded-md">
            <img src={carChargingImg} alt="Electric car charging" className="h-full w-full" />
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
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                placeholder="e.g. 2"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus:border-emerald-600 sm:max-w-xs"
              />

              <button
                type="submit"
                className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 focus:ring-emerald-600"
              >
                Calculate
              </button>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
};
