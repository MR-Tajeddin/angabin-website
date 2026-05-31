import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about ANGABIN CANADA INC., a B2B company focused on premium Iranian food, bakery, and grocery distribution across North America."
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About"
        title="A professional bridge for Iranian food supply in North America"
        description="ANGABIN CANADA INC. serves commercial buyers and partners seeking reliable access to premium Iranian food, traditional bakery, and grocery product categories."
      />
      <section className="py-20">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle
            eyebrow="Corporate profile"
            title="Focused on sourcing, distribution, and B2B partnerships"
          />
          <div className="space-y-6 text-base leading-8 text-charcoal/76">
            <p>
              ANGABIN CANADA INC. operates with a clear commercial purpose:
              connecting Iranian food, bakery, and grocery categories with
              partners across Canada and the United States.
            </p>
            <p>
              The company serves buyers in retail, foodservice, wholesale, and
              import/export environments where product quality, dependable
              communication, and supply planning matter.
            </p>
            <p>
              Its work centers on category-based sourcing conversations,
              distribution support, and professional partnership development
              without overstating claims or relying on unsupported certifications.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-mist py-20">
        <div className="container-shell grid gap-5 md:grid-cols-3">
          {[
            "Premium Iranian food products",
            "Traditional bakery categories",
            "Commercial grocery supply"
          ].map((item) => (
            <div key={item} className="rounded-md border border-forest-100 bg-white p-6 shadow-soft">
              <h2 className="text-lg font-semibold text-charcoal">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-charcoal/70">
                Presented for B2B evaluation, wholesale conversations, and
                long-term commercial relationship development.
              </p>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </main>
  );
}
