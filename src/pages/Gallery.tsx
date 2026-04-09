import { useState } from "react";
import Layout from "@/components/Layout";
import { categoryImages } from "@/lib/images";
import { CATEGORIES } from "@/lib/constants";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const images = CATEGORIES.map((c) => ({ src: categoryImages[c.slug], title: c.title }));

const GalleryPage = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + images.length) % images.length);
  };

  return (
    <Layout>
      <section className="py-20 bg-gradient-dark text-secondary-foreground">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
            Browse our collection of premium trophies, awards, and medals
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <button
                  onClick={() => setLightbox(i)}
                  className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow w-full"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img src={img.src} alt={img.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors flex items-center justify-center">
                      <span className="text-secondary-foreground font-heading font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity">{img.title}</span>
                    </div>
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-secondary/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-secondary-foreground hover:text-primary z-10" aria-label="Close" onClick={() => setLightbox(null)}>
            <X className="w-8 h-8" />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-foreground hover:text-primary z-10" onClick={(e) => { e.stopPropagation(); navigate(-1); }} aria-label="Previous">
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-foreground hover:text-primary z-10" onClick={(e) => { e.stopPropagation(); navigate(1); }} aria-label="Next">
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].title}
            className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 text-secondary-foreground font-heading font-semibold text-lg">{images[lightbox].title}</p>
        </div>
      )}
    </Layout>
  );
};

export default GalleryPage;
