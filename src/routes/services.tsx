import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import businessImg from "@/assets/collection-business.jpg";
import jacketImg from "@/assets/collection-jacket.jpg";
import bandiImg from "@/assets/collection-bandi.jpg";
import shirtImg from "@/assets/collection-shirt.jpg";
import overcoatImg from "@/assets/collection-overcoat.jpg";
import tuxedoImg from "@/assets/collection-tuxedo.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Bespoke Services — Kayoze" },
      { name: "description", content: "Bespoke suits, woolen jackets, traditional Bandi coats, custom shirts, overcoats and formalwear — handcrafted by Kayoze." },
      { property: "og:title", content: "Bespoke Services — Kayoze" },
      { property: "og:description", content: "Our full range of bespoke menswear services, from business suits to traditional Bandi coats." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { img: businessImg, t: "Bespoke Suits", d: "Two and three-piece suits cut to your exact measurements in Super 120s — 150s wools.", from: "From NPR 45,000" },
  { img: jacketImg, t: "Woolen Jackets", d: "Tweed, cashmere blend and herringbone sport coats designed for warmth and quiet sophistication.", from: "From NPR 32,000" },
  { img: bandiImg, t: "Bandi Coats", d: "Traditional Nepali Nehru jackets reimagined with contemporary tailoring and rich silks.", from: "From NPR 28,000" },
  { img: shirtImg, t: "Custom Shirts", d: "Two-fold Egyptian and Italian cottons, hand-finished collars, French cuffs and mother-of-pearl buttons.", from: "From NPR 8,500" },
  { img: overcoatImg, t: "Overcoats", d: "Camel hair, cashmere and pure wool overcoats tailored for travel, weather and presence.", from: "From NPR 65,000" },
  { img: tuxedoImg, t: "Formalwear & Tuxedos", d: "Black-tie tuxedos, dinner jackets and wedding suits — for occasions worth dressing for.", from: "From NPR 58,000" },
];

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Expertise"
        title="Bespoke Services"
        subtitle="Six disciplines, one standard. Every garment is patterned individually — there are no house blocks at Kayoze."
      />

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl space-y-24 lg:space-y-32">
          {services.map((s, i) => (
            <article
              key={s.t}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 === 1 ? "lg:[&>img]:order-2" : ""}`}
            >
              <img
                src={s.img}
                alt={s.t}
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <div>
                <span className="eyebrow">0{i + 1}</span>
                <h2 className="mt-6 text-4xl md:text-5xl font-display">{s.t}</h2>
                <div className="gold-divider w-24 mt-6" />
                <p className="mt-8 text-muted-foreground text-lg leading-relaxed">{s.d}</p>
                <div className="mt-8 flex items-center gap-8">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">Investment</p>
                    <p className="font-display text-2xl gold-text mt-1">{s.from}</p>
                  </div>
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.28em] text-muted-foreground">Lead Time</p>
                    <p className="font-display text-2xl gold-text mt-1">4 — 6 wks</p>
                  </div>
                </div>
                <Link to="/book" className="btn-outline-gold mt-10">Begin Commission</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
