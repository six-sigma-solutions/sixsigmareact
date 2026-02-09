import ServiceHero from "../../components/ServiceHero";
import ServiceFeatures from "../../components/ServiceFeatures";
import MobileApp from "../../assets/mobile.webp";

import {
  Smartphone,
  Layers,
  ShieldCheck,
  Rocket,
  Server,
  Activity,
} from "lucide-react";

export default function MobileAppDevelopment() {
  return (
    <>
      {/* HERO */}
      <ServiceHero
        title="Mobile App Development Services"
        subtitle="High-performance, scalable mobile applications built for Android and iOS platforms"
        image={MobileApp}
      />

      {/* WHAT WE DELIVER */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Building Mobile Experiences Users Love
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We design and develop robust mobile applications that combine
              intuitive user experiences with secure, scalable architectures.
              Our mobile solutions are engineered to perform reliably across
              devices while supporting long-term business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "User-Centered Mobile Design",
                desc: "Mobile-first UI/UX designed for usability, engagement, and retention.",
              },
              {
                title: "Scalable App Architecture",
                desc: "Apps built to handle growth, integrations, and evolving business needs.",
              },
              {
                title: "Performance & Reliability",
                desc: "Optimized for speed, stability, and real-world mobile usage scenarios.",
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
        title="Our Mobile App Capabilities"
        features={[
          "Native Android & iOS App Development",
          "Cross-Platform Apps with Flutter & React Native",
          "Mobile UI / UX Design & Prototyping",
          "Secure API & Backend Integration",
          "Performance Optimization & App Scalability",
          "App Store Deployment & Ongoing Maintenance",
        ]}
      />

      {/* MOBILE STACK */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-14 text-center">
            Mobile Technologies & Platforms
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Mobile Platforms",
                icon: <Smartphone className="w-6 h-6 text-teal" />,
                items: ["Android (Kotlin, Java)", "iOS (Swift)", "Flutter", "React Native"],
              },
              {
                title: "Backend & APIs",
                icon: <Server className="w-6 h-6 text-teal" />,
                items: ["REST & GraphQL APIs", "Authentication", "Push Notifications"],
              },
              {
                title: "Cloud & Monitoring",
                icon: <Activity className="w-6 h-6 text-teal" />,
                items: ["Firebase", "Cloud Services", "Analytics", "Crash Reporting"],
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
            Mobile Solutions We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Smartphone, text: "Consumer & enterprise mobile apps" },
              { icon: Layers, text: "Startup MVP & product launches" },
              { icon: ShieldCheck, text: "Secure business & internal apps" },
              { icon: Rocket, text: "Cross-platform mobile solutions" },
              { icon: Activity, text: "App performance optimization & upgrades" },
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
            Why Choose Our Mobile App Team
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Expertise across Android & iOS platforms",
              "Performance, security, and scalability by design",
              "Business-focused mobile development approach",
              "Seamless backend & API integrations",
              "App store publishing & long-term support",
              "Transparent communication & delivery",
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
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Let’s turn your mobile app idea into a secure, scalable, and
            production-ready solution.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl bg-teal text-white font-semibold hover:bg-teal/90 transition"
            >
              Start a Mobile Consultation
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
