import HeroVideo from '../components/HeroVideo';
import Journey from '../components/Journey';
import AIShowcase from '../components/AIShowcase';
import HeroAsk from '../components/HeroAsk';
import DayStory from '../components/DayStory';
import SolutionsCarousel from '../components/SolutionsCarousel';

/* ---------- CONTENT (edit here). Items marked VERIFY need approved, substantiated claims before launch. ---------- */
const PRODUCTS = [
  ['EHR', 'Tailorable documentation and complete records for every specialty.'],
  ['Telemedicine', 'Live and virtual visits built into one workflow.'],
  ['Practice Management', 'Scheduling and billing that help you collect what you’re owed, faster.'],
  ['Patient Engagement', 'Stay connected with patients beyond the encounter.'],
  ['AI Automation', 'Ambient documentation and coding assist.'],
  ['Reporting & Analytics', 'Real-time dashboards across all locations.'],
];
const STRENGTHS = [
  ['◉', 'One Record', 'A single patient record shared across clinics, labs and payers.'],
  ['✦', 'Ambient AI', 'Notes, coding and messages drafted for you. You stay in control.'],
  ['⇄', 'Interoperability', 'Connects with labs, pharmacies, clearinghouses and other systems.'],
  ['◈', 'Built-in Telemedicine', 'In-person and virtual visits in one workflow.'],
  ['▣', 'Security First', 'Encryption, role-based access and audit trails built in.'],
  ['▤', 'Real-time Insights', 'Dashboards across every location and department.'],
];
const PILLARS = [
  ['Our Mission', 'Making healthcare efficient, reliable and easily accessed.'],
  ['Our Vision', 'To be the nationwide number one EHR, trusted by every hospital, insurer and practitioner.'],
  ['Our Values', 'One patient. One record. One ecosystem. Every decision starts there.'],
];
const STATS = [ // VERIFY every figure
  ['170K+', 'clinicians on the platform'],
  ['2.5 hrs', 'saved per clinician, per day*'],
  ['9', 'flagship health-system partners'],
];
const PARTNERS = ['Partner One', 'Partner Two', 'Partner Three', 'Partner Four', 'Partner Five', 'Partner Six']; // replace with approved logos
const TRUST = ['HIPAA-aligned', 'SOC 2 (verify)', 'ONC-certified (verify)', '99.9% uptime (verify)'];
const ARTICLES = [
  ['Managing a modern practice', 'What day-to-day operations look like with an integrated EHR.'],
  ['Billing software every practice should know', 'Where clinical and financial workflows meet, and where they break.'],
  ['Choosing the right charting software', 'A short framework for evaluating documentation tools.'],
];
const FAQ = [
  ['How long does implementation take?', 'Most practices go live in weeks, not months. We map your workflows, migrate your data, train your team and stay on call at go-live.'],
  ['Can you migrate our existing records?', 'Yes. We import patient, scheduling and billing data from your current system and validate it with you before launch.'],
  ['Is OneRxiv secure and HIPAA compliant?', 'Security is built in: encryption, role-based access and audit logging. Ask us for our current compliance documentation.'],
  ['Which specialties do you support?', 'Primary care, behavioral health, pain and spine, and multi-location groups, with templates you can tailor.'],
  ['Does the AI replace the clinician?', 'No. Ambient AI drafts the note; the clinician reviews, edits and signs every one.'],
];

const Btn = ({ href, children, ghost }) => (
  <a href={href} className={`inline-flex items-center justify-center rounded-full px-6 py-3.5 font-medium transition ${ghost ? 'border border-ink/20 bg-white hover:border-brand hover:text-brand' : 'bg-brand text-white shadow-lg shadow-brand/25 hover:bg-[#a90d26]'}`}>{children}</a>
);

const Wordmark = ({ className = '' }) => (
  <span className={`font-display text-3xl font-bold tracking-tight text-ink ${className}`}>One<span className="text-brand">R</span>xiv</span>
);

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-blush-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#top" aria-label="OneRxiv home"><Wordmark /></a>
          <nav aria-label="Main" className="hidden items-center gap-5 text-[15px] md:flex lg:gap-7">
            <div className="group relative">
              <button className="py-5" aria-haspopup="true">Products</button>
              <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 rounded-3xl border border-blush-200 bg-white p-4 opacity-0 shadow-2xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <ul className="grid grid-cols-2 gap-1">
                  {PRODUCTS.map(([n, d]) => (
                    <li key={n}><a href="#products" className="block rounded-2xl p-3 hover:bg-blush-50"><span className="font-medium">{n}</span><span className="mt-0.5 block text-sm text-slate2">{d}</span></a></li>
                  ))}
                </ul>
              </div>
            </div>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#solutions" className="hover:text-brand">Solutions</a>
            <a href="#journey" className="hover:text-brand">How it works</a>
            <a href="#ai" className="hover:text-brand">AI</a>
            <a href="#stories" className="hover:text-brand">Customers</a>
            <a href="#resources" className="hover:text-brand">Resources</a>
          </nav>
          <div className="flex items-center gap-3"><a href="#contact" className="hidden text-sm hover:text-brand sm:block">Log in</a><Btn href="#contact">Schedule a demo</Btn></div>
        </div>
      </header>

      <main id="main">
        {/* HERO */}
        <section id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
          <div>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              One patient.<br />One record.<br /><span className="text-brand">One ecosystem.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate2">OneRxiv brings your EHR, telemedicine, billing and AI documentation into a single closed loop, so your team spends its day on patients, not on software.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Btn href="#contact">Schedule a demo</Btn><Btn href="#contact" ghost>Chat with sales</Btn></div>
            <HeroAsk />
            <p className="mt-6 text-sm text-slate2">Built for primary care, behavioral health, pain and spine, and multi-location groups.</p>
          </div>
          <HeroVideo />
        </section>

        {/* SOCIAL PROOF */}
        <section aria-label="Trusted by" className="border-y border-blush-100 bg-blush-50 py-10">
          <p className="mb-6 text-center text-sm text-slate2">Trusted by healthcare organizations worldwide</p>
          <div className="marquee overflow-hidden" aria-label="Partner logos">
            <div className="marquee-track flex w-max gap-6">
              {[...PARTNERS, ...PARTNERS].map((p, n) => (
                <div key={n} aria-hidden={n >= PARTNERS.length} className="grid h-14 w-44 place-items-center rounded-xl border border-blush-200 bg-white text-sm text-slate2">{p}</div>
              ))}
            </div>
          </div>
          <dl className="mx-auto mt-10 grid max-w-4xl gap-6 px-5 text-center sm:grid-cols-3">
            {STATS.map(([v, l]) => (<div key={l}><dt className="font-display text-4xl font-semibold text-brand">{v}</dt><dd className="mt-1 text-sm text-slate2">{l}</dd></div>))}
          </dl>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="grid grid-cols-5 grid-rows-2 gap-4" aria-hidden="true">{/* Replace with team photos: public/team-1.jpg etc. */}
              <div className="col-span-3 row-span-1 aspect-[4/3] rounded-[2rem] bg-gradient-to-br from-blush-200 to-blush-100" />
              <div className="col-span-2 aspect-square rounded-[2rem] bg-gradient-to-br from-blush-100 to-white ring-1 ring-blush-200" />
              <div className="col-span-2 grid place-items-center rounded-[2rem] bg-brand p-5 text-center text-white"><p><span className="font-display text-5xl font-semibold">1</span><br />record for every patient</p></div>
              <div className="col-span-3 aspect-[4/3] rounded-[2rem] bg-gradient-to-br from-blush-300/60 to-blush-100" />
            </div>
            <div>
              <span className="rounded-full border border-brand/30 px-4 py-1.5 text-sm font-medium text-brand">About us</span>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">We build intelligent healthcare software for the organizations that deliver care</h2>
              <p className="mt-5 text-lg text-slate2">OneRxiv is a med-tech software company serving businesses, not consumers. We help hospitals, insurance companies and private practitioners replace disconnected systems with one record, so care is faster for teams and simpler for patients.</p>
              <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-blush-200 pt-6">
                {[['B2B', 'Med-tech software'], ['3', 'Customer segments'], ['1', 'Shared record']].map(([v, l]) => (<div key={l}><dt className="font-display text-4xl font-semibold text-brand">{v}</dt><dd className="mt-1 text-sm text-slate2">{l}</dd></div>))}
              </dl>
            </div>
          </div>
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {PILLARS.map(([t, d]) => (<li key={t} className="rounded-3xl border border-brand/25 bg-white p-8 text-center"><h3 className="font-display text-2xl font-semibold text-brand">{t}</h3><p className="mx-auto mt-3 max-w-xs text-slate2">{d}</p></li>))}
          </ul>
        </section>

        {/* KEY STRENGTHS */}
        <section className="bg-blush-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-2xl text-center"><h2 className="font-display text-4xl font-semibold sm:text-5xl">Our key strengths</h2>
              <p className="mt-4 text-lg text-slate2">Intelligent solutions that drive automation, accuracy and growth.</p></div>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {STRENGTHS.map(([g, t, d], n) => (
                <li key={t} className="rounded-3xl border border-blush-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10">
                  <div className="flex items-start justify-between"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-blush-100 text-2xl text-brand">{g}</span><span className="rounded-lg border border-blush-200 px-2.5 py-1 text-sm text-slate2">{String(n + 1).padStart(2, '0')}</span></div>
                  <h3 className="mt-6 text-xl font-semibold">{t}</h3><p className="mt-2 text-slate2">{d}</p>
                </li>))}
            </ul>
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <div className="mb-12 max-w-2xl"><h2 className="font-display text-4xl font-semibold sm:text-5xl">The whole care journey on one map</h2>
            <p className="mt-4 text-lg text-slate2">See where each part of OneRxiv fits, from first discovery to ongoing health management.</p></div>
          <Journey />
        </section>

        {/* SOLUTIONS CAROUSEL */}
        <section id="solutions" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <h2 className="mx-auto max-w-3xl text-center font-display text-4xl font-semibold sm:text-5xl">Solutions for every healthcare organization</h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-slate2">Hospitals, insurers and private practitioners, each served from the same record.</p>
          <div className="mt-8"><SolutionsCarousel /></div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="bg-blush-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <h2 className="max-w-2xl font-display text-4xl font-semibold sm:text-5xl">Every product, one click away</h2>
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map(([n, d]) => (
                <li key={n}><a href="#contact" className="group block h-full rounded-3xl border border-blush-200 bg-white p-7 transition hover:border-brand hover:shadow-xl">
                  <span className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-blush-100 font-display text-lg text-brand">{n[0]}</span>
                  <h3 className="text-xl font-semibold">{n}</h3><p className="mt-2 text-slate2">{d}</p>
                  <span className="mt-5 inline-block font-medium text-brand group-hover:underline">Explore {n}</span>
                </a></li>
              ))}
            </ul>
          </div>
        </section>

        {/* DAY STORY */}
        <section id="day" className="mx-auto max-w-7xl px-5 py-20 lg:py-28"><DayStory /></section>

        {/* AI */}
        <section id="ai" className="mx-auto max-w-7xl px-5 py-20 lg:py-28"><AIShowcase /></section>

        {/* TESTIMONIAL + TRUST */}
        <section id="stories" className="bg-ink py-20 text-white lg:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <blockquote className="font-display text-3xl leading-snug sm:text-4xl">“I was able to close 300 charts in three days because of how streamlined charting is.”</blockquote>
            <p className="mt-6 text-white/70">Director of Health Information Systems, Pain &amp; Spine practice (VERIFY quote and permission)</p>
            <ul className="mt-12 flex flex-wrap justify-center gap-3">{TRUST.map((t) => (<li key={t} className="rounded-full border border-white/20 px-4 py-2 text-sm">{t}</li>))}</ul>
          </div>
        </section>

        {/* RESOURCES */}
        <section id="resources" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">Stay updated with our latest insights</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {ARTICLES.map(([t, d]) => (<li key={t}><a href="#" className="block h-full rounded-3xl bg-blush-50 p-7 hover:bg-blush-100"><div className="mb-6 aspect-video rounded-2xl bg-gradient-to-br from-blush-200 to-white" /><h3 className="text-lg font-semibold">{t}</h3><p className="mt-2 text-slate2">{d}</p></a></li>))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-5 pb-20 lg:pb-28">
          <h2 className="font-display text-4xl font-semibold">Questions practices ask us</h2>
          <div className="mt-8 divide-y divide-blush-200 border-y border-blush-200">
            {FAQ.map(([q, a]) => (<details key={q} className="group py-5"><summary className="flex cursor-pointer list-none justify-between gap-4 text-lg font-medium">{q}<span className="text-brand transition group-open:rotate-45">+</span></summary><p className="mt-3 text-slate2">{a}</p></details>))}
          </div>
        </section>

        {/* CTA + FORM */}
        <section id="contact" className="bg-gradient-to-br from-blush-100 to-blush-200 py-20 lg:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
            <div><h2 className="font-display text-4xl font-semibold sm:text-5xl">See OneRxiv run your practice</h2>
              <p className="mt-4 max-w-md text-lg text-ink/70">A 30-minute walkthrough tailored to your specialty. No obligation.</p></div>
            <form action="/api/demo" method="post" className="space-y-4 rounded-3xl bg-white p-7 shadow-xl">
              {[['name', 'Full name', 'text'], ['email', 'Work email', 'email'], ['role', 'Your role', 'text']].map(([id, l, t]) => (
                <label key={id} className="block text-sm font-medium">{l}<input name={id} type={t} required className="mt-1.5 w-full rounded-xl border border-blush-300 px-4 py-3 font-normal" /></label>))}
              <label className="block text-sm font-medium">Practice size
                <select name="size" className="mt-1.5 w-full rounded-xl border border-blush-300 bg-white px-4 py-3 font-normal"><option>1–5 providers</option><option>6–25 providers</option><option>26+ providers</option></select></label>
              <button className="w-full rounded-full bg-brand py-3.5 font-medium text-white hover:bg-[#a90d26]">Book my demo</button>
              <p className="text-xs text-slate2">Please don’t include patient information. We’ll only use your details to arrange the demo.</p>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer id="footer" className="border-t border-blush-100 py-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 md:flex-row">
          <div><Wordmark /><p className="mt-3 text-sm text-slate2">One patient. One record. One ecosystem.</p></div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-2 text-sm"><a href="#about">About</a><a href="#solutions">Solutions</a><a href="#products">Products</a><a href="#journey">How it works</a><a href="#resources">Resources</a><a href="#">Careers</a><a href="#">Privacy</a><a href="#">Terms</a><a href="#contact">Contact</a></nav>
        </div>
        <p className="mx-auto mt-8 max-w-7xl px-5 text-xs text-slate2">*Based on customer-reported results. © {new Date().getFullYear()} OneRxiv. All rights reserved.</p>
      </footer>
    </>
  );
}
