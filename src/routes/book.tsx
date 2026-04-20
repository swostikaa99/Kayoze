import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Check, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Consultation — Kayoze" },
      { name: "description", content: "Schedule a private bespoke consultation at our Kathmandu atelier or via video call. Begin your Kayoze commission today." },
      { property: "og:title", content: "Book a Consultation — Kayoze" },
      { property: "og:description", content: "Begin your Kayoze bespoke journey with a private consultation." },
    ],
  }),
  component: BookPage,
});

const services = ["Bespoke Suit", "Three-Piece Suit", "Woolen Jacket", "Bandi Coat", "Custom Shirt", "Overcoat", "Tuxedo / Formalwear", "Other"];

function BookPage() {
  const [sending, setSending] = useState(false);
  const [mode, setMode] = useState<"atelier" | "virtual">("atelier");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Consultation request received. Our concierge will confirm within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Private Appointment"
        title="Book a Consultation"
        subtitle="A private, unhurried session with our master tailors — in person at our Kathmandu atelier or by video call from anywhere in the world."
      />

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-3 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-10">
            <div>
              <h3 className="font-display text-2xl gold-text">What to expect</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {[
                  "60 — 90 minute private session",
                  "Style and lifestyle consultation",
                  "Cloth selection from our library",
                  "30+ precise measurements",
                  "Lead time: 4 — 6 weeks",
                  "Worldwide delivery available",
                ].map((s) => (
                  <li key={s} className="flex gap-3">
                    <Check className="gold-text shrink-0 mt-0.5" size={16} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[color:var(--color-gold)]/30 p-6 bg-card/30">
              <p className="text-[0.7rem] uppercase tracking-[0.28em] gold-text">Concierge</p>
              <p className="mt-3 text-sm text-muted-foreground">Need help choosing? Speak with our atelier directly.</p>
              <a href="tel:+9779702691187" className="mt-3 block font-display text-xl">+977 970 269 1187</a>
            </div>
          </aside>

          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-2 border border-border p-8 lg:p-12 bg-card/30 space-y-8">
            {/* Mode */}
            <div>
              <span className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">Consultation Type</span>
              <div className="grid grid-cols-2 gap-3 mt-3">
                {([
                  { id: "atelier", t: "At the Atelier", d: "Durbar Marg, Kathmandu" },
                  { id: "virtual", t: "Virtual", d: "Video consultation" },
                ] as const).map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => setMode(o.id)}
                    className={`text-left p-5 border transition-all ${
                      mode === o.id
                        ? "border-[color:var(--color-gold)] bg-[color:var(--color-gold)]/8"
                        : "border-border hover:border-[color:var(--color-gold)]/50"
                    }`}
                  >
                    <p className="font-display text-lg">{o.t}</p>
                    <p className="text-xs text-muted-foreground mt-1">{o.d}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Phone / WhatsApp" name="phone" required />
              <Field label="Country" name="country" />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Preferred date" name="date" type="date" required />
              <label className="block">
                <span className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">Service of interest *</span>
                <select
                  name="service"
                  required
                  className="mt-2 w-full bg-transparent border-b border-border focus:border-[color:var(--color-gold)] py-3 text-foreground outline-none transition-colors"
                >
                  <option value="" className="bg-background">Select...</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-background">{s}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">Notes (optional)</span>
              <textarea
                name="notes"
                rows={4}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-[color:var(--color-gold)] py-3 text-foreground outline-none transition-colors resize-none"
                placeholder="Occasion, style preferences, fabric ideas..."
              />
            </label>

            <button type="submit" disabled={sending} className="btn-gold w-full sm:w-auto disabled:opacity-60">
              <Calendar size={14} />
              {sending ? "Sending..." : "Request Appointment"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">{label}{required && " *"}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-[color:var(--color-gold)] py-3 text-foreground outline-none transition-colors"
      />
    </label>
  );
}
