import { ArrowUpRight } from "lucide-react";

const work = [
  { cat: "Website", title: "Cliniqa Wellness", result: "+312% inquiries in 60 days", tools: "Next.js · WhatsApp API · CRM" },
  { cat: "Funnel", title: "Estate&Co Launch", result: "1,400 qualified leads at ₹18 CPL", tools: "Landing · Meta Ads · Sheets" },
  { cat: "Automation", title: "MentorX Admissions", result: "80% inquiries auto-qualified", tools: "WhatsApp Flow · Zapier" },
  { cat: "Creative", title: "UrbanBites Campaign", result: "5.2× ROAS on launch ads", tools: "AI Content · Reels · Ads" },
];

const testimonials = [
  { q: "EWAG didn't just redesign our site — they rebuilt how we sell.", a: "Co-founder, Real Estate" },
  { q: "WhatsApp automation alone paid for the project in 3 weeks.", a: "Director, Coaching Institute" },
  { q: "Inquiries finally feel predictable. The pipeline is full.", a: "Owner, Multi-clinic chain" },
];

export const Work = () => {
  return (
    <section id="work" className="bg-paper-muted py-14 md:py-20">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="chip mb-5">Selected work</span>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-balance md:text-6xl">
              Real systems. <span className="text-brand">Real results.</span>
            </h2>
          </div>
          <a href="#contact" className="text-sm font-semibold text-ink hover:text-brand">
            See full case studies →
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {work.map((w) => (
            <div
              key={w.title}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-paper p-7 transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-start justify-between">
                <span className="chip">{w.cat}</span>
                <ArrowUpRight className="h-5 w-5 text-ink/40 transition-all group-hover:text-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="mt-8 font-display text-2xl font-semibold md:text-3xl">
                {w.title}
              </h3>
              <p className="mt-2 font-display text-xl text-brand">{w.result}</p>
              <p className="mt-6 text-xs uppercase tracking-widest text-ink/40">
                {w.tools}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.q}
              className="rounded-3xl border border-ink/10 bg-paper p-7"
            >
              <div className="font-display text-3xl leading-none text-brand">"</div>
              <blockquote className="mt-2 text-base leading-relaxed text-ink/80">
                {t.q}
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-widest text-ink/40">
                {t.a}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
