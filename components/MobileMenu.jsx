'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu({ links }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} className="grid h-10 w-10 place-items-center rounded-full border border-blush-200 text-xl">{open ? '✕' : '☰'}</button>
      {open && (
        <nav aria-label="Mobile" className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-blush-200 bg-white px-5 pb-6 shadow-xl">
          <ul className="divide-y divide-blush-100">
            {links.map(([l, h]) => (<li key={l}><Link href={h} onClick={() => setOpen(false)} className="block py-3.5 text-lg">{l}</Link></li>))}
          </ul>
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-4 block rounded-full bg-brand py-3.5 text-center font-medium text-white">Schedule a demo</Link>
        </nav>
      )}
    </div>
  );
}
