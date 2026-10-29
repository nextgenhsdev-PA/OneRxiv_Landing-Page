'use client';
import { useEffect, useRef, useState } from 'react';

// [name, detail, color, side (-1 left / 1 right), startY (vh), rotation]
const SRC = [
  ['Clinic', 'Visit notes · allergies', '#C8102E', -1, -13, -7],
  ['Lab', 'Results · orders', '#E0587A', 1, -10, 6],
  ['Billing', 'Claims · balances', '#1B2230', -1, 15, 5],
  ['Insurer', 'Eligibility · approvals', '#7A8294', 1, 13, -6],
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
      <div ref={stage} style={{ '--e': 0, '--k': 1 }} className={`${still ? 'relative min-h-[34rem]' : 'sticky top-0 h-screen'} flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white via-blush-50 to-white px-5`}>
        {/* heading */}
        <div className="mb-10 max-w-3xl text-center">
          <h2 className="relative font-display text-3xl font-semibold sm:text-5xl">
            <span style={{ opacity: 'calc(1 - var(--e) * 1.6)' }} className="block">Four systems. Four versions of one patient.</span>
            <span style={{ opacity: 'calc(var(--e) * 1.6 - 0.6)' }} className="absolute inset-0 block text-brand">One patient. One record.</span>
          </h2>
          <p className="mt-3 text-slate2 sm:text-lg" style={{ opacity: 'calc(var(--e) * 1.6 - 0.6)' }}>Scroll to see what changes when everything connects.</p>
        </div>

        {/* one fixed-size box: the record and the four cards all live inside it, so they always line up */}
        <div className="relative h-[330px] w-[min(86vw,380px)]">
          <div style={{ opacity: 'var(--e)', transform: 'scale(calc(0.94 + var(--e) * 0.06))' }} className="absolute inset-0 rounded-3xl border border-brand/30 bg-white shadow-2xl shadow-brand/15">
            <div className="flex items-center justify-between px-5 pt-4 text-sm"><span className="font-medium">Patient record</span><span className="text-brand">● Synced</span></div>
            <p className="absolute inset-x-5 bottom-4 text-center text-xs text-slate2">4 sources · 1 record</p>
          </div>

          {SRC.map(([n, d, c, side, y, r], i) => (
            <div key={n} style={{ borderColor: c, transform: `translate(calc(var(--k) * ${side} * min(18vw, 150px)), calc(var(--k) * ${y}vh + ${60 + i * 62}px)) rotate(calc(var(--k) * ${r}deg))` }}
              className="absolute inset-x-4 top-0 z-10 flex h-12 items-center justify-between rounded-xl border-l-4 bg-white px-4 text-sm shadow-lg ring-1 ring-blush-200">
              <span className="font-medium">{n}</span><span className="text-slate2">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}