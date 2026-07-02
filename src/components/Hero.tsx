import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero({ onRFQ }: { onRFQ: () => void }) {
  return (
    <section id="top" className="relative min-h-[92vh] blueprint flex flex-col">
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 flex-1 flex flex-col justify-center pt-14 md:pt-16 pb-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: type */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-2.5 rounded-full border border-rule bg-card px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-safety animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-slate">
                ISO 9001:2015 · IATF 16949:2016
              </span>
            </motion.div>

            <h1 className="font-serif font-black leading-[0.95] tracking-tight text-[13.5vw] sm:text-7xl lg:text-[6.2rem]">
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.1 }}
                className="block"
              >
                Metal, made
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.25 }}
                className="block italic font-medium text-safety"
              >
                to measure.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.45 }}
              className="mt-7 max-w-lg text-slate text-base md:text-lg leading-relaxed"
            >
              Lumina Technologies engineers pressure & gravity die-cast components, precision CNC
              machining and validated sub-assemblies for automotive and industrial
              OEMs — from Mumbai to the world, since 1993.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.6 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#capabilities"
                className="group inline-flex items-center gap-2 rounded-full bg-navy text-paper font-mono text-xs tracking-[0.15em] uppercase px-7 py-4 hover:bg-safety transition-colors"
              >
                Explore Capabilities
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <button
                onClick={onRFQ}
                className="inline-flex items-center gap-2 rounded-full border border-navy/25 text-navy font-mono text-xs tracking-[0.15em] uppercase px-7 py-4 hover:border-safety hover:text-safety transition-colors"
              >
                <FileText size={15} className="text-safety" />
                Request RFQ
              </button>
            </motion.div>
          </div>

          {/* Right: image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.35 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-rule shadow-[0_24px_60px_-24px_rgba(20,33,46,0.35)]">
              <img src="/images/hero2.jpg" alt="Molten metal pour at Lumina Technologies foundry" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-paper/70">Foundry · Mumbai</p>
                  <p className="font-serif italic text-xl text-paper">Pour no. 15,204,318</p>
                </div>
              </div>
            </div>

            {/* rotating badge */}
            <div className="absolute -top-8 -left-8 hidden md:block">
              <div className="relative w-28 h-28">
                <svg viewBox="0 0 100 100" className="w-full h-full spin-slow">
                  <defs>
                    <path id="circ" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                  </defs>
                  <text className="fill-navy" style={{ fontSize: '10.5px', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.18em' }}>
                    <textPath href="#circ">EST. 1993 · MUMBAI · LUMINA TECH ·</textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-safety rotate-45" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="border-t border-rule"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-4 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-slate">Drawing → First article → Serial production</span>
          <a href="#stats" className="flex items-center gap-2 font-mono text-[10px] tracking-[0.28em] uppercase text-slate hover:text-safety transition-colors">
            Scroll <ArrowDown size={12} className="animate-bounce" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
