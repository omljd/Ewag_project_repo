import { ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  crumbs: Crumb[];
  showForm?: boolean;
}

export const PageHero = ({ eyebrow, title, description, crumbs, showForm = true }: PageHeroProps) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      company: "N/A",
      message: `Inquiry from ${eyebrow} page hero`,
      businessType: "Hero Form"
    };

    try {
      const res = await fetch("http://localhost:5000/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        (e.target as HTMLFormElement).reset();
        toast({
          title: "Inquiry received ✦",
          description: "We'll reach out within a few business hours.",
        });
      } else {
        toast({ title: "Error", description: "Failed to send request", variant: "destructive" });
      }
    } catch (error) {
      toast({ title: "Error", description: "Connection error", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial-brand" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />

      <div className="container-x relative pt-24 pb-16 md:pt-32 md:pb-24">
        <div className={`grid grid-cols-1 gap-8 items-center ${showForm ? "lg:grid-cols-12" : "max-w-4xl"}`}>
          {/* Left Column - Content */}
          <div className={showForm ? "lg:col-span-7" : "lg:col-span-12"}>
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
                className="font-display text-3xl font-bold leading-[1.0] tracking-tight text-balance md:text-5xl lg:text-6xl animate-fade-up"
                style={{ animationDelay: "60ms" }}
              >
                {title}
              </h1>
              <p
                className={`mt-6 text-base leading-relaxed text-ink/60 md:text-lg animate-fade-up ${showForm ? "max-w-2xl" : "max-w-3xl"}`}
                style={{ animationDelay: "140ms" }}
              >
                {description}
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          {showForm && (
            <div className="lg:col-span-5 animate-fade-up" style={{ animationDelay: "220ms" }}>
              <div className="rounded-2xl border border-ink/10 bg-paper backdrop-blur-sm p-5 shadow-card">
                <h3 className="font-display text-xl font-semibold text-ink mb-3">Get Started</h3>
                <p className="text-sm text-ink/60 mb-4">Schedule your free consultation</p>
                
                <form onSubmit={onSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="w-full rounded-lg bg-ink/5 border border-ink/10 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email Address"
                      className="w-full rounded-lg bg-ink/5 border border-ink/10 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Phone Number"
                      className="w-full rounded-lg bg-ink/5 border border-ink/10 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-brand/50 focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                    />
                  </div>
                  <div>
                    <select
                      name="service"
                      required
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
                    disabled={submitting}
                    className="w-full rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-paper hover:bg-brand/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand/20 disabled:opacity-70"
                  >
                    {submitting ? "Sending..." : "Book Free Consultation"}
                  </button>
                </form>
                
                <div className="mt-3 pt-3 border-t border-ink/10">
                  <p className="text-xs text-ink/40 text-center">
                    No spam, ever. Your data is secure.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
