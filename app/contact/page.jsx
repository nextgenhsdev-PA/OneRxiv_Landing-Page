import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import ContactForm from '../../components/ContactForm';
import { CONTACT } from '../../lib/content';

export const metadata = {
  title: 'Contact OneRxiv | Talk to our team',
  description: 'Contact OneRxiv to book a demo, ask about pricing or partner with us. We reply within one business day.',
};

const STEPS = [['We reply', 'Within one business day.'], ['Short call', 'We learn about your organization.'], ['Tailored demo', 'See OneRxiv on your own workflow.']];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <section className="bg-gradient-to-b from-blush-50 to-white px-5 pb-6 pt-16 text-center lg:pt-24">
          <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">Get in <span className="text-brand">touch</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate2">Whether you run a hospital, an insurance company or a private practice, our team is ready to help you connect your care on one record.</p>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-8 lg:grid-cols-[.9fr_1.1fr] lg:pb-28">
          <div className="space-y-5">
            <div className="rounded-3xl border border-blush-200 p-6">
              <p className="text-sm font-medium text-brand">Email us</p>
              <a href={`mailto:${CONTACT.email}`} className="mt-1 block break-all font-display text-2xl font-semibold hover:text-brand">{CONTACT.email}</a>
              <p className="mt-3 text-sm text-slate2">Call us</p><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="font-medium hover:text-brand">{CONTACT.phone}</a>
            </div>
            {CONTACT.offices.map(([t, a]) => (
              <div key={t} className="rounded-3xl border border-blush-200 p-6"><p className="text-sm font-medium text-brand">{t}</p><p className="mt-1 text-lg">{a}</p></div>))}
            <div className="rounded-3xl bg-blush-50 p-6">
              <p className="font-medium">What happens next</p>
              <ol className="mt-3 space-y-3">{STEPS.map(([t, d], n) => (<li key={t} className="flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-sm text-white">{n + 1}</span><span><b className="font-medium">{t}.</b> <span className="text-slate2">{d}</span></span></li>))}</ol>
            </div>
          </div>
          <div><h2 className="mb-4 font-display text-3xl font-semibold">Send us a message</h2><ContactForm /></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
