import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WHATSAPP_URL } from "@/lib/constants";

const faqs = [
  { q: "What types of trophies do you manufacture?", a: "We manufacture Wooden Trophies, Acrylic Trophies, Fiber Trophies, Metal Trophies, Sports Medals, and Corporate Gifts. All products can be customized as per your requirements." },
  { q: "Do you accept bulk orders?", a: "Yes, we specialize in bulk orders for schools, colleges, corporate events, sports tournaments, and government functions. Contact us for special bulk pricing." },
  { q: "Can I get custom designs?", a: "Absolutely! We offer complete customization including engraving, logo printing, custom shapes, and personalized text on all our products." },
  { q: "What is the minimum order quantity?", a: "Our minimum order quantity is typically 10 pieces, but this may vary depending on the product type. Contact us for specific requirements." },
  { q: "How long does delivery take?", a: "Standard delivery takes 5-10 business days depending on order size and customization. Rush orders can be accommodated upon request." },
  { q: "Do you deliver across India?", a: "Yes, we deliver pan-India. We also serve international orders on request." },
  { q: "What materials do you use?", a: "We use premium quality wood, acrylic crystal, fiber, brass, stainless steel, zinc alloy, and other high-grade materials to ensure lasting quality." },
  { q: "How can I place an order?", a: "You can contact us via WhatsApp, phone call, or our inquiry form. Our team will guide you through the entire process from design to delivery." },
];

const FAQPage = () => (
  <Layout>
    <section className="py-20 bg-gradient-dark text-secondary-foreground">
      <div className="container text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>
        <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
          Find answers to common questions about our products and services
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 overflow-hidden">
              <AccordionTrigger className="font-heading font-medium text-foreground text-left py-5 hover:no-underline hover:text-primary">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:bg-gold-dark transition-colors"
          >
            Chat with Us
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default FAQPage;
