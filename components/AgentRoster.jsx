import Link from 'next/link';

// Add status: 'Live' or 'Coming soon' to any item once you confirm what exists.
const AGENTS = [
  ['Documentation', 'Drafts the visit note from the conversation for you to review and sign.'],
  ['Prescription', 'Prepares prescriptions and refill requests for the clinician to review and approve.'],
  ['Scheduling', 'Books, moves and reminds, by voice or text.'],
  ['Eligibility', 'Checks coverage before the patient arrives.'],
  ['Messaging', 'Drafts replies to routine patient messages for approval.'],
  ['Referrals', 'Sends referrals and keeps track of the results.'],
];

export default function AgentRoster() {
  return (
    <section className="bg-blush-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <h2 className="max-w-2xl font-display text-4xl font-semibold sm:text-5xl">AI that handles the busywork</h2>
        <p className="mt-4 max-w-xl text-lg text-slate2">Each assistant has one job, and a person reviews everything that matters.</p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AGENTS.map(([t, d, s]) => (
            <li key={t} className="rounded-3xl border border-blush-200 bg-white p-7">
              <div className="flex items-center justify-between"><h3 className="text-xl font-semibold">{t}</h3>{s && <span className="rounded-full bg-blush-100 px-3 py-1 text-xs text-brand">{s}</span>}</div>
              <p className="mt-2 text-slate2">{d}</p>
            </li>))}
        </ul>
        <Link href="/roi" className="mt-8 inline-block font-medium text-brand hover:underline">Estimate your time savings</Link>
      </div>
    </section>
  );
}