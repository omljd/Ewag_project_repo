import { ArrowUpRight } from "lucide-react";

const logos = [
  "CLINIQA", "ESTATE&CO", "MENTORX", "URBANBITES", "NOVASTART",
  "BRIGHTPATH", "FORMA REALTY", "DENTLAB", "GROWMORE",
];

export const Marquee = () => {
  return (
    <section className="border-y border-ink/10 bg-paper py-6">
      <div className="container-x mb-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink/50">
          Trusted by ambitious businesses
        </p>
        <a href="#work" className="hidden items-center gap-1 text-xs font-semibold uppercase tracking-widest text-ink/60 hover:text-brand md:inline-flex">
          See work <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>
      <div className="relative overflow-hidden">
        <div className="marquee flex w-max gap-14 whitespace-nowrap">
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="font-display text-2xl font-bold tracking-tight text-ink/20 transition-all hover:text-brand hover:scale-105 md:text-3xl cursor-default select-none"
            >
              {l}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-paper to-transparent" />
      </div>
    </section>
  );
};
