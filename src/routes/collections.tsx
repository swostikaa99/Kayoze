import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { FadeIn } from "@/components/ui/fade-in";
import businessImg from "@/assets/collection-business.jpg";
import jacketImg from "@/assets/collection-jacket.jpg";
import bandiImg from "@/assets/collection-bandi.jpg";
import shirtImg from "@/assets/collection-shirt.jpg";
import overcoatImg from "@/assets/collection-overcoat.jpg";
import tuxedoImg from "@/assets/collection-tuxedo.jpg";
import threepieceImg from "@/assets/collection-threepiece.jpg";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Kayoze" },
      {
        name: "description",
        content:
          "Browse the Kayoze gallery of bespoke suits, jackets, overcoats, shirts and traditional menswear, all handcrafted in Kathmandu.",
      },
      { property: "og:title", content: "Collections & Gallery — Kayoze" },
      {
        property: "og:description",
        content: "A gallery of recent Kayoze commissions and signature collections.",
      },
    ],
  }),
  component: CollectionsPage,
});

const items = [
  { img: businessImg, title: "Navy Double-Breasted", cat: "Suits" },
  { img: threepieceImg, title: "Charcoal Three-Piece", cat: "Suits" },
  { img: jacketImg, title: "Herringbone Sport Coat", cat: "Jackets" },
  { img: bandiImg, title: "Burgundy Bandi", cat: "Heritage" },
  { img: shirtImg, title: "French Cuff Shirt", cat: "Shirts" },
  { img: overcoatImg, title: "Camel Cashmere Overcoat", cat: "Overcoats" },
  { img: tuxedoImg, title: "Black Peak Tuxedo", cat: "Formal" },
  { img: businessImg, title: "Midnight Business Suit", cat: "Suits" },
  { img: jacketImg, title: "Tweed Hunting Jacket", cat: "Jackets" },
];

const cats = ["All", "Suits", "Jackets", "Heritage", "Shirts", "Overcoats", "Formal"] as const;

function CollectionsPage() {
  const [active, setActive] = useState<(typeof cats)[number]>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);
  const selectedItem = selectedIndex !== null ? filtered[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex === null) return;
    if (selectedIndex >= filtered.length) {
      setSelectedIndex(filtered.length ? 0 : null);
    }
  }, [filtered, selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => {
          if (prev === null) return null;
          return (prev - 1 + filtered.length) % filtered.length;
        });
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => {
          if (prev === null) return null;
          return (prev + 1) % filtered.length;
        });
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex, filtered.length]);

  const showPrev = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filtered.length) % filtered.length;
    });
  };

  const showNext = () => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filtered.length;
    });
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Our Work"
        title="The Gallery"
        subtitle="A selection of recent commissions from our atelier — each piece patterned, cut and finished entirely by hand."
      />

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          {/* Filters */}
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3 mb-16 pb-10 border-b border-border">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.28em] border transition-all ${
                    active === c
                      ? "bg-[color:var(--color-gold)] text-[color:var(--color-ink)] border-[color:var(--color-gold)]"
                      : "border-border text-muted-foreground hover:text-[color:var(--color-gold)] hover:border-[color:var(--color-gold)]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            {filtered.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <figure className="group">
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(i)}
                    className="relative overflow-hidden aspect-[3/4] w-full text-left cursor-zoom-in"
                    aria-label={`Open ${item.title} image`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      width={1024}
                      height={1280}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <figcaption className="mt-5 flex justify-between items-baseline">
                    <h3 className="font-display text-xl">{item.title}</h3>
                    <span className="text-[0.65rem] uppercase tracking-[0.28em] gold-text">
                      {item.cat}
                    </span>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>

          {selectedItem && (
            <div
              className="fixed inset-0 z-[90] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedIndex(null)}
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute top-4 right-4 text-white/85 hover:text-white transition-colors"
                aria-label="Close gallery"
              >
                <X size={28} />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-4 md:left-8 text-white/85 hover:text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={34} />
              </button>

              <div className="w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                <img
                  src={selectedItem.img}
                  alt={selectedItem.title}
                  className="w-full max-h-[82vh] object-contain"
                />
                <div className="mt-4 flex justify-between items-baseline text-white/90">
                  <h3 className="font-display text-2xl">{selectedItem.title}</h3>
                  <span className="text-xs uppercase tracking-[0.24em] text-[color:var(--color-gold)]">
                    {selectedItem.cat}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 md:right-8 text-white/85 hover:text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={34} />
              </button>
            </div>
          )}

          {/* CTA */}
          <FadeIn>
            <div className="mt-24 text-center border-t border-border pt-16">
              <h3 className="font-display text-3xl md:text-4xl">Inspired by what you see?</h3>
              <p className="mt-4 text-muted-foreground">
                Begin your own commission with a private consultation.
              </p>
              <Link to="/book" className="btn-gold mt-8">
                Book Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
