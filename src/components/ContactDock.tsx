import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, FileText, Headset, X } from 'lucide-react';

export default function ContactDock({ onRFQ }: { onRFQ: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    {
      icon: Phone,
      label: 'Call Us',
      sub: '+91 22 2561 4000',
      href: 'tel:+912225614000',
      cls: 'bg-navy text-paper',
    },
    {
      icon: Mail,
      label: 'Email Us',
      sub: 'sales@luminatech.in',
      href: 'mailto:sales@luminatech.in?subject=Enquiry%20%E2%80%94%20Lumina%20Technologies',
      cls: 'bg-navy text-paper',
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-2.5 items-end"
              >
                <button
                  onClick={() => { setExpanded(false); onRFQ(); }}
                  className="group flex items-center gap-3 rounded-full bg-safety text-paper pl-5 pr-2 py-2 shadow-[0_12px_32px_-8px_rgba(232,73,15,0.55)] hover:bg-safety-hot transition-colors"
                >
                  <span className="text-left">
                    <span className="block font-mono text-[11px] tracking-[0.14em] uppercase font-semibold leading-none">Request Quote</span>
                    <span className="block font-mono text-[9px] tracking-wider opacity-80 mt-1">RFQ · 72h response</span>
                  </span>
                  <span className="w-10 h-10 rounded-full bg-paper/15 flex items-center justify-center">
                    <FileText size={17} />
                  </span>
                </button>

                {items.map((it) => (
                  <a
                    key={it.label}
                    href={it.href}
                    className={`group flex items-center gap-3 rounded-full ${it.cls} pl-5 pr-2 py-2 shadow-[0_12px_32px_-10px_rgba(13,22,31,0.55)] hover:bg-safety transition-colors`}
                  >
                    <span className="text-left">
                      <span className="block font-mono text-[11px] tracking-[0.14em] uppercase font-semibold leading-none">{it.label}</span>
                      <span className="block font-mono text-[9px] tracking-wider opacity-70 mt-1">{it.sub}</span>
                    </span>
                    <span className="w-10 h-10 rounded-full bg-paper/15 flex items-center justify-center">
                      <it.icon size={17} />
                    </span>
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setExpanded(!expanded)}
            aria-label="Contact options"
            className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_16px_40px_-10px_rgba(232,73,15,0.6)] transition-colors ${
              expanded ? 'bg-navy text-paper' : 'bg-safety text-paper hover:bg-safety-hot'
            }`}
          >
            {!expanded && <span className="absolute inset-0 rounded-full bg-safety animate-ping opacity-25" />}
            {expanded ? <X size={22} /> : <Headset size={22} />}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
