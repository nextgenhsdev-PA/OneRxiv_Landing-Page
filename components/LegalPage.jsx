import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { CONTACT } from '../lib/content';

// DRAFT text: have a lawyer review before launch.
export default function LegalPage({ title, intro, sections }) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
        <h1 className="font-display text-5xl font-semibold">{title}</h1>
        <p className="mt-3 text-sm text-slate2">Last updated: [add date]</p>
        <p className="mt-6 text-lg text-slate2">{intro}</p>
        <div className="mt-10 space-y-8">
          {sections.map(([h, t], n) => (<section key={h}><h2 className="text-xl font-semibold">{n + 1}. {h}</h2><p className="mt-2 text-slate2">{t}</p></section>))}
          <section><h2 className="text-xl font-semibold">Contact</h2><p className="mt-2 text-slate2">Questions about this page? Email <a className="text-brand underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.</p></section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
