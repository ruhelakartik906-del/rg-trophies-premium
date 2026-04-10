import { Phone, Mail } from "lucide-react";
import { PHONE_1, PHONE_2, EMAIL, WHATSAPP_URL } from "@/lib/constants";

const TopBar = () => (
  <div className="bg-secondary text-secondary-foreground text-sm hidden md:block">
    <div className="container flex items-center justify-between py-2">
      <div className="flex items-center gap-6">
        <a href={`tel:${PHONE_1}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Phone className="w-3.5 h-3.5" /> +91 {PHONE_1}
        </a>
        <a href={`tel:${PHONE_2}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Phone className="w-3.5 h-3.5" /> +91 {PHONE_2}
        </a>
        <a href={`mailto:${EMAIL}`} className="flex items-center gap-1.5 hover:text-primary transition-colors">
          <Mail className="w-3.5 h-3.5" /> {EMAIL}
        </a>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-primary font-heading font-medium">Custom Trophy & Awards Manufacturer</span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-medium hover:bg-gold-dark transition-colors"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
