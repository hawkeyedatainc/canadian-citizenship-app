import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { assetPath } from "@/lib/assets";

const screens = [
  {
    title: "Home",
    description: "Countdown, performance, AI Focus Review, and study notes in one calm dashboard.",
    src: "/app/home.jpg",
  },
  {
    title: "Learn",
    description: "Chapter progress, lesson counts, and clean reading paths for major citizenship topics.",
    src: "/app/learn.jpg",
  },
  {
    title: "Practice",
    description: "Timed 20-question mock tests with answer choices, a timer, and flagged questions.",
    src: "/app/practice.jpg",
  },
  {
    title: "Results",
    description: "Detailed answer review after each test so missed concepts are easy to revisit.",
    src: "/app/results.jpg",
  },
  {
    title: "Lessons",
    description: "Adjustable reading controls, inline definitions, and focused study sections.",
    src: "/app/lesson.jpg",
  },
  {
    title: "Settings",
    description: "Test date, appearance, reading comfort, and accessibility settings.",
    src: "/app/settings.jpg",
  },
];

const Screenshots = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(217,24,46,0.08),transparent)]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Clean, focused prep with <span className="gradient-text">premium study tools</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A modern interface built for repeatable practice: readable lessons, adjustable text,
            timed tests, detailed answer review, AI Focus Review, and a calm dashboard that keeps
            your next step clear.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="mx-auto w-full max-w-[300px]"
            >
              <div className="phone-frame bg-white transition-transform duration-500 hover:-translate-y-1">
                <img src={assetPath(screen.src)} alt={`${screen.title} app screen`} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-4 rounded-lg border border-border bg-secondary/40 p-4">
                <h3 className="font-display text-lg font-semibold">{screen.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{screen.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
