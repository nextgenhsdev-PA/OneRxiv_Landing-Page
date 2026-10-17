'use client';
import { useEffect, useMemo, useRef, useState } from 'react';

const PAGES = [['About', '#about'], ['Solutions', '#solutions'], ['How it works', '#journey'], ['AI', '#ai'], ['Customers', '#stories'], ['Resources', '#resources'], ['FAQ', '#faq'], ['Contact us', '/contact']];

export default function CommandPalette({ products = [], faqs = [] }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [a, setA] = useState(0);
  const input = useRef(null);

  const items = useMemo(() => [
    ...PAGES.map(([l, h]) => ({ type: 'Page', label: l, href: h })),
    ...products.map(([l, d]) => ({ type: 'Product', label: l, hint: d, href: '#products' })),
    ...faqs.map(([l]) => ({ type: 'FAQ', label: l, href: '#faq' })),
  ], [products, faqs]);
  const hits = useMemo(() => { const t = q.trim().toLowerCase(); return (t ? items.filter((i) => (i.label + ' ' + (i.hint || '')).toLowerCase().includes(t)) : items).slice(0, 8); }, [q, items]);

  useEffect(() => {
    const k = (e) => { if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setOpen((o) => !o); } if (e.key === 'Escape') setOpen(false); };
    addEventListener('keydown', k); return () => removeEventListener('keydown', k);
  }, []);
  useEffect(() => { if (open) { setQ(''); setA(0); setTimeout(() => input.current?.focus(), 0); } }, [open]);
  useEffect(() => setA(0), [q]);

  const go = (i) => {
    if (!i) return; setOpen(false);
    if (i.href.startsWith('/')) { location.href = i.href; return; }
    setTimeout(() => { const el = document.querySelector(i.href); if (el) el.scrollIntoView({ behavior: 'smooth' }); else location.href = '/' + i.href; }, 50);
  };
  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setA((x) => Math.min(x + 1, hits.length - 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setA((x) => Math.max(x - 1, 0)); }
    if (e.key === 'Enter') go(hits[a]);
  };

  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="Search the site" className="flex items-center gap-2 rounded-full border border-blush-200 px-3 py-2 text-sm text-slate2 hover:border-brand">
        <span aria-hidden>⌕</span><span className="hidden lg:inline">Search</span><kbd className="hidden rounded bg-blush-100 px-1.5 text-xs lg:inline">Ctrl K</kbd>
      </button>
      {open && (
        <div className="fixed inset-0 z-[60] grid place-items-start bg-ink/40 px-4 pt-[14vh] backdrop-blur-sm" onMouseDown={() => setOpen(false)}>
          <div role="dialog" aria-label="Search" onMouseDown={(e) => e.stopPropagation()} className="mx-auto w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <input ref={input} value={q} onChange={(e) => setQ(e.target.value)} onKeyDown={onKey} role="combobox" aria-expanded="true" aria-controls="cmd-list" placeholder="Search products, pages, questions…" className="w-full border-b border-blush-100 px-6 py-4 text-lg outline-none" />
            <ul id="cmd-list" role="listbox" className="max-h-80 overflow-y-auto p-2">
              {hits.map((h, n) => (
                <li key={h.type + h.label} role="option" aria-selected={n === a} onMouseEnter={() => setA(n)} onClick={() => go(h)} className={`flex cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-3 ${n === a ? 'bg-blush-100' : ''}`}>
                  <span><span className="block font-medium">{h.label}</span>{h.hint && <span className="block text-sm text-slate2">{h.hint}</span>}</span>
                  <span className="shrink-0 rounded-full bg-blush-50 px-2.5 py-0.5 text-xs text-brand">{h.type}</span>
                </li>))}
              {!hits.length && <li className="px-4 py-6 text-center text-slate2">No results. Try “billing” or “AI”.</li>}
            </ul>
            <p className="border-t border-blush-100 px-5 py-2.5 text-xs text-slate2">↑ ↓ to move · Enter to open · Esc to close</p>
          </div>
        </div>
      )}
    </>
  );
}
