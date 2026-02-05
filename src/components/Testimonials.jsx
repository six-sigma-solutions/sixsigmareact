import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 px-6 bg-navy overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-teal font-bold uppercase tracking-widest text-sm">
            Success Stories
          </span>
          <h2 className="text-4xl font-bold text-white mt-4">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div
            className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex gap-1 text-yellow-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <p className="text-slate-300 italic mb-8 leading-relaxed">
              "Six Sigma Solutions provided resources for crucial requirements
              within the timeframe given. Service from the team is excellent and
              highly professional."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center font-bold text-white">
                S
              </div>
              <div>
                <h4 className="text-white font-bold">Suresh V.</h4>
                <p className="text-xs text-slate-400">
                  Test Manager, Infosys
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex gap-1 text-yellow-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <p className="text-slate-300 italic mb-8 leading-relaxed">
              "The dedication and hard work from Six Sigma Solutions is amazing!
              Their support has been instrumental in our operational ramp-up."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">
                A
              </div>
              <div>
                <h4 className="text-white font-bold">Assistant Manager</h4>
                <p className="text-xs text-slate-400">
                  eG Innovations Pvt Ltd
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="flex gap-1 text-yellow-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <p className="text-slate-300 italic mb-8 leading-relaxed">
              "I appreciate the team for their good work. The way they handle
              queries and provide relevant information is really commendable.
              Best in class."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center font-bold text-white">
                C
              </div>
              <div>
                <h4 className="text-white font-bold">Chandrasekaran M.</h4>
                <p className="text-xs text-slate-400">
                  Consultant, TCS
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
