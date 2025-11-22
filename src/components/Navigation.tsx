import { Home, User, Briefcase, Mail, FileText, BookOpen } from "lucide-react";
import { NavLink } from "./NavLink";
import { motion } from "framer-motion";

const Navigation = () => {
  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/about", icon: User, label: "About" },
    { to: "/work", icon: Briefcase, label: "My Work" },
    { to: "/blog", icon: BookOpen, label: "Blog" },
    { to: "/contact", icon: Mail, label: "Contact" },
    { to: "/resume", icon: FileText, label: "Resume" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-2xl font-display font-bold">
            <span className="text-gradient">JA</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="px-4 py-2 rounded-lg transition-smooth hover:bg-secondary/50"
                activeClassName="bg-secondary text-primary"
              >
                <span className="flex items-center gap-2">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </span>
              </NavLink>
            ))}
          </div>

          <div className="md:hidden flex gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="p-2 rounded-lg transition-smooth hover:bg-secondary/50"
                activeClassName="bg-secondary text-primary"
              >
                <item.icon className="w-5 h-5" />
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
