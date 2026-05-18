import { useState, useEffect } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Check, Calendar, Clock, Sparkles, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  "Website Development", "Landing Pages & Funnels", "AI Content Systems",
  "WhatsApp Automation", "Lead Generation", "Full-stack SaaS",
  "Cloud Automations", "Maintenance & Support",
];

const BookConsultationPage = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState(services[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Book a Consultation — EWAG Digital Services";
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("website") || "N/A",
      service: selectedService,
      message: formData.get("message") || "",
      businessType: "Dedicated Booking Page"
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
          title: "Booking Request Sent! ✦",
          description: "We've received your details and will contact you shortly to confirm the slot.",
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
    <main className="min-h-screen bg-paper">
      <Header />
      
      <div className="relative pt-32 pb-20">
        <div className="absolute inset-0 grid-lines opacity-60" />
        <div className="pointer-events-none absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-brand/5 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-brand/10 blur-[100px]" />

        <div className="container-x relative">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
              {/* Left Column: Info & Trust */}
              <div className="flex flex-col justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="chip mb-6">
                    <Calendar className="h-3.5 w-3.5 text-brand" />
                    Consultation
                  </span>
                  <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl text-ink">
                    Ready to <span className="text-brand">automate</span> your growth?
                  </h1>
                  <p className="mt-6 text-lg text-ink/60">
                    Book a free 30-minute strategy call. We'll analyze your current systems and show you exactly how to scale using AI and automation.
                  </p>

                  <div className="mt-10 space-y-6">
                    {[
                      { icon: Clock, title: "30-min Strategy Session", desc: "A focused call to understand your goals." },
                      { icon: Sparkles, title: "Custom Growth Plan", desc: "We'll draft a roadmap specifically for you." },
                      { icon: MessageSquare, title: "Direct Expert Access", desc: "Speak directly with our technical leads." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-ink/10 bg-paper shadow-sm">
                          <item.icon className="h-5 w-5 text-brand" />
                        </div>
                        <div>
                          <h3 className="font-bold text-ink">{item.title}</h3>
                          <p className="text-sm text-ink/50">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 rounded-3xl border border-ink/10 bg-ink/5 p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="h-10 w-10 rounded-full border-2 border-paper bg-ink/10 overflow-hidden">
                             <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" className="h-full w-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-ink">Trusted by 50+ founders</div>
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <svg key={s} className="h-3 w-3 fill-brand text-brand" viewBox="0 0 20  20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: The Form */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <form 
                  onSubmit={onSubmit} 
                  className="rounded-[2.5rem] border border-ink/5 bg-paper p-6 shadow-2xl shadow-brand/5 md:p-10"
                >
                  <h2 className="mb-8 font-display text-2xl font-bold text-ink">Fill in your details</h2>
                  
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Field label="Full Name" name="name" placeholder="John Wick" required />
                    <Field label="Work Email" name="email" type="email" placeholder="john@company.com" required />
                    <Field label="Phone Number" name="phone" placeholder="+91 98765 43210" required />
                    <Field label="Website URL (Optional)" name="website" placeholder="www.yourcompany.com" />
                    
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink/40">Which service are you interested in?</label>
                      <div className="grid grid-cols-2 gap-2">
                        {services.map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setSelectedService(s)}
                            className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-left text-xs font-semibold transition-all ${
                              selectedService === s 
                                ? "border-brand bg-brand/5 text-brand" 
                                : "border-ink/5 bg-ink/[0.03] text-ink/60 hover:border-brand/40"
                            }`}
                          >
                            <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${selectedService === s ? "border-brand bg-brand" : "border-ink/20"}`}>
                              {selectedService === s && <Check className="h-2.5 w-2.5 text-paper" strokeWidth={4} />}
                            </div>
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink/40">Additional Context</label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project, current challenges, or what you hope to achieve..."
                        className="w-full resize-none rounded-2xl border border-ink/10 bg-ink/[0.03] px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-paper"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-brand mt-8 h-14 w-full text-base disabled:opacity-70"
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Scheduling...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Request Consultation <ArrowRight className="h-5 w-5" />
                      </span>
                    )}
                  </button>
                  <p className="mt-4 text-center text-[10px] uppercase tracking-widest text-ink/30">
                    Secure & Confidential · No commitment required
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

const Field = ({ label, name, type = "text", placeholder, required }: any) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-bold uppercase tracking-widest text-ink/40">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="rounded-2xl border border-ink/10 bg-ink/[0.03] px-4 py-3 text-sm text-ink outline-none transition focus:border-brand focus:bg-paper placeholder:text-ink/20"
    />
  </div>
);

export default BookConsultationPage;
