import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import AboutProcessIndustries from "../components/AboutProcessIndustries";
import Testimonials from "../components/Testimonials";
import InteractiveServices from "../components/InteractiveServices";
import HeroGeometric from "../components/HeroGeometric";

/* ================= TEAM DATA ================= */
const team = [
  {
    id: "cheallapondy",
    name: "Dr. V. Cheallapondy",
    role: "Chief Executive Officer",
    description:
      "Innovative leader driving organizational excellence across the globe.",
    image: "/img/1.jpeg",
    initials: "VC",
  },
  {
    id: "vasu",
    name: "Mr. S. Vasu",
    role: "Founder & Consultant",
    description: "Expert consultant helping organizations optimize workflows.",
    image: "/img/2.png",
    initials: "SV",
  },
  {
    id: "natasha",
    name: "Mrs. Natasha",
    role: "Head of Talent",
    description:
      "Strategic leader focused on people development and quality culture.",
    image: "/img/3.png",
    initials: "MN",
  },
];

/* ================= FAQ DATA ================= */
const faqs = [
  {
    id: "services",
    question: "What services does Six Sigma Solutions offer?",
    answer:
      "We offer comprehensive IT solutions including web development, mobile app development, web design, AI agents, and digital marketing services tailored to your business needs.",
  },
  {
    id: "timeline",
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on complexity and scope. A simple website may take 2–4 weeks, while complex applications can take 3–6 months.",
  },
  {
    id: "support",
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer comprehensive maintenance and support packages after launch.",
  },
  {
    id: "industries",
    question: "What industries do you serve?",
    answer:
      "We serve healthcare, finance, education, retail, manufacturing, and more.",
  },
];

/* ================= FAQ ITEM ================= */
function FaqItem({ faq, isActive, onToggle }) {
  return (
    <div
      className={`border border-slate-200 rounded-2xl overflow-hidden transition ${
        isActive ? "bg-slate-50" : "bg-white"
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isActive}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <span className="font-semibold text-navy pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-teal transition-transform ${
            isActive ? "rotate-180" : ""
          }`}
        />
      </button>

      {isActive && (
        <p className="px-6 pb-6 text-slate-500">
          {faq.answer}
        </p>
      )}
    </div>
  );
}

/* ================= TEAM CARD ================= */
function TeamCard({ member }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 text-center">
      <div className="w-32 h-32 mx-auto mb-6">
        {!hasError ? (
          <img
            src={member.image}
            alt={member.name}
            onError={() => setHasError(true)}
            className="w-32 h-32 rounded-full object-cover shadow-md"
            loading="lazy"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center text-2xl font-bold text-navy">
            {member.initials}
          </div>
        )}
      </div>

      <h4 className="font-bold text-navy text-lg">
        {member.name}
      </h4>
      <p className="text-xs text-teal font-bold uppercase tracking-widest mt-1">
        {member.role}
      </p>
      <p className="mt-4 text-sm text-slate-500">
        {member.description}
      </p>
    </div>
  );
}

/* ================= HOME ================= */
export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <main>
      {/* HERO */}
      <HeroGeometric />

      {/* SERVICES */}
      <InteractiveServices />

      {/* ABOUT + PROCESS + INDUSTRIES */}
      <AboutProcessIndustries />

      {/* FAQ */}
      <section id="faq" className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.id}
                faq={faq}
                isActive={activeFaq === index}
                onToggle={() =>
                  setActiveFaq(activeFaq === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* TEAM */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">
              Meet Our Team
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Dedicated professionals committed to delivering excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Improve Your Business Performance?
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Talk to our Six Sigma experts today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-teal px-10 py-4 rounded-xl font-bold shadow-xl transition hover:scale-105"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </main>
  );
}
