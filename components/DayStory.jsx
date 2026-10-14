'use client';
import { useEffect, useRef, useState } from 'react';

const SCENES = [
  ['7:45 AM', 'Before the first patient', 'Intake forms, insurance checks and history are already in the chart. Today’s schedule is summarized by the agent.', ['Digital intake complete', 'Eligibility verified', 'Day summary ready']],
  ['9:00 AM', 'In the room', 'Eyes on the patient, not the screen. Ambient AI listens and drafts the note as you talk.', ['Visit transcribed live', 'Structured note drafted', 'You review and sign']],
  ['12:30 PM', 'Between visits', 'Coding assist checks each signed note and flags the one gap that needs your answer.', ['Codes suggested from note', '1 item flagged for you', 'Claim ready to submit']],
  ['5:30 PM', 'Out the door on time', 'Follow-ups, reminders and refill replies are drafted and routed. The charts are closed.', ['Reminders scheduled', 'Replies drafted for approval', 'Charts closed']],
];

export default function DayStory() {
  const [a, setA] = useState(0);
  const refs = useRef([]);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setA(+e.target.dataset.i)), { rootMargin: '-45% 0px -45% 0px' });
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  const s = SCENES[a];
  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div className="lg:sticky lg:top-28 lg:h-fit">
        <h2 className="font-display text-4xl font-semibold sm:text-5xl">A day with OneRxiv AI</h2>
        <p className="mt-4 max-w-md text-lg text-slate2">Follow one clinician from the first patient to the last chart.</p>
        <div className="mt-8 rounded-3xl bg-ink p-8 text-white" aria-live="polite">
          <p className="font-display text-6xl font-semibold text-blush-300">{s[0]}</p>
          <p className="mt-2 text-xl">{s[1]}</p>
          <ul className="mt-6 space-y-2">{s[3].map((t) => (<li key={t} className="flex gap-3 text-white/90"><span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-brand text-xs">✓</span>{t}</li>))}</ul>
          <div className="mt-6 flex gap-2">{SCENES.map((_, n) => <span key={n} className={`h-1.5 flex-1 rounded-full ${n <= a ? 'bg-brand' : 'bg-white/20'}`} />)}</div>
        </div>
      </div>
      <ol className="space-y-6 lg:space-y-0">
        {SCENES.map((c, n) => (
          <li key={c[0]} ref={(el) => (refs.current[n] = el)} data-i={n} className="lg:flex lg:min-h-[55vh] lg:items-center">
            <div className={`rounded-3xl border p-7 transition ${n === a ? 'border-brand bg-blush-50' : 'border-blush-200'}`}>
              <p className="text-sm font-medium text-brand">{c[0]}</p><h3 className="mt-1 text-2xl font-semibold">{c[1]}</h3><p className="mt-2 text-slate2">{c[2]}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
