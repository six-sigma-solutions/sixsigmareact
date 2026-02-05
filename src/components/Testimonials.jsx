import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Six Sigma Solutions provided resources for crucial requirements within the timeframe given. Service from the team is excellent and highly professional.",
    name: "Suresh V.",
    designation: "Test Manager, Infosys",
    src: "src/assets/Testimonial 1.jpeg"
  },
  {
    quote: "The dedication and hard work from Six Sigma Solutions is amazing! Their support has been instrumental in our operational ramp-up.",
    name: "Assistant Manager",
    designation: "eG Innovations Pvt Ltd",
    src: "src/assets/Testimonial 2.jpeg"
  },
  {
    quote: "I appreciate the team for their good work. The way they handle queries and provide relevant information is really commendable. Best in class.",
    name: "Chandrasekaran M.",
    designation: "Consultant, TCS",
    src: "src/assets/Testimonial 3.jpeg"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
      <section id="testimonials" className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-teal font-bold uppercase tracking-widest text-sm">
            Success Stories
          </span>
            <h2 className="text-4xl font-bold text-navy mt-4 mb-4">
              What Our Clients Say
            </h2>
          </div>

          {/* Animated Testimonials */}
          <div className="max-w-6xl mx-auto">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              {/* Image Stack */}
              <div>
                <div className="relative h-80 w-full">
                  <AnimatePresence>
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.src}
                            initial={{
                              opacity: 0,
                              scale: 0.9,
                              z: -100,
                              rotate: randomRotateY(),
                            }}
                            animate={{
                              opacity: isActive(index) ? 1 : 0.7,
                              scale: isActive(index) ? 1 : 0.95,
                              z: isActive(index) ? 0 : -100,
                              rotate: isActive(index) ? 0 : randomRotateY(),
                              zIndex: isActive(index)
                                  ? 999
                                  : testimonials.length + 2 - index,
                              y: isActive(index) ? [0, -80, 0] : 0,
                            }}
                            exit={{
                              opacity: 0,
                              scale: 0.9,
                              z: 100,
                              rotate: randomRotateY(),
                            }}
                            transition={{
                              duration: 0.4,
                              ease: "easeInOut",
                            }}
                            className="absolute inset-0 origin-bottom"
                        >
                          <img
                              src={testimonial.src}
                              alt={testimonial.name}
                              draggable={false}
                              className="h-full w-full rounded-3xl object-cover object-center shadow-2xl"
                          />
                        </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Content */}
              <div className="flex justify-between flex-col py-4">
                <motion.div
                    key={active}
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: -20,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <motion.p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {testimonials[active].quote.split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{
                              filter: "blur(10px)",
                              opacity: 0,
                              y: 5,
                            }}
                            animate={{
                              filter: "blur(0px)",
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.2,
                              ease: "easeInOut",
                              delay: 0.02 * index,
                            }}
                            className="inline-block"
                        >
                          {word}&nbsp;
                        </motion.span>
                    ))}
                  </motion.p>

                  {/* Author */}
                  <h3 className="text-2xl font-bold text-navy">
                    {testimonials[active].name}
                  </h3>
                  <p className="text-sm text-teal font-semibold uppercase tracking-wider mt-1">
                    {testimonials[active].designation}
                  </p>
                </motion.div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 pt-12 md:pt-0">
                  <button
                      onClick={handlePrev}
                      className="h-10 w-10 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center group transition-all"
                      aria-label="Previous testimonial"
                  >
                    <IconArrowLeft className="h-5 w-5 text-navy group-hover:rotate-12 transition-transform duration-300" />
                  </button>
                  <button
                      onClick={handleNext}
                      className="h-10 w-10 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center group transition-all"
                      aria-label="Next testimonial"
                  >
                    <IconArrowRight className="h-5 w-5 text-navy group-hover:-rotate-12 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}