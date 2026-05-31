import type { Metadata } from "next";
import {
  ExternalLink,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { company } from "@/components/siteData";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ANGABIN CANADA INC. for Iranian food distribution, wholesale, and commercial partnership inquiries."
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title="Start a commercial inquiry"
        description="Reach ANGABIN CANADA INC. for partnership, wholesale supply, and distribution conversations."
      />
      <section className="py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-md border border-forest-100 bg-mist p-6">
            <h2 className="text-xl font-semibold text-charcoal">{company.name}</h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-charcoal/75">
              <p className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-forest-700" />
                <span>
                  {company.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </p>
              <a className="flex gap-3 hover:text-forest-800" href={company.phoneHref}>
                <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-forest-700" />
                Phone: {company.phone}
              </a>
              <a
                className="flex gap-3 hover:text-forest-800"
                href={company.whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-forest-700" />
                WhatsApp: {company.phone}
              </a>
              <a className="flex gap-3 hover:text-forest-800" href={company.emailHref}>
                <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-forest-700" />
                Email: {company.email}
              </a>
              <p className="flex gap-3">
                <Globe2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-forest-700" />
                Website: {company.displayDomain}
              </p>
              <a
                className="flex gap-3 hover:text-forest-800"
                href={company.linkedIn}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-forest-700" />
                LinkedIn profile
                <ExternalLink aria-hidden="true" className="mt-1 h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 grid gap-3">
              <a
                href={company.whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center justify-between rounded-md border border-forest-200 bg-white px-4 py-3 text-sm font-semibold text-forest-800 transition hover:border-forest-500 hover:bg-forest-50"
              >
                Message us on WhatsApp
                <MessageCircle aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href={company.phoneHref}
                className="focus-ring flex items-center justify-between rounded-md border border-forest-200 bg-white px-4 py-3 text-sm font-semibold text-forest-800 transition hover:border-forest-500 hover:bg-forest-50"
              >
                Call us
                <Phone aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href={company.emailHref}
                className="focus-ring flex items-center justify-between rounded-md border border-forest-200 bg-white px-4 py-3 text-sm font-semibold text-forest-800 transition hover:border-forest-500 hover:bg-forest-50"
              >
                Email us
                <Mail aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </aside>
          <ContactForm />
        </div>
      </section>
      <section className="bg-mist py-20">
        <div className="container-shell">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-forest-700">Location</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-charcoal md:text-4xl">
              Visit our Richmond Hill contact location
            </h2>
            <p className="mt-4 text-base leading-8 text-charcoal/70">{company.address}</p>
          </div>
          <div className="overflow-hidden rounded-md border border-forest-100 bg-white shadow-soft">
            <iframe
              title="ANGABIN CANADA INC. Google Map"
              src={company.mapEmbedSrc}
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={company.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-5 inline-flex rounded-md bg-forest-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest-800"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </main>
  );
}
