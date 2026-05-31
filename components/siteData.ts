import {
  BadgeCheck,
  Building2,
  Globe2,
  Handshake,
  Leaf,
  PackageCheck,
  Ship,
  Store,
  Truck,
  Wheat
} from "lucide-react";

export const company = {
  name: "ANGABIN CANADA INC.",
  establishedYear: "2022",
  domain: "jamangabin.com",
  displayDomain: "www.jamangabin.com",
  email: "info@jamangabin.com",
  emailHref: "mailto:info@jamangabin.com",
  phone: "+1 437-452-1109",
  phoneHref: "tel:+14374521109",
  whatsAppHref: "https://wa.me/14374521109",
  address: "2967 Dundas Street W, Unit 1140, Toronto, ON M6P 1Z2, Canada",
  addressLines: [
    "2967 Dundas Street W, Unit 1140",
    "Toronto, ON M6P 1Z2",
    "Canada"
  ],
  linkedIn: "https://www.linkedin.com/in/majiid-jahanbakhshi-49489a330"
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/distribution", label: "Distribution" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact" }
];

export const productCategories = [
  {
    title: "Premium Iranian Food Products",
    description:
      "Carefully sourced food categories selected for commercial buyers serving Persian and Middle Eastern customers.",
    icon: Leaf
  },
  {
    title: "Traditional Bakery Products",
    description:
      "Bakery-focused supply opportunities for retailers, restaurants, and specialty food operators.",
    icon: Wheat
  },
  {
    title: "Grocery & Pantry Items",
    description:
      "Shelf-stable grocery and pantry categories suited to supermarket and specialty retail programs.",
    icon: Store
  },
  {
    title: "Wholesale & Commercial Supply",
    description:
      "Category-based supply solutions for wholesale buyers and long-term commercial partners.",
    icon: PackageCheck
  }
];

export const features = [
  {
    title: "Reliable Supply Chain",
    description:
      "Clear coordination from sourcing conversations through commercial delivery planning.",
    icon: Truck
  },
  {
    title: "Premium Product Sourcing",
    description:
      "A focused approach to high-quality Iranian food, bakery, and grocery categories.",
    icon: BadgeCheck
  },
  {
    title: "Canada & U.S. Market Focus",
    description:
      "Built around the needs of North American retailers, foodservice buyers, and import channels.",
    icon: Globe2
  },
  {
    title: "Long-Term Commercial Partnerships",
    description:
      "Practical B2B communication for buyers looking for consistency and professional follow-through.",
    icon: Handshake
  }
];

export const partnerAudiences = [
  "Grocery stores",
  "Supermarkets",
  "Specialty food retailers",
  "Restaurants",
  "Bakeries",
  "Wholesale buyers",
  "Import/export partners"
];

export const distributionItems = [
  {
    title: "Sourcing Coordination",
    description:
      "Supporting commercial conversations around Iranian food, bakery, and grocery product categories.",
    icon: Building2
  },
  {
    title: "Supply Chain Management",
    description:
      "Organized communication and planning for buyers evaluating reliable commercial supply.",
    icon: Ship
  },
  {
    title: "Wholesale Distribution Support",
    description:
      "Category-based support for stores, restaurants, bakeries, and wholesale buyers.",
    icon: Truck
  },
  {
    title: "Cross-Border Market Focus",
    description:
      "Commercial supply planning with attention to Canada and United States market needs.",
    icon: Globe2
  }
];
