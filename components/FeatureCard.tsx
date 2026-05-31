import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <article className="rounded-md border border-forest-100 bg-mist p-6">
      <div className="flex items-start gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white text-forest-700 shadow-sm">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </span>
        <span>
          <h3 className="font-semibold text-charcoal">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-charcoal/70">{description}</p>
        </span>
      </div>
    </article>
  );
}
