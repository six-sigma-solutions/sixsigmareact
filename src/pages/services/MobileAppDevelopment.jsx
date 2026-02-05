import ServiceHero from "../../components/ServiceHero";
import ServiceFeatures from "../../components/ServiceFeatures";
import ServiceCTA from "../../components/ServiceCTA";
import Testimonials from "../../components/Testimonials";

export default function MobileAppDevelopment() {
  return (
    <>
      {/* HERO */}
      <ServiceHero
        title="Mobile App Development Services"
        subtitle="High-performance, scalable mobile applications built for Android and iOS platforms"
      />

      {/* OVERVIEW */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-6">
          Building Mobile Experiences That Users Love
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">
          We design and develop robust mobile applications that combine intuitive
          user experiences with reliable performance. Our mobile solutions are
          engineered to scale, integrate seamlessly with backend systems, and
          deliver measurable business outcomes across industries.
        </p>
      </section>

      {/* CORE CAPABILITIES */}
      <ServiceFeatures
        title="Our Mobile App Capabilities"
        features={[
          "Native Android & iOS Application Development",
          "Cross-Platform Apps with Flutter & React Native",
          "User-Centered UI / UX Design for Mobile",
          "Secure API & Backend Integration",
          "Performance Optimization & App Scalability",
          "App Store Deployment & Ongoing Maintenance",
        ]}
      />

      {/* TECHNOLOGY STACK */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8">
            Mobile Technology Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-slate-600">
            <ul className="space-y-2">
              <li>Android (Kotlin, Java)</li>
              <li>iOS (Swift)</li>
              <li>Flutter & React Native</li>
            </ul>
            <ul className="space-y-2">
              <li>REST & GraphQL APIs</li>
              <li>Authentication & Security</li>
              <li>Push Notifications</li>
            </ul>
            <ul className="space-y-2">
              <li>Firebase & Cloud Services</li>
              <li>CI/CD & App Monitoring</li>
              <li>Analytics & Crash Reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-10">
          Our Mobile App Development Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-slate-600">
          <div>
            <h4 className="font-bold text-navy mb-2">Strategy</h4>
            <p>
              Defining app goals, target users, and technical requirements.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-navy mb-2">Design</h4>
            <p>
              Crafting intuitive mobile-first UI/UX with rapid prototyping.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-navy mb-2">Development</h4>
            <p>
              Building secure, scalable, and high-performance mobile apps.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-navy mb-2">Launch & Support</h4>
            <p>
              App store submission, monitoring, updates, and long-term support.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8">
            Why Choose Our Mobile App Team
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-slate-600">
            <li>✔ Proven experience across Android and iOS platforms</li>
            <li>✔ Performance, security, and scalability by design</li>
            <li>✔ Business-driven development approach</li>
            <li>✔ Reliable post-launch support and optimization</li>
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
