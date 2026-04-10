import { Star, Quote } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Principal, DPS School",
    rating: 5,
    text: "Xpert Awards ne humare Annual Sports Day ke liye 200+ trophies deliver ki. Quality aur design dono outstanding the. Highly recommended!",
  },
  {
    name: "Priya Mehta",
    role: "HR Manager, Infosys",
    rating: 5,
    text: "We ordered corporate awards for our annual employee recognition ceremony. The customization options were excellent and delivery was on time.",
  },
  {
    name: "Amit Verma",
    role: "Sports Coordinator, Delhi University",
    rating: 5,
    text: "Best trophy manufacturer in Delhi! We have been ordering from Xpert Awards for 3 years now. Consistent quality and great pricing for bulk orders.",
  },
  {
    name: "Sunita Gupta",
    role: "Event Manager, Govt. of NCT Delhi",
    rating: 4,
    text: "Ordered 500+ medals and trophies for a government sports event. Excellent quality, timely delivery, and very professional team.",
  },
  {
    name: "Vikram Singh",
    role: "CEO, TechStartup Inc.",
    rating: 5,
    text: "The acrylic trophies we ordered for our hackathon were stunning. Our winners were thrilled! Will definitely order again.",
  },
  {
    name: "Neha Kapoor",
    role: "Cultural Secretary, JNU",
    rating: 5,
    text: "Amazing craftsmanship! The wooden trophies for our cultural fest looked premium and elegant. Great value for money.",
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-primary font-heading font-medium text-sm uppercase tracking-widest mb-3 block">Testimonials</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
                What Our <span className="text-primary">Clients Say</span>
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
          <div className="flex -ml-6">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-6">
                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all h-full flex flex-col relative">
                  <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`w-4 h-4 ${s < t.rating ? "text-primary fill-primary" : "text-border"}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-heading font-bold text-primary text-sm">
                        {t.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-muted-foreground text-xs">{t.role}</p>
                    </div>
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

export default TestimonialsSection;
