import type { LucideIcon } from "lucide-react";

type ProductCategoryCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function ProductCategoryCard({
  title,
  description,
  icon: Icon
}: ProductCategoryCardProps) {
  return (
    <article className="rounded-md border border-forest-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-forest-200">
      <div className="grid h-11 w-11 place-items-center rounded-md bg-forest-50 text-forest-700">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-charcoal">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-charcoal/70">{description}</p>
    </article>
  );
}
