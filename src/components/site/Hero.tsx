import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-background text-foreground">
      {/* background grid + glow */}
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial-brand" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />

      <div className="container-x relative pt-36 pb-28 md:pt-44 md:pb-40">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            <span className="chip mb-6 animate-fade-up">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              Automation-first digital growth agency
            </span>

            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-8xl animate-fade-up hover:scale-[1.02] transition-transform duration-700" style={{ animationDelay: "60ms" }}>
              Automate.<br />
              Generate.{" "}
              <span className="relative inline-block text-brand">
                <span className="bg-gradient-brand bg-clip-text text-transparent">Grow.</span>
                <svg
                  viewBox="0 0 200 12"
                  className="absolute -bottom-2 left-0 h-3 w-full text-brand/30"
                  preserveAspectRatio="none"
                >
                  <path d="M2 8 Q 50 2 100 6 T 198 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl animate-fade-up" style={{ animationDelay: "140ms" }}>
              We build websites, AI content, and automation systems that help businesses attract customers and grow faster.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "220ms" }}>
              <a href="/contact" className="btn-brand">
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/918766910241?text=hello%20sanket"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/10 px-6 py-3 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>

            {/* metrics strip - mini version for left side */}
            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-foreground/5 pt-10 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">120+</div>
                <div className="text-xs uppercase tracking-widest text-foreground/50">Systems shipped</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-foreground">5×</div>
                <div className="text-xs uppercase tracking-widest text-foreground/50">Avg. lead lift</div>
              </div>
            </div>
          </div>

          {/* Right Column: Service Selection Card */}
          <div className="relative animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="rounded-3xl border border-foreground/10 bg-paper p-8 shadow-card md:p-10">
              <h3 className="mb-8 font-display text-2xl font-bold text-center">
                How can we help you <span className="text-brand">get found?</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {[
                  "GEO / AEO", "SEO", "Paid Media",
                  "Creative", "Content", "Social Media",
                  "App Store", "Analytics", "Other"
                ].map((s) => (
                  <label key={s} className="group flex cursor-pointer items-center gap-3 rounded-xl border border-foreground/5 bg-paper-muted p-4 transition-all hover:border-brand/40 hover:bg-brand/5">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border border-foreground/20 bg-paper transition-colors group-hover:border-brand">
                      <div className="h-2 w-2 rounded-sm bg-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="text-xs font-semibold text-foreground/70 group-hover:text-brand">{s}</span>
                  </label>
                ))}
              </div>

              <a href="/contact" className="btn-brand mt-8 w-full text-center">
                Get started
              </a>

              <p className="mt-4 text-center text-xs text-foreground/40">
                Pick your goals and let's build your plan.
              </p>
            </div>

            {/* decorative blobs */}
            <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-brand/5 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
