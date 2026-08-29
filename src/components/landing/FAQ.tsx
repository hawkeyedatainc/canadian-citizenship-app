import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this an official Government of Canada app?",
    answer: "No. Canada Citizenship Prep 2026 is an independent study aid from HawkEye Data Solutions Inc. It is not affiliated with, endorsed by, authorized by, or operated by IRCC, the Government of Canada, or any government agency.",
  },
  {
    question: "Are the practice questions official exam questions?",
    answer: "No. Practice questions are created for study and review. They are not official citizenship test questions and should be used alongside official public information from Government of Canada sources.",
  },
  {
    question: "Does the app guarantee I will pass?",
    answer: "No app can guarantee a passing result. The app is designed to help you study, practice, and understand the material more clearly, but your result depends on your preparation and the actual test.",
  },
  {
    question: "Does the app collect my information?",
    answer: "No. The app does not require an account and does not collect your name, email, study progress, answers, flags, test date, province or territory, or AI Focus Review activity. Study data stays local on your device.",
  },
  {
    question: "What does AI Focus Review do?",
    answer: "AI Focus Review uses your local practice history, missed answers, weak topics, and flagged sections to suggest what to review next. It is a study helper, not official immigration advice.",
  },
  {
    question: "Can I study province or territory-specific civics?",
    answer: "Yes. You can select your province or territory to include local civics practice where relevant to your preparation.",
  },
  {
    question: "How do I cancel my subscription?",
    answer: "Subscriptions and purchases are managed by Apple. You can manage or cancel them through your Apple ID subscription settings.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card px-6 border-none"
              >
                <AccordionTrigger className="text-sm font-semibold hover:no-underline text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
