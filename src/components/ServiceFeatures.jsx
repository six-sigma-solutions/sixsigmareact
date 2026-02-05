import { CheckCircle2 } from "lucide-react";

export default function ServiceFeatures({ features }) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex gap-4 items-start">
            <CheckCircle2 className="text-teal w-6 h-6" />
            <p className="text-slate-600">{f}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
