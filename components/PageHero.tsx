type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-forest-100 bg-mist py-16 md:py-20">
      <div className="container-shell max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-forest-600">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-9 text-charcoal/75">{description}</p>
      </div>
    </section>
  );
}
