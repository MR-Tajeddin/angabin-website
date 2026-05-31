import { ButtonLink } from "./ButtonLink";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CTASection({
  title = "Looking for a trusted supplier of Iranian food products?",
  description = "Connect with ANGABIN CANADA INC. to discuss commercial supply, wholesale needs, and category-based partnership opportunities.",
  buttonLabel = "Start a Partnership Inquiry",
  buttonHref = "/contact"
}: CTASectionProps) {
  return (
    <section className="bg-forest-800 py-16 text-white">
      <div className="container-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="mt-4 leading-8 text-forest-50">{description}</p>
        </div>
        <ButtonLink href={buttonHref} variant="secondary">
          {buttonLabel}
        </ButtonLink>
      </div>
    </section>
  );
}
