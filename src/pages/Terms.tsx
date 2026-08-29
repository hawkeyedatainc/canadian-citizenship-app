import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import AppLogo from "@/components/branding/AppLogo";
import { AlertTriangle, Apple, BookOpen, Scale, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "These Terms of Use govern your use of Canada Citizenship Prep 2026 and this website. By using the app or website, you agree to these Terms.",
      "The app is provided by HawkEye Data Solutions Inc.",
      "If you do not agree to these Terms, do not use the app or website.",
    ],
  },
  {
    title: "2. Independent Study Aid Only",
    content: [
      "Canada Citizenship Prep 2026 is an independent supplementary study aid for Canadian citizenship test preparation.",
      "The app is not affiliated with, endorsed by, authorized by, sponsored by, or operated by Immigration, Refugees and Citizenship Canada (IRCC), the Government of Canada, or any federal, provincial, territorial, municipal, or other government agency.",
      "The app and website are not official government services, official government publications, official test materials, or official immigration or citizenship advice.",
    ],
  },
  {
    title: "3. No Official Questions",
    content: [
      "Practice questions, mock tests, answer choices, explanations, lessons, definitions, notes, local civics prompts, and AI Focus Review suggestions are provided for study and practice only.",
      "Practice questions are not official citizenship test questions. They may not appear on the real test, and the real test may include different wording, topics, rules, or requirements.",
      "You are responsible for checking official IRCC and Government of Canada sources for current official materials and requirements.",
    ],
  },
  {
    title: "4. No Guarantee of Passing or Outcome",
    content: [
      "Use of the app does not guarantee that you will pass the citizenship test.",
      "Use of the app does not guarantee approval of any citizenship, immigration, residency, travel, legal, or government application or process.",
      "Your preparation, eligibility, test performance, application status, and any official outcome are your responsibility and are determined by the relevant official authorities, not by HawkEye Data Solutions Inc.",
    ],
  },
  {
    title: "5. No Legal or Immigration Advice",
    content: [
      "The app and website provide general study content only.",
      "Nothing in the app or website is legal advice, immigration advice, citizenship advice, government advice, or professional advice.",
      "For advice about your specific situation, consult official sources or a qualified professional.",
    ],
  },
  {
    title: "6. Accuracy and Changes",
    content: [
      "We aim to provide useful study content, but we do not promise that every lesson, definition, explanation, answer, recommendation, or practice question is complete, current, error-free, or suitable for your situation.",
      "Laws, policies, public materials, test practices, government pages, and official guidance may change at any time.",
      "If app content conflicts with official sources, official sources control.",
    ],
  },
  {
    title: "7. AI Focus Review",
    content: [
      "AI Focus Review is a study-planning feature that helps identify topics to revisit based on your local practice activity.",
      "AI-assisted suggestions may be incomplete or imperfect. You should not rely on them as official guidance, legal advice, immigration advice, or a guarantee of test readiness.",
      "You remain responsible for deciding what to study and for verifying important information using official sources.",
    ],
  },
  {
    title: "8. Purchases and Premium Features",
    content: [
      "If premium features, subscriptions, trials, or one-time purchases are offered, they are handled through Apple's App Store systems unless otherwise stated.",
      "Prices, renewal terms, cancellation rights, refunds, and payment processing are controlled by Apple and your App Store account settings.",
      "Premium access may unlock additional study tools, but it does not guarantee passing, official accuracy, or any government outcome.",
    ],
  },
  {
    title: "9. Your Responsibilities",
    content: [
      "You are responsible for using the app lawfully, studying appropriately, checking official sources, and making your own decisions.",
      "You agree not to copy, scrape, resell, redistribute, publish, reverse engineer, interfere with, or misuse the app, website, content, design, or software except where permitted by law.",
      "You agree not to use the app or website in a way that harms HawkEye Data Solutions Inc., other users, Apple, service providers, or any third party.",
    ],
  },
  {
    title: "10. Intellectual Property",
    content: [
      "The app, website, design, software, app icon, branding, lesson structure, practice content, explanatory content, and study features are owned by HawkEye Data Solutions Inc. or its licensors, except for third-party marks and public-source references used for identification.",
      "References to Canada, IRCC, the Government of Canada, provinces, territories, laws, public institutions, or public materials do not imply affiliation, authorization, or endorsement.",
    ],
  },
  {
    title: "11. Availability",
    content: [
      "We may update, change, suspend, restrict, or discontinue any part of the app or website at any time without liability to you.",
      "We may change, add, remove, correct, or limit content and features at any time.",
    ],
  },
  {
    title: "12. Disclaimers",
    content: [
      "To the maximum extent permitted by law, the app and website are provided as-is and as-available, without warranties of any kind, whether express, implied, statutory, or otherwise.",
      "We disclaim warranties of accuracy, completeness, fitness for a particular purpose, merchantability, non-infringement, uninterrupted availability, and error-free operation to the maximum extent permitted by law.",
    ],
  },
  {
    title: "13. Limitation of Liability",
    content: [
      "To the maximum extent permitted by law, HawkEye Data Solutions Inc. and its owners, directors, officers, employees, contractors, licensors, and service providers will not be liable for any indirect, incidental, consequential, special, exemplary, punitive, or similar damages.",
      "This includes damages or losses related to test results, application outcomes, reliance on study content, missed deadlines, content errors, app availability, purchase issues, data loss, device issues, or decisions you make after using the app or website.",
      "Some jurisdictions do not allow certain limitations, so some limitations may not apply to you.",
    ],
  },
  {
    title: "14. Indemnity",
    content: [
      "To the maximum extent permitted by law, you agree to defend, indemnify, and hold harmless HawkEye Data Solutions Inc. from claims, losses, liabilities, damages, costs, and expenses arising from your misuse of the app or website, violation of these Terms, violation of law, or infringement of third-party rights.",
    ],
  },
  {
    title: "15. Changes to These Terms",
    content: [
      "We may update these Terms from time to time. The updated version will be posted on this page with a revised date.",
      "Your continued use of the app or website after changes means you accept the updated Terms.",
    ],
  },
  {
    title: "16. Contact",
    content: ["Questions about these Terms can be sent to learn@hawkeyedata.ca."],
  },
];

const Terms = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-32"
      >
        <section className="mb-10 rounded-lg border border-border bg-secondary/45 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-medium text-primary">
                <Scale className="h-4 w-4" />
                Terms of Use
              </div>
              <h1 className="font-display text-4xl font-bold md:text-5xl">
                Terms of Use for <span className="gradient-text">Canada Citizenship Prep 2026</span>
              </h1>
              <p className="mt-5 text-sm text-muted-foreground">Effective date: August 29, 2026</p>
              <p className="text-sm text-muted-foreground">Last updated: August 29, 2026</p>
              <p className="mt-5 max-w-2xl text-lg text-foreground/90">
                Strong terms for an independent study app: no official affiliation, no official questions, no legal advice, and no guarantee of passing.
              </p>
            </div>
            <AppLogo className="h-16 w-16 self-start md:self-center" />
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-4">
          {[
            { icon: ShieldCheck, label: "Independent", text: "No IRCC or government affiliation, authorization, sponsorship, or endorsement." },
            { icon: AlertTriangle, label: "No guarantee", text: "Practice does not guarantee passing or any application outcome." },
            { icon: BookOpen, label: "Study aid", text: "Use with official public sources and your own judgment." },
            { icon: Apple, label: "App Store", text: "Purchases, refunds, and subscriptions are managed by Apple." },
          ].map((item) => (
            <article key={item.label} className="rounded-lg border border-border bg-secondary/35 p-5">
              <item.icon className="mb-3 h-5 w-5 text-primary" />
              <h2 className="font-display text-base font-semibold">{item.label}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </section>

        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.02, duration: 0.35 }}
              className="rounded-lg border border-border bg-secondary/30 p-7 md:p-8"
            >
              <h2 className="font-display text-2xl font-semibold text-foreground">{section.title}</h2>
              <div className="mt-4 space-y-3 text-base leading-relaxed text-muted-foreground">
                {section.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Terms;
