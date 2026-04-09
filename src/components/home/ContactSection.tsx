import { useState } from "react";
import { WHATSAPP_URL, PHONE_1 } from "@/lib/constants";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919953551576?text=${text}`, "_blank");
    toast.success("Opening WhatsApp with your inquiry!");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <span className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-3 block">Get in Touch</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Quick Inquiry</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-lg space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <div className="flex flex-col sm:flex-row gap-3">
                <button type="submit" className="flex-1 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-heading font-semibold hover:bg-gold-dark transition-all hover:scale-105">
                  Send via WhatsApp
                </button>
                <a href={`tel:${PHONE_1}`} className="flex-1 text-center border-2 border-primary text-primary px-8 py-3.5 rounded-full font-heading font-semibold hover:bg-primary hover:text-primary-foreground transition-all">
                  Call Now
                </a>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
