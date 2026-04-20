import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/kayoze-logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10 grid lg:grid-cols-4 gap-14">
        <div>
          <Link to="/" className="inline-flex items-center" aria-label="Kayoze home">
            <img src={logo} alt="Kayoze" className="h-10 w-auto object-contain" />
          </Link>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Bespoke menswear and custom tailoring crafted in the heart of Kathmandu, delivered worldwide.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 grid place-items-center border border-border text-foreground/70 hover:text-[color:var(--color-gold)] hover:border-[color:var(--color-gold)] transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[0.7rem] uppercase tracking-[0.28em] gold-text mb-5">House</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">The Atelier</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/collections" className="hover:text-foreground">Collections</Link></li>
            <li><Link to="/book" className="hover:text-foreground">Book Consultation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[0.7rem] uppercase tracking-[0.28em] gold-text mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin size={14} className="mt-1 shrink-0 gold-text" /> Durbar Marg, Kathmandu, Nepal</li>
            <li className="flex gap-3"><Phone size={14} className="mt-1 shrink-0 gold-text" /> +977 970 269 1187</li>
            <li className="flex gap-3"><Mail size={14} className="mt-1 shrink-0 gold-text" /> atelier@kayoze.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[0.7rem] uppercase tracking-[0.28em] gold-text mb-5">Atelier Hours</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Mon — Sat · 10:00 — 19:00</li>
            <li>Sunday · By appointment</li>
            <li className="pt-3 text-foreground/80">Worldwide shipping available</li>
          </ul>
        </div>
      </div>

      <div className="gold-divider" />
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-7 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground tracking-wider">
        <p>© {new Date().getFullYear()} Kayoze · Bespoke Menswear · All rights reserved.</p>
        <p className="uppercase tracking-[0.28em]">Crafted in Kathmandu</p>
      </div>
    </footer>
  );
}
