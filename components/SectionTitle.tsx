type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-forest-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-charcoal/75">{description}</p>
      ) : null}
    </div>
  );
}
