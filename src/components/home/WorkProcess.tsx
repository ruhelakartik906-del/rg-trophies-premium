import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  { step: "01", title: "Share Requirement", desc: "Tell us about your trophy needs and specifications" },
  { step: "02", title: "Design Discussion", desc: "Our team creates custom designs for approval" },
  { step: "03", title: "Production", desc: "Premium manufacturing with quality checks" },
  { step: "04", title: "Delivery", desc: "Fast & safe delivery across India" },
];

const WorkProcess = () => (
  <section className="py-24">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-16">
          <span className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-3 block">Our Process</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Simple 4-step process to get your custom trophies</p>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
        {/* Connector line */}
        <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
        {steps.map((item, i) => (
          <AnimatedSection key={item.step} delay={i * 0.15}>
            <div className="text-center relative">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative z-10"
              >
                <span className="text-2xl font-heading font-bold text-primary">{item.step}</span>
              </motion.div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WorkProcess;
