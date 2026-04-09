import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { CATEGORIES, WHATSAPP_URL } from "@/lib/constants";
import { categoryImages } from "@/lib/images";
import { ArrowRight } from "lucide-react";

const ProductsPage = () => (
  <Layout>
    <section className="py-20 bg-gradient-dark text-secondary-foreground">
      <div className="container text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
          Our <span className="text-primary">Products</span>
        </h1>
        <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
          Explore our complete range of premium trophies, medals, and awards
        </p>
      </div>
    </section>

    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.slug} className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border">
              <div className="aspect-square overflow-hidden">
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
                <p className="text-muted-foreground text-sm mb-3">{cat.description}</p>
                <p className="text-xs text-muted-foreground mb-4"><strong>Material:</strong> {cat.material}</p>
                <p className="text-xs text-primary font-medium mb-4">✓ Customization Available</p>
                <div className="flex gap-3">
                  <Link
                    to={`/products/${cat.slug}`}
                    className="flex-1 bg-primary text-primary-foreground py-2.5 rounded-lg font-heading font-medium text-sm text-center hover:bg-gold-dark transition-colors"
                  >
                    View Details
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-primary text-primary py-2.5 rounded-lg font-heading font-medium text-sm text-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ProductsPage;
