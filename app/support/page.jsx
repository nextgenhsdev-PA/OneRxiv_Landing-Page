import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import ContactForm from '../../components/ContactForm';
import { CONTACT } from '../../lib/content';

export const metadata = { title: 'Support | OneRxiv', description: 'Get help from the OneRxiv team.' };

export default function Support() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="bg-gradient-to-b from-blush-50 to-white px-5 pb-6 pt-16 text-center lg:pt-24">
          <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">We’re here to help</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate2">Tell us what’s going on and our team will reply within one business day.</p>
        </section>
        <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-5">
            <div className="rounded-3xl border border-blush-200 p-6"><p className="text-sm font-medium text-brand">Email support</p>
              <a href={`mailto:${CONTACT.email}`} className="mt-1 block break-all font-display text-2xl font-semibold hover:text-brand">{CONTACT.email}</a></div>
            <div className="rounded-3xl border border-blush-200 p-6"><p className="text-sm font-medium text-brand">Phone</p><p className="mt-1 text-lg">{CONTACT.phone}</p></div>
            <div className="rounded-3xl bg-blush-50 p-6"><p className="font-medium">Before you write</p>
              <ul className="mt-3 space-y-2 text-slate2"><li>Check the <a className="text-brand underline" href="/help-center">Help center</a> for a quick answer.</li><li>Describe what you were doing and what happened.</li><li>Please don’t include patient or health information.</li></ul></div>
          </div>
          <div><h2 className="mb-4 font-display text-3xl font-semibold">Send a message</h2><ContactForm /></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
