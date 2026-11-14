import { ChevronRight, Download, Menu, X } from "lucide-react";
import { NavLink } from "./NavLink";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

type NavItem = {
  to: string;
  label: string;
  highlight?: boolean;
};

const navItems: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/work", label: "Selected Work" },
  { to: "/contact", label: "Contact" },
  { to: "/english-for-devs", label: "English for Devs", highlight: true },
];

const textLinks = navItems.filter((item) => !item.highlight);
const highlightedLink = navItems.find((item) => item.highlight);

function ProgramLink({
  onClick,
  fullWidth = false,
}: {
  onClick?: () => void;
  fullWidth?: boolean;
}) {
  if (!highlightedLink) return null;

  return (
    <NavLink
      to={highlightedLink.to}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-full border border-primary/60 bg-primary/10 text-primary hover:bg-primary/20 transition-colors whitespace-nowrap",
        fullWidth ? "w-full text-base py-3 px-4" : "text-sm px-3 py-1.5",
      )}
      activeClassName="bg-primary text-primary-foreground border-primary hover:bg-primary/90"
    >
      {highlightedLink.label}
    </NavLink>
  );
}

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50"
      style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Logo and Name */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 bg-muted-foreground/40 rounded-sm" />
              <div className="w-4 h-4 bg-muted-foreground/40 rounded-sm" />
            </div>
            <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center">
              <ChevronRight className="w-3 h-3 text-background" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                Jaime Arriola
              </span>
              <span className="text-xs text-muted-foreground">
                Full-Stack · TS · React · Python · AI
              </span>
            </div>
          </NavLink>

          {/* Right side - Navigation Links and Resume Button */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {textLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-sm text-foreground hover:text-primary transition-colors"
                activeClassName="text-primary"
              >
                {item.label}
              </NavLink>
            ))}
            <ProgramLink />
            <NavLink to="/resume">
              <Button variant="default" size="sm" className="gap-2 bg-primary hover:bg-primary/90">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </NavLink>
          </div>

          {/* Mobile menu button. The horizontal nav starts at lg so the
              highlighted label does not collide with the logo. */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>

    {/* Mobile menu overlay - rendered outside nav using portal */}
    {typeof window !== "undefined" &&
      createPortal(
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={closeMobileMenu}
                className="fixed inset-0 bg-background/90 backdrop-blur-sm z-[60] lg:hidden"
              />

              {/* Menu drawer */}
              <motion.div
                id="mobile-nav"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-20 right-0 bottom-0 w-full max-w-sm bg-card border-l border-border z-[60] lg:hidden overflow-y-auto"
              >
                <div className="flex flex-col p-6 space-y-4">
                  <ProgramLink onClick={closeMobileMenu} fullWidth />
                  {textLinks.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={closeMobileMenu}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                      activeClassName="text-primary"
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <div className="pt-4 border-t border-border">
                    <NavLink to="/resume" onClick={closeMobileMenu}>
                      <Button
                        variant="default"
                        size="lg"
                        className="w-full gap-2 bg-primary hover:bg-primary/90"
                      >
                        <Download className="w-5 h-5" />
                        Download Resume
                      </Button>
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navigation;
