import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Expand } from 'lucide-react';

const shots = [
  { src: '/images/hero.jpg', label: 'Melt shop · Ladle transfer', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/gallery2.jpg', label: 'Turning centre · Cell 4', span: '' },
  { src: '/images/cnc.jpg', label: 'VMC · Fine boring', span: '' },
  { src: '/images/gallery3.jpg', label: 'Metrology lab', span: '' },
  { src: '/images/gallery1.jpg', label: 'Finished goods store', span: '' },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-safety flex items-center gap-3 mb-5">
              <span className="inline-block w-8 h-px bg-safety" /> Inside the Works
            </p>
            <h2 className="font-serif font-black text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Walk the{' '}
              <span className="italic font-medium text-safety">shop floor.</span>
            </h2>
          </div>
          <p className="max-w-sm text-slate text-sm leading-relaxed md:text-right">
            60,000 sq.ft of foundry, machining and assembly space in Mulund, Mumbai. Plant audits welcome.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-4">
          {shots.map((s, i) => (
            <motion.button
              key={s.src}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-xl border border-rule text-left ${s.span} ${i === 0 ? 'col-span-2' : ''}`}
            >
              <img
                src={s.src}
                alt={s.label}
                className="w-full h-full min-h-[160px] object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between gap-2">
                <span className="font-mono text-[10px] md:text-[11px] tracking-[0.16em] uppercase text-paper/90">{s.label}</span>
                <span className="w-8 h-8 rounded-full bg-paper/15 backdrop-blur flex items-center justify-center text-paper opacity-0 group-hover:opacity-100 transition-opacity">
                  <Expand size={13} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-navy-deep/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              className="absolute top-5 right-5 w-11 h-11 rounded-full border border-paper/25 text-paper flex items-center justify-center hover:border-safety-hot hover:text-safety-hot transition-colors"
            >
              <X size={18} />
            </button>
            <motion.figure
              initial={{ scale: 0.94, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 16 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={shots[active].src} alt={shots[active].label} className="w-full max-h-[78vh] object-contain rounded-xl" />
              <figcaption className="mt-4 text-center font-mono text-[11px] tracking-[0.2em] uppercase text-paper/70">
                {shots[active].label}
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
