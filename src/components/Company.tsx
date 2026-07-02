import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const points = [
  'In-house tool room — die design to first article in weeks, not months',
  'IATF 16949:2016 quality systems with full PPAP support',
  'Alloy expertise across ADC-12, LM-6, LM-25, ZAMAK & more',
  'Export-ready packaging, documentation & logistics',
];

export default function Company() {
  return (
    <section id="company" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* sticky label */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-safety flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-safety" /> 01 — Company
              </p>
            </div>
          </div>

          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="font-serif font-black text-4xl md:text-6xl leading-[1.02] tracking-tight max-w-3xl"
            >
              Three decades of{' '}
              <span className="italic font-medium text-safety">molten discipline</span>{' '}
              behind every component we ship.
            </motion.h2>

            <div className="mt-12 grid md:grid-cols-2 gap-10 items-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <p className="text-slate leading-relaxed">
                  Founded in 1993 in Mumbai, Lumina Technologies has grown from a specialist foundry
                  into a full-stack casting partner — pressure and gravity die casting,
                  multi-axis CNC machining, tooling and validated sub-assemblies under one roof.
                </p>
                <p className="mt-4 text-slate leading-relaxed">
                  We serve automotive OEMs, tier-1 suppliers and industrial equipment
                  makers who cannot compromise on dimensional integrity, metallurgy or
                  delivery windows.
                </p>
                <ul className="mt-8 space-y-3.5">
                  {points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm md:text-[15px]">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-navy text-paper flex items-center justify-center shrink-0">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden border border-rule">
                  <img src="/images/factory.jpg" alt="Lumina Technologies manufacturing floor" className="w-full aspect-[4/3] object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-4 md:-left-8 rounded-xl bg-safety text-paper px-6 py-5 shadow-[0_16px_40px_-12px_rgba(232,73,15,0.5)]">
                  <span className="font-serif font-black text-4xl md:text-5xl leading-none">30+</span>
                  <span className="block font-mono text-[10px] tracking-[0.2em] uppercase mt-1.5">Years in metal</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
