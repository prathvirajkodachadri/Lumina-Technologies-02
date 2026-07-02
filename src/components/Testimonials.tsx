import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Lumina moved our bracket programme from drawing to PPAP in eleven weeks. Their DFM feedback saved us two tooling iterations — and the ppm numbers speak for themselves.',
    name: 'Rajesh Iyer',
    role: 'Head of Sourcing, Tier-1 Automotive',
    img: '/images/person1.jpg',
  },
  {
    quote:
      'The only casting partner we work with that treats a 50-micron callout as a promise, not a suggestion. Their metrology lab reports are audit-ready every single time.',
    name: 'Priya Deshmukh',
    role: 'Quality Director, EV Powertrain OEM',
    img: '/images/person2.jpg',
  },
  {
    quote:
      'Three years, zero line stoppages attributable to Lumina. Their kanban discipline and JIT dispatch keep our assembly lines running without safety stock.',
    name: 'Anand Kulkarni',
    role: 'Plant Head, Industrial Equipment',
    img: '/images/person3.jpg',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-navy text-paper blueprint-dark overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
        <div className="w-14 h-14 rounded-full bg-safety/15 border border-safety/30 flex items-center justify-center mx-auto mb-10">
          <Quote size={22} className="text-safety-hot" />
        </div>

        <div className="relative min-h-[220px] md:min-h-[190px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
            >
              <p className="font-serif italic font-medium text-2xl md:text-[2rem] leading-snug tracking-tight">
                “{t.quote}”
              </p>
              <footer className="mt-8 flex items-center justify-center gap-4">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-safety-hot/50" />
                <div className="text-left">
                  <p className="font-serif font-bold text-lg leading-none">{t.name}</p>
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-paper/50 mt-1.5">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full border border-rule-dark flex items-center justify-center text-paper/60 hover:border-safety-hot hover:text-safety-hot transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-8 bg-safety-hot' : 'w-1.5 bg-paper/25 hover:bg-paper/50'}`}
              />
            ))}
          </div>
          <button
            onClick={() => setIndex((index + 1) % testimonials.length)}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full border border-rule-dark flex items-center justify-center text-paper/60 hover:border-safety-hot hover:text-safety-hot transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
