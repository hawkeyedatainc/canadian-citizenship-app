import { motion } from "framer-motion";
import { Apple, BookOpen, ShieldCheck } from "lucide-react";
import { assetPath } from "@/lib/assets";

const Hero = () => {
  return (
    <section className="relative flex min-h-[94vh] items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(217,24,46,0.16),rgba(15,23,42,0)_36%,rgba(13,148,136,0.13)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-20 border-b border-border/40 bg-background/35 backdrop-blur-sm" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              Prepare for the Canadian citizenship test with{" "}
              <span className="gradient-text">calm confidence.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Timed 20-question mock tests, focused study lessons, AI Focus Review, local civics practice, and a test-date countdown in one modern iPhone app.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-colors"
              >
                <Apple size={20} />
                <div className="text-left">
                  <div className="text-[10px] font-normal opacity-70 leading-none">Download on the</div>
                  <div className="leading-tight">App Store</div>
                </div>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/75"
              >
                <BookOpen size={18} />
                Explore Features
              </a>
            </motion.div>

            <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
              {[
                ["20 questions", "Practice format"],
                ["45 minutes", "Timed sessions"],
                ["AI Focus Review", "Missed topics"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-lg border border-border/60 bg-secondary/45 p-4">
                  <div className="font-display text-lg font-bold text-foreground">{value}</div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="phone-frame w-[280px] bg-white md:w-[310px]">
                <img
                  src={assetPath("/app/home.jpg")}
                  alt="Canada Citizenship Prep home screen with countdown, performance, and AI focus review"
                  className="h-full w-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-5 -left-6 rounded-lg border border-border bg-background/90 p-3 px-4 shadow-xl backdrop-blur"
              >
                <div className="text-xs text-muted-foreground">Actual app screen</div>
                <div className="font-display text-lg font-bold text-primary">Home</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute -right-6 -top-5 rounded-lg border border-border bg-background/90 p-3 px-4 shadow-xl backdrop-blur"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Local only
                </div>
                <div className="font-display text-lg font-bold text-foreground">No account</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
