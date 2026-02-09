import ServiceHero from "../../components/ServiceHero";
import ServiceFeatures from "../../components/ServiceFeatures";
import Webdesign from "../../assets/web_design.webp";

import {
  Palette,
  Layout,
  Smartphone,
  Layers,
  Eye,
  TrendingUp,
} from "lucide-react";

export default function WebDesign() {
  return (
    <>
      {/* HERO */}
      <ServiceHero
        title="Web Design Services"
        subtitle="User-centered, visually compelling designs that strengthen brands and drive engagement"
        image={Webdesign}
      />

      {/* WHAT WE DELIVER */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Designing Experiences That Convert
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We design intuitive, modern, and conversion-focused digital
              experiences. Our approach combines user research, visual clarity,
              and usability principles to create interfaces that align business
              goals with user expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "User-Centered Design",
                desc: "Design decisions driven by real user behavior, usability principles, and research insights.",
              },
              {
                title: "Brand-Aligned Visuals",
                desc: "Consistent, scalable visual systems that reinforce brand identity across platforms.",
              },
              {
                title: "Conversion-Focused Layouts",
                desc: "Interfaces optimized to guide users, reduce friction, and improve engagement metrics.",
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
        title="Our Web Design Capabilities"
        features={[
          "UI / UX Design Based on User Research",
          "Responsive & Mobile-First Design",
          "High-Fidelity Figma & Prototyping",
          "Design Systems & Component Libraries",
          "Conversion-Optimized Landing Pages",
          "Accessibility (WCAG) & Usability Standards",
        ]}
      />

      {/* DESIGN STACK */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-14 text-center">
            Design Tools & Methodologies
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "UX Strategy",
                icon: <Eye className="w-6 h-6 text-teal" />,
                items: ["User Research", "Personas", "User Journeys", "Usability Audits"],
              },
              {
                title: "UI Design",
                icon: <Palette className="w-6 h-6 text-teal" />,
                items: ["Figma", "Design Systems", "Visual Hierarchy", "Brand Guidelines"],
              },
              {
                title: "Prototyping",
                icon: <Layout className="w-6 h-6 text-teal" />,
                items: ["Wireframes", "Interactive Prototypes", "Design Validation"],
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
            Design Solutions We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Layout, text: "Corporate & marketing websites" },
              { icon: Layers, text: "SaaS dashboards & product UI" },
              { icon: Smartphone, text: "Mobile-first & responsive design" },
              { icon: TrendingUp, text: "Conversion-focused landing pages" },
              { icon: Eye, text: "UX audits & redesigns" },
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
            Why Choose Our Design Team
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "UX research-driven design decisions",
              "Strong focus on usability and conversions",
              "Brand-consistent, scalable design systems",
              "Collaboration-ready designs for developers",
              "Accessibility-first design approach",
              "Iterative feedback and refinement process",
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
            Ready to Elevate Your Digital Experience?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Let’s design intuitive, engaging interfaces that connect users with
            your brand and drive measurable results.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl bg-teal text-white font-semibold hover:bg-teal/90 transition"
            >
              Start a Design Consultation
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
