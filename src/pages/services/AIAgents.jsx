import ServiceHero from "../../components/ServiceHero";
import ServiceFeatures from "../../components/ServiceFeatures";
import AI from "../../assets/ai.webp";

import {
  Bot,
  Workflow,
  Brain,
  Database,
  ShieldCheck,
  Rocket,
} from "lucide-react";

export default function AIAgents() {
  return (
    <>
      {/* HERO */}
      <ServiceHero
        title="AI Agents & Automation Services"
        subtitle="Intelligent AI agents that automate workflows, enhance decision-making, and scale business operations"
        image={AI}
      />

      {/* WHAT WE DELIVER */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Transforming Businesses with Intelligent AI Agents
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our AI agents operate autonomously, learn from data, and execute
              complex tasks with minimal human intervention. We help
              organizations leverage AI to improve efficiency, reduce costs,
              and unlock new growth opportunities through practical automation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Autonomous AI Agents",
                desc: "Custom-built AI agents designed to operate independently across business workflows.",
              },
              {
                title: "Workflow Automation",
                desc: "Automation of repetitive tasks, approvals, reporting, and operational processes.",
              },
              {
                title: "AI-Driven Insights",
                desc: "Data-powered intelligence that supports faster, smarter business decisions.",
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

      {/* AI TECHNOLOGY STACK */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-14 text-center">
            AI Technologies & Platforms
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "AI Models & NLP",
                icon: <Brain className="w-6 h-6 text-teal" />,
                items: [
                  "Large Language Models (LLMs)",
                  "Natural Language Processing (NLP)",
                  "Prompt Engineering",
                ],
              },
              {
                title: "Data & Retrieval",
                icon: <Database className="w-6 h-6 text-teal" />,
                items: [
                  "Vector Databases",
                  "RAG (Retrieval-Augmented Generation)",
                  "Knowledge Base Integration",
                ],
              },
              {
                title: "Deployment & Security",
                icon: <ShieldCheck className="w-6 h-6 text-teal" />,
                items: [
                  "API & System Integrations",
                  "Cloud-Based AI Deployment",
                  "Monitoring & Model Optimization",
                ],
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
            AI Agent Solutions We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Bot, text: "Customer support & conversational AI agents" },
              { icon: Workflow, text: "Business process automation" },
              { icon: Database, text: "AI-powered data analysis & reporting" },
              { icon: Brain, text: "Decision support & intelligence systems" },
              { icon: Rocket, text: "Scalable AI automation platforms" },
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
            Why Choose Our AI Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Practical, business-focused AI implementations",
              "Secure, scalable, and compliant AI systems",
              "Expertise across automation, NLP, and AI agents",
              "Seamless integration with existing workflows",
              "Ethical and responsible AI development",
              "Continuous optimization and long-term support",
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
            Ready to Automate with AI Agents?
          </h2>
          <p className="text-slate-600 mb-8 text-lg">
            Let’s design intelligent AI agents that streamline operations,
            improve efficiency, and scale your business.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl bg-teal text-white font-semibold hover:bg-teal/90 transition"
            >
              Start an AI Consultation
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
