import { Link } from "react-router-dom";

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-teal text-white text-center">
      <h2 className="text-4xl font-bold mb-6">
        Ready to start your project?
      </h2>
      <Link
        to="/contact"
        className="bg-white text-teal px-10 py-4 rounded-xl font-bold"
      >
        Talk to an Expert
      </Link>
    </section>
  );
}
