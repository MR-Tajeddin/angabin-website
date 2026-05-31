import Image from "next/image";
import { SectionTitle } from "./SectionTitle";
import { productHighlights } from "./siteData";

export function ProductHighlights() {
  return (
    <section className="bg-mist py-20">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Selected categories"
          title="Grocery and bakery highlights"
          description="A visual sample of recognizable product categories for commercial supply discussions."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {productHighlights.map((product) => (
            <article key={product.title} className="overflow-hidden rounded-md border border-forest-100 bg-white shadow-soft">
              <div className="relative h-56 bg-forest-50">
                <Image
                  src={product.image}
                  alt={`${product.title} product category`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-forest-700">{product.subtitle}</p>
                <h2 className="mt-2 text-xl font-semibold text-charcoal">{product.title}</h2>
                <p className="mt-3 text-sm leading-7 text-charcoal/70">{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
