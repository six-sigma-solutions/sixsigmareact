import { motion, useReducedMotion } from "framer-motion";

/* SIMPLE cn() HELPER */
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/* ================= ELEGANT SHAPE ================= */
function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: -120, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{
        duration: 2.2,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className={cn("absolute will-change-transform", className)}
    >
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                y: [0, 15, 0],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border border-white/20",
            "shadow-[0_8px_32px_rgba(255,255,255,0.1)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

/* ================= HERO ================= */
export default function HeroGeometric({
  title1 = "Transforming Businesses With",
  title2 = "Data-Driven Six Sigma Excellence",
}) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: 0.4 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <header
      id="home"
      role="banner"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303]"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-rose-500/10 blur-3xl" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/20"
          className="left-[-10%] top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-rose-500/20"
          className="right-[-5%] top-[75%]"
        />
        <ElegantShape
          delay={0.6}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/20"
          className="left-[10%] bottom-[10%]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            {title1}
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-rose-300">
            {title2}
          </span>
        </motion.h1>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed"
        >
          We help organizations optimize processes, reduce inefficiencies,
          and achieve measurable, sustainable growth through proven Six Sigma
          methodologies and modern digital solutions.
        </motion.p>
      </div>
    </header>
  );
}
