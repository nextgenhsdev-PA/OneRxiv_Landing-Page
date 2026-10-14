'use client';
import { useState } from 'react';
import { ask, localRoute } from '../lib/assistant';

const IDEAS = ['Charting takes too long', 'Claims keep getting denied', 'We need telehealth'];

export default function HeroAsk() {
  const [q, setQ] = useState('');
  const [res, setRes] = useState(null);
  const [busy, setBusy] = useState(false);
  const go = async (text, instant) => {
    if (!text.trim() || busy) return;
    if (instant) return setRes(localRoute(text));
    setBusy(true); setRes(await ask([{ role: 'user', content: text }])); setBusy(false);
  };
  return (
    <div className="mt-8 max-w-xl rounded-3xl border border-blush-200 bg-blush-50 p-4">
      <label htmlFor="hero-ask" className="mb-2 block text-sm font-medium">Tell us your biggest practice headache</label>
      <div className="flex gap-2">
        <input id="hero-ask" value={q} maxLength={200} onChange={(e) => setQ(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && go(q)} placeholder="e.g. we spend evenings finishing notes" className="min-w-0 flex-1 rounded-full border border-blush-300 bg-white px-5 py-3 text-sm" />
        <button onClick={() => go(q)} disabled={busy} className="rounded-full bg-ink px-5 text-sm font-medium text-white disabled:opacity-50">{busy ? '…' : 'Find a fix'}</button>
      </div>
      {!res && <div className="mt-3 flex flex-wrap gap-2">{IDEAS.map((i) => (<button key={i} onClick={() => { setQ(i); go(i, true); }} className="rounded-full border border-blush-300 bg-white px-3 py-1 text-xs hover:border-brand">{i}</button>))}</div>}
      {res && (<div className="mt-3 text-sm" aria-live="polite"><p>{res.reply}</p><a href={res.href} className="mt-2 inline-block font-medium text-brand underline">{res.label}</a></div>)}
    </div>
  );
}
