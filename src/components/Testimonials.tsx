import { FadeIn } from "./ui/fade-in";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const testimonials = [
  {
    quote:
      "The attention to detail at Kayoze is extraordinary. My bespoke suit fits perfectly, and the process was seamless despite the distance.",
    author: "James Richardson",
    location: "London, United Kingdom",
    badge: "Heritage Client"
  },
  {
    quote:
      "Kayoze understands the nuance of traditional tailoring. My Bandi coat is a masterpiece of craft and cultural heritage.",
    author: "Arjun Thapa",
    location: "Kathmandu, Nepal",
    badge: "Official Collector"
  },
  {
    quote:
      "For my wedding, I wanted something singular. The three-piece suit from Kayoze didn't just fit me; it felt like a second skin.",
    author: "David Miller",
    location: "Sydney, Australia",
    badge: "Wedding Commission"
  },
  {
    quote: "Superior craftsmanship from start to finish. The fabric selection is curated with an eye for timeless elegance.",
    author: "Elena Rossi",
    location: "Milan, Italy",
    badge: "Repeat Client"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 lg:py-48 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Aurora Light Effect */}
      <div className="hero-aurora opacity-30">
        <span />
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl opacity-[0.04] pointer-events-none">
        <Quote size={600} className="text-[color:var(--color-gold)] mx-auto" strokeWidth={0.5} />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <FadeIn>
          <div className="text-center mb-24">
            <span className="eyebrow">Client Stories</span>
            <h2 className="mt-8 text-5xl md:text-7xl font-display leading-[1.1]">
              Voices of <em className="gold-text not-italic">Distinction</em>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg mx-auto text-lg">
              Notes from our global clientele on the art of bespoke excellence.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Carousel 
            opts={{ 
              align: "start",
              loop: true 
            }} 
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative h-full">
                    {/* Decorative Card Border/Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-gold)]/20 via-transparent to-[color:var(--color-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
                    
                    <div className="relative flex flex-col h-full p-10 lg:p-14 border border-border bg-black/40 backdrop-blur-md hover:border-[color:var(--color-gold)]/40 transition-all duration-500 overflow-hidden">
                      {/* Top Bar */}
                      <div className="flex justify-between items-start mb-10">
                        <Quote className="gold-text opacity-40 group-hover:opacity-100 transition-opacity duration-700" size={32} />
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={10} className="fill-[color:var(--color-gold)] text-[color:var(--color-gold)] opacity-50" />
                          ))}
                        </div>
                      </div>

                      <blockquote className="flex-grow font-display text-2xl md:text-3xl leading-relaxed text-foreground/90 italic tracking-tight mb-12">
                        "{t.quote}"
                      </blockquote>

                      <div className="mt-auto pt-10 border-t border-border/50">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-display text-xl gold-text">{t.author}</p>
                            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-muted-foreground mt-2">
                              {t.location}
                            </p>
                          </div>
                          <span className="px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] border border-[color:var(--color-gold)]/30 text-[color:var(--color-gold)]/70 rounded-full group-hover:border-[color:var(--color-gold)]/60 transition-colors">
                            {t.badge}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Floating Navigation Controls */}
            <div className="mt-20 flex justify-center items-center gap-6">
              <CarouselPrevious className="static translate-y-0 h-14 w-14 border-[color:var(--color-gold)]/30 bg-background/20 text-[color:var(--color-gold)] hover:bg-[color:var(--color-gold)] hover:text-[color:var(--color-ink)] transition-all duration-500 rounded-none transform active:scale-95" />
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-[color:var(--color-gold)]/40 to-transparent" />
              <CarouselNext className="static translate-y-0 h-14 w-14 border-[color:var(--color-gold)]/30 bg-background/20 text-[color:var(--color-gold)] hover:bg-[color:var(--color-gold)] hover:text-[color:var(--color-ink)] transition-all duration-500 rounded-none transform active:scale-95" />
            </div>
          </Carousel>
        </FadeIn>
      </div>

      {/* Modern scroll indicator or footer element can go here */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
