import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kayoze" },
      {
        name: "description",
        content:
          "Visit Kayoze at Durbar Marg, Kathmandu, or reach our atelier by phone, email or WhatsApp. Worldwide consultations available.",
      },
      { property: "og:title", content: "Contact the Atelier — Kayoze" },
      {
        property: "og:description",
        content: "Visit, call or write to the Kayoze atelier in Kathmandu.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message received. Our atelier will respond within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Get In Touch"
        title="Visit the Atelier"
        subtitle="Schedule a private appointment at our Durbar Marg atelier, or reach us virtually for international clientele."
      />

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-14">
          {/* Info */}
          <div className="lg:col-span-2 space-y-10">
            {[
              { Icon: MapPin, t: "Visit", l1: "Durbar Marg", l2: "Kathmandu, Nepal 44600" },
              {
                Icon: Phone,
                t: "Call or WhatsApp",
                l1: "+977 970 269 1187",
                l2: "WhatsApp & Viber available",
              },
              {
                Icon: Mail,
                t: "Write",
                l1: "atelier@kayoze.com",
                l2: "We respond within 24 hours",
              },
              {
                Icon: Clock,
                t: "Atelier Hours",
                l1: "Mon — Sat · 10:00 — 19:00",
                l2: "Sunday by appointment",
              },
            ].map((c) => (
              <div key={c.t} className="flex gap-5">
                <div className="w-12 h-12 shrink-0 grid place-items-center border border-[color:var(--color-gold)]/40 gold-text">
                  <c.Icon size={18} />
                </div>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.28em] gold-text">{c.t}</p>
                  <p className="mt-2 text-foreground">{c.l1}</p>
                  <p className="text-sm text-muted-foreground">{c.l2}</p>
                </div>
              </div>
            ))}
            {/* Map */}
            <div className="pt-10">
              <h3 className="font-display text-2xl gold-text mb-4">Find us Here</h3>
              <div className="aspect-video w-full border border-border grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26933.357710100663!2d85.31686!3d27.709763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198f4d1ac0ef%3A0xbc4ab09780de0d61!2sKAYOZE%20DURBARMARG!5e1!3m2!1sen!2snp!4v1777269727290!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kayoze Durbar Marg Location"
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 border border-border p-8 lg:p-12 bg-card/30 space-y-6"
          >
            <div>
              <span className="eyebrow">Message Atelier</span>
              <h2 className="mt-5 font-display text-3xl">Send us a note</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Phone" name="phone" />
              <Field label="Country" name="country" />
            </div>

            <label className="block">
              <span className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
                Message
              </span>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-2 w-full bg-transparent border-b border-border focus:border-[color:var(--color-gold)] py-3 text-foreground outline-none transition-colors resize-none"
                placeholder="Tell us about your commission..."
              />
            </label>

            <button
              type="submit"
              disabled={sending}
              className="btn-gold w-full sm:w-auto disabled:opacity-60"
            >
              <Send size={14} />
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
        {required && " *"}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-border focus:border-[color:var(--color-gold)] py-3 text-foreground outline-none transition-colors"
      />
    </label>
  );
}
