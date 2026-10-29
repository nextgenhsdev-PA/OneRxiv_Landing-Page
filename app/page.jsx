import HeroVideo from '../components/HeroVideo';
import Journey from '../components/Journey';
import AIShowcase from '../components/AIShowcase';
import HeroAsk from '../components/HeroAsk';
import DayStory from '../components/DayStory';
import SolutionsCarousel from '../components/SolutionsCarousel';
import OneRecord from '../components/OneRecord';
import BeforeAfter from '../components/BeforeAfter';
import ChallengeFinder from '../components/ChallengeFinder';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { Btn } from '../components/ui';
import AgentRoster from '../components/AgentRoster';
import FaqSection from '../components/FaqSection';
import { POSTS } from '../lib/posts';
import { slugOf } from '../lib/products';
import { PRODUCTS, FAQ, CONTACT } from '../lib/content';

/* ---------- CONTENT (edit here). Items marked VERIFY need approved, substantiated claims before launch. ---------- */
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
const AUDIENCES = [
  ['Hospitals', 'Connect every department on one shared record.'],
  ['Insurance companies', 'Receive clean, structured data from providers.'],
  ['Private practitioners', 'Chart faster and keep patients connected.'],
];
const PLAN = [ // TODO: confirm this plan with your delivery team
  ['Day 30', 'Lay the foundation', ['Map your workflows and systems', 'Migrate records and set up users', 'Train a pilot group']],
  ['Day 60', 'Activate your teams', ['Go live with pilot teams', 'Connect labs, billing and insurers', 'Tune templates to your specialty']],
  ['Day 90', 'Scale with confidence', ['Roll out to every team', 'Review results against your goals', 'Plan your next modules']],
];
const ARTICLES = [
  ['Managing a modern practice', 'What day-to-day operations look like with an integrated EHR.'],
  ['Billing software every practice should know', 'Where clinical and financial workflows meet, and where they break.'],
  ['Choosing the right charting software', 'A short framework for evaluating documentation tools.'],
];



export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* HERO */}
        <section id="top" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
          <div>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              One patient.<br />One record.<br /><span className="text-brand">One ecosystem.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate2">OneRxiv brings your EHR, telemedicine, billing and AI documentation into a single closed loop, so your team spends its day on patients, not on software.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Btn href="/contact">Schedule a demo</Btn><Btn href="/contact" ghost>Chat with sales</Btn></div>
            <HeroAsk />
            <p className="mt-6 text-sm text-slate2">Built for primary care, behavioral health, pain and spine, and multi-location groups.</p>
          </div>
          <HeroVideo />
        </section>

        {/* BUILT FOR */}
        <section aria-label="Who OneRxiv is built for" className="border-y border-blush-100 bg-blush-50 py-12">
          <p className="mb-8 text-center text-sm text-slate2">One platform for every part of the care ecosystem</p>
          <ul className="mx-auto grid max-w-5xl gap-5 px-5 sm:grid-cols-3">
            {AUDIENCES.map(([t, d]) => (<li key={t}><a href="/#solutions" className="block h-full rounded-3xl border border-blush-200 bg-white p-6 transition hover:border-brand"><h3 className="text-lg font-semibold">{t}</h3><p className="mt-1 text-slate2">{d}</p></a></li>))}
          </ul>
        </section>

        {/* CHALLENGE FINDER */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <h2 className="max-w-2xl font-display text-4xl font-semibold sm:text-5xl">What’s your biggest challenge?</h2>
          <p className="mb-10 mt-4 max-w-xl text-lg text-slate2">Pick the one that sounds most like your day and see how OneRxiv helps.</p>
          <ChallengeFinder />
        </section>

        {/* ONE RECORD (scroll animation) */}
        <OneRecord />

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

        {/* BEFORE / AFTER */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <h2 className="mx-auto max-w-3xl text-center font-display text-4xl font-semibold sm:text-5xl">From disconnected to connected</h2>
          <p className="mx-auto mb-10 mt-4 max-w-xl text-center text-lg text-slate2">Drag the slider to compare a practice before and after OneRxiv.</p>
          <BeforeAfter />
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
                <li key={n}><a href={`/products/${slugOf(n)}`} className="group block h-full rounded-3xl border border-blush-200 bg-white p-7 transition hover:border-brand hover:shadow-xl">
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

        <AgentRoster />

        {/* FIRST 90 DAYS */}
        <section className="bg-blush-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <h2 className="max-w-2xl font-display text-4xl font-semibold sm:text-5xl">Your first 90 days</h2>
            <p className="mb-10 mt-4 max-w-xl text-lg text-slate2">A typical path from first call to results. We tailor it to your organization.</p>
            <ol className="grid gap-5 md:grid-cols-3">
              {PLAN.map(([d, t, items]) => (
                <li key={d} className="rounded-3xl border border-blush-200 bg-white p-7">
                  <span className="rounded-full bg-brand px-3 py-1 text-sm text-white">{d}</span>
                  <h3 className="mt-4 text-xl font-semibold">{t}</h3>
                  <ul className="mt-4 space-y-2">{items.map((i) => (<li key={i} className="flex gap-3 text-slate2"><span className="text-brand">✓</span>{i}</li>))}</ul>
                </li>))}
            </ol>
          </div>
        </section>

        {/* EARLY PARTNERS */}
        <section id="stories" className="bg-ink py-20 text-white lg:py-28">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">Help shape OneRxiv</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">We’re opening to our first hospitals, insurance companies and practices. Early partners work directly with our team and influence what we build next.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3"><Btn href="/contact">Become an early partner</Btn></div>
          </div>
        </section>

        {/* BLOGS */}
        <section id="blogs" className="mx-auto max-w-7xl px-5 py-20 lg:py-28">
          <h2 className="font-display text-4xl font-semibold sm:text-5xl">Stay updated with our latest insights</h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {POSTS.map((p) => (<li key={p.slug}><a href={`/blogs/${p.slug}`} className="block h-full rounded-3xl bg-blush-50 p-7 hover:bg-blush-100"><div className="mb-6 aspect-video rounded-2xl bg-gradient-to-br from-blush-200 to-white" /><h3 className="text-lg font-semibold">{p.title}</h3><p className="mt-2 text-slate2">{p.excerpt}</p></a></li>))}
          </ul>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-5 pb-20 lg:pb-28">
          <h2 className="font-display text-4xl font-semibold">Questions practices ask us</h2>
          <div className="mt-8"><FaqSection homeOnly /></div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-blush-100 to-blush-200 py-20 text-center lg:py-28">
          <div className="mx-auto max-w-3xl px-5">
            <h2 className="font-display text-4xl font-semibold sm:text-5xl">See OneRxiv run your practice</h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-ink/70">A 30-minute walkthrough tailored to your organization. No obligation.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3"><Btn href="/contact">Contact our team</Btn><Btn href={`mailto:${CONTACT.email}`} ghost>{CONTACT.email}</Btn></div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
