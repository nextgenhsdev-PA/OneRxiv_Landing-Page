'use client';
import { useState } from 'react';

const Field = ({ label, hint, v, set, min = 0, max }) => (
  <label className="block text-sm font-medium">{label}
    <input type="number" inputMode="decimal" min={min} max={max} value={v} onChange={(e) => set(Math.max(min, Math.min(max ?? 1e6, +e.target.value || 0)))} className="mt-1.5 w-full rounded-xl border border-blush-300 px-4 py-3 font-normal outline-none focus:border-brand" />
    {hint && <span className="mt-1 block text-xs font-normal text-slate2">{hint}</span>}
  </label>
);

export default function ROICalculator() {
  const [n, setN] = useState(5), [min, setMin] = useState(60), [days, setDays] = useState(22), [cost, setCost] = useState(50), [pct, setPct] = useState(25);
  const hours = (n * min * days * pct) / 100 / 60;
  const fmt = (x) => Math.round(x).toLocaleString();
  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_.9fr]">
      <div className="grid gap-5 rounded-3xl border border-blush-200 bg-white p-6 sm:grid-cols-2 sm:p-8">
        <Field label="Number of clinicians" v={n} set={setN} min={1} max={5000} />
        <Field label="Minutes on documentation per clinician, per day" v={min} set={setMin} max={600} />
        <Field label="Working days per month" v={days} set={setDays} max={31} />
        <Field label="Hourly cost of a clinician" hint="Use your own currency" v={cost} set={setCost} max={100000} />
        <label className="block text-sm font-medium sm:col-span-2">Time you expect to save on documentation: {pct}%
          <input type="range" min="0" max="80" value={pct} onChange={(e) => setPct(+e.target.value)} className="mt-3 w-full accent-[#C8102E]" />
          <span className="mt-1 block text-xs font-normal text-slate2">This is your own assumption. Start low and adjust.</span></label>
      </div>
      <div className="rounded-3xl bg-ink p-8 text-white" aria-live="polite">
        <p className="text-sm text-blush-300">Estimated time saved per month</p>
        <p className="font-display text-6xl font-semibold">{fmt(hours)}<span className="ml-2 text-2xl text-white/70">hours</span></p>
        <p className="mt-6 text-sm text-blush-300">Estimated value per month</p>
        <p className="font-display text-4xl font-semibold text-blush-300">{fmt(hours * cost)}</p>
        <p className="mt-6 text-xs text-white/60">An estimate from the numbers you entered, not a promise of results. Real savings depend on your workflows.</p>
        <a href="/contact" className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-medium hover:bg-[#a90d26]">Talk to us about your numbers</a>
      </div>
    </div>
  );
}
