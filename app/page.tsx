import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { ProductCategoryCard } from "@/components/ProductCategoryCard";
import { SectionTitle } from "@/components/SectionTitle";
import { distributionItems, features, productCategories } from "@/components/siteData";

export const metadata: Metadata = {
  title: "Premium Iranian Food Distribution Across North America",
  description:
    "ANGABIN CANADA INC. connects premium Iranian food, traditional bakery products, and grocery categories with commercial partners in Canada and the United States."
};

export default function HomePage() {
  return (
    <main>
      <Hero
        headline="Premium Iranian Food Distribution Across North America"
        subheadline="ANGABIN CANADA INC. connects high-quality Iranian food, traditional bakery products, and grocery items with reliable commercial partners across Canada and the United States."
      />

      <section className="py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionTitle
            eyebrow="Company overview"
            title="A focused supply partner for Iranian food categories"
            description="ANGABIN CANADA INC. supports the distribution and supply chain needs of commercial buyers seeking premium Iranian food, traditional bakery, and grocery product categories for the North American market."
          />
          <div className="rounded-md border border-forest-100 bg-mist p-8">
            <p className="text-lg leading-9 text-charcoal/78">
              The company works with a B2B focus, serving supermarkets, grocery
              stores, restaurants, bakeries, wholesale buyers, and import/export
              partners through clear communication and category-based commercial
              supply discussions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Product categories"
            title="Commercial food and grocery categories"
            description="A category-based presentation of products for wholesale and partnership conversations."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => (
              <ProductCategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Why ANGABIN CANADA INC."
            title="Built for serious commercial relationships"
            description="A practical, trust-led approach for buyers who need dependable communication and realistic supply conversations."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-forest-100 bg-white py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="Distribution coverage"
            title="Supporting commercial supply across Canada and the United States"
            description="ANGABIN CANADA INC. focuses on helping commercial partners evaluate Iranian food and grocery categories for North American distribution needs."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {distributionItems.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
