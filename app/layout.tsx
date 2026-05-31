import type { Metadata } from "next";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ANGABIN CANADA INC.",
  url: "https://www.jamangabin.com",
  logo: "https://www.jamangabin.com/brand/angabin-logo.png",
  email: "info@jamangabin.com",
  telephone: "+1 437-452-1109",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2967 Dundas Street W, Unit 1140",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M6P 1Z2",
    addressCountry: "CA"
  },
  foundingDate: "2022"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jamangabin.com"),
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
  openGraph: {
    title: "ANGABIN CANADA INC.",
    description:
      "B2B distribution and supply chain support for premium Iranian food products across North America.",
    url: "https://www.jamangabin.com",
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
