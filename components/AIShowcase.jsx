'use client';
import { useEffect, useState } from 'react';

// Sample scenes only: illustrative, not real patient data.
const SCENES = [
  { id: 'Clinical AI', title: 'Ambient charting', blurb: 'Listens to the visit and drafts a structured note. You review, edit and sign.', stat: 'Up to 2.5 hrs saved per day*',
    bubbles: [['Clinician', 'How’s everything been? Are you still tender in the palm area?'], ['Patient', 'Yes, mostly when I grip things in the morning.'], ['Clinician', 'Let’s check range of motion and plan from there.']],
    result: { title: 'Draft note ready', rows: [['Subjective', 'Morning palm tenderness with gripping'], ['Objective', 'Range of motion assessed'], ['Plan', 'Reassess grip strength; follow-up in 2 weeks']], cta: 'Review and sign' } },
  { id: 'Intelligent Agent', title: 'Always-on agent', blurb: 'Voice or text handles scheduling, chart lookups and billing questions around the clock.', stat: 'Available 24/7',
    bubbles: [['You', 'Move Nguyen’s 10:15 to Thursday afternoon.'], ['Agent', 'Thursday has 2:30 and 4:00 open. Which works?'], ['You', '2:30, and send her a reminder.']],
    result: { title: 'Done', rows: [['Appointment', 'Moved to Thursday, 2:30 PM'], ['Reminder', 'Scheduled for Wednesday'], ['Chart', 'Updated automatically']], cta: 'View schedule' } },
  { id: 'Coding assist', title: 'Coding and billing assist', blurb: 'Suggests codes from the note so claims go out cleaner, with a human always in control.', stat: 'Fewer denials, faster payment*',
    bubbles: [['Note', 'Pain in right hand, grip assessed, follow-up planned.'], ['AI', 'Found documentation to support a diagnosis and visit level.'], ['AI', 'One gap: laterality unclear. Confirm before submitting.']],
    result: { title: 'Claim check', rows: [['Diagnosis', 'Suggested from note'], ['Visit level', 'Suggested, pending review'], ['Flag', '1 item needs your confirmation']], cta: 'Resolve and submit' } },
  { id: 'Patient inbox', title: 'Patient messaging', blurb: 'Drafts replies to routine messages in your voice, and routes anything clinical to you.', stat: 'Stay connected beyond the visit',
    bubbles: [['Patient', 'Can I refill my prescription before my trip?'], ['AI', 'Routine refill request detected. Draft reply prepared.'], ['AI', 'Routed to Dr. Patel for approval.']],
    result: { title: 'Reply drafted', rows: [['Type', 'Refill request'], ['Status', 'Awaiting clinician approval'], ['Patient', 'Notified once approved']], cta: 'Approve and send' } },
];

export default function AIShowcase() {
  const [i, setI] = useState(0);
  const [step, setStep] = useState(0); // 0..3 bubbles, 4 = result
  const s = SCENES[i];

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setStep(4); return; }
    setStep(0);
    const t = setInterval(() => setStep((n) => (n >= 4 ? n : n + 1)), 1300);
    return () => clearInterval(t);
  }, [i]);

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
      <div>
        <h2 className="font-display text-4xl font-semibold sm:text-5xl">AI that works beside you, all day</h2>
        <p className="mt-5 max-w-lg text-lg text-slate2">From the first word of a visit to the final claim, OneRxiv AI handles the paperwork. You stay in charge of every decision.</p>
        <div role="tablist" aria-label="AI capabilities" className="mt-8 space-y-2">
          {SCENES.map((c, n) => (
            <button key={c.id} role="tab" aria-selected={n === i} onClick={() => setI(n)}
              className={`w-full rounded-2xl border p-4 text-left transition ${n === i ? 'border-brand bg-blush-50' : 'border-blush-200 hover:border-blush-300'}`}>
              <span className="flex items-center justify-between font-semibold">{c.title}<span className={`text-sm font-normal ${n === i ? 'text-brand' : 'text-slate2'}`}>{c.id}</span></span>
              {n === i && <span className="mt-1.5 block text-slate2">{c.blurb}</span>}
            </button>
          ))}
        </div>
        <p className="mt-4 text-sm font-medium text-brand">{s.stat}</p>
      </div>

      <div className="mx-auto w-full max-w-md rounded-[2.5rem] border-[10px] border-ink bg-white p-5 shadow-2xl" aria-live="polite" aria-label={`Sample: ${s.title}`}>
        <div className="mb-4 flex items-center justify-between text-xs text-slate2"><span>Sample scenario</span>
          <span className="flex items-center gap-1.5 text-brand"><i className="h-2 w-2 animate-pulse rounded-full bg-brand" />{step < 4 ? 'Working' : 'Complete'}</span></div>
        <div className="min-h-[13rem] space-y-2.5">
          {s.bubbles.slice(0, Math.min(step, 3)).map(([who, text], n) => {
            const mine = who === 'You' || who === 'Clinician';
            return (<div key={n} className={`flex ${mine ? 'justify-end' : ''}`}><p className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm ${mine ? 'rounded-tr-sm bg-ink text-white' : 'rounded-tl-sm bg-blush-100'}`}><span className="mb-0.5 block text-[11px] opacity-70">{who}</span>{text}</p></div>);
          })}
        </div>
        <div className={`mt-3 rounded-2xl border border-brand/30 bg-blush-50 p-4 transition-opacity duration-500 ${step >= 4 ? 'opacity-100' : 'opacity-0'}`}>
          <p className="font-semibold">{s.result.title}</p>
          <dl className="mt-2 space-y-1.5 text-sm">{s.result.rows.map(([k, v]) => (<div key={k} className="flex justify-between gap-4"><dt className="text-slate2">{k}</dt><dd className="text-right">{v}</dd></div>))}</dl>
          <a href="#contact" className="mt-4 block rounded-full bg-brand py-2.5 text-center text-sm font-medium text-white">{s.result.cta}</a>
        </div>
      </div>
    </div>
  );
}
