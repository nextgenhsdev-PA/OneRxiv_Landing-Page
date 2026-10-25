import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Btn } from '../../components/ui';

export const metadata = { title: 'Security and trust | OneRxiv', description: 'How OneRxiv approaches security and privacy, and what documentation you can ask for.' };

// TODO: team to confirm every statement here and add certifications only once they are held.
const PRINCIPLES = [
  ['Least access', 'People should only see the information their role needs.'],
  ['Traceable activity', 'Important actions on records should leave a clear trail.'],
  ['Protected data', 'Patient information should be protected in storage and in transit.'],
  ['Privacy by design', 'We collect only what a feature needs, and we keep it separate from this marketing website.'],
];
const ASK = ['A security overview', 'Our current compliance documentation', 'Data protection and processing terms', 'Answers to your security questionnaire'];

export default function Security() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="bg-gradient-to-b from-blush-50 to-white px-5 py-16 text-center lg:py-24">
          <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">Security and trust</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate2">Healthcare teams trust us with sensitive information. Here is how we think about protecting it, and what you can ask us for.</p>
        </section>
        <section className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="font-display text-3xl font-semibold">Our approach</h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2">{PRINCIPLES.map(([t, d]) => (<li key={t} className="rounded-3xl border border-blush-200 p-7"><h3 className="text-xl font-semibold">{t}</h3><p className="mt-2 text-slate2">{d}</p></li>))}</ul>
        </section>
        <section className="bg-blush-50 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
            <div><h2 className="font-display text-3xl font-semibold">What you can ask us for</h2>
              <ul className="mt-6 space-y-3">{ASK.map((a) => (<li key={a} className="flex gap-3"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-xs text-white">✓</span>{a}</li>))}</ul></div>
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-blush-200"><h3 className="text-xl font-semibold">About this website</h3>
              <p className="mt-2 text-slate2">This site is not meant to receive patient or health information. Please never send any through the contact form, newsletter or assistant.</p></div>
          </div>
        </section>
        <section className="px-5 py-16 text-center"><h2 className="font-display text-3xl font-semibold">Have a security question?</h2>
          <p className="mx-auto mt-3 max-w-md text-slate2">Our team will share what you need for your review.</p><div className="mt-6"><Btn href="/contact">Contact our team</Btn></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
