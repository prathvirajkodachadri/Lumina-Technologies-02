import { motion } from 'framer-motion';

const clients = [
  'TATA Motors', 'Mahindra', 'Bajaj Auto', 'Bosch', 'Cummins', 'Siemens', 'Kirloskar', 'Havells',
];

export default function Clients() {
  return (
    <section className="py-14 md:py-20 border-b border-rule">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-mono text-[10px] tracking-[0.3em] uppercase text-slate mb-10"
        >
          Trusted by OEMs & Tier-1 suppliers across India
        </motion.p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8">
          {clients.map((c, i) => (
            <motion.div
              key={c}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-center justify-center"
            >
              <span className="font-serif font-bold text-lg md:text-xl text-navy/35 hover:text-navy transition-colors cursor-default select-none tracking-tight">
                {c}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
