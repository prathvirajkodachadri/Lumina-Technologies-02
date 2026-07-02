import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, FileText, Layers, Weight, Factory, Building2, Crosshair } from 'lucide-react';
import { PRODUCTS, type Product } from '../lib/data';

const FILTERS = ['All', 'Aluminium HPDC', 'Aluminium LPDC/GDC', 'Ductile / SG Iron', 'Tooling & Fixture'];

function SpecRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 w-7 h-7 rounded-full bg-safety/10 flex items-center justify-center shrink-0">
        <Icon size={13} className="text-safety" />
      </span>
      <div className="min-w-0">
        <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-slate">{label}</p>
        <p className="text-sm text-navy leading-snug mt-0.5">{value}</p>
      </div>
    </div>
  );
}

function SpecsModal({ product, onClose, onRFQ }: { product: Product; onClose: () => void; onRFQ: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[75] flex items-end sm:items-center justify-center p-0 sm:p-6"
    >
      <div className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 60, opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto bg-card rounded-t-2xl sm:rounded-2xl border border-rule shadow-[0_32px_80px_-20px_rgba(13,22,31,0.5)]"
      >
        <div className="relative">
          <img src={product.img} alt={product.title} className="w-full aspect-[16/8] object-cover rounded-t-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent rounded-t-2xl" />
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-paper/15 backdrop-blur border border-paper/25 text-paper flex items-center justify-center hover:bg-safety hover:border-safety transition-colors"
          >
            <X size={17} />
          </button>
          <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] tracking-[0.16em] uppercase bg-safety text-paper rounded-full px-3 py-1">{product.category}</span>
            <span className="font-mono text-[10px] tracking-[0.16em] uppercase bg-paper/15 backdrop-blur border border-paper/30 text-paper rounded-full px-3 py-1 inline-flex items-center gap-1.5">
              <Crosshair size={11} /> {product.tolerance}
            </span>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <h3 className="font-serif font-black text-2xl md:text-3xl tracking-tight leading-tight">{product.title}</h3>
          <p className="mt-3 text-slate text-sm md:text-[15px] leading-relaxed">{product.desc}</p>

          <div className="mt-7 grid sm:grid-cols-2 gap-5">
            <SpecRow icon={Layers} label="Material" value={product.material} />
            <SpecRow icon={Weight} label="Weight Range" value={product.weightRange} />
            <div className="sm:col-span-2">
              <SpecRow icon={Factory} label="Machinery" value={product.machinery} />
            </div>
            <div className="sm:col-span-2">
              <SpecRow icon={Building2} label="Supplied To" value={product.clients.join(' · ')} />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => { onClose(); onRFQ(); }}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-safety text-paper font-mono text-xs tracking-[0.16em] uppercase font-medium py-4 hover:bg-safety-hot transition-colors"
            >
              <FileText size={15} /> Request RFQ
            </button>
            <button
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-rule text-navy font-mono text-xs tracking-[0.16em] uppercase py-4 hover:border-safety hover:text-safety transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Products({ onRFQ }: { onRFQ: () => void }) {
  const [filter, setFilter] = useState('All');
  const [specs, setSpecs] = useState<Product | null>(null);

  const filtered = filter === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="products" className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-safety flex items-center gap-3 mb-5">
              <span className="inline-block w-8 h-px bg-safety" /> 03 — Product Lines
            </p>
            <h2 className="font-serif font-black text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Built to spec,{' '}
              <span className="italic font-medium text-safety">every time.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] uppercase text-slate hover:text-safety transition-colors self-start md:self-end"
          >
            Send your drawing
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-[10px] md:text-[11px] tracking-[0.14em] uppercase rounded-full px-4 py-2 border transition-colors ${
                filter === f
                  ? 'bg-navy border-navy text-paper'
                  : 'border-rule text-slate hover:border-safety hover:text-safety'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45 }}
                className="group flex flex-col rounded-2xl overflow-hidden border border-rule bg-card hover:shadow-[0_24px_50px_-24px_rgba(20,33,46,0.3)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-1.5">
                    <span className="font-mono text-[9px] tracking-[0.14em] uppercase bg-navy/85 backdrop-blur text-paper rounded-full px-2.5 py-1">{p.category}</span>
                    <span className="font-mono text-[9px] tracking-[0.14em] uppercase bg-safety text-paper rounded-full px-2.5 py-1 inline-flex items-center gap-1">
                      <Crosshair size={9} /> {p.tolerance}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <h3 className="font-serif font-bold text-xl md:text-[22px] tracking-tight leading-snug">{p.title}</h3>
                  <p className="mt-2 text-slate text-[13px] leading-relaxed">{p.desc}</p>

                  <dl className="mt-4 space-y-2 text-[12px] border-t border-rule pt-4">
                    <div className="flex gap-2">
                      <dt className="font-mono text-[9px] tracking-[0.16em] uppercase text-slate/70 w-20 shrink-0 pt-0.5">Material</dt>
                      <dd className="text-navy/90 leading-snug">{p.material}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-mono text-[9px] tracking-[0.16em] uppercase text-slate/70 w-20 shrink-0 pt-0.5">Weight</dt>
                      <dd className="text-navy/90 leading-snug">{p.weightRange}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-mono text-[9px] tracking-[0.16em] uppercase text-slate/70 w-20 shrink-0 pt-0.5">Machinery</dt>
                      <dd className="text-navy/90 leading-snug">{p.machinery}</dd>
                    </div>
                  </dl>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.clients.map((c) => (
                      <span key={c} className="font-mono text-[9px] tracking-wider uppercase text-slate border border-rule rounded-full px-2.5 py-1">
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-rule flex gap-2.5 mt-auto">
                    <button
                      onClick={() => setSpecs(p)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-navy/25 text-navy font-mono text-[10px] tracking-[0.14em] uppercase py-3 hover:border-safety hover:text-safety transition-colors"
                    >
                      View Specs <ArrowUpRight size={12} />
                    </button>
                    <button
                      onClick={onRFQ}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-navy text-paper font-mono text-[10px] tracking-[0.14em] uppercase py-3 hover:bg-safety transition-colors"
                    >
                      <FileText size={12} /> RFQ
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {specs && <SpecsModal product={specs} onClose={() => setSpecs(null)} onRFQ={onRFQ} />}
      </AnimatePresence>
    </section>
  );
}
