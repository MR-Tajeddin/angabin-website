import { MessageCircle } from "lucide-react";
import { company } from "./siteData";

export function FloatingWhatsApp() {
  return (
    <a
      href={company.whatsAppHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact ANGABIN CANADA INC. on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-md bg-forest-700 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-forest-800"
    >
      <MessageCircle aria-hidden="true" className="h-5 w-5" />
    </a>
  );
}
