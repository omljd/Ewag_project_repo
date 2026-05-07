import { Stethoscope, Building2, GraduationCap, Store, Rocket, Briefcase } from "lucide-react";

const industries = [
  { 
    icon: Stethoscope, 
    name: "Clinics & Doctors", 
    problem: "Lost inquiries, no follow-up", 
    help: "Booking funnels + WhatsApp auto-reply",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop"
  },
  { 
    icon: Building2, 
    name: "Real Estate & Builders", 
    problem: "Cold leads, scattered data", 
    help: "Project pages + CRM pipeline",
    image: "https://images.unsplash.com/photo-1582408921715-18e7806365c1?q=80&w=600&auto=format&fit=crop"
  },
  { 
    icon: GraduationCap, 
    name: "Coaching & Education", 
    problem: "Low admission inquiries", 
    help: "Landing pages + lead nurturing",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop"
  },
  { 
    icon: Store, 
    name: "Local Businesses", 
    problem: "Weak online presence", 
    help: "Premium site + Google + WhatsApp",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=600&auto=format&fit=crop"
  },
  { 
    icon: Rocket, 
    name: "Startups & SMEs", 
    problem: "No growth system in place", 
    help: "End-to-end growth stack",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop"
  },
  { 
    icon: Briefcase, 
    name: "Consultants & Services", 
    problem: "Inconsistent inquiries", 
    help: "Authority site + automation",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop"
  },
];

export const Industries = () => {
  return (
    <section id="industries" className="bg-paper-muted py-14 md:py-20">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl md:max-w-full">
            <span className="chip mb-5">Industries we serve</span>
            <h2 className="font-display text-2xl font-bold leading-[1.05] text-balance md:text-4xl lg:text-5xl">
              Built for businesses that need <span className="text-brand">real results</span>.
            </h2>
          </div>
          <p className="max-w-md text-base text-ink/60">
            We tailor every system to your industry — the way leads behave in
            real estate is nothing like a clinic or coaching institute.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ icon: Icon, name, problem, help, image }) => (
            <div
              key={name}
              className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-paper transition-all hover:border-brand hover:shadow-card"
            >
              {/* Image Header */}
              <div className="h-40 w-full overflow-hidden">
                <img 
                  src={image} 
                  alt={name} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent opacity-60" />
              </div>

              <div className="relative p-6 -mt-12">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-paper border border-ink/10 text-ink shadow-sm transition-colors group-hover:bg-brand group-hover:text-paper group-hover:border-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{name}</h3>
                <div className="mt-4 space-y-2 text-sm">
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
