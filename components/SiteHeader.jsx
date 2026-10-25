import Link from 'next/link';
import CommandPalette from './CommandPalette';
import MobileMenu from './MobileMenu';
import { Btn, Wordmark } from './ui';
import { PRODUCTS, FAQ } from '../lib/content';
import { PRODUCT_PAGES } from '../lib/products';
import { AUDIENCES } from '../lib/audiences';

// Set to null to hide the bar.
const ANNOUNCE = { text: 'Now onboarding our first hospitals, insurers and practices.', cta: 'Become an early partner', href: '/contact' };

const FOR = AUDIENCES.map((a) => [a.title, `/${a.slug}`, a.menu]);
const NAV = [['About', '/#about'], ['Solutions', '/#solutions'], ['How it works', '/#journey'], ['AI', '/#ai'], ['Customers', '/#stories'], ['Blogs', '/blogs'], ['Contact', '/contact']];

const Menu = ({ label, items }) => (
  <div className="group relative">
    <button className="py-5" aria-haspopup="true">{label}</button>
    <div className="invisible absolute left-1/2 top-full w-[30rem] -translate-x-1/2 rounded-3xl border border-blush-200 bg-white p-4 opacity-0 shadow-2xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
      <ul className="grid grid-cols-2 gap-1">
        {items.map(([n, h, d]) => (<li key={n}><Link href={h} className="block rounded-2xl p-3 hover:bg-blush-50"><span className="font-medium">{n}</span><span className="mt-0.5 block text-sm text-slate2">{d}</span></Link></li>))}
      </ul>
    </div>
  </div>
);

export default function SiteHeader() {
  const products = PRODUCT_PAGES.map((p) => [p.name, `/products/${p.slug}`, p.short]);
  return (
    <>
      {ANNOUNCE && (
        <div className="bg-ink px-5 py-2.5 text-center text-sm text-white">
          {ANNOUNCE.text} <Link href={ANNOUNCE.href} className="ml-1 font-medium text-blush-300 underline underline-offset-2">{ANNOUNCE.cta}</Link>
        </div>
      )}
      <header className="sticky top-0 z-40 border-b border-blush-100 bg-white/90 backdrop-blur">
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link href="/" aria-label="OneRxiv home"><Wordmark /></Link>
          <nav aria-label="Main" className="hidden items-center gap-5 text-[15px] md:flex lg:gap-7">
            <Menu label="Products" items={products} />
            <Menu label="Who it’s for" items={FOR} />
            {NAV.map(([l, h]) => (<Link key={l} href={h} className="hover:text-brand">{l}</Link>))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <CommandPalette products={PRODUCTS} faqs={FAQ} />
            <span className="hidden md:block"><Btn href="/contact">Schedule a demo</Btn></span>
            <MobileMenu links={[...FOR.map(([n, h]) => [n, h]), ...NAV]} />
          </div>
        </div>
      </header>
      <Link href="/contact" className="fixed bottom-4 left-4 right-40 z-40 rounded-full bg-brand py-3.5 text-center font-medium text-white shadow-xl md:hidden">Book a demo</Link>
    </>
  );
}
