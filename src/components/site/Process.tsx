const steps = [
  { n: "01", title: "Understand the business", desc: "Goals, audience, offers, current funnel and gaps." },
  { n: "02", title: "Build the system", desc: "Premium website + landing pages with conversion architecture." },
  { n: "03", title: "Design the lead journey", desc: "Forms, qualification logic and capture across channels." },
  { n: "04", title: "Automate follow-up", desc: "WhatsApp + email sequences, reminders and routing." },
  { n: "05", title: "Optimize for growth", desc: "Track, iterate, scale what works, kill what doesn't." },
];

export const Process = () => {
  return (
    <section id="process" className="bg-background py-14 text-foreground">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="chip mb-5">Our process</span>
          <h2 className="font-display text-4xl font-bold leading-[1.05] text-balance md:text-6xl">
            Five steps to a <span className="text-brand">working growth engine</span>.
          </h2>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-foreground/5 bg-foreground/5 md:grid-cols-5">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative bg-background p-7 transition-colors hover:bg-brand/5"
            >
              <div className="font-display text-5xl font-bold text-brand">{s.n}</div>
              <h3 className="mt-6 font-display text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-4 top-10 hidden text-foreground/10 md:block">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
