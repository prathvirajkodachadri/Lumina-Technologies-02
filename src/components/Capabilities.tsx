import { motion } from 'framer-motion';
import { CAPABILITIES } from '../lib/data';

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-20 md:py-32 bg-navy text-paper blueprint-dark overflow-hidden">
      <div className="absolute -top-6 right-0 font-serif font-black text-[18vw] leading-none serif-outline-light opacity-60 select-none pointer-events-none italic">
        Forge
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-safety-hot flex items-center gap-3">
                <span className="inline-block w-8 h-px bg-safety-hot" /> 02 — Capabilities
              </p>
              <h2 className="mt-5 font-serif font-black text-4xl md:text-5xl leading-[1.02] tracking-tight">
                End-to-end{' '}
                <span className="italic font-medium text-safety-hot">manufacturing capabilities.</span>
              </h2>
              <p className="mt-5 text-paper/60 text-sm leading-relaxed max-w-xs">
                From CAD drawing to line-side delivery — with a single point of
                accountability at every stage.
              </p>
            </div>
          </div>

          <div className="lg:col-span-9">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {CAPABILITIES.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                  className="group relative rounded-xl border border-rule-dark bg-navy-deep/60 p-7 hover:border-safety-hot/60 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs text-paper/40">{c.num}</span>
                    <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-safety-hot border border-safety-hot/30 rounded-full px-3 py-1">
                      {c.spec}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl tracking-tight mb-2.5 group-hover:text-safety-hot transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-paper/55 text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
