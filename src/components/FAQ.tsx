import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'What is your typical lead time from drawing to first article?',
    a: 'For pressure die casting, 8–12 weeks including in-house die build and T0–T2 trials. Gravity die casting programmes typically run 6–10 weeks. Expedited tooling is available for critical programmes.',
  },
  {
    q: 'What alloys do you work with?',
    a: 'Aluminium ADC-12, A380, LM-6, LM-24, LM-25 and zinc ZAMAK-3/5. We advise on alloy selection during DFM review based on mechanical, thermal and cost requirements.',
  },
  {
    q: 'Do you support low-volume or prototype orders?',
    a: 'Yes. We run pilot batches from soft tooling and support bridge production while hard dies are built. Minimum viable volumes are assessed case-by-case during RFQ.',
  },
  {
    q: 'Can you supply fully machined and assembled components?',
    a: 'Absolutely — that is our core model. Castings can be delivered as-cast, fully CNC machined, surface treated, leak tested and assembled with 100% traceability, under a single purchase order.',
  },
  {
    q: 'Do you export? What Incoterms do you support?',
    a: 'We ship to North America, Europe and Southeast Asia with export-grade packaging and documentation. FOB Mumbai, CIF and DDP terms are all supported.',
  },
  {
    q: 'How do you handle NDAs and IP protection?',
    a: 'We sign customer NDAs before any drawing exchange. Dies remain customer property, stored and insured at our works, and are never used for third parties.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 bg-cream border-y border-rule">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-safety flex items-center gap-3 mb-5">
              <span className="inline-block w-8 h-px bg-safety" /> FAQ
            </p>
            <h2 className="font-serif font-black text-4xl md:text-5xl leading-[1.02] tracking-tight">
              Questions,{' '}
              <span className="italic font-medium text-safety">answered.</span>
            </h2>
            <p className="mt-5 text-slate text-sm leading-relaxed max-w-xs">
              Everything sourcing teams usually ask before sending us a drawing.
              Something else? Call or email us directly.
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="border-t border-rule">
            {faqs.map((f, i) => (
              <div key={f.q} className="border-b border-rule">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className={`font-serif font-bold text-lg md:text-xl tracking-tight transition-colors ${open === i ? 'text-safety' : 'group-hover:text-safety'}`}>
                    {f.q}
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      open === i ? 'bg-safety border-safety text-paper rotate-45' : 'border-rule text-slate group-hover:border-safety group-hover:text-safety'
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-14 text-slate text-sm md:text-[15px] leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
