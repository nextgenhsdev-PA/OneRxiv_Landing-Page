'use client';
import { useState } from 'react';
import Link from 'next/link';

const CHALLENGES = [
  ['Disconnected records', 'Clinic, lab, billing and insurer each hold a different version of the same patient.', 'One shared patient record keeps every team looking at the same information, in real time.', '/#journey', 'See the care journey'],
  ['Charting takes too long', 'Clinicians finish notes in the evening instead of going home.', 'Ambient AI drafts the note while you talk. You review, edit and sign every one.', '/#ai', 'See AI in action'],
  ['Claims get denied', 'Missing documentation and re-typed codes slow payment and add rework.', 'Coding assist checks the note and flags gaps before a claim goes out, with a human in control.', '/#products', 'View billing tools'],
  ['Patients are hard to reach', 'Missed visits, phone tag and slow answers to routine questions.', 'Reminders, virtual visits and an always-on assistant keep patients connected beyond the visit.', '/#day', 'Follow a day with OneRxiv'],
  ['Slow data exchange with insurers', 'Eligibility checks and approvals depend on faxes and manual follow-up.', 'Structured data flows from the shared record, so insurers and providers work from the same facts.', '/#solutions', 'See solutions by segment'],
];

export default function ChallengeFinder() {
  const [i, setI] = useState(0);
  const [, problem, help, href, label] = CHALLENGES[i];
  return (
    <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
      <div role="tablist" aria-label="Challenges" className="space-y-2">
        {CHALLENGES.map(([t], n) => (
          <button key={t} role="tab" aria-selected={n === i} onClick={() => setI(n)}
            className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left font-medium transition ${n === i ? 'border-brand bg-blush-50 text-brand' : 'border-blush-200 hover:border-brand'}`}>
            {t}<span aria-hidden>{n === i ? '●' : '○'}</span>
          </button>))}
      </div>
      <div role="tabpanel" aria-live="polite" className="rounded-3xl bg-ink p-8 text-white sm:p-10">
        <p className="text-sm text-blush-300">The problem</p>
        <p className="mt-2 font-display text-2xl leading-snug sm:text-3xl">{problem}</p>
        <p className="mt-8 text-sm text-blush-300">How OneRxiv helps</p>
        <p className="mt-2 text-lg text-white/90">{help}</p>
        <Link href={href} className="mt-8 inline-block rounded-full bg-brand px-6 py-3 font-medium hover:bg-[#a90d26]">{label}</Link>
      </div>
    </div>
  );
}