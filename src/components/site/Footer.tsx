import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/kayoze-logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border mt-32 bg-[#630305]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-10 grid lg:grid-cols-4 gap-14">
        <div className="animate-fade-up">
          <Link to="/" className="inline-flex items-center footer-logo" aria-label="Kayoze home">
            <img src={logo} alt="Kayoze" className="h-10 w-auto object-contain" />
          </Link>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Bespoke menswear and custom tailoring crafted in the heart of Kathmandu, delivered
            worldwide.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Mail].map((Icon, i) => (
              <a key={i} href="#" className="footer-social">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="animate-fade-up delay-100">
          <h4 className="text-[0.7rem] uppercase tracking-[0.28em] gold-text mb-5">House</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="footer-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="footer-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/collections" className="footer-link">
                Collections
              </Link>
            </li>
            <li>
              <Link to="/book" className="footer-link">
                Book Consultation
              </Link>
            </li>
          </ul>
        </div>

        <div className="animate-fade-up delay-200">
          <h4 className="text-[0.7rem] uppercase tracking-[0.28em] gold-text mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3 footer-contact-item">
              <MapPin size={14} className="mt-1 shrink-0 gold-text" /> Durbar Marg, Kathmandu, Nepal
            </li>
            <li className="flex gap-3 footer-contact-item">
              <Phone size={14} className="mt-1 shrink-0 gold-text" /> +977 970 269 1187
            </li>
            <li className="flex gap-3 footer-contact-item">
              <Mail size={14} className="mt-1 shrink-0 gold-text" /> atelier@kayoze.com
            </li>
          </ul>
        </div>

        <div className="animate-fade-up delay-300">
          <h4 className="text-[0.7rem] uppercase tracking-[0.28em] gold-text mb-5">
            Atelier Hours
          </h4>
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
        <p className="uppercase tracking-[0.28em]">
          Powered by{" "}
          <a href="https://anoopinnovations.com" target="_blank" className="footer-link">
            Anoop Innovations
          </a>
        </p>
      </div>
    </footer>
  );
}
