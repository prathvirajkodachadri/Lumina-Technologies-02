import { NAV_LINKS } from '../lib/data';
import { ArrowUp, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-paper border-t border-rule-dark">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 md:py-20">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full border-2 border-paper/70 flex items-center justify-center">
                <div className="w-3 h-3 bg-safety-hot rotate-45" />
              </div>
              <div className="leading-none">
                <span className="font-serif font-black text-2xl tracking-tight">Lumina</span>
                <span className="block font-mono text-[9px] text-paper/50 tracking-[0.28em] uppercase mt-1">Technologies</span>
              </div>
            </div>
            <p className="text-paper/50 text-sm leading-relaxed">
              Precision die casting, CNC machining and sub-assemblies for
              automotive and industrial OEMs. Est. 1993, Mumbai.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <a href="tel:+912225614000" className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-wider text-paper/60 hover:text-safety-hot transition-colors">
                <Phone size={13} className="text-safety-hot" /> +91 22 2561 4000
              </a>
              <a href="mailto:sales@luminatech.in" className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-wider text-paper/60 hover:text-safety-hot transition-colors">
                <Mail size={13} className="text-safety-hot" /> sales@luminatech.in
              </a>
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-14 gap-y-3">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="font-mono text-[11px] tracking-[0.18em] uppercase text-paper/50 hover:text-safety-hot transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-rule-dark px-5 py-3 font-mono text-[11px] tracking-[0.18em] uppercase text-paper/60 hover:border-safety-hot hover:text-safety-hot transition-colors self-start"
          >
            Back to Top <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="mt-12 pt-6 border-t border-rule-dark flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-paper/35">
            © {new Date().getFullYear()} Lumina Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-paper/35">
            ISO 9001:2015 · IATF 16949:2016
          </p>
        </div>
      </div>
    </footer>
  );
}
