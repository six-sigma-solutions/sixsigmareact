import { CheckCircle2 } from "lucide-react";

export default function ServiceFeatures({ features = [] }) {
  if (!features.length) return null;

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex gap-4 items-start"
          >
            <CheckCircle2
              className="text-teal w-6 h-6 flex-shrink-0 mt-1"
              aria-hidden="true"
            />
            <p className="text-slate-600 leading-relaxed">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
