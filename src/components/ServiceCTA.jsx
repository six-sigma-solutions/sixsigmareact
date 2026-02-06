import { Link } from "react-router-dom";

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-teal text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to start your project?
        </h2>

        <Link
          to="/contact"
          className="
            inline-flex items-center justify-center
            bg-white text-teal px-10 py-4 rounded-xl font-bold
            transition transform
            hover:bg-slate-100 hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-white/40
          "
        >
          Talk to an Expert
        </Link>
      </div>
    </section>
  );
}
