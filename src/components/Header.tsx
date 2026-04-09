import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
  const { pathname } = useLocation();

  return (
    <header className="bg-background/95 backdrop-blur-md sticky top-0 z-50 border-b border-border shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="RG Trophies" className="h-12 w-auto" />
          <span className="font-heading font-bold text-xl text-primary">RG TROPHIES</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-heading font-medium text-sm transition-colors hover:text-primary ${
                pathname === item.path ? "text-primary" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-heading font-semibold text-sm hover:bg-gold-dark transition-colors"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background border-t border-border animate-fade-in">
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
              Get in Touch
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
