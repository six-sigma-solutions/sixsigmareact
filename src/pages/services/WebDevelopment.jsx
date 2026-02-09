import ServiceHero from "../../components/ServiceHero";
import ServiceFeatures from "../../components/ServiceFeatures";
import { Code2, Server, Cloud } from "lucide-react";
import { Briefcase, ShoppingCart, Monitor, RefreshCcw, Gauge } from "lucide-react";
import Webdev from "../../assets/web_develop.webp";


export default function WebDevelopment() {
  return (
    <>
      {/* HERO */}
      <ServiceHero
  title="Web Development Services"
  subtitle="Scalable, secure, and high-performance web solutions built to drive business growth"
  image={Webdev}
/>

      {/* WHAT WE DELIVER */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              What We Deliver
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We help organizations build reliable, modern web platforms that
              support business operations, customer engagement, and long-term
              scalability. Our approach balances performance, security, and
              usability for measurable outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business-Driven Design",
                desc: "Solutions aligned with business goals, user needs, and operational efficiency.",
              },
              {
                title: "Enterprise Architecture",
                desc: "Scalable systems designed to integrate and evolve with your organization.",
              },
              {
                title: "Quality & Reliability",
                desc: "Clean code, testing-first development, and performance optimization.",
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
        title="Our Core Capabilities"
        features={[
          "Custom Web Application Development",
          "Responsive & Mobile-First UI / UX",
          "High-performance React & Next.js Applications",
          "Secure Backend Integration & API Development",
          "SEO-friendly & Accessibility-compliant Architecture",
          "Cloud-ready & Scalable Deployments",
        ]}
      />

      {/* TECHNOLOGY STACK */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-14 text-center">
            Technology Stack
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Frontend",
                icon: <Code2 className="w-6 h-6 text-teal" />,
                items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"],
              },
              {
                title: "Backend",
                icon: <Server className="w-6 h-6 text-teal" />,
                items: ["Node.js", "Express", "REST APIs", "GraphQL", "Auth & Security"],
              },
              {
                title: "Infrastructure",
                icon: <Cloud className="w-6 h-6 text-teal" />,
                items: ["AWS", "Vercel", "Netlify", "CI/CD", "Monitoring"],
              },
            ].map((stack, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-slate-200"
              >
                <div className="flex items-center gap-3 mb-5">
                  {stack.icon}
                  <h4 className="font-bold text-navy">
                    {stack.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-3">
                  {stack.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-sm rounded-full bg-slate-100 text-slate-700 border border-slate-200 hover:bg-teal/10 transition"
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
            Web Solutions We Build
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, text: "Enterprise dashboards & portals" },
              { icon: Monitor, text: "Corporate & marketing websites" },
              { icon: ShoppingCart, text: "E-commerce applications" },
              { icon: RefreshCcw, text: "Legacy system modernization" },
              { icon: Gauge, text: "Performance & UX optimization" },
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
                  <p className="text-slate-700 font-medium">
                    {item.text}
                  </p>
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
      Why Choose Six Sigma Solutions
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        "Enterprise-grade delivery experience",
        "Business-focused engineering mindset",
        "Security & scalability by design",
        "Clear timelines & transparent communication",
        "Long-term support & maintenance",
        "Experienced, process-driven team",
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
            Ready to Build Your Web Platform?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Speak with our experts and turn your ideas into scalable,
            production-ready solutions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl bg-teal text-white font-semibold hover:bg-teal/90 transition"
            >
              Free Consultation
            </a>
            <a
              href="/#services"
              className="px-8 py-4 rounded-xl border border-slate-300 font-semibold hover:bg-white transition"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
