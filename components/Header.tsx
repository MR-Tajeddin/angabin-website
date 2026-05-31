import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { company, navLinks } from "./siteData";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest-100 bg-white/95 backdrop-blur">
      <div className="container-shell flex min-h-20 items-center justify-between gap-6 py-3">
        <Link href="/" className="focus-ring flex items-center rounded-md">
          <Image
            src="/brand/angabin-logo.png"
            alt="ANGABIN CANADA INC. logo"
            width={220}
            height={160}
            priority
            className="h-14 w-auto object-contain md:h-16"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-md px-3 py-2 text-sm font-medium text-charcoal transition hover:bg-forest-50 hover:text-forest-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={company.emailHref}
          aria-label={`Email ${company.name}`}
          className="focus-ring hidden h-11 w-11 place-items-center rounded-md border border-forest-100 text-forest-800 transition hover:bg-forest-50 md:grid"
        >
          <Mail aria-hidden="true" className="h-5 w-5" />
        </a>
      </div>
      <nav
        aria-label="Mobile navigation"
        className="container-shell flex gap-1 overflow-x-auto border-t border-forest-50 py-2 lg:hidden"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="focus-ring whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium text-charcoal transition hover:bg-forest-50"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
