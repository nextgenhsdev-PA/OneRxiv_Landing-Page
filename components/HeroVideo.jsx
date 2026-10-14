'use client';
import { useRef, useState } from 'react';

// Drop a compressed (<3 MB) loop at /public/hero.mp4 and a poster at /public/hero-poster.jpg
export default function HeroVideo() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(true);
  const toggle = () => {
    const v = ref.current; if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-blush-200 via-blush-100 to-white shadow-[0_30px_80px_-30px_rgba(200,16,46,.35)] sm:aspect-[5/4] lg:aspect-[4/5]">
      <div className="blob absolute -left-10 top-10 h-64 w-64 rounded-full bg-blush-300/60 blur-3xl" />
      <div className="blob absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand/20 blur-3xl [animation-delay:-6s]" />
      <video ref={ref} className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline poster="/hero-poster.jpg" aria-hidden="true">
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl bg-white/90 px-4 py-3 backdrop-blur">
        <p className="text-sm font-medium">Ambient AI charting: notes written while you talk.</p>
        <button onClick={toggle} aria-label={playing ? 'Pause background video' : 'Play background video'} className="ml-3 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-white">
          {playing ? '❚❚' : '▶'}
        </button>
      </div>
    </div>
  );
}
