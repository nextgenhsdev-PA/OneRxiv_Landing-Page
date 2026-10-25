import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { Btn } from '../../components/ui';
import { AUDIENCES } from '../../lib/audiences';

export const dynamicParams = false;
export const generateStaticParams = () => AUDIENCES.map((a) => ({ audience: a.slug }));
export function generateMetadata({ params }) {
  const a = AUDIENCES.find((x) => x.slug === params.audience);
  return a ? { title: `OneRxiv for ${a.title}`, description: a.intro } : {};
}

export default function AudiencePage({ params }) {
  const a = AUDIENCES.find((x) => x.slug === params.audience);
  if (!a) notFound();
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="bg-gradient-to-b from-blush-50 to-white px-5 py-16 text-center lg:py-24">
          <p className="text-sm font-medium text-brand">OneRxiv for {a.title.toLowerCase()}</p>
          <h1 className="mx-auto mt-3 max-w-3xl font-display text-5xl font-semibold tracking-tight sm:text-6xl">{a.headline}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate2">{a.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><Btn href="/contact">Schedule a demo</Btn><Btn href="/#journey" ghost>See how it works</Btn></div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">What we hear from {a.title.toLowerCase()}</h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">{a.challenges.map(([t, d]) => (<li key={t} className="rounded-3xl border border-blush-200 p-7"><h3 className="text-xl font-semibold">{t}</h3><p className="mt-2 text-slate2">{d}</p></li>))}</ul>
        </section>

        <section className="bg-blush-50 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
            <div><h2 className="font-display text-3xl font-semibold sm:text-4xl">How OneRxiv helps</h2>
              <ul className="mt-6 space-y-3">{a.helps.map((h) => (<li key={h} className="flex gap-3"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-xs text-white">✓</span>{h}</li>))}</ul></div>
            <div><h3 className="text-lg font-semibold">Tools you can use</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">{a.modules.map((m) => (<li key={m} className="rounded-2xl bg-white px-3 py-4 text-center text-sm shadow-sm ring-1 ring-blush-200"><span className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-xl bg-blush-100 font-display text-brand">{m[0]}</span>{m}</li>))}</ul></div>
          </div>
        </section>

        <section className="px-5 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">See it for your {a.title.toLowerCase()}</h2>
          <p className="mx-auto mt-3 max-w-md text-slate2">A short walkthrough tailored to how you work. No obligation.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3"><Btn href="/contact">Contact our team</Btn>
            {AUDIENCES.filter((x) => x.slug !== a.slug).map((x) => (<Link key={x.slug} href={`/${x.slug}`} className="inline-flex items-center rounded-full border border-ink/20 px-5 py-3.5 text-sm hover:border-brand">For {x.title.toLowerCase()}</Link>))}</div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
