import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, MessageCircle, Mail, Phone, MapPin, Instagram, Linkedin } from "lucide-react";

const services = [
  "Website Development", "Landing Pages & Funnels", "AI Content",
  "WhatsApp Automation", "Lead Generation", "CRM Setup",
  "Social Media Creative", "Maintenance & Support",
];

export const Contact = ({ hideBackground = false }: { hideBackground?: boolean }) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      company: formData.get("business"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      service: formData.get("service"),
      businessType: formData.get("businessType"),
      message: formData.get("message"),
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
        toast({
          title: "Something went wrong",
          description: "Please try again or contact us via WhatsApp.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Connection error",
        description: "Failed to connect to the server. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`relative overflow-hidden ${hideBackground ? "" : "bg-background"} py-10 text-ink md:py-14`}>
      {!hideBackground && (
        <>
          <div className="absolute inset-0 grid-lines opacity-60" />
          <div className="absolute inset-0 bg-gradient-radial-brand" />
          <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
        </>
      )}

      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          {/* Left */}
          <div>
            <span className="chip mb-5">Let's talk</span>
            <h2 className="font-display text-2xl font-bold leading-[1.02] text-balance md:text-4xl">
              Let's build your <span className="text-brand">growth system</span>.
            </h2>
            <p className="mt-6 max-w-md text-ink/60">
              Tell us about your business. We'll send back a clear plan, a quote,
              and a 30-min consultation slot — usually within the same day.
            </p>

            <div className="mt-8 space-y-4">
              <a href="https://wa.me/918766910241?text=hello%20sanket" target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-ink/10 bg-paper p-5 transition-colors hover:border-brand">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-paper border border-ink/10 text-ink group-hover:bg-brand group-hover:text-paper group-hover:border-brand transition-colors"><MessageCircle className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-ink/50">WhatsApp</div>
                  <div className="font-medium">+91 87669 10241</div>
                </div>
              </a>
              <a href="mailto:hello@ewag.in" className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-paper p-5 transition-colors hover:border-brand">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-paper border border-ink/10 text-ink group-hover:bg-brand group-hover:text-paper group-hover:border-brand transition-colors"><Mail className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-ink/50">Email</div>
                  <div className="font-medium">hello@ewag.in</div>
                </div>
              </a>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-paper p-5 transition-colors hover:border-brand">
                  <Phone className="h-4 w-4 text-brand" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
                <a 
                  href="https://maps.google.com/?q=Pune,Maharashtra" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 rounded-2xl border border-ink/10 bg-paper p-5 transition-colors hover:border-brand group/loc"
                >
                  <MapPin className="h-4 w-4 text-brand group-hover/loc:scale-110 transition-transform" />
                  <span className="text-sm">Pune, Maharashtra · Hybrid</span>
                </a>
              </div>
              <div className="flex gap-3 pt-2">
                {[Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 transition-colors hover:bg-brand hover:text-paper">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="rounded-3xl border border-paper/10 bg-paper p-5 text-ink shadow-ink md:p-8">
            <div className="grid gap-2 sm:grid-cols-2">
              <Field label="Your Name" name="name" placeholder="Jane Doe" required />
              <Field label="Business Name" name="business" placeholder="Acme Co." required />
              <Field label="Phone" name="phone" placeholder="+91 ..." required />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
              <div className="sm:col-span-2">
                <Label>Service interested in</Label>
                <select name="service" className="mt-1 w-full rounded-xl border border-ink/10 bg-ink/[0.03] px-3.5 py-2 text-sm outline-none transition focus:border-brand focus:bg-paper">
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <Field label="Business Type" name="businessType" placeholder="Clinic, Real Estate, Coaching..." className="sm:col-span-2" />
              <div className="sm:col-span-2">
                <Label>Tell us what you need</Label>
                <textarea
                  name="message"
                  rows={2}
                  required
                  placeholder="Goals, current challenges, timeline..."
                  className="mt-1 w-full resize-none rounded-xl border border-ink/10 bg-ink/[0.03] px-3.5 py-2 text-sm outline-none transition focus:border-brand focus:bg-paper"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="btn-brand mt-3 w-full disabled:opacity-60"
            >
              {submitting ? "Sending..." : <>Send Inquiry <ArrowRight className="h-4 w-4" /></>}
            </button>
            <p className="mt-4 text-center text-xs text-ink/50">
              We respond within a few business hours. Your details stay private.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="text-xs font-semibold uppercase tracking-widest text-ink/60">{children}</label>
);

const Field = ({
  label, name, type = "text", placeholder, required, className = "",
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean; className?: string }) => (
  <div className={className}>
    <Label>{label}</Label>
    <input
      name={name}
      type={type}
      required={required}
      placeholder={placeholder}
      className="mt-1 w-full rounded-xl border border-ink/10 bg-ink/[0.03] px-3.5 py-2 text-sm outline-none transition placeholder:text-ink/30 focus:border-brand focus:bg-paper"
    />
  </div>
);
