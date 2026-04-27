import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/kayoze-logo.jpg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/collections", label: "Collections" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#630305] backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Kayoze home">
          <img src={logo} alt="Kayoze" className="h-9 lg:h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[0.7rem] uppercase tracking-[0.28em] text-foreground/75 hover:text-[color:var(--color-gold)] transition-colors"
              activeProps={{ className: "!text-[color:var(--color-gold)]" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/book" className="hidden lg:inline-flex btn-outline-gold !py-3 !px-6">
          Book Consultation
        </Link>

        <button
          aria-label="Menu"
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="px-6 py-8 flex flex-col gap-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.28em] text-foreground/80"
                activeProps={{ className: "!text-[color:var(--color-gold)]" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/book" onClick={() => setOpen(false)} className="btn-gold mt-2">
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
