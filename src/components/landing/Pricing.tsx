import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Start building your study rhythm",
    features: [
      "Core study lessons",
      "Practice questions",
      "Basic progress tracking",
      "Light and dark themes",
    ],
    cta: "Download Placeholder",
    featured: false,
  },
  {
    name: "Premium",
    price: "App Store",
    period: " pricing",
    description: "Unlock deeper review tools",
    features: [
      "Everything in Free",
      "AI Focus Review",
      "Premium final review notes",
      "Flagged study sections",
      "Expanded themes and reading controls",
    ],
    cta: "View on App Store",
    featured: true,
  },
];

const Pricing = () => {
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
            Study free. Upgrade for <span className="gradient-text">deeper review</span>
          </h2>
          <p className="text-muted-foreground text-lg">Final prices, trials, and availability are shown in the App Store.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`rounded-2xl p-8 relative ${
                plan.featured
                  ? "glass-card border-primary/30 glow-blue"
                  : "glass-card"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground text-sm">{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground/80">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
