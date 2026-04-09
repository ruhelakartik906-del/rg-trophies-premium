import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { PHONE_1, PHONE_2, EMAIL, ADDRESS } from "@/lib/constants";

const Footer = () => (
  <footer className="bg-[hsl(175,35%,25%)] text-white">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & About */}
        <div>
          <div className="inline-flex items-center gap-3 mb-5 bg-white/10 rounded-xl px-5 py-3">
            <span className="text-3xl">🏆</span>
            <span className="font-heading font-bold text-xl text-primary">RG Trophies</span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Creating exceptional awards and recognition pieces that celebrate achievements and inspire excellence.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h4 className="font-heading font-bold text-lg mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Products", to: "/products" },
              { label: "Gallery", to: "/gallery" },
              { label: "Contact", to: "/contact" },
              { label: "Privacy Policy", to: "/privacy" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-white/70 hover:text-primary transition-colors text-sm">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-5">Contact Info</h4>
          <div className="space-y-4 text-sm">
            <a href={`tel:${PHONE_1}`} className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 text-primary shrink-0" />
              {PHONE_1}, {PHONE_2}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              {EMAIL}
            </a>
            <div className="flex items-start gap-3 text-white/70">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{ADDRESS}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-white/10">
      <div className="container py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} RG Trophies. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
