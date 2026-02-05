import ServiceHero from "../../components/ServiceHero";
import ServiceFeatures from "../../components/ServiceFeatures";
import ServiceCTA from "../../components/ServiceCTA";
import Testimonials from "../../components/Testimonials";

export default function AIAgents() {
  return (
    <>
      {/* HERO */}
      <ServiceHero
        title="AI Agents & Automation Services"
        subtitle="Intelligent AI agents that automate workflows, enhance decision-making, and scale business operations"
      />

      {/* OVERVIEW */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-6">
          Transforming Businesses with Intelligent AI Agents
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-4xl">
          Our AI Agents are designed to operate autonomously, learn from data,
          and perform complex tasks with minimal human intervention. We help
          organizations leverage artificial intelligence to improve efficiency,
          reduce operational costs, and unlock new growth opportunities.
        </p>
      </section>

      {/* CORE CAPABILITIES */}
      <ServiceFeatures
        title="Our AI Agent Capabilities"
        features={[
          "Custom AI Agents for Business Automation",
          "Conversational AI & Chatbot Solutions",
          "Task Automation & Workflow Optimization",
          "AI-Powered Data Analysis & Insights",
          "Integration with Existing Systems & APIs",
          "Secure, Scalable & Ethical AI Implementations",
        ]}
      />

      {/* USE CASES */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-8">
            AI Agent Use Cases
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-slate-600">
            <div>
              <h4 className="font-bold text-navy mb-2">Customer Support</h4>
              <p>
                AI chat agents handling customer queries, ticket routing, and
                24/7 support.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-2">Business Operations</h4>
              <p>
                Automating repetitive tasks such as data entry, reporting, and
                process monitoring.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-2">Decision Support</h4>
              <p>
                AI-driven insights to assist management in strategic and
                operational decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY & MODELS */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-8">
          AI Technologies We Use
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-slate-600">
          <ul className="space-y-2">
            <li>Large Language Models (LLMs)</li>
            <li>Natural Language Processing (NLP)</li>
            <li>Prompt Engineering</li>
          </ul>
          <ul className="space-y-2">
            <li>Python & AI Frameworks</li>
            <li>Vector Databases</li>
            <li>RAG (Retrieval-Augmented Generation)</li>
          </ul>
          <ul className="space-y-2">
            <li>API & System Integrations</li>
            <li>Cloud-Based AI Deployment</li>
            <li>Monitoring & Model Optimization</li>
          </ul>
        </div>
      </section>

      {/* AI IMPLEMENTATION PROCESS */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-10">
            Our AI Implementation Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-slate-600">
            <div>
              <h4 className="font-bold text-navy mb-2">Assessment</h4>
              <p>
                Identifying automation opportunities and defining AI objectives.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-2">Design</h4>
              <p>
                Architecting AI agents aligned with business workflows.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-2">Development</h4>
              <p>
                Training, testing, and integrating AI agents into systems.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-navy mb-2">Optimization</h4>
              <p>
                Continuous improvement through monitoring and feedback loops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-navy mb-8">
          Why Choose Our AI Solutions
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-slate-600">
          <li>✔ Practical, business-focused AI implementations</li>
          <li>✔ Secure, scalable, and compliant AI solutions</li>
          <li>✔ Expertise across automation, NLP, and AI systems</li>
          <li>✔ Long-term support and continuous AI optimization</li>
        </ul>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA */}
      <ServiceCTA />
    </>
  );
}
