import { Phone, Mail, MapPin } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-navy-deep text-paper/80 text-[11px] font-mono">
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-9 flex items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <a href="tel:+912225614000" className="flex items-center gap-1.5 hover:text-safety-hot transition-colors">
            <Phone size={11} className="text-safety-hot" />
            <span className="tracking-wider">+91 22 2561 4000</span>
          </a>
          <a href="mailto:sales@luminatech.in" className="hidden sm:flex items-center gap-1.5 hover:text-safety-hot transition-colors">
            <Mail size={11} className="text-safety-hot" />
            <span className="tracking-wider">sales@luminatech.in</span>
          </a>
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-paper/50">
          <MapPin size={11} />
          <span className="tracking-wider">Mulund West, Mumbai · India</span>
        </div>
        <span className="sm:hidden tracking-wider text-paper/50">Mon–Sat · 9–6</span>
        <span className="hidden sm:block tracking-wider text-paper/50">Mon–Sat · 09:00–18:00 IST</span>
      </div>
    </div>
  );
}
