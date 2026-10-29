'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FaqTabs({ groups, homeOnly }) {
  const [i, setI] = useState(0);
  const list = homeOnly ? groups.flatMap(([, q]) => q).filter((x) => x[2]) : groups[i][1];
  return (
    <div>
      {!homeOnly && (
        <div role="tablist" aria-label="Question categories" className="mb-6 flex flex-wrap gap-2">
          {groups.map(([t], n) => (<button key={t} role="tab" aria-selected={n === i} onClick={() => setI(n)} className={`rounded-full border px-4 py-2 text-sm font-medium transition ${n === i ? 'border-brand bg-brand text-white' : 'border-blush-300 hover:border-brand'}`}>{t}</button>))}
        </div>
      )}
      <div className="divide-y divide-blush-200 border-y border-blush-200">
        {list.map(([q, a]) => (
          <details key={q} className="group py-5">
            <summary className="flex cursor-pointer list-none justify-between gap-4 text-lg font-medium">{q}<span className="text-brand transition group-open:rotate-45">+</span></summary>
            <p className="mt-3 text-slate2">{a}</p>
          </details>))}
      </div>
      {homeOnly && <Link href="/help-center" className="mt-6 inline-block font-medium text-brand hover:underline">See all questions</Link>}
    </div>
  );
}
