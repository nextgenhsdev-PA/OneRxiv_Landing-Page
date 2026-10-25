import Link from 'next/link';
import { Wordmark } from './ui';
import NewsletterForm from './NewsletterForm';
import { CONTACT } from '../lib/content';

const COLS = [
  ['Who it’s for', [['Hospitals', '/hospitals'], ['Insurance companies', '/insurers'], ['Private practitioners', '/practitioners']]],
  ['Company', [['About', '/#about'], ['Contact', '/contact'], ['Careers', '#']]],
  ['Learn', [['Blogs', '/blogs'], ['Time savings calculator', '/roi'], ['Security and trust', '/security']]],
  ['Legal', [['Privacy', '/privacy'], ['Terms', '/terms']]],
];

export default function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-blush-100 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.1fr_2fr]">
        <div>
          <Wordmark /><p className="mt-3 text-sm text-slate2">One patient. One record. One ecosystem.</p>
          <a href={`mailto:${CONTACT.email}`} className="mt-3 block text-sm text-brand hover:underline">{CONTACT.email}</a>
          <div className="mt-6"><NewsletterForm /></div>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-4">
          {COLS.map(([t, ls]) => (<div key={t}><p className="font-semibold">{t}</p><ul className="mt-3 space-y-2 text-slate2">{ls.map(([l, h]) => (<li key={l}><Link href={h} className="hover:text-brand">{l}</Link></li>))}</ul></div>))}
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-7xl px-5 text-xs text-slate2">© {new Date().getFullYear()} OneRxiv. All rights reserved.</p>
    </footer>
  );
}
