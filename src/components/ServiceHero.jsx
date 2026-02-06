export default function ServiceHero({
  title = "Our Services",
  subtitle = "We provide professional solutions tailored to your business needs.",
}) {
  return (
    <header className="py-24 bg-slate-50 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-navy">
          {title}
        </h1>

        <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
