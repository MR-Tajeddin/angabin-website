import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { ProductCategoryCard } from "@/components/ProductCategoryCard";
import { ProductHighlights } from "@/components/ProductHighlights";
import { SectionTitle } from "@/components/SectionTitle";
import { productCategories } from "@/components/siteData";

export const metadata: Metadata = {
  title: "Product Categories",
  description:
    "Explore food, bakery, grocery, pantry, and wholesale supply categories available for commercial request."
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Product categories"
        title="Category-based supply for commercial buyers"
        description="ANGABIN CANADA INC. presents food, bakery, and grocery categories for professional wholesale and partnership discussions."
      />
      <section className="py-20">
        <div className="container-shell">
          <SectionTitle
            title="Products are presented by category, not online retail listings"
            description="This website is designed for commercial inquiries, buyer conversations, and B2B relationship development."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {productCategories.map((category) => (
              <ProductCategoryCard key={category.title} {...category} />
            ))}
          </div>
          <p className="mt-10 rounded-md border border-forest-100 bg-mist p-5 text-sm font-medium text-forest-800">
            Detailed product catalog is available upon commercial request.
          </p>
        </div>
      </section>
      <ProductHighlights />
      <CTASection />
    </main>
  );
}
