import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { PHONE_1, PHONE_2, EMAIL, ADDRESS, WHATSAPP_URL, CATEGORIES, CITIES } from "@/lib/constants";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/images/logo.png" alt="RG Trophies" className="h-10 w-auto brightness-200" />
            <span className="font-heading font-bold text-lg text-primary">RG TROPHIES</span>
          </div>
          <p className="text-sm text-secondary-foreground/70 leading-relaxed">
            Premium trophy manufacturer specializing in custom awards, medals, and corporate recognition products across India.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary mb-4">Products</h4>
          <ul className="space-y-2">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link to={`/products/${c.slug}`} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary mb-4">Service Areas</h4>
          <ul className="space-y-2">
            {CITIES.map((city) => (
              <li key={city.slug}>
                <Link to={`/trophy-manufacturer-in-${city.slug}`} className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Trophy Manufacturer in {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-primary mb-4">Contact Info</h4>
          <div className="space-y-3 text-sm text-secondary-foreground/70">
            <a href={`tel:${PHONE_1}`} className="flex items-start gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" /> +91 {PHONE_1}
            </a>
            <a href={`tel:${PHONE_2}`} className="flex items-start gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" /> +91 {PHONE_2}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-start gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" /> {EMAIL}
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {ADDRESS}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-secondary-foreground/10">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/50">
        <p>© {new Date().getFullYear()} RG Trophies. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
