import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata = { title: 'Page not found | OneRxiv' };

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-xl px-5 py-28 text-center">
        <p className="font-display text-7xl font-semibold text-brand">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold">This page isn’t here</h1>
        <p className="mt-3 text-lg text-slate2">The link may be old or mistyped. Let’s get you back on track.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-brand px-6 py-3.5 font-medium text-white">Back to home</Link>
          <Link href="/contact" className="rounded-full border border-ink/20 px-6 py-3.5 font-medium hover:border-brand">Contact us</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
