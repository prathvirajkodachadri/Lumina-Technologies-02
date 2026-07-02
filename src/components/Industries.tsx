import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '../lib/data';

const images = ['/images/automotive.jpg', '/images/robot.jpg', '/images/gears.jpg', '/images/cnc.jpg', '/images/parts.jpg'];

export default function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section id="industries" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-safety flex items-center gap-3 mb-5">
          <span className="inline-block w-8 h-px bg-safety" /> 05 — Sectors Served
        </p>
        <h2 className="font-serif font-black text-4xl md:text-6xl leading-[1.02] tracking-tight mb-14">
          Industries we{' '}
          <span className="italic font-medium text-safety">power.</span>
        </h2>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 border-t border-rule">
            {INDUSTRIES.map((ind, i) => (
              <motion.a
                key={ind.name}
                href="#contact"
                onMouseEnter={() => setActive(i)}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group flex items-center justify-between gap-4 py-6 md:py-7 border-b border-rule transition-all duration-300 ${
                  active === i ? 'pl-4' : ''
                }`}
              >
                <div className="flex items-baseline gap-5 min-w-0">
                  <span className="font-mono text-xs text-slate/60 shrink-0">0{i + 1}</span>
                  <div className="min-w-0">
                    <h3 className={`font-serif font-bold text-2xl md:text-4xl tracking-tight transition-colors truncate ${active === i ? 'text-safety italic' : ''}`}>
                      {ind.name}
                    </h3>
                    <p className="mt-1 font-mono text-[11px] tracking-wider text-slate">{ind.detail}</p>
                  </div>
                </div>
                <span className={`w-11 h-11 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  active === i ? 'bg-safety border-safety text-paper' : 'border-rule text-slate'
                }`}>
                  <ArrowRight size={17} />
                </span>
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <div className="relative rounded-2xl overflow-hidden border border-rule aspect-[4/3]">
              {images.map((img, i) => (
                <img
                  key={img}
                  src={img}
                  alt={INDUSTRIES[i].name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    active === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/70">Currently viewing</p>
                <p className="font-serif italic text-2xl text-paper">{INDUSTRIES[active].name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
