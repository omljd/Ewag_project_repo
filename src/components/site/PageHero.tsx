import { ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  crumbs: Crumb[];
}

export const PageHero = ({ eyebrow, title, description, crumbs }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-paper-muted text-ink">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <div className="absolute inset-0 bg-gradient-radial-brand opacity-30" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />

      <div className="container-x relative pt-36 pb-20 md:pt-40 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-8 animate-fade-up">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium text-ink/60">
                {crumbs.map((c, i) => {
                  const last = i === crumbs.length - 1;
                  return (
                    <li key={i} className="inline-flex items-center gap-1.5">
                      {c.to && !last ? (
                        <Link to={c.to} className="rounded-full px-2 py-1 transition-colors hover:bg-ink/5 hover:text-brand">
                          {c.label}
                        </Link>
                      ) : (
                        <span className="rounded-full bg-ink/5 px-2 py-1 text-ink">{c.label}</span>
                      )}
                      {!last && <ChevronRight className="h-3.5 w-3.5 text-ink/20" />}
                    </li>
                  );
                })}
              </ol>
            </nav>

            <div>
              <span className="chip mb-6 animate-fade-up">
                <Sparkles className="h-3.5 w-3.5 text-brand" />
                {eyebrow}
              </span>
              <h1
                className="font-display text-4xl font-bold leading-[1.0] tracking-tight text-balance md:text-6xl lg:text-7xl animate-fade-up"
                style={{ animationDelay: "60ms" }}
              >
                {title}
              </h1>
              <p
                className="mt-6 max-w-2xl text-base leading-relaxed text-ink/60 md:text-lg animate-fade-up"
                style={{ animationDelay: "140ms" }}
              >
                {description}
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "220ms" }}>
            <div className="rounded-2xl border border-ink/10 bg-paper backdrop-blur-sm p-6 shadow-card">
              <h3 className="font-display text-xl font-semibold text-ink mb-4">Get Started</h3>
              <p className="text-sm text-ink/60 mb-6">Schedule your free consultation</p>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg bg-ink/5 border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-lg bg-ink/5 border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-lg bg-ink/5 border border-ink/10 px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                  />
                </div>
                <div>
                  <select
                    className="w-full rounded-lg bg-ink/5 border border-ink/10 px-4 py-3 text-sm text-ink focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                  >
                    <option value="">Select Service</option>
                    <option value="website">Website Development</option>
                    <option value="ai">AI Content Solutions</option>
                    <option value="automation">Marketing Automation</option>
                    <option value="growth">Growth Systems</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand px-4 py-3 text-sm font-medium text-paper hover:bg-brand/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/20"
                >
                  Book Free Consultation
                </button>
              </form>
              
              <div className="mt-4 pt-4 border-t border-ink/10">
                <p className="text-xs text-ink/40 text-center">
                  No spam, ever. Your data is secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
