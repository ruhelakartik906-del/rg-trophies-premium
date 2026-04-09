import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { heroTrophy, categoryImages } from "@/lib/images";
import { CATEGORIES, WHATSAPP_URL, PHONE_1 } from "@/lib/constants";
import { Award, Palette, Truck, DollarSign, Package, ArrowRight, Star, Clock, Shield, Users } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroTrophy} alt="Premium Trophy" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
    </div>
    <div className="container relative z-10 py-20">
      <div className="max-w-2xl">
        <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-heading font-medium mb-6 animate-fade-in">
          ★ Trusted by 500+ Organizations
        </span>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-secondary-foreground leading-tight mb-6 animate-fade-in-up">
          Premium Trophy{" "}
          <span className="text-gradient-gold">Manufacturer</span>{" "}
          in India
        </h1>
        <p className="text-lg text-secondary-foreground/80 mb-8 animate-fade-in-up font-body" style={{ animationDelay: "0.2s" }}>
          Custom Trophies • Corporate Awards • Sports Medals • Recognition Products
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-heading font-semibold hover:bg-gold-dark transition-colors"
          >
            Get Quote
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary text-primary px-8 py-3.5 rounded-full font-heading font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </div>
  </section>
);

const CategoriesSection = () => (
  <section className="py-20 bg-muted">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Product Categories</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Explore our wide range of premium trophies, medals, and corporate gifts</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.slug}
            to={`/products/${cat.slug}`}
            className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={categoryImages[cat.slug]}
                alt={cat.title}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{cat.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{cat.description}</p>
              <span className="text-primary font-heading font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                Explore <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-20">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            About <span className="text-primary">RG Trophies</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            At RG Trophies, we specialize in designing and manufacturing high-quality awards, trophies, medals, and corporate gifts. With years of experience, we deliver premium recognition products to schools, colleges, corporate companies, sports events, and government organizations across India.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Clock, label: "Years Experience", value: "10+" },
              { icon: Shield, label: "Premium Quality", value: "100%" },
              { icon: Palette, label: "Custom Design", value: "Unlimited" },
              { icon: Truck, label: "Fast Delivery", value: "Pan India" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-start gap-3">
                <div className="bg-primary/10 p-2.5 rounded-lg">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-lg">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={categoryImages["wooden-trophy"]} alt="Wooden Trophy" loading="lazy" className="rounded-xl shadow-lg w-full" />
          <img src={categoryImages["acrylic-trophy"]} alt="Acrylic Trophy" loading="lazy" className="rounded-xl shadow-lg w-full mt-8" />
        </div>
      </div>
    </div>
  </section>
);

const WhyChooseSection = () => (
  <section className="py-20 bg-gradient-dark text-secondary-foreground">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-primary">RG Trophies</span></h2>
        <p className="text-secondary-foreground/70 max-w-2xl mx-auto">Delivering excellence in every award we craft</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {[
          { icon: Star, title: "Premium Quality", desc: "Finest materials and superior craftsmanship" },
          { icon: Palette, title: "Custom Design", desc: "Tailored to your specific requirements" },
          { icon: Truck, title: "Fast Delivery", desc: "Quick turnaround across India" },
          { icon: DollarSign, title: "Affordable Pricing", desc: "Best value for bulk orders" },
          { icon: Package, title: "Bulk Orders", desc: "Handle large volumes with ease" },
        ].map((item) => (
          <div key={item.title} className="text-center p-6 rounded-xl bg-secondary-foreground/5 hover:bg-secondary-foreground/10 transition-colors">
            <div className="bg-primary/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
            <p className="text-secondary-foreground/60 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="py-20">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">Simple 4-step process to get your custom trophies</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { step: "01", title: "Share Requirement", desc: "Tell us about your trophy needs and specifications" },
          { step: "02", title: "Discuss Design", desc: "Our team creates custom designs for approval" },
          { step: "03", title: "Production", desc: "Premium manufacturing with quality checks" },
          { step: "04", title: "Delivery", desc: "Fast & safe delivery across India" },
        ].map((item) => (
          <div key={item.step} className="text-center group">
            <div className="text-5xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors mb-4">
              {item.step}
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GalleryPreview = () => (
  <section className="py-20 bg-muted">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Gallery</h2>
        <p className="text-muted-foreground">A glimpse of our premium craftsmanship</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.values(categoryImages).map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden rounded-xl group">
            <img src={src} alt="Trophy" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/gallery" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:bg-gold-dark transition-colors">
          View Full Gallery
        </Link>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20 bg-gradient-gold">
    <div className="container text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Need Custom Trophies?</h2>
      <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
        Get in touch with us today for premium custom trophies, awards, and medals at the best prices.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={`tel:${PHONE_1}`}
          className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-full font-heading font-semibold hover:bg-dark transition-colors"
        >
          Call Now
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border-2 border-secondary text-secondary px-8 py-3.5 rounded-full font-heading font-semibold hover:bg-secondary hover:text-secondary-foreground transition-colors"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </section>
);

const Index = () => (
  <Layout>
    <HeroSection />
    <CategoriesSection />
    <AboutSection />
    <WhyChooseSection />
    <ProcessSection />
    <GalleryPreview />
    <CTASection />
  </Layout>
);

export default Index;
