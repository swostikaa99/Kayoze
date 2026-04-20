import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import aboutImg from "@/assets/about-portrait.jpg";
import fabricsImg from "@/assets/fabrics.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Atelier — Kayoze Bespoke" },
      { name: "description", content: "Discover Kayoze, a bespoke menswear atelier in Durbar Marg, Kathmandu. Our heritage, craft and the master tailors behind every garment." },
      { property: "og:title", content: "The Atelier — Kayoze Bespoke" },
      { property: "og:description", content: "The story behind Kayoze, a luxury bespoke menswear house in Kathmandu." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="The House of Kayoze"
        title="A Quiet Pursuit of Perfection"
        subtitle="A bespoke atelier rooted in Kathmandu, dedicated to the patient art of building garments by hand — one client, one cloth, one stitch at a time."
      />

      {/* Story */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <img
            src={aboutImg}
            alt="The Kayoze atelier"
            width={1024}
            height={1280}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-display leading-tight">
              Built on heritage, <em className="gold-text not-italic">refined</em> by intention.
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Kayoze was founded with a singular conviction: that a man's wardrobe should be
                an extension of his character. Every commission begins with a conversation —
                about how a jacket should move, how a lapel should sit, how a fabric should feel.
              </p>
              <p>
                From our atelier in Durbar Marg, we have dressed diplomats, founders, grooms and
                gentlemen who understand the difference between fashion and form. Our work is
                deliberate, considered, and entirely your own.
              </p>
              <p>
                We import the finest cloths from England, Italy and Scotland, but the soul of the
                garment is built here — in the hands of tailors trained over decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6 bg-card/40 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow">Our Values</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-display">What we stand for</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              { t: "Slow Craft", d: "We refuse the rhythm of mass production. A Kayoze garment takes weeks because it must." },
              { t: "Honest Cloth", d: "Only mill-traceable fabrics from Loro Piana, Vitale Barberis Canonico, Holland & Sherry and Dormeuil." },
              { t: "Lifelong Service", d: "Your garments are remembered. Alterations, repairs and re-fits are offered for the life of the cloth." },
            ].map((v) => (
              <div key={v.t} className="border border-border p-10">
                <h3 className="font-display text-2xl gold-text">{v.t}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabrics teaser */}
      <section className="py-28 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="eyebrow">The Cloth Library</span>
            <h2 className="mt-6 text-4xl md:text-5xl font-display leading-tight">
              Over <em className="gold-text not-italic">120 cloths</em>, hand-selected.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Our fabric library is curated rather than catalogued. Super 120s and 150s wools,
              cashmere blends, raw silks, linens and the rarest cloths from England's heritage
              mills — each chosen for the way it drapes, breathes and ages.
            </p>
            <Link to="/services" className="btn-outline-gold mt-10">Explore Services</Link>
          </div>
          <img
            src={fabricsImg}
            alt="Folded premium suiting fabrics"
            width={1024}
            height={1024}
            loading="lazy"
            className="order-1 lg:order-2 w-full aspect-square object-cover"
          />
        </div>
      </section>
    </Layout>
  );
}
