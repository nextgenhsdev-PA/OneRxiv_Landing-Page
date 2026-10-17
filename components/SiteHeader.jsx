import Link from 'next/link';
import CommandPalette from './CommandPalette';
import { Btn, Wordmark } from './ui';
import { PRODUCTS, FAQ } from '../lib/content';

const NAV = [['About', '/#about'], ['Solutions', '/#solutions'], ['How it works', '/#journey'], ['AI', '/#ai'], ['Customers', '/#stories'], ['Resources', '/#resources'], ['Contact', '/contact']];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-blush-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
        <Link href="/" aria-label="OneRxiv home"><Wordmark /></Link>
        <nav aria-label="Main" className="hidden items-center gap-5 text-[15px] md:flex lg:gap-7">
          <div className="group relative">
            <button className="py-5" aria-haspopup="true">Products</button>
            <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 rounded-3xl border border-blush-200 bg-white p-4 opacity-0 shadow-2xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="grid grid-cols-2 gap-1">
                {PRODUCTS.map(([n, d]) => (<li key={n}><Link href="/#products" className="block rounded-2xl p-3 hover:bg-blush-50"><span className="font-medium">{n}</span><span className="mt-0.5 block text-sm text-slate2">{d}</span></Link></li>))}
              </ul>
            </div>
          </div>
          {NAV.map(([l, h]) => (<Link key={l} href={h} className="hover:text-brand">{l}</Link>))}
        </nav>
        <div className="flex items-center gap-3"><CommandPalette products={PRODUCTS} faqs={FAQ} /><Btn href="/contact">Schedule a demo</Btn></div>
      </div>
    </header>
  );
}
