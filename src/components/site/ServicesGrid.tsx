import { ArrowUpRight, Globe, Layout, Sparkles, MessageCircle, Magnet, Database, Megaphone, Wrench } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Business websites, corporate pages, service-based websites, responsive design,and modern UI." },
  { icon: Layout, title: "Landing Pages & Funnels", desc: "Campaign pages, offer pages, and lead-generation funnels designed to convert." },
  { icon: Sparkles, title: "AI Content Creation", desc: "AI-assisted content support, marketing content ideas, short-form contentstrategy, and branded assets." },
  { icon: Megaphone, title: "Social Media Creative", desc: "Instagram creatives, ad creatives, campaign graphics, and promotional visuals." },
  { icon: MessageCircle, title: "WhatsApp Automation", desc: "Instant inquiry handling, auto replies, qualification flow, and follow-up support." },
  { icon: Magnet, title: "Lead Generation Systems", desc: "Contact forms, inquiry systems, funnel-based capture, and conversion journey setup." },
  { icon: Database, title: "CRM & Lead Tracking", desc: "Lead collection sheet or system, inquiry tracking, pipeline visibility, and follow-upstructure." },
  { icon: Wrench, title: "Maintenance & Support", desc: "Website updates, content edits, performance checks, and ongoing support." },
];

export const ServicesGrid = () => {
  return (
    <section className="bg-paper py-14 md:py-20">
      <div className="container-x">
        <div className="mx-auto text-center px-4 md:px-6 lg:px-8">
          <span className="chip mb-5">Services</span>
          <h2 className="font-display text-3xl font-bold leading-[1.1] text-balance md:text-5xl lg:text-6xl">
            Everything your business needs to <span className="text-brand">grow online</span>.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <a
              key={title}
              href="#contact"
              className="group relative flex flex-col bg-paper p-7 transition-colors hover:bg-paper-muted"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-paper border border-ink/10 text-ink transition-colors group-hover:bg-brand group-hover:text-paper group-hover:border-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{desc}</p>
              <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-ink/30 transition-all group-hover:text-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
