import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/site/Contact";
import { StickyWhatsApp } from "@/components/site/StickyWhatsApp";

const ContactPage = () => (
  <PageShell
    title="Contact — EWAG Digital Services"
    description="Book a free consultation. Let's automate your growth."
  >
    {/* <PageHero
      eyebrow="Let's talk"
      title={
        <>
          Let's build your <span className="bg-gradient-brand bg-clip-text text-transparent">growth system</span>.
        </>
      }
      description="Tell us about your business — we'll send back a clear plan, a quote and a 30-min consultation slot, usually within the same day."
      crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
    /> */}
    <Contact />
    <StickyWhatsApp />
  </PageShell>
);

export default ContactPage;
