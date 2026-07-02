import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Phone, Mail, FileText } from 'lucide-react';
import { NAV_LINKS } from '../lib/data';

export default function Navbar({ onRFQ }: { onRFQ: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-paper/90 backdrop-blur-md border-b border-rule shadow-[0_1px_0_rgba(20,33,46,0.04)]'
            : 'bg-paper border-b border-rule/60'
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full border-2 border-navy flex items-center justify-center group-hover:border-safety transition-colors">
              <div className="w-3 h-3 bg-safety rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
            </div>
            <div className="leading-none">
              <span className="font-serif font-black text-[22px] md:text-[24px] tracking-tight">Lumina</span>
              <span className="block font-mono text-[8.5px] text-slate tracking-[0.28em] uppercase mt-0.5">Technologies</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative font-mono text-[11px] tracking-[0.18em] uppercase text-slate hover:text-navy transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-safety after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pl-2 border-l border-rule">
              <a
                href="tel:+912225614000"
                aria-label="Call us"
                title="Call +91 22 2561 4000"
                className="w-10 h-10 rounded-full border border-rule flex items-center justify-center text-navy hover:border-safety hover:text-safety transition-colors"
              >
                <Phone size={15} />
              </a>
              <a
                href="mailto:sales@luminatech.in"
                aria-label="Email us"
                title="sales@luminatech.in"
                className="w-10 h-10 rounded-full border border-rule flex items-center justify-center text-navy hover:border-safety hover:text-safety transition-colors"
              >
                <Mail size={15} />
              </a>
            </div>
            <button
              onClick={onRFQ}
              className="group inline-flex items-center gap-2 rounded-full bg-navy text-paper font-mono text-[11px] tracking-[0.14em] uppercase px-6 py-3 hover:bg-safety transition-colors"
            >
              Request RFQ
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </nav>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-navy" aria-label="Toggle menu">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-paper lg:hidden flex flex-col justify-center px-8 blueprint"
          >
            {NAV_LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i }}
                className="flex items-baseline gap-4 py-4 border-b border-rule group"
              >
                <span className="font-mono text-xs text-safety">0{i + 1}</span>
                <span className="font-serif font-semibold text-4xl group-hover:italic group-hover:text-safety transition-colors">{l.label}</span>
              </motion.a>
            ))}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-10 grid grid-cols-3 gap-3"
            >
              <a
                href="tel:+912225614000"
                onClick={() => setOpen(false)}
                className="flex flex-col items-center gap-2 rounded-xl border border-rule bg-card py-4 text-navy hover:border-safety transition-colors"
              >
                <Phone size={18} className="text-safety" />
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase">Call</span>
              </a>
              <a
                href="mailto:sales@luminatech.in"
                onClick={() => setOpen(false)}
                className="flex flex-col items-center gap-2 rounded-xl border border-rule bg-card py-4 text-navy hover:border-safety transition-colors"
              >
                <Mail size={18} className="text-safety" />
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase">Email</span>
              </a>
              <button
                onClick={() => { setOpen(false); onRFQ(); }}
                className="flex flex-col items-center gap-2 rounded-xl bg-safety py-4 text-paper"
              >
                <FileText size={18} />
                <span className="font-mono text-[10px] tracking-[0.15em] uppercase">RFQ</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
