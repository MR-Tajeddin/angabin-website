import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { FeatureCard } from "@/components/FeatureCard";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { distributionItems } from "@/components/siteData";

export const metadata: Metadata = {
  title: "Distribution",
  description:
    "Distribution, sourcing coordination, supply chain management, and wholesale support for Iranian food categories across Canada and the United States."
};

export default function DistributionPage() {
  return (
    <main>
      <PageHero
        eyebrow="Distribution"
        title="Supply chain support for Canada and U.S. commercial markets"
        description="ANGABIN CANADA INC. supports sourcing coordination, commercial communication, and wholesale distribution planning for Iranian food, bakery, and grocery categories."
      />
      <section className="py-20">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            title="Coordinated for commercial reliability"
            description="The company’s distribution role is built around practical coordination between product sourcing, buyer expectations, market needs, and ongoing partner communication."
          />
          <div className="grid gap-5">
            {distributionItems.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-mist py-20">
        <div className="container-shell max-w-4xl">
          <h2 className="font-display text-3xl font-semibold text-charcoal">
            Cross-border commercial market focus
          </h2>
          <p className="mt-5 text-base leading-8 text-charcoal/75">
            ANGABIN CANADA INC. focuses on the commercial market between
            Canada and the United States, helping qualified partners discuss
            appropriate product categories, distribution needs, and supply
            planning in a clear professional format.
          </p>
        </div>
      </section>
      <CTASection />
    </main>
  );
}
