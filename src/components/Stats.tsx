import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { STATS } from '../lib/data';

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay((value * eased).toFixed(decimals));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, decimals]);

  return (
    <span ref={ref}>
      {display}
      <span className="text-safety">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="bg-cream border-b border-rule">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`py-10 md:py-14 px-2 md:px-8 border-rule ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t lg:border-t-0' : ''} ${i > 0 ? 'lg:border-l' : ''}`}
          >
            <div className="font-serif font-black text-4xl md:text-6xl tracking-tight">
              <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
            </div>
            <p className="mt-2.5 font-mono text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-slate">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
