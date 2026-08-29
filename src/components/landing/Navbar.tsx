import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import AppLogo from "@/components/branding/AppLogo";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/#features" },
  { label: "FAQ", path: "/#faq" },
  { label: "Privacy", path: "/privacy" },
  { label: "Terms", path: "/terms" },
  { label: "Support", path: "/support" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <AppLogo className="h-9 w-9" />
          <span className="font-display text-xl font-bold text-foreground">Canada Citizenship Prep</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            App Store
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mt-2 mx-4 rounded-2xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.path}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium ${
                location.pathname === link.path ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold text-center"
          >
            App Store
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
