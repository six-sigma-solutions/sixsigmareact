import { useEffect, useRef, useState } from 'react'
import lottie from "lottie-web";
import { Link } from 'react-router-dom'
import { ChevronDown, ArrowRight } from 'lucide-react'
import AboutProcessIndustries from "../components/AboutProcessIndustries";
import Testimonials from "../components/Testimonials";

// Services data
const services = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Build modern, responsive websites that drive business growth with cutting-edge technologies and best practices.',
    gradient: 'blue',
    image: '/img/web-dev.jpg'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Create powerful iOS and Android applications that deliver exceptional user experiences.',
    gradient: 'purple',
    image: '/img/mobile-app.jpg'
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Craft beautiful, user-centered designs that captivate your audience and strengthen your brand.',
    gradient: 'teal',
    image: '/img/web-design.jpg'
  },
  {
    id: 'ai-agents',
    title: 'AI Agents',
    description: 'Leverage artificial intelligence to automate processes and gain competitive advantages.',
    gradient: 'navy',
    image: '/img/ai-agents.jpg'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Reach your target audience with data-driven marketing strategies that deliver results.',
    gradient: 'slate',
    image: '/img/digital-marketing.jpg'
  }
]

// Team data
const team = [
  {
    name: 'Dr. V. Cheallapondy',
    role: 'Chief Executive Officer',
    description: 'Innovative leader driving organizational excellence across the globe.',
    image: '/img/1.jpeg',
    initials: 'VC'
  },
  {
    name: 'Mr. S. Vasu',
    role: 'Founder & Consultant',
    description: 'Expert consultant helping organizations optimize workflows.',
    image: '/img/2.png',
    initials: 'SV'
  },
  {
    name: 'Mrs. Natasha',
    role: 'Head of Talent',
    description: 'Strategic leader focused on people development and quality culture.',
    image: '/img/3.png',
    initials: 'MN'
  }
]

// FAQ data
const faqs = [
  {
    question: 'What services does Six Sigma Solutions offer?',
    answer: 'We offer comprehensive IT solutions including web development, mobile app development, web design, AI agents, and digital marketing services tailored to your business needs.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A simple website may take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we offer comprehensive maintenance and support packages to ensure your solutions continue to perform optimally after launch.'
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve clients across various industries including healthcare, finance, education, retail, and manufacturing, bringing specialized expertise to each sector.'
  }
]

// Service Card Component
function ServiceCard({ service }) {
  const gradientColors = {
    blue: { accent: '#3b82f6', title: '#1e40af', button: 'bg-blue-500' },
    purple: { accent: '#8b5cf6', title: '#6d28d9', button: 'bg-purple-500' },
    teal: { accent: '#14b8a6', title: '#0f766e', button: 'bg-teal-500' },
    navy: { accent: '#0A2540', title: '#0A2540', button: 'bg-navy' },
    slate: { accent: '#64748b', title: '#334155', button: 'bg-slate-500' }
  }

  const colors = gradientColors[service.gradient]

  return (
    <div 
      className="solution-card group"
      data-gradient={service.gradient}
    >
      <div 
        className="card-bg"
        style={{ backgroundImage: `url(${service.image})` }}
      />
      <div className="card-content">
        <h3 style={{ color: colors.title }}>{service.title}</h3>
        <p>{service.description}</p>
        <Link 
          to="/contact" 
          className={`learn-more-btn ${colors.button}`}
        >
          Learn More
          <ArrowRight className="btn-icon w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

// FAQ Item Component
function FaqItem({ faq, isActive, onClick }) {
  return (
    <div 
      className={`faq-item border border-slate-200 rounded-2xl overflow-hidden transition-all ${isActive ? 'active bg-slate-50' : ''}`}
    >
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <span className="font-semibold text-navy pr-4">{faq.question}</span>
        <ChevronDown className={`w-5 h-5 text-teal transition-transform ${isActive ? 'rotate-180' : ''}`} />
      </button>
      <div className="faq-answer">
        <p className="px-6 pb-6 text-slate-500">{faq.answer}</p>
      </div>
    </div>
  )
}

// Team Card Component
function TeamCard({ member }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 text-center">
      <div className="relative w-32 h-32 mx-auto mb-6">
        {!imageError ? (
          <img
            src={member.image}
            alt={member.name}
            onError={() => setImageError(true)}
            className="w-32 h-32 rounded-full object-cover object-top shadow-md"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center text-2xl font-bold text-navy shadow-md">
            {member.initials}
          </div>
        )}
      </div>
      <h4 className="font-bold text-navy text-lg">{member.name}</h4>
      <p className="text-xs text-teal font-bold uppercase tracking-widest mt-1">{member.role}</p>
      <p className="mt-4 text-sm text-slate-500 leading-relaxed">{member.description}</p>
    </div>
  )
}

function Home() {
  const [activeFaq, setActiveFaq] = useState(null)
  const lottieRef = useRef(null)

 
useEffect(() => {
  if (!lottieRef.current) return;

  const animation = lottie.loadAnimation({
    container: lottieRef.current,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/img/business.json", // MUST be in public/img
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  });

  return () => animation.destroy();
}, []);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  return (
    <main>
      {/* Hero Section */}
      <header id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right">
          <h1 className="text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
            Driving Excellence Through
            <span className="text-blue-600"> Six Sigma Solutions</span>
          </h1>
          <p className="text-lg text-slate-500 mb-8 font-medium">
            Training | Consulting | Process Improvement | Business Solutions
          </p>
          <div className="flex gap-4">
            <Link to="/contact">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-xl transition">
                Get Started <span>→</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center" data-aos="zoom-in">
          <div className="w-full max-w-[420px] aspect-square">
            <div ref={lottieRef} className="w-full h-full"></div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Services</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to transform your business and drive growth.
            </p>
          </div>

          <div className="solution-cards" data-aos="fade-up">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* About + Process + Industries */}
      <AboutProcessIndustries />


    

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="space-y-4" data-aos="fade-up">
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index} 
                faq={faq} 
                isActive={activeFaq === index}
                onClick={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
         <Testimonials />

      {/* Pillars Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-navy mb-4">Meet Our Team</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Dedicated professionals committed to delivering excellence in every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" data-aos="fade-up">
            {team.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      
     {/* CTA Section */}
      <section className="bg-teal py-20 px-6 text-center text-white">
        <div className="max-w-4xl mx-auto" data-aos="zoom-in">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Improve Your Business Performance?
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Talk to our Six Sigma experts and start your journey toward operational excellence.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-teal px-10 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
