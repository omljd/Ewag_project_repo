import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "@/components/ui/dialog";
import { ArrowRight, Check, Calendar, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { setModalTrigger } from "@/lib/modal-store";

const services = [
  "Website Development", "Landing Pages & Funnels", "AI Content Systems",
  "WhatsApp Automation", "Lead Generation", "Full-stack SaaS",
  "Cloud Automations", "Maintenance & Support",
];



export const ConsultationModal = () => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState(services[0]);
  const { toast } = useToast();

  // Register the trigger
  setModalTrigger(setOpen);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: selectedService,
      message: formData.get("context") || "",
      company: "N/A",
      phone: "N/A",
      businessType: "Modal Inquiry"
    };

    try {
      const res = await fetch("http://localhost:5000/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setOpen(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl overflow-hidden rounded-[2.5rem] border-none bg-paper p-0 shadow-2xl">
        <div className="grid md:grid-cols-[0.8fr_1.2fr]">
          {/* Left Side: Branding/Info */}
          <div className="relative hidden flex-col justify-between bg-brand p-8 text-paper md:flex">
            <div className="absolute inset-0 grid-lines opacity-20" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-paper/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-paper/90 backdrop-blur-md">
                <Calendar className="h-3 w-3" />
                Free Consultation
              </span>
              <h2 className="mt-4 font-display text-2xl font-bold leading-tight">
                Ready to <span className="text-paper/80 italic">automate</span> your growth?
              </h2>
              <p className="mt-4 text-sm text-paper/70">
                Book a 30-min strategy call. We'll show you exactly how to scale using AI and automation.
              </p>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-paper/10">
                  <Sparkles className="h-4 w-4" />
                </div>
                <p className="text-xs font-semibold">Custom Growth Roadmap</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-paper/10">
                  <Check className="h-4 w-4" />
                </div>
                <p className="text-xs font-semibold">Trusted by 50+ Founders</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="font-display text-xl font-bold">Fill in your details</DialogTitle>
              <DialogDescription className="text-xs text-ink/50">
                Secure & Confidential · No commitment required
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" placeholder="John Wick" required />
                <Field label="Work Email" name="email" type="email" placeholder="john@company.com" required />
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-ink/40">Interest</label>
                <select 
                  className="w-full rounded-xl border border-ink/10 bg-paper-muted px-4 py-2.5 text-sm outline-none focus:border-brand focus:bg-paper"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-ink/40">Context</label>
                <textarea
                  name="context"
                  placeholder="Tell us about your project..."
                  rows={3}
                  className="w-full resize-none rounded-xl border border-ink/10 bg-paper-muted px-4 py-2.5 text-sm outline-none focus:border-brand focus:bg-paper"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-brand h-12 w-full text-sm disabled:opacity-70"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Scheduling...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Request Consultation <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Field = ({ label, name, type = "text", placeholder, required }: any) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-[10px] font-bold uppercase tracking-widest text-ink/40">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="rounded-xl border border-ink/10 bg-paper-muted px-4 py-2.5 text-sm outline-none transition focus:border-brand focus:bg-paper placeholder:text-ink/20"
    />
  </div>
);
