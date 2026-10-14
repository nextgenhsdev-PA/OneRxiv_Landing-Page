'use client';
import { useState } from 'react';

// Edit freely: confirm module lists with your product team.
const SEGMENTS = [
  ['Hospitals', 'Run every department from one record', 'Connect wards, clinics, labs and billing so teams see the same patient the same way.', ['EHR', 'Scheduling', 'Billing', 'Analytics', 'Telemedicine', 'AI Charting']],
  ['Insurance Companies', 'Cleaner data, faster decisions', 'Receive structured clinical and claims data from providers on one shared record.', ['Eligibility', 'Claims Data', 'Prior Auth', 'Reporting', 'Audit Trail', 'Exchange']],
  ['Private Practitioners', 'Your whole practice in one place', 'Chart faster with ambient AI, bill cleanly and keep patients connected.', ['EHR', 'AI Charting', 'Engagement', 'Billing', 'Telemedicine', 'Agent']],
  ['Healthcare Solutions', 'Efficient, reliable, easy to access', 'The full OneRxiv platform for any organization delivering care.', ['EHR', 'Telemedicine', 'Practice Mgmt', 'Engagement', 'AI Automation', 'Analytics']],
];

export default function SolutionsCarousel() {
  const [i, setI] = useState(0);
  const go = (n) => setI((n + SEGMENTS.length) % SEGMENTS.length);
  return (
    <div onKeyDown={(e) => { if (e.key === 'ArrowRight') go(i + 1); if (e.key === 'ArrowLeft') go(i - 1); }}>
      <div className="relative overflow-hidden py-6">
        <ul className="flex transition-transform duration-500 ease-out [--w:82%] lg:[--w:36%]" style={{ transform: `translateX(calc(50% - ${i} * var(--w) - var(--w) / 2))` }}>
          {SEGMENTS.map(([name, title, desc, mods], n) => (
            <li key={name} aria-hidden={n !== i} className={`w-[var(--w)] shrink-0 px-2 transition duration-500 ${n === i ? 'scale-100 opacity-100' : 'scale-90 opacity-40 blur-[1.5px]'}`}>
              <div className="h-full rounded-3xl border border-blush-200 bg-white p-6 shadow-xl shadow-brand/5">
                <ul className="grid grid-cols-3 gap-2">
                  {mods.map((m) => (<li key={m} className="rounded-2xl bg-blush-50 px-2 py-3 text-center text-sm"><span className="mx-auto mb-1.5 grid h-8 w-8 place-items-center rounded-xl bg-white font-display text-brand shadow-sm">{m[0]}</span>{m}</li>))}
                </ul>
                <div className="mt-6 border-t border-blush-100 pt-5">
                  <p className="text-sm font-medium text-brand">{name}</p>
                  <h3 className="mt-1 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-slate2">{desc}</p>
                  <a href="#contact" tabIndex={n === i ? 0 : -1} className="mt-4 inline-block font-medium text-brand hover:underline">Talk to us about {name.toLowerCase()}</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button onClick={() => go(i - 1)} aria-label="Previous segment" className="grid h-11 w-11 place-items-center rounded-full border border-blush-300 bg-white hover:border-brand">‹</button>
        <div className="flex gap-2">{SEGMENTS.map(([n], k) => (<button key={n} onClick={() => go(k)} aria-label={`Show ${n}`} className={`h-2 rounded-full transition-all ${k === i ? 'w-8 bg-brand' : 'w-2 bg-blush-300'}`} />))}</div>
        <button onClick={() => go(i + 1)} aria-label="Next segment" className="grid h-11 w-11 place-items-center rounded-full border border-blush-300 bg-white hover:border-brand">›</button>
      </div>
    </div>
  );
}
