import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Btn } from '../../components/ui';

export const metadata = { title: 'Pricing | OneRxiv', description: 'Pricing built around your organization. Request a quote for a clear figure.' };

// TODO: replace "Custom quote" with real prices or ranges when you have them.
const PLANS = [
  ['Private practice', 'For independent clinicians and small groups.', ['Core EHR and shared patient record', 'Scheduling and billing', 'AI documentation, reviewed by you', 'Onboarding and support']],
  ['Multi-location group', 'For practices growing across sites.', ['Everything in Private practice', 'Reporting across locations', 'Telemedicine and patient engagement', 'Help migrating from your current system']],
  ['Hospital and enterprise', 'For hospitals and larger organizations.', ['Everything in Multi-location group', 'Department-wide shared record', 'Insurer data exchange options', 'A dedicated onboarding team']],
];
const FACTORS = ['Number of clinicians', 'Number of locations', 'Modules you choose', 'Records to migrate', 'Training and support needs'];

export default function Pricing() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="bg-gradient-to-b from-blush-50 to-white px-5 py-16 text-center lg:py-24">
          <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">Pricing built around you</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate2">Every organization works differently, so we give you a clear quote based on how you work. No hidden surprises.</p>
        </section>
        <section className="mx-auto max-w-6xl px-5 py-12">
          <ul className="grid gap-5 md:grid-cols-3">
            {PLANS.map(([t, d, items], n) => (
              <li key={t} className={`flex flex-col rounded-3xl border p-7 ${n === 1 ? 'border-brand shadow-xl shadow-brand/10' : 'border-blush-200'}`}>
                {n === 1 && <span className="mb-3 w-fit rounded-full bg-brand px-3 py-1 text-xs text-white">Most common</span>}
                <h2 className="text-2xl font-semibold">{t}</h2><p className="mt-1 text-slate2">{d}</p>
                <p className="mt-5 font-display text-3xl font-semibold text-brand">Custom quote</p>
                <ul className="mt-5 flex-1 space-y-2">{items.map((i) => (<li key={i} className="flex gap-3 text-slate2"><span className="text-brand">✓</span>{i}</li>))}</ul>
                <div className="mt-6"><Btn href="/contact">Request a quote</Btn></div>
              </li>))}
          </ul>
        </section>
        <section className="bg-blush-50 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
            <div><h2 className="font-display text-3xl font-semibold">What shapes your price</h2>
              <ul className="mt-6 space-y-3">{FACTORS.map((f) => (<li key={f} className="flex gap-3"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-xs text-white">✓</span>{f}</li>))}</ul></div>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-blush-200"><h3 className="text-xl font-semibold">Not sure where to start?</h3>
              <p className="mt-2 text-slate2">Estimate the time your team could free up, then talk to us about the numbers.</p>
              <Link href="/roi" className="mt-4 inline-block font-medium text-brand hover:underline">Open the time savings calculator</Link></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
