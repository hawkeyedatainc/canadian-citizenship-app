import { Link } from "react-router-dom";
import AppLogo from "@/components/branding/AppLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <AppLogo className="h-8 w-8" />
            <span className="font-display font-bold text-foreground">Canada Citizenship Prep 2026</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link to="/support" className="hover:text-foreground transition-colors">Support</Link>
          </div>

          <p className="max-w-sm text-center text-xs text-muted-foreground md:text-right">
            (c) {new Date().getFullYear()} HawkEye Data Solutions Inc. Independent study aid. Not affiliated with IRCC or the Government of Canada.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
