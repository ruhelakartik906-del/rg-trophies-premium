import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import { CATEGORIES } from "@/lib/constants";
import { categoryImages } from "@/lib/images";
import AnimatedSection from "@/components/AnimatedSection";

const CategoriesSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
                Product <span className="text-primary">Categories</span>
              </h2>
              <p className="text-muted-foreground max-w-lg">Explore our wide range of premium trophies, medals, and corporate gifts</p>
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
          <div className="flex -ml-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.slug} className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 pl-6">
                <Link
                  to={`/products/${cat.slug}`}
                  className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={categoryImages[cat.slug]}
                      alt={cat.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{cat.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{cat.description}</p>
                    <span className="text-primary font-heading font-medium text-sm flex items-center gap-1 group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSlider;
