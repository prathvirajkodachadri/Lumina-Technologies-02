import { motion } from 'framer-motion';
import { Phone, FileText, ArrowUpRight } from 'lucide-react';

export default function CTABand({ onRFQ }: { onRFQ: () => void }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-safety text-paper px-7 py-12 md:px-14 md:py-16"
        >
          <div className="absolute -right-10 -bottom-16 font-serif font-black italic text-[11rem] leading-none text-paper/10 select-none pointer-events-none hidden md:block">
            RFQ
          </div>
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="font-serif font-black text-3xl md:text-5xl leading-[1.05] tracking-tight">
                Have a drawing on your desk?{' '}
                <span className="italic font-medium">Let’s cast it.</span>
              </h2>
              <p className="mt-4 text-paper/80 text-sm md:text-base leading-relaxed">
                DFM-reviewed quotation within 72 hours. NDAs honoured. Pilot batches supported.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={onRFQ}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy text-paper font-mono text-xs tracking-[0.16em] uppercase px-7 py-4 hover:bg-navy-deep transition-colors"
              >
                <FileText size={15} />
                Request RFQ
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <a
                href="tel:+912225614000"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-paper/40 text-paper font-mono text-xs tracking-[0.16em] uppercase px-7 py-4 hover:bg-paper hover:text-safety transition-colors"
              >
                <Phone size={15} />
                +91 22 2561 4000
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
