import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { partnerAudiences } from "@/components/siteData";

export const metadata: Metadata = {
  title: "Partnerships",
  description:
    "Partnership inquiries for grocery stores, supermarkets, restaurants, bakeries, wholesale buyers, and import/export partners."
};

export default function PartnershipsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Partnerships"
        title="Commercial partnerships for food retail and supply channels"
        description="ANGABIN CANADA INC. welcomes qualified partnership inquiries from buyers and operators serving Persian, Iranian, Middle Eastern, and broader specialty food markets."
      />
      <section className="py-20">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            title="Built for professional buyers"
            description="The partnership process is intended for organizations evaluating category fit, commercial supply needs, and long-term collaboration."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {partnerAudiences.map((audience) => (
              <div
                key={audience}
                className="rounded-md border border-forest-100 bg-white p-5 text-sm font-semibold text-charcoal shadow-soft"
              >
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-mist py-20">
        <div className="container-shell max-w-4xl">
          <h2 className="font-display text-3xl font-semibold text-charcoal">
            Partnership inquiry focus
          </h2>
          <p className="mt-5 text-base leading-8 text-charcoal/75">
            Partnership inquiries may include wholesale supply opportunities,
            retail category discussions, restaurant or bakery supply needs, and
            import/export collaboration. ANGABIN CANADA INC. reviews inquiries
            with a commercial lens and a focus on clear next steps.
          </p>
        </div>
      </section>
      <CTASection buttonHref="/contact" />
    </main>
  );
}
