import { Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const clients = ["Schools", "Colleges", "Corporates", "Government", "Sports Events", "Award Functions"];

const ClientsSection = () => (
  <section className="py-20">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-14">
          <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by <span className="text-primary">1000+</span> Clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From schools to government organizations, we deliver premium trophies across India
          </p>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {clients.map((client, i) => (
          <AnimatedSection key={client} delay={i * 0.08}>
            <div className="bg-muted rounded-2xl p-6 text-center hover:bg-primary/10 transition-colors group">
              <p className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{client}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ClientsSection;
