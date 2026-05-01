import { MessageCircle } from "lucide-react";

export function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/918766910241?text=hello%20sanket"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="pulse-glow fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand text-brand-foreground shadow-brand transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
