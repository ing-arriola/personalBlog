import { Grid3x3, FileText, ChevronRight, Download } from "lucide-react";
import { NavLink } from "./NavLink";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/work", label: "Selected Work" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border/50"
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
              <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                Jaime Arriola
              </span>
              <span className="text-xs text-muted-foreground">
                Full-Stack · TS · React · Python · AI
              </span>
            </div>
          </NavLink>

          {/* Right side - Navigation Links and Resume Button */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-sm text-foreground hover:text-primary transition-colors"
                activeClassName="text-primary"
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/resume">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
                Resume
              </Button>
            </NavLink>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden flex items-center gap-2">
            <NavLink to="/resume">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="w-4 h-4" />
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
