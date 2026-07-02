import { motion } from 'framer-motion';
import { BadgeCheck, Microscope, FileCheck2, Gauge } from 'lucide-react';
import { PROCESS } from '../lib/data';

const certs = [
  { icon: BadgeCheck, title: 'IATF 16949:2016', desc: 'Automotive quality management certified' },
  { icon: FileCheck2, title: 'ISO 9001:2015', desc: 'Quality management systems certified' },
  { icon: Microscope, title: 'Spectro & X-Ray', desc: 'In-house metallurgy & porosity analysis' },
  { icon: Gauge, title: 'CMM Verified', desc: 'Coordinate measurement on every batch' },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 bg-cream border-y border-rule">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl mb-14">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-safety flex items-center gap-3 mb-5">
            <span className="inline-block w-8 h-px bg-safety" /> 04 — Quality & Process
          </p>
          <h2 className="font-serif font-black text-4xl md:text-6xl leading-[1.02] tracking-tight">
            Zero-defect is{' '}
            <span className="italic font-medium text-safety">the baseline.</span>
          </h2>
        </div>

        {/* Certs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-20">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl bg-card border border-rule p-6 hover:border-safety/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-full bg-navy text-paper flex items-center justify-center mb-5">
                <c.icon size={19} strokeWidth={1.75} />
              </div>
              <h3 className="font-serif font-bold text-xl tracking-tight mb-1">{c.title}</h3>
              <p className="text-slate text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-10 md:gap-6">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-full border-2 border-navy flex items-center justify-center font-mono text-xs font-semibold">
                  {p.step}
                </span>
                <span className="flex-1 h-px bg-rule relative overflow-hidden">
                  <span className="absolute inset-y-0 left-0 w-1/3 bg-safety" />
                </span>
              </div>
              <h3 className="font-serif font-bold text-2xl tracking-tight mb-2">{p.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
