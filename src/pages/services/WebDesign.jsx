import ServiceHero from "../../components/ServiceHero";
import ServiceFeatures from "../../components/ServiceFeatures";
import ServiceCTA from "../../components/ServiceCTA";
import Testimonials from "../../components/Testimonials";

export default function WebDesign() {
  return (
    <>
      {/* HERO */}
      <ServiceHero
        title="Web Design Services"
        subtitle="Strategic, user-centered designs that elevate brands and drive measurable engagement"
      />

      {/* OVERVIEW */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-6">
          Designing Experiences That Convert
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">
          Our web design services focus on creating intuitive, visually compelling,
          and conversion-driven digital experiences. We blend creativity with
          usability principles to ensure every interface aligns with user
          expectations and business objectives.
        </p>
      </section>

      {/* DESIGN CAPABILITIES */}
      <ServiceFeatures
        title="Our Web Design Capabilities"
        features={[
          "UI / UX Design Based on User Research",
          "Responsive & Mobile-First Layouts",
          "High-Fidelity Figma & Prototyping",
          "Design Systems & Brand Consistency",
          "Conversion-Focused Landing Pages",
          "Accessibility (WCAG) & Usability Standards",
        ]}
      />

      {/* DESIGN PROCESS */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-10">
            Our Design Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-slate-600">
            <div>
              <h4 className="font-bold text-navy mb-2">Research</h4>
              <p>
                Understanding users, competitors, and business goals to define
                design direction.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-2">Wireframing</h4>
              <p>
                Structuring layouts and user flows to ensure clarity and ease of use.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-2">Visual Design</h4>
              <p>
                Creating high-fidelity designs that reflect brand identity and
                emotional impact.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-2">Validation</h4>
              <p>
                Testing usability and refining designs based on feedback and metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-8">
          Why Choose Our Design Team
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-slate-600">
          <li>✔ Design decisions backed by UX research</li>
          <li>✔ Strong focus on usability and conversions</li>
          <li>✔ Consistent brand-aligned design systems</li>
          <li>✔ Seamless collaboration with development teams</li>
        </ul>
      </section>

      {/* TESTIMONIALS 
      <Testimonials /> */}

      {/* CTA */}
      <ServiceCTA />
    </>
  );
}
