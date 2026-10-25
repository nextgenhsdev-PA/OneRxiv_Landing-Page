'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [s, setS] = useState('idle'); // idle | sending | done | error
  const submit = async (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    setS('sending');
    try { const r = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) }); setS(r.ok ? 'done' : 'error'); }
    catch { setS('error'); }
  };
  if (s === 'done') return <p role="status" className="rounded-2xl bg-blush-100 p-4 text-sm">Thank you! You’re on the list. We’ll be in touch with updates.</p>;
  return (
    <form onSubmit={submit} className="max-w-sm">
      <label htmlFor="nl" className="text-sm font-medium">Get OneRxiv updates</label>
      <div className="mt-2 flex gap-2">
        <input id="nl" name="email" type="email" required maxLength={200} placeholder="Work email" autoComplete="email" className="min-w-0 flex-1 rounded-full border border-blush-300 px-4 py-2.5 text-sm outline-none focus:border-brand" />
        <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <button disabled={s === 'sending'} className="rounded-full bg-brand px-5 text-sm font-medium text-white hover:bg-[#a90d26] disabled:opacity-60">{s === 'sending' ? '…' : 'Subscribe'}</button>
      </div>
      {s === 'error' && <p role="alert" className="mt-2 text-xs text-brand">Couldn’t subscribe right now. Please try again or email us.</p>}
      <p className="mt-2 text-xs text-slate2">No spam. Unsubscribe any time.</p>
    </form>
  );
}