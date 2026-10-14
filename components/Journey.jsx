'use client';
import { useState } from 'react';

const STAGES = [
  ['Access', 'Patients find you, book online and get verified before they arrive.'],
  ['Intake', 'Digital forms, insurance and history are collected pre-visit and land in the chart.'],
  ['Visit', 'Live and virtual visits share one workflow, with ambient AI writing the note.'],
  ['Care coordination', 'Referrals, labs, prescriptions and follow-ups stay connected to the same record.'],
  ['Health management', 'Reminders, outcomes and billing close the loop and feed the next visit.'],
];

export default function Journey() {
  const [i, setI] = useState(0);
  const R = 42; // % radius
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2">
      <div className="relative mx-auto aspect-square w-full max-w-md">
        <div className="absolute inset-[8%] rounded-full border-2 border-dashed border-blush-300" />
        <div className="absolute inset-[26%] grid place-items-center rounded-full bg-blush-100 text-center">
          <p className="font-display text-xl leading-tight">One<br />closed loop</p>
        </div>
        {STAGES.map(([name], n) => {
          const a = (n / STAGES.length) * 2 * Math.PI - Math.PI / 2;
          const on = n === i;
          return (
            <button key={name} onClick={() => setI(n)} aria-pressed={on}
              style={{ left: `${50 + R * Math.cos(a)}%`, top: `${50 + R * Math.sin(a)}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${on ? 'border-brand bg-brand text-white shadow-lg' : 'border-blush-200 bg-white hover:border-brand'}`}>
              {name}
            </button>
          );
        })}
      </div>
      <div aria-live="polite" className="rounded-3xl bg-blush-50 p-8">
        <h3 className="font-display text-3xl">{STAGES[i][0]}</h3>
        <p className="mt-3 max-w-md text-lg text-slate2">{STAGES[i][1]}</p>
        <div className="mt-6 flex gap-2">
          {STAGES.map((_, n) => <span key={n} className={`h-1.5 flex-1 rounded-full ${n <= i ? 'bg-brand' : 'bg-blush-200'}`} />)}
        </div>
      </div>
    </div>
  );
}
