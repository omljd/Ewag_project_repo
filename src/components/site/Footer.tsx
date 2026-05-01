import { MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-paper py-16 text-ink">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-paper font-display font-bold">E</span>
              <span className="font-display text-lg font-bold tracking-tight">EWAG<span className="text-brand">.</span></span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-ink/60">
              Websites · AI Content · Automation. We build systems that bring
              customers automatically.
            </p>
            <a href="https://wa.me/8766910241" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          <FooterCol title="Pages" items={["Home", "About", "Services", "Industries", "Portfolio", "Contact"]} />
          <FooterCol title="Services" items={["Websites", "Landing Pages", "AI Content", "Automation", "Lead Generation", "CRM Setup"]} />
          <FooterCol title="Legal" items={["Privacy Policy", "Terms of Use", "Refund Policy"]} />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 text-xs text-ink/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} EWAG Digital Services. All rights reserved.</p>
          <p>Automate. Generate. Grow.</p>
        </div>
      </div>
    </footer>
  );
};

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="md:col-span-2">
      <h4 className="text-xs font-semibold uppercase tracking-widest text-ink/40">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-sm text-ink/70 transition-colors hover:text-brand">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
