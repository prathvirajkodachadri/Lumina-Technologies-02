import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, FileText, Upload } from 'lucide-react';

export default function RFQModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      onClose();
      setSent(false);
      setFileName('');
    }, 2600);
  };

  const inputCls =
    'w-full rounded-lg bg-paper border border-rule px-4 py-3 text-sm text-navy placeholder:text-slate/50 focus:outline-none focus:border-safety transition-colors';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center p-0 sm:p-6"
        >
          <div className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto bg-card rounded-t-2xl sm:rounded-2xl border border-rule shadow-[0_32px_80px_-20px_rgba(13,22,31,0.5)]"
          >
            <div className="sticky top-0 bg-card border-b border-rule px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-safety/10 flex items-center justify-center">
                  <FileText size={16} className="text-safety" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg leading-none">Request for Quotation</h3>
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate mt-1">72-hour DFM response</p>
                </div>
              </div>
              <button onClick={onClose} aria-label="Close" className="w-9 h-9 rounded-full border border-rule flex items-center justify-center text-slate hover:border-safety hover:text-safety transition-colors">
                <X size={16} />
              </button>
            </div>

            {sent ? (
              <div className="py-16 px-6 text-center">
                <CheckCircle2 size={52} className="text-safety mx-auto mb-5" strokeWidth={1.5} />
                <h3 className="font-serif font-bold text-2xl tracking-tight mb-2">RFQ Received</h3>
                <p className="text-slate text-sm">Our engineering team will respond within 72 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-slate mb-1.5">Name *</label>
                    <input required type="text" placeholder="Your name" className={inputCls} />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-slate mb-1.5">Company *</label>
                    <input required type="text" placeholder="Company name" className={inputCls} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-slate mb-1.5">Email *</label>
                    <input required type="email" placeholder="you@company.com" className={inputCls} />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-slate mb-1.5">Phone *</label>
                    <input required type="tel" placeholder="+91" className={inputCls} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-slate mb-1.5">Capability *</label>
                    <select required className={inputCls} defaultValue="">
                      <option value="" disabled>Select capability</option>
                      <option>Pressure Die Casting</option>
                      <option>Gravity Die Casting</option>
                      <option>CNC Machining</option>
                      <option>Tooling / Jigs & Fixtures</option>
                      <option>Sub-Assembly</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-slate mb-1.5">Annual Volume</label>
                    <select className={inputCls} defaultValue="">
                      <option value="">Select volume</option>
                      <option>&lt; 10,000 pcs</option>
                      <option>10,000 – 50,000 pcs</option>
                      <option>50,000 – 250,000 pcs</option>
                      <option>250,000+ pcs</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-slate mb-1.5">Drawing / 3D Model</label>
                  <label className="flex items-center gap-3 rounded-lg border border-dashed border-rule bg-paper px-4 py-3.5 cursor-pointer hover:border-safety transition-colors">
                    <Upload size={16} className="text-safety shrink-0" />
                    <span className="text-sm text-slate truncate">{fileName || 'Attach PDF, STEP, IGES or DWG (optional)'}</span>
                    <input
                      type="file"
                      accept=".pdf,.step,.stp,.iges,.igs,.dwg,.dxf,.zip"
                      className="hidden"
                      onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
                    />
                  </label>
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.2em] uppercase text-slate mb-1.5">Requirement details *</label>
                  <textarea required rows={3} placeholder="Alloy, tolerances, target price, timeline..." className={`${inputCls} resize-none`} />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-safety text-paper font-mono text-xs tracking-[0.18em] uppercase font-medium py-4 hover:bg-safety-hot transition-colors"
                >
                  Submit RFQ <Send size={15} />
                </button>
                <p className="text-center font-mono text-[10px] tracking-wider text-slate/70">NDAs honoured on request · Response within 72 hours</p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
