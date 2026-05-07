import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Sparkles, ShoppingBag, Check } from "lucide-react";
import { openConsultationModal } from "@/lib/modal-store";

const services = [
  "GEO / AEO", "SEO", "Paid Media",
  "Creative", "Content", "Social Media",
  "App Store", "Analytics", "Other"
];

export const Hero = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section id="home" className="relative overflow-hidden bg-background text-foreground">
      {/* background grid + glow */}
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial-brand" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />

      <div className="container-x relative pt-24 pb-16 md:pt-36 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            <span className="chip mb-10 animate-fade-up">
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              Automation-first digital growth agency
            </span>

            <h1 className="font-display text-3xl font-bold leading-[0.95] tracking-tight text-balance md:text-5xl lg:text-6xl animate-fade-up hover:scale-[1.02] transition-transform duration-700" style={{ animationDelay: "60ms" }}>
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

            <p className="mt-10 max-w-md text-base leading-relaxed text-foreground/80 md:text-lg animate-fade-up" style={{ animationDelay: "140ms" }}>
              We build websites, AI content, and automation systems that help businesses attract customers and grow faster.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70 animate-fade-up" style={{ animationDelay: "180ms" }}>
              Our automation-first approach eliminates bottlenecks, allowing your team to focus on high-impact strategy while our systems handle the heavy lifting.
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70 animate-fade-up" style={{ animationDelay: "220ms" }}>
              Whether you need a high-converting landing page or a custom AI agent, we deliver technical excellence that translates into measurable business growth.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "260ms" }}>
              <button onClick={openConsultationModal} className="btn-brand">
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="https://wa.me/918766910241?text=hello%20sanket"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/10 px-6 py-3 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center gap-4 animate-fade-up" style={{ animationDelay: "320ms" }}>
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&h=100&auto=format&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop&crop=faces",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop&crop=faces"
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Client"
                    className="h-10 w-10 rounded-full border-2 border-background object-cover shadow-sm"
                  />
                ))}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-brand/10 text-[10px] font-bold text-brand shadow-sm">
                  120+
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Sparkles key={i} className="h-3 w-3 text-brand" fill="currentColor" />
                  ))}
                </div>
                <p className="text-xs font-medium text-foreground/60">Trusted by 500+ businesses worldwide</p>
              </div>
            </div>
          </div>

          {/* Right Column: Service Selection Card */}
          <div className="relative animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="rounded-2xl border border-foreground/10 bg-paper px-6 py-12 shadow-card md:px-8 md:py-20">
              <h3 className="mb-10 font-display text-xl font-bold text-center md:text-2xl">
                How can we help you <span className="text-brand">get found?</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                {services.map((s) => {
                  const isSelected = selectedServices.includes(s);
                  return (
                    <button
                      key={s}
                      onClick={() => toggleService(s)}
                      className={`group flex items-center gap-2 rounded-xl border p-3 transition-all ${
                        isSelected 
                          ? "border-brand bg-brand/5 shadow-sm shadow-brand/10" 
                          : "border-foreground/5 bg-paper-muted hover:border-brand/40 hover:bg-brand/5"
                      }`}
                    >
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                        isSelected ? "border-brand bg-brand text-paper" : "border-foreground/20 bg-paper group-hover:border-brand"
                      }`}>
                        {isSelected ? <Check className="h-3 w-3" strokeWidth={3} /> : (
                          <div className="h-2 w-2 rounded-sm bg-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </div>
                      <span className={`text-[10px] font-semibold transition-colors ${isSelected ? "text-brand" : "text-foreground/70 group-hover:text-brand"}`}>
                        {s}
                      </span>
                    </button>
                  );
                })}
              </div>

              <button onClick={openConsultationModal} className="btn-brand mt-12 w-full py-4 text-center text-base">
                Get started
              </button>

              <p className="mt-6 text-center text-xs text-foreground/40">
                Pick your goals and let's build your plan.
              </p>
            </div>

            {/* Selection Cart (Floating Summary) */}
            {selectedServices.length > 0 && (
              <div className="absolute -bottom-6 -right-6 z-10 w-64 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="rounded-2xl border border-brand/20 bg-paper p-4 shadow-xl shadow-brand/10 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-paper">
                      <ShoppingBag className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-brand">Your Selection</div>
                      <div className="text-sm font-semibold">{selectedServices.length} Services Picked</div>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-brand/10 pt-3">
                    <button className="flex w-full items-center justify-between rounded-lg bg-brand/5 px-3 py-2 text-xs font-bold text-brand transition-colors hover:bg-brand hover:text-paper">
                      Next Step <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-brand/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-brand/5 blur-3xl" />
          </div>
        </div>

        {/* Metrics Bar */}
        <div className="mt-20 animate-fade-up" style={{ animationDelay: "500ms" }}>
          <div className="rounded-2xl border border-foreground/5 bg-paper p-6 shadow-sm md:rounded-full md:px-12 md:py-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4 md:divide-x md:divide-foreground/5">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-foreground md:text-3xl">120+</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Systems shipped</div>
              </div>
              <div className="text-center md:pl-4">
                <div className="font-display text-2xl font-bold text-foreground md:text-3xl">5×</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Avg. lead lift</div>
              </div>
              <div className="text-center md:pl-4">
                <div className="font-display text-2xl font-bold text-foreground md:text-3xl">24/7</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Automated follow-up</div>
              </div>
              <div className="text-center md:pl-4">
                <div className="font-display text-2xl font-bold text-foreground md:text-3xl">9 / 10</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-foreground/40">Client retention</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
