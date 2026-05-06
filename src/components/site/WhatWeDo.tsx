import { Globe, Bot, Zap, Target, ArrowUpRight } from "lucide-react";

const cards = [
  {
    icon: Globe,
    title: "Website Development",
    body: "Premium business sites engineered for speed, trust and conversion.",
    tag: "01",
  },
  {
    icon: Bot,
    title: "AI Content",
    body: "AI-assisted copy, creatives and short-form content that actually performs.",
    tag: "02",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    body: "WhatsApp auto-replies, follow-ups and workflows that never sleep.",
    tag: "03",
  },
  {
    icon: Target,
    title: "Lead Generation",
    body: "Funnels, forms and capture journeys built to convert visitors into inquiries.",
    tag: "04",
  },
];

export const WhatWeDo = () => {
  return (
    <section id="services" className="bg-paper py-10 md:py-14">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="chip mb-5">What we do</span>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-balance md:text-6xl">
              Four building blocks of a <span className="text-brand">growth system</span>.
            </h2>
          </div>
          <p className="max-w-md text-base text-ink/60">
            Each service slots into the next — design feeds traffic, traffic feeds
            automation, automation feeds revenue.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, body, tag }) => (
            <a
              key={title}
              href="#contact"
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-ink/10 bg-paper p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-brand hover:shadow-brand"
            >
              <div className="absolute right-5 top-5 text-xs font-semibold tracking-widest text-ink/30 group-hover:text-brand/50">
                {tag}
              </div>
              <div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-paper border border-ink/10 text-ink transition-colors group-hover:bg-brand group-hover:text-paper group-hover:border-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {body}
                </p>
              </div>
              <div className="mt-10 flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-brand">
                Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
