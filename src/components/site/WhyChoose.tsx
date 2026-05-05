import { TrendingUp, Sparkles, Users, Zap, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: TrendingUp, t: "Growth-focused", d: "We measure success in inquiries, not pixels." },
  { icon: Zap, t: "Automation-first", d: "Every system is built to scale without you." },
  { icon: Users, t: "Custom approach", d: "No templates. Built around your business." },
  { icon: Sparkles, t: "Lead-gen native", d: "Conversion is the default, not an afterthought." },
  { icon: ShieldCheck, t: "Clean execution", d: "Premium delivery, on time, every time." },
];

export const WhyChoose = () => {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="chip mb-5">Why EWAG</span>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-balance md:text-5xl lg:text-6xl">
              The difference is in the <span className="text-brand">system</span>.
            </h2>
            <p className="mt-6 max-w-md text-ink/60">
              Anyone can ship a website. We ship a measurable growth engine —
              and stand behind it.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, t, d }, i) => (
              <div
                key={t}
                className={`rounded-3xl border border-ink/10 bg-paper-muted p-7 transition-colors hover:border-brand ${
                  i === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-paper">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-ink/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
