import { Star, Palette, Truck, DollarSign, Package } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const items = [
  { icon: Star, title: "Premium Quality", desc: "Finest materials and superior craftsmanship in every piece" },
  { icon: Palette, title: "Custom Design", desc: "Tailored to your specific requirements and branding" },
  { icon: Truck, title: "Fast Delivery", desc: "Quick turnaround and delivery across India" },
  { icon: DollarSign, title: "Affordable Price", desc: "Best value for individual and bulk orders" },
  { icon: Package, title: "Bulk Orders", desc: "Handle large volumes with ease and consistency" },
];

const WhyChooseUs = () => (
  <section className="py-24 bg-gradient-dark text-secondary-foreground">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-16">
          <span className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-3 block">Why Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-primary">RG Trophies</span>
          </h2>
          <p className="text-secondary-foreground/60 max-w-2xl mx-auto">Delivering excellence in every award we craft</p>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className="text-center p-8 rounded-2xl bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-all hover:-translate-y-1 group">
              <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/30 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-2 text-lg">{item.title}</h3>
              <p className="text-secondary-foreground/50 text-sm">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
