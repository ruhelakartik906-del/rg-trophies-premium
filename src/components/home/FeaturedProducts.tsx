import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES, WHATSAPP_URL } from "@/lib/constants";
import { categoryImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

const products = CATEGORIES.map((c) => ({ title: c.title, slug: c.slug, image: categoryImages[c.slug], material: c.material }));

const FeaturedProducts = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-24">
      <div className="container">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-3 block">Our Products</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                Featured <span className="text-primary">Products</span>
              </h2>
            </div>
            <div className="hidden md:flex gap-2">
              <button onClick={scrollPrev} className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" aria-label="Previous">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={scrollNext} className="p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors" aria-label="Next">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-5">
            {products.map((product, i) => (
              <div key={i} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-5">
                <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={product.image} alt={product.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/40 transition-colors flex items-center justify-center">
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-heading font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0"
                      >
                        Quick Inquiry
                      </a>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-foreground text-lg mb-1">{product.title}</h3>
                    <p className="text-muted-foreground text-xs mb-3">{product.material}</p>
                    <Link to={`/products/${product.slug}`} className="text-primary text-sm font-heading font-medium hover:underline">
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
