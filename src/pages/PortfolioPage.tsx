import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/PageHero";
import { ArrowUpRight, ExternalLink, Quote } from "lucide-react";
import { useState } from "react";

const portfolio = [
  {
    category: "Websites",
    title: "Cliniqa Wellness",
    description: "Premium healthcare platform with appointment booking and patient management system",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&auto=format",
    result: "+312% inquiries in 60 days",
    tools: "Next.js · TypeScript · TailwindCSS · WhatsApp API",
    link: "#"
  },
  {
    category: "Landing Pages",
    title: "Estate&Co Launch",
    description: "High-converting real estate landing page with lead qualification and CRM integration",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&auto=format",
    result: "1,400 qualified leads at ₹18 CPL",
    tools: "React · Meta Ads · Google Sheets · CRM Integration",
    link: "#"
  },
  {
    category: "Automation Systems",
    title: "MentorX Admissions",
    description: "Complete student inquiry automation with WhatsApp flows and real-time CRM sync",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    result: "80% inquiries auto-qualified",
    tools: "WhatsApp Business API · Zapier · Node.js · MongoDB",
    link: "#"
  },
  {
    category: "Creatives",
    title: "UrbanBites Campaign",
    description: "AI-powered content creation and social media campaign management with performance tracking",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&auto=format",
    result: "5.2× ROAS on launch ads",
    tools: "AI Content · Reels · Meta Ads · Analytics",
    link: "#"
  },
  {
    category: "Funnels",
    title: "FashionHub E-commerce",
    description: "Multi-step sales funnel with cart abandonment recovery and email automation",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
    result: "2.8× conversion rate increase",
    tools: "Shopify · React · Stripe · Klaviyo",
    link: "#"
  },
  {
    category: "Websites",
    title: "AnalyticsPro Dashboard",
    description: "Real-time business analytics dashboard with custom reporting and data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
    result: "45% reduction in reporting time",
    tools: "Vue.js · D3.js · PostgreSQL · REST API",
    link: "#"
  }
];

const categories = ["All", "Websites", "Landing Pages", "Automation Systems", "Creatives", "Funnels"];

const testimonials = [
  {
    quote: "EWAG didn't just redesign our site — they rebuilt how we sell. The automation system alone paid for itself in 3 weeks.",
    author: "Co-founder, Real Estate Startup",
    project: "Estate&Co Launch"
  },
  {
    quote: "The WhatsApp automation transformed our admissions process. We're handling 3x more inquiries with the same team.",
    author: "Director, Education Institute",
    project: "MentorX Admissions"
  },
  {
    quote: "Our conversion rate doubled after the redesign. Inquiries finally feel predictable and the pipeline is consistently full.",
    author: "Owner, Multi-clinic Chain",
    project: "Cliniqa Wellness"
  }
];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPortfolio = selectedCategory === "All" 
    ? portfolio 
    : portfolio.filter(item => item.category === selectedCategory);

  return (
    <PageShell
      title="Portfolio — EWAG Digital Services"
      description="Explore our digital success stories. Websites, automation systems, and marketing campaigns that deliver real results."
    >
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Digital solutions that <span className="bg-gradient-brand bg-clip-text text-transparent">drive growth</span>.
          </>
        }
        description="From custom websites to automated marketing systems, explore how we've helped businesses like yours achieve measurable results."
        crumbs={[{ label: "Home", to: "/" }, { label: "Portfolio" }]}
      />

      {/* Portfolio Grid */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="container-x">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`chip transition-all cursor-pointer ${
                  selectedCategory === category 
                    ? "bg-brand text-paper" 
                    : "hover:bg-ink/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Items */}
          {filteredPortfolio.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPortfolio.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-paper transition-all hover:-translate-y-2 hover:shadow-card animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-paper/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <span className="chip text-xs">{item.category}</span>
                    <a 
                      href={item.link}
                      className="h-8 w-8 rounded-full bg-ink/5 flex items-center justify-center transition-all hover:bg-brand hover:text-paper group-hover:-translate-y-1 group-hover:translate-x-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <h3 className="font-display text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-ink/70 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-ink/40">Result</span>
                      <span className="font-display text-sm text-brand">{item.result}</span>
                    </div>
                    
                    <div className="pt-3 border-t border-ink/10">
                      <p className="text-xs uppercase tracking-widest text-ink/40 mb-2">Tools Used</p>
                      <p className="text-xs font-medium text-ink/80 leading-relaxed">
                        {item.tools}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-ink/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowUpRight className="h-8 w-8 text-ink/40" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4">No projects found</h3>
                <p className="text-ink/60">
                  No projects in the "{selectedCategory}" category yet. Check back soon or explore other categories.
                </p>
              </div>
            </div>
          )}

          {/* Testimonials Section */}
          <section className="mt-20 py-16 border-t border-ink/10">
            <div className="text-center mb-12">
              <span className="chip mb-6">Client Success Stories</span>
              <h2 className="font-display text-3xl font-bold leading-[1.1] text-balance md:text-4xl mb-6">
                What our <span className="text-brand">clients say</span>.
              </h2>
              <p className="text-ink/70 leading-relaxed max-w-2xl mx-auto">
                Real results from real businesses. Here's what our clients have achieved with our digital solutions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <figure
                  key={index}
                  className="relative rounded-3xl border border-ink/10 bg-paper p-8 transition-all hover:-translate-y-1 hover:shadow-card animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Quote className="absolute top-6 right-6 h-8 w-8 text-brand/20" />
                  
                  <blockquote className="relative text-base leading-relaxed text-ink/80 mb-6">
                    {testimonial.quote}
                  </blockquote>
                  
                  <div className="space-y-2">
                    <figcaption className="font-semibold text-ink">
                      {testimonial.author}
                    </figcaption>
                    <p className="text-sm text-brand">
                      {testimonial.project}
                    </p>
                  </div>
                </figure>
              ))}
            </div>

            {/* Placeholder for future testimonials */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-2 chip bg-ink/5 text-ink/60">
                <span>More client feedback coming soon</span>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <div className="max-w-2xl mx-auto">
              <span className="chip mb-6">Ready to start your project?</span>
              <h2 className="font-display text-3xl font-bold leading-[1.1] text-balance md:text-4xl mb-6">
                Let's build something <span className="text-brand">amazing together</span>.
              </h2>
              <p className="text-ink/70 leading-relaxed mb-8">
                Every project in our portfolio started with a conversation. 
                Let's discuss how we can help you achieve similar results.
              </p>
              <a 
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Start your project
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default PortfolioPage;
