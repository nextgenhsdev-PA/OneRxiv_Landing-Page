'use client';
import { useState } from 'react';

const BEFORE = [['Clinic', 'Notes on paper'], ['Lab', 'Results by fax'], ['Billing', 'Codes re-typed'], ['Insurer', 'Waiting on hold']];

export default function BeforeAfter() {
  const [v, setV] = useState(50);
  return (
    <div className="relative mx-auto h-[26rem] max-w-4xl select-none overflow-hidden rounded-[2rem] border border-blush-200">
      {/* AFTER */}
      <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-blush-50 to-blush-100 p-6">
        <div className="w-[min(88%,22rem)] rounded-3xl bg-white p-5 shadow-xl ring-1 ring-brand/20">
          <p className="mb-3 flex justify-between text-sm font-medium">Patient record<span className="text-brand">● Live</span></p>
          {BEFORE.map(([n]) => (<p key={n} className="mt-2 flex justify-between rounded-xl bg-blush-50 px-3 py-2.5 text-sm"><span>{n}</span><span className="text-brand">✓ Connected</span></p>))}
        </div>
        <span className="absolute right-4 top-4 rounded-full bg-brand px-3 py-1 text-sm text-white">With OneRxiv</span>
      </div>
      {/* BEFORE */}
      <div className="absolute inset-0 bg-ink p-6 text-white" style={{ clipPath: `inset(0 ${100 - v}% 0 0)` }}>
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-5">
          {BEFORE.map(([n, note], i) => (
            <div key={n} className={`rounded-2xl border border-dashed border-white/30 p-4 ${i % 2 ? 'rotate-1' : '-rotate-1'}`}>
              <p className="font-medium">{n}</p><p className="mt-1 text-sm text-white/60">{note}</p><p className="mt-3 text-xs text-[#ff8da1]">✕ Not connected</p>
            </div>))}
        </div>
        <span className="absolute left-4 top-4 rounded-full bg-white/15 px-3 py-1 text-sm">Before</span>
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${v}%` }}>
        <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-brand shadow-lg">⇄</span>
      </div>
      <input type="range" min="0" max="100" value={v} onChange={(e) => setV(+e.target.value)} aria-label="Compare before and after OneRxiv" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
    </div>
  );
}

