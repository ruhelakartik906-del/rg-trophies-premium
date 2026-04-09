import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { CITIES } from "@/lib/constants";
import AnimatedSection from "@/components/AnimatedSection";

const CitiesSection = () => (
  <section className="py-24">
    <div className="container">
      <AnimatedSection>
        <div className="text-center mb-14">
          <span className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-3 block">Service Areas</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            We Deliver Across <span className="text-primary">India</span>
          </h2>
        </div>
      </AnimatedSection>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {CITIES.map((city, i) => (
          <AnimatedSection key={city.slug} delay={i * 0.08}>
            <Link
              to={`/trophy-manufacturer-in-${city.slug}`}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-muted hover:bg-primary/10 transition-all hover:-translate-y-1"
            >
              <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <span className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors text-center">
                Trophy Manufacturer in {city.name}
              </span>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CitiesSection;
