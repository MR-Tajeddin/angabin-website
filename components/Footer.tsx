import Image from "next/image";
import Link from "next/link";
import { Globe2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company, navLinks } from "./siteData";

export function Footer() {
  return (
    <footer className="border-t border-forest-100 bg-forest-900 text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/brand/angabin-logo.png"
            alt="ANGABIN CANADA INC. logo"
            width={180}
            height={130}
            className="h-20 w-auto rounded-md bg-white object-contain p-2"
          />
          <p className="mt-4 text-lg font-bold">{company.name}</p>
          <p className="mt-2 text-sm font-semibold text-forest-100">
            Established {company.establishedYear}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-forest-100">
            Premium Iranian food, traditional bakery, and grocery distribution
            for commercial partners across Canada and the United States.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-forest-100">
            Contact
          </p>
          <div className="mt-4 space-y-3 text-sm text-forest-50">
            <a href={company.emailHref} className="flex gap-2 hover:text-white">
              <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              {company.email}
            </a>
            <p className="flex gap-2 leading-6">
              <Globe2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              Website: {company.displayDomain}
            </p>
            <a href={company.phoneHref} className="flex gap-2 hover:text-white">
              <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              {company.phone}
            </a>
            <a
              href={company.whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 hover:text-white"
            >
              <MessageCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
              WhatsApp: {company.phone}
            </a>
            <p className="flex gap-2 leading-6">
              <MapPin aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
              {company.address}
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-forest-100">
            Navigation
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-forest-50 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell py-5 text-sm text-forest-100">
          Copyright © {new Date().getFullYear()} {company.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
