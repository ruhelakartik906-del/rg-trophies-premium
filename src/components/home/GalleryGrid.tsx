import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { categoryImages } from "@/lib/images";
import { CATEGORIES } from "@/lib/constants";
import AnimatedSection from "@/components/AnimatedSection";

const images = CATEGORIES.map((c) => ({ src: categoryImages[c.slug], title: c.title }));

const GalleryGrid = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-3 block">Gallery</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Gallery</h2>
            <p className="text-muted-foreground">A glimpse of our premium craftsmanship</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <button
                onClick={() => setLightbox(i)}
                className="aspect-square overflow-hidden rounded-2xl group relative block w-full"
              >
                <img src={img.src} alt={img.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/50 transition-colors flex items-center justify-center">
                  <span className="text-secondary-foreground font-heading font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.title}
                  </span>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/gallery" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-heading font-semibold hover:bg-gold-dark transition-all hover:scale-105">
            View Full Gallery
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-secondary/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-secondary-foreground hover:text-primary" aria-label="Close">
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].title}
            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GalleryGrid;
