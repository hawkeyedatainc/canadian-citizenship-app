import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { motion } from "framer-motion";
import AppLogo from "@/components/branding/AppLogo";
import { Database, EyeOff, HardDrive, Mail, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "1. App Privacy Summary",
    content: [
      "Canada Citizenship Prep 2026 is designed to be private by default.",
      "The app does not require an account. The app does not ask for your name, email address, phone number, home address, citizenship application details, immigration status, contacts, photos, location, or government identifiers.",
      "The app does not send your study progress, practice answers, test date, settings, province or territory selection, flagged questions, flagged lessons, or AI Focus Review activity to HawkEye Data Solutions Inc. servers.",
      "HawkEye Data Solutions Inc. does not operate a server that collects, stores, views, sells, rents, or shares your in-app study data.",
    ],
  },
  {
    title: "2. Information We Do Not Collect",
    content: [
      "We do not collect personal information through the app.",
      "We do not collect names, email addresses, phone numbers, account profiles, precise location, device contacts, citizenship application information, immigration status, government ID numbers, advertising identifiers, or user-generated study records.",
      "We do not use third-party advertising tracking, marketing pixels, behavioral analytics, or cross-app tracking in the app.",
    ],
  },
  {
    title: "3. Information Stored Only on Your Device",
    content: [
      "The app may store information locally on your device so your study experience works between sessions.",
      "Local-only app information may include lesson progress, completed chapters, practice-test answers, missed questions, flagged questions, flagged study sections, AI Focus Review recommendations, selected province or territory, test-date countdown, theme choice, font-size setting, and premium feature state.",
      "This information stays on your device and is not transmitted to HawkEye Data Solutions Inc. servers.",
    ],
  },
  {
    title: "4. AI Focus Review",
    content: [
      "AI Focus Review is intended to help you revisit weaker topics and missed questions.",
      "AI Focus Review is based on your local practice activity and study history in the app. It does not send your study activity to HawkEye Data Solutions Inc. servers.",
      "AI Focus Review is a study tool only. It is not official guidance, legal advice, immigration advice, or a guarantee of test performance.",
    ],
  },
  {
    title: "5. Purchases",
    content: [
      "If the app offers paid or premium features, purchases are handled by Apple through the App Store.",
      "HawkEye Data Solutions Inc. does not receive your full payment card number. Apple may process transaction information according to Apple's own policies.",
      "The app may read purchase status from Apple's systems so premium features can be unlocked or restored. This is not the same as collecting your study data.",
    ],
  },
  {
    title: "6. Notifications",
    content: [
      "If you enable reminders or a test-date countdown notification, those reminders are scheduled through your device and Apple notification systems.",
      "You can turn notifications off at any time in iOS Settings.",
      "Notification preferences are not sent to HawkEye Data Solutions Inc. servers.",
    ],
  },
  {
    title: "7. Deletion and Control",
    content: [
      "Because in-app study data is stored locally and not collected by us, HawkEye Data Solutions Inc. cannot access it, export it, delete it for you, or recover it for you.",
      "To delete local app data, delete the app from your device or use any reset/delete controls provided inside the app.",
      "If your Apple device backup settings include app data, backup copies may be handled by Apple according to your device and iCloud settings.",
    ],
  },
  {
    title: "8. Support Emails Are Voluntary",
    content: [
      "The app does not require you to contact support.",
      "If you choose to email us outside the app, your email address and message are sent by your email provider to our email provider so we can reply. This is a voluntary support communication, not automatic app data collection.",
      "Do not send citizenship application details, government identifiers, or sensitive immigration information in support emails.",
    ],
  },
  {
    title: "9. Independent Study Aid",
    content: [
      "Canada Citizenship Prep 2026 is an independent study aid. It is not affiliated with, endorsed by, authorized by, or operated by Immigration, Refugees and Citizenship Canada (IRCC), the Government of Canada, or any government agency.",
      "Practice questions are not official exam questions. The app is supplementary and does not guarantee that you will pass the citizenship test.",
      "You should consult official Government of Canada and IRCC sources for official information.",
    ],
  },
  {
    title: "10. Changes",
    content: [
      "If our privacy practices change, this policy should be updated to describe the new practices.",
      "The effective date and last updated date above show when this version was prepared.",
    ],
  },
  {
    title: "11. Contact",
    content: [
      "Questions about this Privacy Policy can be sent to HawkEye Data Solutions Inc. at learn@hawkeyedata.ca.",
    ],
  },
];

const highlights = [
  { icon: EyeOff, title: "No account", text: "No sign-up, profile, name, email, or phone number is required in the app." },
  { icon: HardDrive, title: "Local only", text: "Progress, flags, settings, and review history stay on the user's device." },
  { icon: Database, title: "No servers", text: "HawkEye Data Solutions Inc. does not collect or store in-app study data on servers." },
  { icon: Mail, title: "Voluntary support", text: "Email support is optional and separate from automatic app data collection." },
];

const Privacy = () => {
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
                <ShieldCheck className="h-4 w-4" />
                Privacy Policy
              </div>
              <h1 className="font-display text-4xl font-bold md:text-5xl">
                Privacy Policy for <span className="gradient-text">Canada Citizenship Prep 2026</span>
              </h1>
              <p className="mt-5 text-sm text-muted-foreground">Effective date: August 29, 2026</p>
              <p className="text-sm text-muted-foreground">Last updated: August 29, 2026</p>
              <p className="mt-5 max-w-2xl text-lg text-foreground/90">
                The app is built so study data stays local to the user's device.
              </p>
            </div>
            <AppLogo className="h-16 w-16 self-start md:self-center" />
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-4">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-lg border border-border bg-secondary/35 p-5">
              <item.icon className="mb-3 h-5 w-5 text-primary" />
              <h2 className="font-display text-base font-semibold">{item.title}</h2>
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

export default Privacy;
