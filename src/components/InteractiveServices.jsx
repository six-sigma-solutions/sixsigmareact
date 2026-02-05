import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Services data with images
const services = [
    {
        id: 'web-dev',
        title: 'Web Development',
        description: 'Build modern, responsive websites that drive business growth with cutting-edge technologies and best practices.',
        image: 'src/assets/Web dev.jpg'
    },
    {
        id: 'mobile-app',
        title: 'Mobile App Development',
        description: 'Create powerful iOS and Android applications that deliver exceptional user experiences.',
        image: 'src/assets/app dev.jpg'
    },
    {
        id: 'web-design',
        title: 'Web Design',
        description: 'Craft beautiful, user-centered designs that captivate your audience and strengthen your brand.',
        image: 'src/assets/webdesign.jpg'
    },
    {
        id: 'ai-agents',
        title: 'AI Agents',
        description: 'Leverage artificial intelligence to automate processes and gain competitive advantages.',
        image: 'src/assets/ai agents.jpg'
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'Reach your target audience with data-driven marketing strategies that deliver results.',
        image: 'src/assets/digital marketing.jpg'
    }
];

// Accordion Item Component
const AccordionItem = ({ service, isActive, onMouseEnter }) => {
    return (
        <div
            className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
            onMouseEnter={onMouseEnter}
        >
            {/* Background Image */}
            <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* Caption Text */}
            <span
                className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
                    isActive
                        ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0'
                        : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
                }
        `}
            >
        {service.title}
      </span>
        </div>
    );
};

// Main Interactive Services Component
export default function InteractiveServices() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemHover = (index) => {
        setActiveIndex(index);
    };

    return (
        <section id="services" className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-4xl font-bold text-navy mb-4">Our Services</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Comprehensive IT solutions tailored to transform your business and drive growth.
                    </p>
                </div>

                {/* Interactive Content */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left Side: Dynamic Text Content */}
                    <div className="w-full lg:w-1/2">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <h3 className="text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
                                    {services[activeIndex].title}
                                </h3>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    {services[activeIndex].description}
                                </p>
                                <Link to="/contact">
                                    <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 hover:shadow-xl transition-all">
                                        Get Started
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Side: Image Accordion */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
                            {services.map((service, index) => (
                                <AccordionItem
                                    key={service.id}
                                    service={service}
                                    isActive={index === activeIndex}
                                    onMouseEnter={() => handleItemHover(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
