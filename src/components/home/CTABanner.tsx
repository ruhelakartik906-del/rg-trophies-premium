import { PHONE_1, WHATSAPP_URL } from "@/lib/constants";
import AnimatedSection from "@/components/AnimatedSection";

const CTABanner = () => (
  <section className="py-24 bg-gradient-gold">
    <div className="container text-center">
      <AnimatedSection>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Need Custom Trophies?</h2>
        <p className="text-primary-foreground/80 mb-10 max-w-xl mx-auto text-lg">
          Get in touch with us today for premium custom trophies, awards, and medals at the best prices.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${PHONE_1}`}
            className="bg-secondary text-secondary-foreground px-10 py-4 rounded-full font-heading font-semibold hover:bg-dark transition-all hover:scale-105"
          >
            Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-secondary text-secondary px-10 py-4 rounded-full font-heading font-semibold hover:bg-secondary hover:text-secondary-foreground transition-all hover:scale-105"
          >
            WhatsApp
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CTABanner;
