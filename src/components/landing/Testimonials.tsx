import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookMarked, Clock, ShieldCheck } from "lucide-react";

const studyModes = [
  {
    icon: Clock,
    title: "Before Test Day",
    content: "Use the countdown, timed practice, and final notes to turn a vague deadline into a concrete review plan.",
  },
  {
    icon: BookMarked,
    title: "While You Study",
    content: "Read lessons with definitions close at hand, then flag sections that deserve another pass later.",
  },
  {
    icon: ShieldCheck,
    title: "With Clear Boundaries",
    content: "Independent practice, no official-status claims, no guarantee language, and a local-only privacy model.",
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Designed for real <span className="gradient-text">study moments</span>
          </h2>
          <p className="text-muted-foreground text-lg">Useful when you are starting early or reviewing close to exam day.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {studyModes.map((mode, i) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass-card p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/12">
                <mode.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-lg font-semibold">{mode.title}</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{mode.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
