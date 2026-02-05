import { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import lottie from "lottie-web";

export default function AboutProcessIndustries() {
  const lottieRef = useRef(null);

  useEffect(() => {
    if (!lottieRef.current) return;

    const animation = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/img/business.json",
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
      },
    });

    return () => animation.destroy();
  }, []);

  return (
    <>
      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center"
      >
        {/* LEFT : LOTTIE (REPLACED IMAGE) */}
        <div className="relative" data-aos="fade-right">
          <div className="w-full h-[420px] rounded-[2.5rem] shadow-2xl border bg-white flex items-center justify-center">
            <div
              ref={lottieRef}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* RIGHT : CONTENT (UNCHANGED) */}
        <div data-aos="fade-left">
          <span className="text-teal font-bold uppercase tracking-widest text-sm">
            About Us
          </span>

          <h2 className="text-4xl font-bold text-navy mt-4 mb-6">
            Innovate. Improve. Succeed.
          </h2>

          <p className="text-slate-500 mb-8 text-lg leading-relaxed">
            Six Sigma Solutions is a professional consulting and training company
            focused on helping individuals and organizations achieve operational
            excellence through structured improvement methodologies.
          </p>

          <ul className="space-y-4 mb-10 text-slate-700">
            <li className="flex items-center gap-4 font-semibold">
              <CheckCircle2 className="text-teal w-6 h-6" />
              Industry expert trainers
            </li>
            <li className="flex items-center gap-4 font-semibold">
              <CheckCircle2 className="text-teal w-6 h-6" />
              Practical, results-driven approach
            </li>
            <li className="flex items-center gap-4 font-semibold">
              <CheckCircle2 className="text-teal w-6 h-6" />
              Trusted by professionals and businesses
            </li>
          </ul>
        </div>
      </section>

      {/* ================= OUR PROCESS ================= */}
      <section id="process" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-teal font-bold uppercase tracking-widest text-sm">
              Our Methodology
            </span>
            <h2 className="text-4xl font-bold text-navy mt-4">
              How We Work – DMAIC Framework
            </h2>
            <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
              We follow the globally proven Six Sigma DMAIC approach to ensure
              measurable improvements and sustainable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
            {[
              {
                title: "Define",
                desc: "Identify business problems, goals, and customer expectations.",
              },
              {
                title: "Measure",
                desc: "Collect data to understand current performance levels.",
              },
              {
                title: "Analyze",
                desc: "Identify root causes of defects and inefficiencies.",
              },
              {
                title: "Improve",
                desc: "Implement solutions to optimize processes and outcomes.",
              },
              {
                title: "Control",
                desc: "Sustain improvements through monitoring and control plans.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section id="industries" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-teal font-bold uppercase tracking-widest text-sm">
            Industries
          </span>
          <h2 className="text-4xl font-bold text-navy mt-4">
            Industries We Serve
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Our Six Sigma Solutions are adaptable across multiple industries and
            business models.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {[
            "IT & Software",
            "Manufacturing",
            "Healthcare",
            "Finance & Banking",
            "Startups & SMEs",
          ].map((industry, index) => (
            <div
              key={industry}
              className="p-8 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h4 className="font-bold text-navy">{industry}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
