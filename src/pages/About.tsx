import Layout from "@/components/Layout";
import { categoryImages } from "@/lib/images";
import { Clock, Shield, Palette, Truck, Target, Eye, CheckCircle } from "lucide-react";

const AboutPage = () => (
  <Layout>
    <section className="py-20 bg-gradient-dark text-secondary-foreground">
      <div className="container text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-primary">RG Trophies</span>
        </h1>
        <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
          India's trusted premium trophy manufacturer since over a decade
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              RG Trophies is a premium trophy manufacturer specializing in custom awards, medals, and corporate recognition products. We serve schools, sports events, and corporate clients across India.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With over a decade of experience, we have delivered thousands of trophies and awards to satisfied clients. Our commitment to quality, innovation, and customer satisfaction sets us apart in the industry.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Clock, value: "10+", label: "Years Experience" },
                { icon: Shield, value: "5000+", label: "Trophies Delivered" },
                { icon: Palette, value: "500+", label: "Happy Clients" },
                { icon: Truck, value: "Pan India", label: "Delivery" },
              ].map((stat) => (
                <div key={stat.label} className="bg-muted p-4 rounded-xl text-center">
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-heading font-bold text-xl text-foreground">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={categoryImages["metal-trophy"]} alt="Metal Trophy" loading="lazy" className="rounded-xl shadow-lg w-full" />
            <img src={categoryImages["fiber-trophy"]} alt="Fiber Trophy" loading="lazy" className="rounded-xl shadow-lg w-full mt-8" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-muted">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Eye, title: "Our Vision", desc: "To be India's most trusted and innovative trophy manufacturer, setting benchmarks in quality and design." },
            { icon: Target, title: "Our Mission", desc: "To deliver premium custom trophies and awards that celebrate achievements and inspire excellence." },
            { icon: CheckCircle, title: "Quality Commitment", desc: "Every product undergoes rigorous quality checks to ensure perfection in craftsmanship and finish." },
          ].map((item) => (
            <div key={item.title} className="bg-card p-8 rounded-xl text-center shadow-sm">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
