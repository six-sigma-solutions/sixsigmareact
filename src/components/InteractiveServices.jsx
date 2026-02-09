import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ================= IMAGE IMPORTS ================= */
import Webdev from "../assets/Web develop.png";
import Mobile from "../assets/Mobile.png";
import Webdesign from "../assets/Web design.png";
import Ai from "../assets/Ai.png";
import Digital from "../assets/Digital.png";

/* ================= SERVICES DATA ================= */
const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Build modern, responsive websites that drive business growth with cutting-edge technologies.",
    image: Webdev,
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Create powerful Android & iOS apps with seamless user experience.",
    image: Mobile,
  },
  {
    id: "web-design",
    title: "Web Design",
    description:
      "Craft beautiful, user-centered designs that strengthen your brand.",
    image: Webdesign,
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description:
      "Automate workflows and enhance decision-making using AI agents.",
    image: Ai,
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Grow your online presence using SEO, PPC, and content marketing.",
    image: Digital,
  },
];

/* ================= ACCORDION ITEM ================= */
function AccordionItem({ service, isActive, onHover, onClick }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      onMouseEnter={onHover}
      onFocus={onHover}
      onTouchStart={onClick}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      className={`
        relative h-[420px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out outline-none
        ${
          isActive
            ? "w-[280px] sm:w-[360px] lg:w-[400px] ring-2 ring-blue-500"
            : "w-[60px]"
        }
      `}
    >
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300
          ${
            isActive
              ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
              : "bottom-24 left-1/2 -translate-x-1/2 rotate-90"
          }
        `}
      >
        {service.title}
      </span>
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */
export default function InteractiveServices() {
  const [hoverIndex, setHoverIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

  /* Auto-close after 5 seconds */
  useEffect(() => {
    if (activeIndex !== null) {
      const timer = setTimeout(() => {
        setActiveIndex(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  const currentIndex = activeIndex ?? hoverIndex;
  const currentService = services[currentIndex];

  return (
    <section
      id="services"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy mb-4">
            Our Services
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Comprehensive solutions tailored to drive operational excellence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
                  {currentService.title}
                </h3>

                <p className="text-lg text-slate-600 mb-8">
                  {currentService.description}
                </p>

                <Link to={`/services/${currentService.id}`}>
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition">
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="w-full lg:w-1/2">
            <div className="flex gap-4 overflow-x-auto p-4">
              {services.map((service, index) => (
                <AccordionItem
                  key={service.id}
                  service={service}
                  isActive={index === currentIndex}
                  onHover={() =>
                    activeIndex === null && setHoverIndex(index)
                  }
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
