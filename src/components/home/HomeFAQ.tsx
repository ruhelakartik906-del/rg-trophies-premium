import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";

const faqs = [
  {
    q: "What types of trophies do you manufacture?",
    a: "We manufacture Wooden Trophies, Acrylic Trophies, Fiber Trophies, Metal Trophies, Sports Medals, and Corporate Gifts. All products can be fully customized.",
  },
  {
    q: "Do you accept bulk orders?",
    a: "Yes! We specialize in bulk orders for schools, colleges, corporate events, sports tournaments, and government functions. We offer competitive pricing for large quantities.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "There is no strict minimum order. Whether you need 1 trophy or 1000+, we can handle it. However, bulk orders get better per-unit pricing.",
  },
  {
    q: "How long does delivery take?",
    a: "Standard orders take 5-7 working days. Rush orders can be completed in 2-3 days depending on quantity and customization. We deliver across India.",
  },
  {
    q: "Can I customize the design?",
    a: "Absolutely! We offer full customization including engraving, logos, text, colors, and unique shapes. Share your requirements and our design team will create mock-ups for your approval.",
  },
  {
    q: "Do you deliver outside Delhi?",
    a: "Yes, we deliver pan-India. We serve clients in Delhi, Noida, Gurgaon, Ghaziabad, Faridabad, and all major cities across India with safe packaging and fast shipping.",
  },
];

const HomeFAQ = () => (
  <section className="py-24">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <AnimatedSection direction="left">
          <span className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-3 block">FAQ</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Have questions about our trophies, ordering process, or delivery? Find answers to the most common questions below.
          </p>
          <p className="text-muted-foreground text-sm">
            Can't find your answer? <a href="/contact" className="text-primary font-medium hover:underline">Contact us</a> or message us on <a href="https://wa.me/919953551576" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">WhatsApp</a>.
          </p>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.15}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow">
                <AccordionTrigger className="font-heading font-semibold text-foreground text-sm py-5 hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default HomeFAQ;
