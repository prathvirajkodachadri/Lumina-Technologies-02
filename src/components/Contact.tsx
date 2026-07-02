import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls =
    'w-full rounded-lg bg-navy-deep/60 border border-rule-dark px-4 py-3.5 text-sm text-paper placeholder:text-paper/30 focus:outline-none focus:border-safety-hot transition-colors';

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-navy text-paper blueprint-dark overflow-hidden">
      <div className="absolute -bottom-10 left-0 font-serif font-black italic text-[16vw] leading-none serif-outline-light opacity-50 select-none pointer-events-none">
        Enquire
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-safety-hot flex items-center gap-3 mb-5">
            <span className="inline-block w-8 h-px bg-safety-hot" /> 06 — Start a Project
          </p>
          <h2 className="font-serif font-black text-4xl md:text-6xl leading-[1.02] tracking-tight">
            Send us your{' '}
            <span className="italic font-medium text-safety-hot">drawing.</span>
          </h2>
          <p className="mt-6 text-paper/60 leading-relaxed max-w-md">
            Share a 2D drawing or 3D model and receive a DFM-reviewed quotation
            within 72 hours. NDAs honoured on request.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full border border-rule-dark flex items-center justify-center shrink-0">
                <MapPin size={17} className="text-safety-hot" />
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper/40 mb-1">Works & Office</p>
                <p className="text-sm text-paper/85 leading-relaxed">
                  Nahur Udyog Premises, M.M. Malviya Road,<br />Mulund West, Mumbai 400080, India
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full border border-rule-dark flex items-center justify-center shrink-0">
                <Mail size={17} className="text-safety-hot" />
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper/40 mb-1">Email</p>
                <a href="mailto:sales@luminatech.in" className="text-sm text-paper/85 hover:text-safety-hot transition-colors">sales@luminatech.in</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full border border-rule-dark flex items-center justify-center shrink-0">
                <Phone size={17} className="text-safety-hot" />
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-paper/40 mb-1">Phone</p>
                <a href="tel:+912225614000" className="text-sm text-paper/85 hover:text-safety-hot transition-colors">+91 22 2561 4000</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl border border-rule-dark bg-navy-deep/40 backdrop-blur-sm p-7 md:p-10 self-start"
        >
          {sent ? (
            <div className="py-16 text-center">
              <CheckCircle2 size={52} className="text-safety-hot mx-auto mb-5" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-3xl tracking-tight mb-2">Enquiry received</h3>
              <p className="text-paper/55 text-sm">Our engineering team will respond within 72 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.22em] uppercase text-paper/45 mb-2">Name *</label>
                  <input required type="text" placeholder="Your name" className={inputCls} />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.22em] uppercase text-paper/45 mb-2">Company *</label>
                  <input required type="text" placeholder="Company name" className={inputCls} />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.22em] uppercase text-paper/45 mb-2">Email *</label>
                  <input required type="email" placeholder="you@company.com" className={inputCls} />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.22em] uppercase text-paper/45 mb-2">Phone</label>
                  <input type="tel" placeholder="+91" className={inputCls} />
                </div>
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.22em] uppercase text-paper/45 mb-2">Requirement *</label>
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
                <label className="block font-mono text-[10px] tracking-[0.22em] uppercase text-paper/45 mb-2">Message *</label>
                <textarea required rows={4} placeholder="Tell us about your component — annual volumes, alloy, tolerances..." className={`${inputCls} resize-none`} />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-safety text-paper font-mono text-xs tracking-[0.18em] uppercase font-medium py-4 hover:bg-safety-hot transition-colors"
              >
                Submit Enquiry <Send size={15} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
