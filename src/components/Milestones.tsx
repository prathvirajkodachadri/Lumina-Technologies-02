import { motion } from 'framer-motion';

const milestones = [
  { year: '1993', title: 'Founded in Mumbai', desc: 'Started as a specialist aluminium foundry serving local automotive workshops.' },
  { year: '2001', title: 'First PDC Machine', desc: 'Commissioned our first 250T high-pressure die casting cell and in-house tool room.' },
  { year: '2009', title: 'ISO 9001 Certified', desc: 'Formalised quality systems; began supplying tier-1 automotive suppliers.' },
  { year: '2015', title: 'CNC Machining Wing', desc: 'Added multi-axis VMC and turning centres for fully finished components.' },
  { year: '2019', title: 'IATF 16949 Certified', desc: 'Achieved automotive-grade certification and started direct OEM programmes.' },
  { year: '2024', title: 'EV Component Line', desc: 'Launched dedicated cells for motor housings and battery enclosure castings.' },
];

export default function Milestones() {
  return (
    <section id="journey" className="py-20 md:py-32 bg-cream border-y border-rule overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-safety flex items-center gap-3 mb-5">
          <span className="inline-block w-8 h-px bg-safety" /> Our Journey
        </p>
        <h2 className="font-serif font-black text-4xl md:text-6xl leading-[1.02] tracking-tight mb-16">
          Three decades,{' '}
          <span className="italic font-medium text-safety">forged step by step.</span>
        </h2>

        <div className="relative">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-rule md:-translate-x-px" />
          <div className="space-y-10 md:space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: 0.05 * (i % 2) }}
                className={`relative flex md:w-1/2 md:py-6 ${i % 2 === 0 ? 'md:pr-14 md:text-right md:ml-0' : 'md:pl-14 md:ml-auto'} pl-14 md:even:pl-14 md:odd:pl-0`}
              >
                <span
                  className={`absolute top-1 md:top-8 w-10 h-10 rounded-full bg-paper border-2 border-safety flex items-center justify-center font-mono text-[10px] font-semibold text-safety left-0 ${
                    i % 2 === 0 ? 'md:left-auto md:-right-5' : 'md:-left-5'
                  }`}
                >
                  {m.year.slice(2)}
                </span>
                <div>
                  <span className="font-mono text-xs tracking-[0.2em] text-safety">{m.year}</span>
                  <h3 className="font-serif font-bold text-2xl tracking-tight mt-1 mb-1.5">{m.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
