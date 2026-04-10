import { useState, FormEvent } from "react";
import Layout from "@/components/Layout";
import { PHONE_1, PHONE_2, EMAIL, ADDRESS, WHATSAPP_URL } from "@/lib/constants";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Inquiry Sent!", description: "We'll get back to you within 24 hours." });
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      <section className="py-20 bg-gradient-dark text-secondary-foreground">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
            Get in touch for custom trophies, bulk orders, and corporate gifts
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send Us an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input required name="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                  <input required name="phone" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <input required name="email" type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                <select name="product" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Select Product Category</option>
                  <option>Wooden Trophy</option>
                  <option>Acrylic Trophy</option>
                  <option>Fiber Trophy</option>
                  <option>Metal Trophy</option>
                  <option>Sports Medals</option>
                  <option>Corporate Gifts</option>
                </select>
                <textarea required name="message" rows={4} placeholder="Your Message" className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:bg-gold-dark transition-colors flex items-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" /> {loading ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <a href={`tel:${PHONE_1}`} className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 text-primary" /> +91 {PHONE_1}
                </a>
                <a href={`tel:${PHONE_2}`} className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 text-primary" /> +91 {PHONE_2}
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 text-primary" /> {EMAIL}
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 mt-0.5 text-primary shrink-0" /> {ADDRESS}
                </div>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:bg-gold-dark transition-colors mb-8"
              >
                WhatsApp Us
              </a>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3!2d77.1!3d28.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzA0LjAiTiA3N8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Xpert Awards Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
