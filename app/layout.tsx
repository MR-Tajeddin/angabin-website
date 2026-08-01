import type { Metadata } from "next";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const siteUrl = "https://www.angabincanada.com";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ANGABIN CANADA INC.",
  url: siteUrl,
  logo: `${siteUrl}/brand/angabin-logo.png`,
  email: "info@angabincanada.com",
  telephone: "+1 437-452-1109",
  address: {
    "@type": "PostalAddress",
    streetAddress: "95 Oneida Crescent",
    addressLocality: "Richmond Hill",
    addressRegion: "ON",
    postalCode: "L4B 0H5",
    addressCountry: "CA"
  },
  foundingDate: "2022"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ANGABIN CANADA INC. | Iranian Food Distribution & Supply",
    template: "%s | ANGABIN CANADA INC."
  },
  description:
    "Premium Iranian food, traditional bakery products, and grocery distribution across Canada and the United States.",
  keywords: [
    "Iranian food distribution Canada",
    "Iranian grocery wholesale Canada",
    "Persian food supplier North America",
    "Iranian bakery products wholesale",
    "Middle Eastern food distribution Canada",
    "Food supply chain Canada USA",
    "Iranian grocery supplier Toronto",
    "Persian food wholesale Canada"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "ANGABIN CANADA INC.",
    description:
      "B2B distribution and supply chain support for premium Iranian food products across North America.",
    url: siteUrl,
    siteName: "ANGABIN CANADA INC.",
    images: ["/brand/angabin-logo.png", "/images/iranian-food-distribution-hero.png"],
    locale: "en_CA",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
