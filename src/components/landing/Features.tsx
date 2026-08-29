import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Brain,
  CalendarDays,
  Flag,
  Highlighter,
  MapPin,
  Palette,
  Text,
  Timer,
} from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Timed Mock Tests",
    description: "Practice 20-question sessions with a 45-minute timer so pacing feels familiar before test day.",
  },
  {
    icon: BookOpen,
    title: "Full Study Lessons",
    description: "Review major citizenship topics including history, rights and responsibilities, government, elections, regions, and symbols.",
  },
  {
    icon: Brain,
    title: "AI Focus Review",
    description: "Focus final review around weaker topics, missed questions, and patterns from your local practice history.",
  },
  {
    icon: MapPin,
    title: "Local Civics Practice",
    description: "Choose a province or territory to include relevant local government and civic knowledge while you prepare.",
  },
  {
    icon: Highlighter,
    title: "Flag and Review",
    description: "Flag questions and study sections, then return to them during focused review sessions.",
  },
  {
    icon: CalendarDays,
    title: "Test Date Countdown",
    description: "Set your test date and keep your study plan anchored to the time you actually have left.",
  },
  {
    icon: Flag,
    title: "Detailed Answer Review",
    description: "After every mock test, see what you missed, why it matters, and which areas deserve another pass.",
  },
  {
    icon: Text,
    title: "Comfortable Reading",
    description: "Adjust font size and read inline definitions without losing your place in the lesson.",
  },
  {
    icon: Palette,
    title: "Flexible Themes",
    description: "Choose light, dark, or Canada-inspired themes for long study sessions that feel easy on the eyes.",
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <feature.icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-display font-semibold text-lg text-foreground mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Built for repeatable, focused{" "}
            <span className="gradient-text">citizenship prep</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn the material, practice under pressure, review your misses, and keep your next study session clear.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
