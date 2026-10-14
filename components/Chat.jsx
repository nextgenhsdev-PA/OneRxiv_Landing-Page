'use client';
import { useState } from 'react';
import { ask, localRoute } from '../lib/assistant';

const QUICK = ['Learn about our products', "I'm a patient", "I'm a current customer", "I'm interested in careers", 'See pricing'];

export default function Chat() {
  const [open, setOpen] = useState(false);
  const [log, setLog] = useState([]);
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);

  const send = async (q, instant) => {
    if (!q.trim() || busy) return;
    const next = [...log, { role: 'user', content: q }];
    setLog(next); setText('');
    if (instant) return setLog([...next, { role: 'assistant', ...localRoute(q) }]);
    setBusy(true);
    const res = await ask(next.map(({ role, content, reply }) => ({ role, content: content ?? reply })));
    setLog([...next, { role: 'assistant', ...res }]); setBusy(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      {open && (
        <div role="dialog" aria-label="Practice assistant" className="mb-3 flex max-h-[75vh] w-[min(92vw,23rem)] flex-col overflow-hidden rounded-3xl border border-blush-200 bg-white shadow-2xl">
          <div className="bg-brand px-5 py-4 text-white"><p className="font-medium">OneRxiv Assistant</p><p className="text-sm text-white/80">AI-powered. Ask anything about the platform.</p></div>
          <div className="flex-1 space-y-3 overflow-y-auto p-5" aria-live="polite">
            <p className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-blush-100 px-4 py-2.5 text-sm">Hi! Welcome. How can I help you today?</p>
            {log.map((m, n) => m.role === 'user'
              ? <p key={n} className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-tr-sm bg-ink px-4 py-2.5 text-sm text-white">{m.content}</p>
              : <div key={n} className="space-y-2"><p className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-blush-100 px-4 py-2.5 text-sm">{m.reply}</p>
                  <a href={m.href} onClick={() => setOpen(false)} className="inline-block rounded-full bg-ink px-4 py-2 text-sm text-white">{m.label}</a></div>)}
            {busy && <p className="w-fit rounded-2xl bg-blush-100 px-4 py-2.5 text-sm text-slate2">Thinking…</p>}
            {!log.length && <div className="flex flex-wrap gap-2">{QUICK.map((k) => (<button key={k} onClick={() => send(k, true)} className="rounded-full border border-blush-300 px-3.5 py-1.5 text-sm hover:bg-blush-100">{k}</button>))}</div>}
          </div>
          <div className="border-t border-blush-100 p-3">
            <div className="flex gap-2">
              <input value={text} maxLength={300} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send(text)} aria-label="Type your message" placeholder="Type your message…" className="min-w-0 flex-1 rounded-full border border-blush-300 px-4 py-2.5 text-sm" />
              <button onClick={() => send(text)} disabled={busy} className="rounded-full bg-brand px-4 text-sm font-medium text-white disabled:opacity-50">Send</button>
            </div>
            <p className="mt-2 px-1 text-xs text-slate2">AI assistant. Please don’t share personal health information.</p>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="ml-auto flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 font-medium text-white shadow-xl hover:bg-[#a90d26]"><span aria-hidden>✦</span>{open ? 'Close' : 'Ask OneRxiv'}</button>
    </div>
  );
}
