import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

type HeroProps = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function Hero({
  eyebrow = "Premium food distribution",
  headline,
  subheadline,
  primaryLabel = "Explore Our Products",
  primaryHref = "/products",
  secondaryLabel = "Become a Partner",
  secondaryHref = "/partnerships"
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-forest-100 bg-forest-900">
      <Image
        src="/images/iranian-food-distribution-hero.png"
        alt="Premium Iranian food and grocery products prepared for commercial distribution"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/20" aria-hidden="true" />
      <div className="absolute inset-0 persian-pattern opacity-35" aria-hidden="true" />
      <div className="container-shell relative flex min-h-[560px] items-center gap-10 py-14 md:min-h-[620px] lg:min-h-[640px]">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-forest-600">
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl md:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-charcoal/75">
            {subheadline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
            <ButtonLink href={secondaryHref} variant="secondary">
              {secondaryLabel}
            </ButtonLink>
          </div>
        </div>
        <div className="ml-auto hidden xl:block">
          <div className="rounded-md border border-white/70 bg-white/85 p-5 shadow-soft backdrop-blur">
            <Image
              src="/brand/angabin-logo.png"
              alt="ANGABIN CANADA INC. logo"
              width={220}
              height={220}
              className="h-40 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
