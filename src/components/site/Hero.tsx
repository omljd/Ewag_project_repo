import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-ink text-paper">
      {/* background grid + glow */}
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial-brand" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />

      <div className="container-x relative pt-36 pb-28 md:pt-44 md:pb-36">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="chip-dark mb-6 animate-fade-up">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Automation-first digital growth agency
          </span>

          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-8xl animate-fade-up" style={{ animationDelay: "60ms" }}>
            Automate.<br />
            Generate.{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-brand bg-clip-text text-transparent">Grow.</span>
              <svg
                viewBox="0 0 200 12"
                className="absolute -bottom-2 left-0 h-3 w-full text-brand"
                preserveAspectRatio="none"
              >
                <path d="M2 8 Q 50 2 100 6 T 198 5" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70 md:text-xl animate-fade-up" style={{ animationDelay: "140ms" }}>
            We build websites, AI content, and automation systems that help businesses attract customers and grow faster.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "220ms" }}>
            <a href="/contact" className="btn-brand">
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/918766910241?text=hello%20sanket"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-paper"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>

          <p className="mt-12 max-w-xl text-sm italic text-paper/50 animate-fade-up" style={{ animationDelay: "300ms" }}>
            "We don't just create websites. We build systems that bring customers automatically."
          </p>
        </div>

        {/* metrics strip */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-paper/10 bg-paper/5 md:grid-cols-4 animate-fade-up" style={{ animationDelay: "380ms" }}>
          {[
            { k: "120+", v: "Systems shipped" },
            { k: "5×", v: "Avg. lead lift" },
            { k: "24/7", v: "Automated follow-up" },
            { k: "9 / 10", v: "Client retention" },
          ].map((m) => (
            <div key={m.v} className="bg-ink p-6 text-center md:p-8">
              <div className="font-display text-3xl font-bold text-paper md:text-4xl">
                {m.k}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-paper/50">
                {m.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
