import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Gallery", path: "/gallery" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="RG Trophies" className="h-12 w-auto" />
          <div>
            <span className="font-heading font-bold text-xl text-primary block leading-tight">RG TROPHIES</span>
            <span className="text-[10px] text-muted-foreground font-heading tracking-wider uppercase">Premium Awards</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-heading font-medium text-sm transition-colors hover:text-primary relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left ${
                pathname === item.path ? "text-primary after:scale-x-100" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-heading font-semibold text-sm hover:bg-gold-dark transition-all hover:scale-105"
          >
            Get Quote
          </Link>
        </nav>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-background border-t border-border"
        >
          <div className="container py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`font-heading font-medium text-sm py-2 transition-colors hover:text-primary ${
                  pathname === item.path ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-heading font-semibold text-sm text-center hover:bg-gold-dark transition-colors mt-2"
            >
              Get Quote
            </Link>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
