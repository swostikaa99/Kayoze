import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { FadeIn } from "@/components/ui/fade-in";

import aboutImg from "@/assets/about-portrait.jpg";
import fabricsImg from "@/assets/fabrics.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Kayoze" },
      {
        name: "description",
        content:
          "Discover Kayoze, a bespoke menswear atelier in Durbar Marg, Kathmandu. Our heritage, craft and the master tailors behind every garment.",
      },
      { property: "og:title", content: "The Atelier — Kayoze Bespoke" },
      {
        property: "og:description",
        content: "The story behind Kayoze, a luxury bespoke menswear house in Kathmandu.",
      },
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
      <section className="py-20 px-6 overflow-hidden">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="right">
            <img
              src={aboutImg}
              alt="The Kayoze atelier"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
          </FadeIn>
          <div>
            <FadeIn>
              <span className="eyebrow">Our Story</span>
              <h2 className="mt-6 text-4xl md:text-5xl font-display leading-tight">
                Built on heritage, <em className="gold-text not-italic">refined</em> by intention.
              </h2>
            </FadeIn>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <FadeIn delay={0.2}>
                <p>
                  Kayoze was founded with a singular conviction: that a man's wardrobe should be an
                  extension of his character. Every commission begins with a conversation — about how
                  a jacket should move, how a lapel should sit, how a fabric should feel.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p>
                  From our atelier in Durbar Marg, we have dressed diplomats, founders, grooms and
                  gentlemen who understand the difference between fashion and form. Our work is
                  deliberate, considered, and entirely your own.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p>
                  We import the finest cloths from England, Italy and Scotland, but the soul of the
                  garment is built here — in the hands of tailors trained over decades.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>


      {/* Values */}
      <section className="py-28 px-6 bg-card/40 border-y border-border overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <span className="eyebrow">Our Values</span>
              <h2 className="mt-6 text-4xl md:text-5xl font-display">What we stand for</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-10 mt-16">
            {[
              {
                t: "Slow Craft",
                d: "We refuse the rhythm of mass production. A Kayoze garment takes weeks because it must.",
              },
              {
                t: "Honest Cloth",
                d: "Only mill-traceable fabrics from Loro Piana, Vitale Barberis Canonico, Holland & Sherry and Dormeuil.",
              },
              {
                t: "Lifelong Service",
                d: "Your garments are remembered. Alterations, repairs and re-fits are offered for the life of the cloth.",
              },
            ].map((v, i) => (
              <FadeIn key={v.t} delay={i * 0.1}>
                <div className="border border-border p-10 h-full">
                  <h3 className="font-display text-2xl gold-text">{v.t}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


      {/* Fabrics teaser */}
      <section className="py-28 px-6 overflow-hidden">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <FadeIn>
              <span className="eyebrow">The Cloth Library</span>
              <h2 className="mt-6 text-4xl md:text-5xl font-display leading-tight">
                Over <em className="gold-text not-italic">120 cloths</em>, hand-selected.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our fabric library is curated rather than catalogued. Super 120s and 150s wools,
                cashmere blends, raw silks, linens and the rarest cloths from England's heritage mills
                — each chosen for the way it drapes, breathes and ages.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Link to="/services" className="btn-outline-gold mt-10">
                Explore Services
              </Link>
            </FadeIn>
          </div>
          <FadeIn direction="left" className="order-1 lg:order-2">
            <img
              src={fabricsImg}
              alt="Folded premium suiting fabrics"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full aspect-square object-cover"
            />
          </FadeIn>
        </div>
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
