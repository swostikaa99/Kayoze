interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-40 pb-20 lg:pt-52 lg:pb-28 text-center px-6">
      <div className="max-w-3xl mx-auto">
        <span className="eyebrow animate-fade-up">{eyebrow}</span>
        <h1 className="mt-8 text-5xl md:text-7xl font-display text-foreground animate-fade-up delay-100">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-up delay-200">
            {subtitle}
          </p>
        )}
        <div className="mt-10 flex justify-center animate-fade-up delay-300">
          <div className="w-px h-16 bg-gradient-to-b from-[color:var(--color-gold)] to-transparent" />
        </div>
      </div>
    </section>
  );
}
