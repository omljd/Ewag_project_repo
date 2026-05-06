import { Check } from "lucide-react";

const outcomes = [
  "Attract qualified leads on autopilot",
  "Capture inquiries from every channel",
  "Automate follow-up via WhatsApp & email",
  "Build trust with premium, fast websites",
  "Convert visitors into paying customers",
  "Track every lead in one clean pipeline",
];

export const HowWeHelp = () => {
  return (
    <section className="bg-paper py-10 text-ink md:py-14 border-t border-ink/5">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
        <div>
          <span className="chip mb-5">How we help</span>
          <h2 className="font-display text-4xl font-bold leading-[1.05] text-balance md:text-5xl lg:text-6xl">
            We build <span className="text-brand">systems</span>, not just designs.
          </h2>
          <p className="mt-6 max-w-lg text-ink/70">
            Most agencies hand you a pretty website and disappear. We engineer
            an end-to-end growth engine — from the first click a customer
            makes, to the inquiry that lands in your CRM, to the WhatsApp
            follow-up that closes the deal.
          </p>

          <div className="mt-6 rounded-3xl border border-ink/10 bg-ink/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand">
              Outcome over output
            </p>
            <p className="mt-3 font-display text-2xl leading-snug text-ink">
              "EWAG turned our site into a real lead machine. We get qualified
              inquiries on WhatsApp every single day."
            </p>
            <p className="mt-4 text-sm text-ink/50">— Founder, Growth-stage clinic</p>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:mt-24">
          {outcomes.map((o) => (
            <li
              key={o}
              className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-ink/5 p-4 transition-colors hover:border-brand/40"
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-paper border border-ink/10 text-ink transition-colors group-hover:bg-brand group-hover:text-paper group-hover:border-brand">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium text-ink/90">{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
