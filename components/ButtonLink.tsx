import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  const styles =
    variant === "primary"
      ? "bg-forest-700 text-white hover:bg-forest-800"
      : "border border-forest-200 bg-white text-forest-800 hover:border-forest-500 hover:bg-forest-50";

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition ${styles}`}
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
