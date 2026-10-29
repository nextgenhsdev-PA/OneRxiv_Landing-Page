import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import FaqSection from '../../components/FaqSection';

export const metadata = { title: 'Help center | OneRxiv', description: 'Answers to common questions about OneRxiv, patients, security and getting started.' };

export default function HelpCenter() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
        <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">Help center</h1>
        <p className="mb-10 mt-4 text-lg text-slate2">Quick answers to the questions we hear most. Pick a topic below.</p>
        <div id="faq"><FaqSection /></div>
        <div className="mt-14 rounded-3xl bg-blush-50 p-8 text-center">
          <p className="font-display text-2xl font-semibold">Still need help?</p>
          <p className="mt-2 text-slate2">Our team is happy to answer anything else.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link href="/support" className="rounded-full bg-brand px-6 py-3 font-medium text-white hover:bg-[#a90d26]">Contact support</Link>
            <Link href="/contact" className="rounded-full border border-ink/20 bg-white px-6 py-3 font-medium hover:border-brand">Talk to sales</Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
