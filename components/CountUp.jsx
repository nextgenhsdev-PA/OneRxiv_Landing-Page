'use client';
import { useEffect, useRef, useState } from 'react';

// Animates only when verified={true}. Otherwise shows the final number with no animation.
export default function CountUp({ to, decimals = 0, suffix = '', verified = false }) {
  const ref = useRef(null);
  const [n, setN] = useState(verified ? 0 : to);
  useEffect(() => {
    if (!verified || matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(to); return; }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t) => { const p = Math.min((t - t0) / 1400, 1); setN(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, verified]);
  return <span ref={ref}>{n.toFixed(decimals)}{suffix}</span>;
}

