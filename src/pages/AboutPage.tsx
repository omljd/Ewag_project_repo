import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { Building2, Users, Target, Award, Clock, MapPin } from "lucide-react";

const AboutPage = () => (
  <PageShell
    title="About Us — EWAG Digital Services"
    description="Learn about our mission, team, and commitment to automating business growth."
  >
    <PageHero
      eyebrow="Our story"
      title={
        <>
          Building <span className="bg-gradient-brand bg-clip-text text-transparent">automated growth systems</span> for modern businesses.
        </>
      }
      description="We're a team of digital experts passionate about creating websites, AI content, and automation systems that bring customers to your business automatically."
      crumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
    />

    {/* Mission Section */}
    <section className="py-20 bg-paper">
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
            Our Mission
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">
            To empower businesses with automated digital systems that consistently attract, engage, and convert customers, enabling sustainable growth without manual effort.
          </p>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="py-20 bg-ink text-paper">
      <div className="container-x">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-paper/10 bg-paper/5 md:grid-cols-4">
          {[
            { k: "120+", v: "Systems delivered" },
            { k: "5×", v: "Average growth" },
            { k: "24/7", v: "Automation running" },
            { k: "98%", v: "Client satisfaction" },
          ].map((stat) => (
            <div key={stat.v} className="bg-ink p-8 text-center">
              <div className="font-display text-3xl font-bold text-paper md:text-4xl">
                {stat.k}
              </div>
              <div className="mt-2 text-sm uppercase tracking-widest text-paper/50">
                {stat.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values Section */}
    <section className="py-20 bg-paper">
      <div className="container-x">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl text-center mb-12">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Results-Driven",
                description: "Every solution we build is focused on delivering measurable business outcomes and ROI."
              },
              {
                icon: Users,
                title: "Client-Centric",
                description: "We treat your business as our own, providing personalized attention and support."
              },
              {
                icon: Building2,
                title: "Innovation First",
                description: "We leverage cutting-edge technology to create solutions that give you a competitive edge."
              },
              {
                icon: Award,
                title: "Quality Excellence",
                description: "We maintain the highest standards in everything we build, from code to customer service."
              },
            ].map((value, index) => (
              <div key={index} className="flex gap-4">
                <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-brand text-brand-foreground">
                  <value.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Team Section */}
    <section className="py-20 bg-paper text-ink">
      <div className="container-x">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink/70">
            A diverse group of experts passionate about digital innovation and business growth.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "Alex Chen",
              role: "Founder & CEO",
              expertise: "Digital Strategy & Automation"
            },
            {
              name: "Sarah Miller",
              role: "Lead Developer",
              expertise: "Web Development & AI Integration"
            },
            {
              name: "David Kumar",
              role: "Growth Specialist",
              expertise: "Marketing Automation & Analytics"
            },
          ].map((member, index) => (
            <div key={index} className="rounded-2xl border border-ink/10 bg-ink/5 p-8 text-center">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-brand/20 flex items-center justify-center">
                <Users className="h-10 w-10 text-brand" />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">{member.name}</h3>
              <p className="mt-1 text-sm text-brand">{member.role}</p>
              <p className="mt-3 text-sm text-ink/70">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="absolute inset-0 bg-gradient-radial-brand" />
      <div className="container-x relative py-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="chip-dark mb-6 inline-flex animate-fade-up">
            <Target className="h-3.5 w-3.5 text-brand" />
            Let's work together
          </span>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-paper md:text-4xl animate-fade-up" style={{ animationDelay: "60ms" }}>
            Ready to automate your growth?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-paper/70 md:text-xl animate-fade-up" style={{ animationDelay: "140ms" }}>
            Let's discuss how we can build a custom growth system for your business.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "220ms" }}>
            <a href="/contact" className="btn-brand">
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost-paper"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  </PageShell>
);

export default AboutPage;
