import ServiceHero from "../../components/ServiceHero";
import ServiceFeatures from "../../components/ServiceFeatures";
import ServiceCTA from "../../components/ServiceCTA";
import Testimonials from "../../components/Testimonials";

export default function DigitalMarketing() {
  return (
    <>
      {/* HERO */}
      <ServiceHero
        title="Digital Marketing Services"
        subtitle="Data-driven digital marketing strategies to increase visibility, generate leads, and grow your business online"
      />

      {/* OVERVIEW */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-6">
          Driving Measurable Growth Through Digital Marketing
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">
          Our digital marketing solutions are designed to help businesses
          attract the right audience, engage customers across multiple
          channels, and convert traffic into measurable business outcomes.
          We focus on performance, analytics, and continuous optimization.
        </p>
      </section>

      {/* CORE SERVICES */}
      <ServiceFeatures
        title="Our Digital Marketing Capabilities"
        features={[
          "Search Engine Optimization (SEO)",
          "Pay-Per-Click Advertising (Google Ads & Social Ads)",
          "Social Media Marketing & Management",
          "Content Marketing & Brand Messaging",
          "Email Marketing & Marketing Automation",
          "Analytics, Reporting & Conversion Optimization",
        ]}
      />

      {/* USE CASES */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8">
            Digital Marketing Use Cases
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-slate-600">
            <div>
              <h4 className="font-bold text-navy mb-2">Lead Generation</h4>
              <p>
                Campaigns focused on attracting qualified leads through SEO,
                paid ads, and optimized landing pages.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-2">Brand Awareness</h4>
              <p>
                Increasing brand visibility and engagement across search
                engines and social media platforms.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-2">E-commerce Growth</h4>
              <p>
                Driving online sales through performance marketing,
                retargeting, and conversion optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS & PLATFORMS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-8">
          Tools & Platforms We Work With
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-slate-600">
          <ul className="space-y-2">
            <li>Google Search Console & Analytics</li>
            <li>Google Ads & Meta Ads</li>
            <li>SEO & Keyword Research Tools</li>
          </ul>
          <ul className="space-y-2">
            <li>Social Media Platforms</li>
            <li>Email Marketing Tools</li>
            <li>Marketing Automation Platforms</li>
          </ul>
          <ul className="space-y-2">
            <li>Conversion Tracking & Heatmaps</li>
            <li>CRM & Lead Management Tools</li>
            <li>Custom Reporting Dashboards</li>
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-10">
            Our Digital Marketing Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-slate-600">
            <div>
              <h4 className="font-bold text-navy mb-2">Research</h4>
              <p>
                Understanding your business, audience, competitors, and goals.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-2">Strategy</h4>
              <p>
                Creating a customized digital marketing roadmap aligned with
                business objectives.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-2">Execution</h4>
              <p>
                Launching and managing campaigns across the right digital
                channels.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-2">Optimization</h4>
              <p>
                Continuous monitoring, testing, and improvement to maximize ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-8">
          Why Choose Our Digital Marketing Services
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-slate-600">
          <li>✔ Data-driven strategies focused on results</li>
          <li>✔ Transparent reporting and performance tracking</li>
          <li>✔ Ethical, sustainable marketing practices</li>
          <li>✔ Continuous optimization and long-term growth focus</li>
        </ul>
      </section>

      {/* TESTIMONIALS (optional)
      <Testimonials /> */}

      {/* CTA */}
      <ServiceCTA />
    </>
  );
}
