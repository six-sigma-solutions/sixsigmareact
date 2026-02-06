import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Six Sigma Solutions provided resources for crucial requirements within the timeframe given. Service from the team is excellent and highly professional.",
    name: "Suresh V.",
    designation: "Test Manager, Infosys",
    src: "src/assets/Testimonial2.jpg"
  },
  {
    quote: "The dedication and hard work from Six Sigma Solutions is amazing! Their support has been instrumental in our operational ramp-up.",
    name: "Assistant Manager",
    designation: "eG Innovations Pvt Ltd",
    src: "src/assets/Testimonial1.jpg"
  },
  {
    quote: "I appreciate the team for their good work. The way they handle queries and provide relevant information is really commendable. Best in class.",
    name: "Chandrasekaran M.",
    designation: "Consultant, TCS",
    src: "src/assets/Testimonial3.jpg"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [rotationValues, setRotationValues] = useState([]);

  // Memoized navigation to prevent unnecessary re-renders
  const handleNext = useCallback(() => { 
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Generate stable random rotations once to prevent "jumping" on every re-render
  useEffect(() => {
    const rotations = testimonials.map(() => Math.floor(Math.random() * 21) - 10);
    setRotationValues(rotations);
  }, []);

  // Auto-play effect with cleanup
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext, active]); // Reset timer when user manually interacts

  return (
    <section id="testimonials" className="py-12 md:py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-teal-600 font-bold uppercase tracking-widest text-sm"
          >
            Success Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mt-4 mb-4"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        {/* Animated Testimonials Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* Image Stack - Responsive height adjustment */}
            <div className="relative h-[300px] md:h-[400px] w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  index === active && (
                    <motion.div
                      key={testimonial.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: rotationValues[index] || 0,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        z: 0,
                        rotate: 0,
                        zIndex: 50,
                        y: [0, -20, 0],
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: rotationValues[index] || 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0"
                    >
                      <img
                        src={testimonial.src}
                        alt={testimonial.name}
                        draggable={false}
                        className="h-full w-full rounded-3xl object-cover shadow-2xl border-4 border-white"
                      />
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
              
              {/* Visual "Shadow" Stack behind active image */}
              <div className="absolute inset-0 border-2 border-slate-100 rounded-3xl -rotate-3 scale-95 -z-10" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center py-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Star Rating */}
                  <div className="flex gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  {/* Quote with Word Animation */}
                  <div className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed italic">
                    {testimonials[active].quote.split(" ").map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.01 * index }}
                        className="inline-block mr-1"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>

                  {/* Author Details */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                      {testimonials[active].name}
                    </h3>
                    <p className="text-sm text-teal-600 font-semibold uppercase tracking-wider mt-1">
                      {testimonials[active].designation}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-10">
                <button
                  onClick={handlePrev}
                  className="h-12 w-12 rounded-full bg-slate-100 hover:bg-white hover:shadow-lg border border-slate-200 flex items-center justify-center group transition-all"
                  aria-label="Previous testimonial"
                >
                  <IconArrowLeft className="h-6 w-6 text-slate-700 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-12 w-12 rounded-full bg-slate-100 hover:bg-white hover:shadow-lg border border-slate-200 flex items-center justify-center group transition-all"
                  aria-label="Next testimonial"
                >
                  <IconArrowRight className="h-6 w-6 text-slate-700 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}