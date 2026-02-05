export default function ServiceHero({ title, subtitle }) {
  return (
    <section className="py-24 px-6 bg-slate-50 text-center">
      <h1 className="text-5xl font-bold text-navy">{title}</h1>
      <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </section>
  );
}
