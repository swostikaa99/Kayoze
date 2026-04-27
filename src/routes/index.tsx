import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Layout } from "@/components/site/Layout";
import { ArrowRight, Scissors, Ruler, Sparkles, Globe2 } from "lucide-react";
import { Counter } from "@/components/ui/counter";
import { FadeIn } from "@/components/ui/fade-in";

import heroImg from "@/assets/hero-tailor.jpg";
import aboutImg from "@/assets/about-portrait.jpg";
import fabricsImg from "@/assets/fabrics.jpg";
import businessImg from "@/assets/collection-business.jpg";
import threepieceImg from "@/assets/collection-threepiece.jpg";
import bandiImg from "@/assets/collection-bandi.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kayoze" },
      {
        name: "description",
        content:
          "Where tradition meets modern elegance. Bespoke suits, jackets and shirts handcrafted in Durbar Marg, Kathmandu — delivered worldwide.",
      },
      { property: "og:title", content: "Kayoze — Bespoke Menswear & Custom Tailoring" },
      {
        property: "og:description",
        content: "Luxury custom tailoring crafted in Kathmandu, delivered worldwide.",
      },
    ],
  }),
  component: HomePage,
});

const collections = [
  {
    img: businessImg,
    title: "Business Suits",
    price: "From NPR 45,000",
    desc: "Impeccably tailored suits for the modern gentleman.",
  },
  {
    img: threepieceImg,
    title: "Three-Piece Elegance",
    price: "From NPR 55,000",
    desc: "Complete sophistication, crafted to perfection.",
  },
  {
    img: bandiImg,
    title: "Bandi & Heritage",
    price: "From NPR 38,000",
    desc: "Traditional Nepali tailoring, refined for today.",
  },
];

const process = [
  {
    n: "01",
    t: "Consultation",
    d: "Share your vision in person or by video call with our master stylists.",
  },
  {
    n: "02",
    t: "Measurement",
    d: "Over 30 precise measurements ensure a fit that moves with you.",
  },
  { n: "03", t: "Crafting", d: "Hand-cut and assembled across multiple fittings in our atelier." },
  { n: "04", t: "Delivery", d: "Final fitting and worldwide delivery to your doorstep." },
];

const pillars = [
  {
    Icon: Scissors,
    t: "Master Craftsmanship",
    d: "Every garment hand-finished by tailors with decades of practice.",
  },
  {
    Icon: Ruler,
    t: "Perfect Measurements",
    d: "30+ measurements taken in-person or via guided video call.",
  },
  {
    Icon: Sparkles,
    t: "Premium Fabrics",
    d: "Sourced from the finest mills across Italy and England.",
  },
  {
    Icon: Globe2,
    t: "Worldwide Delivery",
    d: "From Kathmandu to your doorstep, anywhere in the world.",
  },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Master tailor crafting a bespoke jacket"
          width={1920}
          height={1080}
          className="hero-img-animated absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="hero-aurora"><span /></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background/90" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <span className="eyebrow animate-fade-up">
            Bespoke Tailoring · Durbar Marg, Kathmandu
          </span>
          <h1 className="mt-8 font-display text-6xl md:text-8xl lg:text-9xl tracking-[0.05em] gold-text animate-fade-up delay-100">
            KAYOZE
          </h1>
          <p className="mt-8 text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto leading-relaxed font-light animate-fade-up delay-200">
            Where tradition meets modern elegance. Crafting bespoke garments that tell your story —
            delivered worldwide.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Link to="/book" className="btn-gold">
              Book Consultation
            </Link>
            <Link to="/services" className="btn-outline-gold">
              Explore Services
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up delay-500">
          <div className="w-px h-14 bg-gradient-to-b from-transparent to-[color:var(--color-gold)]" />
        </div>
      </section>

      {/* HERITAGE */}
      <section className="py-28 lg:py-40 px-6 overflow-hidden">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="right">
            <div className="relative">
              <img
                src={aboutImg}
                alt="Gentleman in three-piece bespoke suit"
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 hidden md:block bg-background border border-[color:var(--color-gold)] px-8 py-6">
                <p className="num-tag">
                  <Counter end={5} suffix="+" />
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mt-1">
                  Years of Excellence
                </p>
              </div>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.2}>
              <div>
                <span className="eyebrow">Our Heritage</span>
                <h2 className="mt-6 text-4xl md:text-5xl font-display leading-tight">
                  The Art of <em className="gold-text not-italic">Bespoke</em> Tailoring
                </h2>
              </div>
            </FadeIn>
            <div className="space-y-5 mt-8 text-muted-foreground leading-relaxed">
              <FadeIn delay={0.3}>
                <p>
                  Located in the prestigious Durbar Marg district of Kathmandu, Kayoze represents the
                  epitome of luxury custom tailoring. Our master tailors bring decades of experience
                  to every stitch.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p>
                  Each garment is meticulously handcrafted using the finest imported fabrics from
                  renowned mills across Europe — from initial consultation to final fitting, every
                  detail reflects your personality.
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-border">
              {[
                { n: 120, s: "+", l: "Premium Fabrics" },
                { n: 850, s: "+", l: "Satisfied Clients" },
                { n: 24, s: "", l: "Countries Served" },
              ].map((s, i) => (
                <FadeIn key={s.l} delay={0.5 + i * 0.1}>
                  <div>
                    <p className="font-display text-3xl gold-text">
                      <Counter end={s.n} suffix={s.s} />
                    </p>
                    <p className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground mt-1">
                      {s.l}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 lg:py-36 px-6 bg-card/40 border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow">Our Process</span>
              <h2 className="mt-6 text-4xl md:text-5xl font-display">The Bespoke Journey</h2>
              <p className="mt-5 text-muted-foreground">
                From consultation to completion — experience the art of true bespoke tailoring.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
            {process.map((p, i) => (
              <FadeIn key={p.n} delay={i * 0.1}>
                <div className="group">
                  <p className="num-tag">{p.n}</p>
                  <h3 className="mt-4 text-2xl font-display">{p.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="py-28 lg:py-36 px-6 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <span className="eyebrow">Signature Collections</span>
                <h2 className="mt-6 text-4xl md:text-5xl font-display max-w-xl">
                  Crafted to <em className="gold-text not-italic">Perfection</em>
                </h2>
              </div>
              <Link
                to="/collections"
                className="text-xs uppercase tracking-[0.28em] gold-text inline-flex items-center gap-2 hover:gap-4 transition-all"
              >
                View all collections <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-16">
            {collections.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.15}>
                <Link to="/collections" className="group block">
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={c.img}
                      alt={c.title}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  </div>
                  <h3 className="mt-6 text-2xl font-display group-hover:text-[color:var(--color-gold)] transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.28em] gold-text">{c.price}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-28 lg:py-36 px-6 relative overflow-hidden">
        <img
          src={fabricsImg}
          alt=""
          loading="lazy"
          width={1024}
          height={1024}
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
        <div className="relative mx-auto max-w-7xl">
          <FadeIn>
            <div>
              <span className="eyebrow">The Art of Tailoring</span>
              <h2 className="mt-6 text-4xl md:text-5xl font-display max-w-2xl">
                Craftsmanship <em className="gold-text not-italic">Beyond Compare</em>
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            {pillars.map((p, i) => (
              <FadeIn key={p.t} delay={i * 0.1}>
                <div className="border-l border-[color:var(--color-gold)]/40 pl-6">
                  <p.Icon className="gold-text" size={28} />
                  <h3 className="mt-5 text-xl font-display">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-28 px-6">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Client Stories</span>
            <blockquote className="mt-10 font-display text-2xl md:text-3xl leading-relaxed italic text-foreground/90">
              "The attention to detail at Kayoze is extraordinary. My bespoke suit fits perfectly,
              and the virtual consultation made the process seamless despite the distance."
            </blockquote>
            <div className="mt-10">
              <p className="font-display text-lg gold-text">James Richardson</p>
              <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mt-1">
                London, United Kingdom
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <FadeIn>
          <div className="mx-auto max-w-6xl border border-[color:var(--color-gold)]/40 px-8 py-20 lg:py-28 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-gold)]/5 via-transparent to-[color:var(--color-gold)]/5" />
            <div className="relative">
              <span className="eyebrow">Begin Your Journey</span>
              <h2 className="mt-6 text-4xl md:text-6xl font-display max-w-3xl mx-auto leading-tight">
                A garment as <em className="gold-text not-italic">singular</em> as you are.
              </h2>
              <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
                Schedule a personal consultation at our Durbar Marg atelier, or connect with us
                virtually.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/book" className="btn-gold">
                  Book Consultation
                </Link>
                <Link to="/contact" className="btn-outline-gold">
                  Contact Atelier
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </Layout>
  );
}
