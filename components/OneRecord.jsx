'use client';
import { useEffect, useRef, useState } from 'react';

// [name, detail, color, startX (vw), startY (vh), rotation]
const SRC = [
  ['Clinic', 'Visit notes · allergies', '#C8102E', -18, -22, -8],
  ['Lab', 'Results · orders', '#E0587A', 18, -18, 7],
  ['Billing', 'Claims · balances', '#1B2230', -16, 24, 6],
  ['Insurer', 'Eligibility · approvals', '#7A8294', 18, 26, -7],
];
const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

export default function OneRecord() {
  const wrap = useRef(null), stage = useRef(null);
  const [still, setStill] = useState(false);

  useEffect(() => {
    const set = (e) => { const s = stage.current; if (!s) return; s.style.setProperty('--e', e); s.style.setProperty('--k', 1 - e); };
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setStill(true); set(1); return; }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = wrap.current.getBoundingClientRect();
      const p = Math.min(Math.max(-r.top / (r.height - innerHeight), 0), 1);
      set(ease(Math.min(Math.max((p - 0.08) / 0.62, 0), 1)));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section ref={wrap} aria-label="One record animation" className={still ? 'py-20' : 'h-[240vh]'}>
      <div ref={stage} style={{ '--e': 0, '--k': 1 }} className={`${still ? 'relative h-[34rem]' : 'sticky top-0 h-screen'} flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-blush-50 to-white`}>
        <div className="absolute inset-x-0 top-[14vh] px-5 text-center">
          <h2 className="relative font-display text-3xl font-semibold sm:text-5xl">
            <span style={{ opacity: 'calc(1 - var(--e) * 1.6)' }} className="block">Four systems. Four versions of one patient.</span>
            <span style={{ opacity: 'calc(var(--e) * 1.6 - 0.6)' }} className="absolute inset-0 block text-brand">One patient. One record.</span>
          </h2>
          <p className="mt-3 text-slate2 sm:text-lg" style={{ opacity: 'calc(var(--e) * 1.6 - 0.6)' }}>Scroll to see what changes when everything connects.</p>
        </div>

        <div style={{ opacity: 'var(--e)', transform: 'scale(calc(0.94 + var(--e) * 0.06))' }} className="absolute top-1/2 mt-6 h-[330px] w-[min(86vw,380px)] -translate-y-1/2 rounded-3xl border border-brand/30 bg-white shadow-2xl shadow-brand/15">
          <div className="flex items-center justify-between px-5 pt-4 text-sm"><span className="font-medium">Patient record</span><span className="text-brand">● Synced</span></div>
        </div>

        {SRC.map(([n, d, c, x, y, r], i) => (
          <div key={n} style={{ transform: `translate(calc(var(--k) * ${x}vw), calc(var(--k) * ${y}vh + ${(i - 1.5) * 60 + 44}px)) rotate(calc(var(--k) * ${r}deg))`, borderColor: c }}
            className="absolute flex h-12 w-[min(78vw,330px)] items-center justify-between rounded-xl border-l-4 bg-white px-4 text-sm shadow-lg ring-1 ring-blush-200">
            <span className="font-medium">{n}</span><span className="text-slate2">{d}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

