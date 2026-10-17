import Link from 'next/link';
import { Wordmark } from './ui';
import { CONTACT } from '../lib/content';

const LINKS = [['About', '/#about'], ['Solutions', '/#solutions'], ['Products', '/#products'], ['How it works', '/#journey'], ['Blogs', '/#Blogs'], ['Contact', '/contact'], ['Careers', '#'], ['Privacy', '#'], ['Terms', '#']];

export default function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-blush-100 py-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 md:flex-row">
        <div><Wordmark /><p className="mt-3 text-sm text-slate2">One patient. One record. One ecosystem.</p>
          <a href={`mailto:${CONTACT.email}`} className="mt-3 block text-sm text-brand hover:underline">{CONTACT.email}</a></div>
        <nav aria-label="Footer" className="flex max-w-xl flex-wrap gap-x-8 gap-y-2 text-sm">{LINKS.map(([l, h]) => (<Link key={l} href={h}>{l}</Link>))}</nav>
      </div>
      <p className="mx-auto mt-8 max-w-7xl px-5 text-xs text-slate2">*Based on customer-reported results. © {new Date().getFullYear()} OneRxiv. All rights reserved.</p>
    </footer>
  );
}
