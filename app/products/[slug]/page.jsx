import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { Btn } from '../../../components/ui';
import { PRODUCT_PAGES } from '../../../lib/products';

export const dynamicParams = false;
export const generateStaticParams = () => PRODUCT_PAGES.map((p) => ({ slug: p.slug }));
export function generateMetadata({ params }) {
  const p = PRODUCT_PAGES.find((x) => x.slug === params.slug);
  return p ? { title: `${p.name} | OneRxiv`, description: p.intro } : {};
}

export default function Product({ params }) {
  const p = PRODUCT_PAGES.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="bg-gradient-to-b from-blush-50 to-white px-5 py-16 text-center lg:py-24">
          <p className="text-sm font-medium text-brand">OneRxiv product</p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight sm:text-6xl">{p.name}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate2">{p.intro}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><Btn href="/contact">Schedule a demo</Btn><Btn href="/#journey" ghost>See the care journey</Btn></div>
        </section>
        <section className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">What it does</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">{p.features.map((f) => (<li key={f} className="flex gap-3 rounded-3xl border border-blush-200 p-6"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-xs text-white">✓</span>{f}</li>))}</ul>
        </section>
        <section className="bg-blush-50 px-5 py-16 text-center">
          <h2 className="font-display text-3xl font-semibold">Explore the rest of the platform</h2>
          <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-3">{PRODUCT_PAGES.filter((x) => x.slug !== p.slug).map((x) => (<li key={x.slug}><Link href={`/products/${x.slug}`} className="inline-block rounded-full border border-blush-300 bg-white px-5 py-2.5 text-sm hover:border-brand">{x.name}</Link></li>))}</ul>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
