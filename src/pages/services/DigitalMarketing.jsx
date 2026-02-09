import ServiceHero from "../../components/ServiceHero";
import ServiceFeatures from "../../components/ServiceFeatures";
import DigitalMarketingImg from "../../assets/digital.webp";

import {
  TrendingUp,
  Search,
  Megaphone,
  BarChart3,
  Mail,
  Target,
} from "lucide-react";

export default function DigitalMarketing() {
  return (
    <>
      {/* HERO */}
      <ServiceHero
        title="Digital Marketing Services"
        subtitle="Data-driven digital marketing strategies that increase visibility, generate leads, and drive measurable growth"
        image={DigitalMarketingImg}
      />

      {/* WHAT WE DELIVER */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Driving Measurable Growth Through Digital Marketing
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our digital marketing services help businesses attract the right
              audience, engage customers across multiple channels, and convert
              traffic into measurable business outcomes. Every campaign is
              guided by analytics, performance data, and continuous optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Performance-Driven Strategy",
                desc: "Marketing campaigns designed around KPIs, ROI, and measurable growth objectives.",
              },
              {
                title: "Multi-Channel Reach",
                desc: "Integrated campaigns across search, social, email, and paid advertising platforms.",
              },
              {
                title: "Continuous Optimization",
                desc: "Ongoing testing, analysis, and refinement to maximize campaign effectiveness.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition"
              >
                <h4 className="font-bold text-navy mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <ServiceFeatures
        title="Our Digital Marketing Capabilities"
        features={[
          "Search Engine Optimization (SEO)",
          "Pay-Per-Click Advertising (Google & Social Ads)",
          "Social Media Marketing & Management",
          "Content Marketing & Brand Messaging",
          "Email Marketing & Marketing Automation",
          "Analytics, Reporting & Conversion Optimization",
        ]}
      />

      {/* MARKETING STACK */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-14 text-center">
            Tools & Platforms We Use
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Search & SEO",
                icon: <Search className="w-6 h-6 text-teal" />,
                items: ["Google Analytics", "Search Console", "Keyword Research", "On-page SEO"],
              },
              {
                title: "Paid & Social",
                icon: <Megaphone className="w-6 h-6 text-teal" />,
                items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Campaign Optimization"],
              },
              {
                title: "Analytics & Automation",
                icon: <BarChart3 className="w-6 h-6 text-teal" />,
                items: ["Conversion Tracking", "Heatmaps", "CRM Integration", "Marketing Automation"],
              },
            ].map((stack, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-5">
                  {stack.icon}
                  <h4 className="font-bold text-navy">{stack.title}</h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {stack.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-sm rounded-full bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-16 text-center">
            Digital Marketing Solutions We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, text: "Lead generation & demand growth" },
              { icon: TrendingUp, text: "Brand visibility & awareness campaigns" },
              { icon: BarChart3, text: "Performance marketing & ROI optimization" },
              { icon: Mail, text: "Email marketing & automation funnels" },
              { icon: Megaphone, text: "Multi-channel paid advertising" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-200 hover:shadow-md transition"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-teal" />
                  </div>
                  <p className="text-slate-700 font-medium">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-12">
            Why Choose Our Digital Marketing Team
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Data-driven strategies focused on measurable results",
              "Transparent reporting and performance tracking",
              "Ethical, sustainable marketing practices",
              "Continuous testing and optimization",
              "Experienced performance marketing specialists",
              "Long-term growth-focused approach",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white p-6 rounded-xl border border-slate-200"
              >
                <span className="text-teal font-bold">✔</span>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-sky-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">
            Ready to Grow Your Digital Presence?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Let’s build data-driven marketing campaigns that attract, convert,
            and retain your ideal customers.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl bg-teal text-white font-semibold hover:bg-teal/90 transition"
            >
              Start a Marketing Consultation
            </a>
            <a
              href="/#services"
              className="px-8 py-4 rounded-xl border border-slate-300 font-semibold hover:bg-white transition"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
