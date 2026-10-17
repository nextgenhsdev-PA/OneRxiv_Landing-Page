'use client';
import { useState } from 'react';
import { CONTACT } from '../lib/content';

const ORGS = ['Hospital', 'Insurance company', 'Private practitioner', 'Other'];
const SIZES = ['Just me', '2–10 people', '11–50 people', '51–200 people', '200+ people'];
const TOPICS = ['Book a demo', 'Ask about pricing', 'Get support', 'Partner with us', 'Something else'];
const field = 'mt-1.5 w-full rounded-xl border border-blush-300 bg-white px-4 py-3 font-normal outline-none focus:border-brand';

const Select = ({ name, label, opts }) => (
  <label className="block text-sm font-medium">{label}
    <select name={name} className={field} defaultValue="">
      <option value="" disabled>Select…</option>{opts.map((o) => <option key={o}>{o}</option>)}
    </select>
  </label>
);

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [data, setData] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    setData(d); setStatus('sending');
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
      setStatus(r.ok ? 'done' : 'error');
    } catch { setStatus('error'); }
  };

  if (status === 'done') return (
    <div role="status" className="rounded-3xl bg-white p-10 text-center shadow-xl">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand text-2xl text-white">✓</span>
      <h3 className="mt-5 font-display text-3xl font-semibold">Message sent</h3>
      <p className="mt-2 text-slate2">Thank you. Our team will reply within one business day.</p>
      <button onClick={() => setStatus('idle')} className="mt-6 font-medium text-brand hover:underline">Send another message</button>
    </div>
  );

  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Enquiry from ' + (data.name || 'website'))}&body=${encodeURIComponent(data.message || '')}`;

  return (
    <form onSubmit={submit} className="space-y-4 rounded-3xl bg-white p-6 shadow-xl sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">Full name *<input name="name" required maxLength={120} autoComplete="name" className={field} /></label>
        <label className="block text-sm font-medium">Work email *<input name="email" type="email" required maxLength={200} autoComplete="email" className={field} /></label>
      </div>
      <label className="block text-sm font-medium">Phone number (optional)<input name="phone" type="tel" maxLength={40} autoComplete="tel" className={field} /></label>
      <div className="grid gap-4 sm:grid-cols-2"><Select name="org" label="I represent a" opts={ORGS} /><Select name="size" label="How many people will use it?" opts={SIZES} /></div>
      <Select name="topic" label="I’d like to" opts={TOPICS} />
      <label className="block text-sm font-medium">Your message *<textarea name="message" required rows={5} maxLength={2000} placeholder="Tell us a little about your organization and what you need." className={field} /></label>
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <button disabled={status === 'sending'} className="w-full rounded-full bg-brand py-3.5 font-medium text-white hover:bg-[#a90d26] disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Send message'}</button>
      {status === 'error' && (<p role="alert" className="rounded-xl bg-blush-100 p-3 text-sm">We couldn’t send that just now. Please <a href={mailto} className="font-medium text-brand underline">email us directly</a> and we’ll get back to you.</p>)}
      <p className="text-xs text-slate2">Please don’t include patient or health information. We use your details only to reply to you.</p>
    </form>
  );
}

