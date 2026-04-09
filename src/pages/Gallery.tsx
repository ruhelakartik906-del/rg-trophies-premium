import Layout from "@/components/Layout";
import { categoryImages } from "@/lib/images";
import { CATEGORIES } from "@/lib/constants";

const GalleryPage = () => (
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
          {CATEGORIES.map((cat) => (
            <div key={cat.slug} className="group overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img
                  src={categoryImages[cat.slug]}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="bg-card p-4 text-center">
                <h3 className="font-heading font-semibold text-foreground">{cat.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default GalleryPage;
