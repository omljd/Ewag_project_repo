import { Stethoscope, Building2, GraduationCap, Store, Rocket, Briefcase } from "lucide-react";

const industries = [
  { icon: Stethoscope, name: "Clinics & Doctors", problem: "Lost inquiries, no follow-up", help: "Booking funnels + WhatsApp auto-reply" },
  { icon: Building2, name: "Real Estate & Builders", problem: "Cold leads, scattered data", help: "Project pages + CRM pipeline" },
  { icon: GraduationCap, name: "Coaching & Education", problem: "Low admission inquiries", help: "Landing pages + lead nurturing" },
  { icon: Store, name: "Local Businesses", problem: "Weak online presence", help: "Premium site + Google + WhatsApp" },
  { icon: Rocket, name: "Startups & SMEs", problem: "No growth system in place", help: "End-to-end growth stack" },
  { icon: Briefcase, name: "Consultants & Services", problem: "Inconsistent inquiries", help: "Authority site + automation" },
];

export const Industries = () => {
  return (
    <section id="industries" className="bg-paper-muted py-10 md:py-14">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl md:max-w-full">
            <span className="chip mb-5">Industries we serve</span>
            <h2 className="font-display text-4xl font-bold leading-[1.05] text-balance md:text-5xl lg:text-6xl">
              Built for businesses that need <span className="text-brand">real results</span>.
            </h2>
          </div>
          <p className="max-w-md text-base text-ink/60">
            We tailor every system to your industry — the way leads behave in
            real estate is nothing like a clinic or coaching institute.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, name, problem, help }) => (
            <div
              key={name}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-paper p-6 transition-all hover:border-brand hover:shadow-card"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand/5 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-paper border border-ink/10 text-ink transition-colors group-hover:bg-brand group-hover:text-paper group-hover:border-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold">{name}</h3>
                <div className="mt-5 space-y-2 text-sm">
                  <p className="text-ink/60">
                    <span className="font-semibold text-ink/80">Problem · </span>
                    {problem}
                  </p>
                  <p className="text-ink/60">
                    <span className="font-semibold text-brand">We help · </span>
                    {help}
                  </p>
                </div>
                <a href="#contact" className="mt-6 inline-flex text-sm font-semibold text-ink hover:text-brand">
                  Get a tailored plan →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
