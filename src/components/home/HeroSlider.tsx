import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import { heroTrophy, woodenTrophy, metalTrophy } from "@/lib/images";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: heroTrophy,
    headline: "Premium Trophy Manufacturer in India",
    sub: "Custom Awards • Corporate Trophies • Sports Medals",
  },
  {
    image: woodenTrophy,
    headline: "Custom Wooden & Acrylic Trophies",
    sub: "Handcrafted Excellence for Every Achievement",
  },
  {
    image: metalTrophy,
    headline: "Bulk Orders at Best Prices",
    sub: "Serving Schools • Corporates • Government Events",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].headline}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-secondary/30" />
        </motion.div>
      </AnimatePresence>

      <div className="container relative z-10 h-full flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-heading font-medium mb-6 backdrop-blur-sm border border-primary/30">
                ★ Trusted by 1000+ Organizations
              </span>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-tight mb-6">
                {slides[current].headline.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="text-gradient-gold">
                  {slides[current].headline.split(" ").slice(-2).join(" ")}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-secondary-foreground/80 mb-10 font-body">
                {slides[current].sub}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-heading font-semibold hover:bg-gold-dark transition-all hover:scale-105"
                >
                  Get Quote
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-full font-heading font-semibold hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                >
                  WhatsApp Now
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Nav arrows */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-secondary/50 backdrop-blur-sm text-secondary-foreground p-3 rounded-full hover:bg-primary transition-colors" aria-label="Previous slide">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-secondary/50 backdrop-blur-sm text-secondary-foreground p-3 rounded-full hover:bg-primary transition-colors" aria-label="Next slide">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-primary" : "w-2 bg-secondary-foreground/40"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
