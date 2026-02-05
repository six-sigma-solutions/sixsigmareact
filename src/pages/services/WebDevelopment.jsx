import ServiceHero from "../../components/ServiceHero";
import ServiceFeatures from "../../components/ServiceFeatures";
import ServiceCTA from "../../components/ServiceCTA";
import Testimonials from "../../components/Testimonials";

export default function WebDevelopment() {
  return (
    <>
      {/* HERO */}
      <ServiceHero
        title="Web Development Services"
        subtitle="Enterprise-grade web applications engineered for performance, scalability, and long-term growth"
      />

      {/* WHAT WE DO */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-6">
          What We Deliver
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">
          We design and develop modern, secure, and scalable web applications
          tailored to your business goals. Our solutions are built to handle
          real-world traffic, integrate seamlessly with backend systems, and
          provide exceptional user experiences across devices.
        </p>
      </section>

      {/* CORE CAPABILITIES */}
      <ServiceFeatures
        title="Our Core Capabilities"
        features={[
          "Custom Web Application Development",
          "Responsive & Mobile-First UI / UX",
          "High-performance React & Next.js Applications",
          "Secure Backend Integration & APIs",
          "SEO-friendly & Accessibility-compliant Architecture",
          "Cloud-ready & Scalable Deployments",
        ]}
      />

      {/* TECHNOLOGY STACK */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-slate-600">
            <ul className="space-y-2">
              <li>React.js / Next.js</li>
              <li>HTML5, CSS3, Tailwind CSS</li>
              <li>JavaScript / TypeScript</li>
            </ul>
            <ul className="space-y-2">
              <li>Node.js / Express</li>
              <li>REST & GraphQL APIs</li>
              <li>Authentication & Security</li>
            </ul>
            <ul className="space-y-2">
              <li>AWS / Vercel / Netlify</li>
              <li>CI/CD Pipelines</li>
              <li>Performance Monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-10">
          Our Development Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-slate-600">
          <div>
            <h4 className="font-bold text-navy mb-2">Discovery</h4>
            <p>Understanding business goals, users, and technical requirements.</p>
          </div>
          <div>
            <h4 className="font-bold text-navy mb-2">Design</h4>
            <p>Creating intuitive UI/UX wireframes and design systems.</p>
          </div>
          <div>
            <h4 className="font-bold text-navy mb-2">Development</h4>
            <p>Building scalable, secure, and maintainable code.</p>
          </div>
          <div>
            <h4 className="font-bold text-navy mb-2">Launch & Support</h4>
            <p>Deployment, monitoring, and continuous improvement.</p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8">
            Why Choose Six Sigma Solutions
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-slate-600">
            <li>✔ Proven experience delivering enterprise-grade solutions</li>
            <li>✔ Business-focused, not just code-focused development</li>
            <li>✔ Security, performance, and scalability by design</li>
            <li>✔ Long-term support and continuous optimization</li>
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <ServiceCTA />
    </>
  );
}
