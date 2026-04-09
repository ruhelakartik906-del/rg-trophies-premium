import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { CITIES, CATEGORIES, WHATSAPP_URL, PHONE_1 } from "@/lib/constants";
import { categoryImages } from "@/lib/images";

const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  const cityData = CITIES.find((c) => c.slug === city);

  if (!cityData) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Page Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Back to Home</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20 bg-gradient-dark text-secondary-foreground">
        <div className="container text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Trophy Manufacturer in <span className="text-primary">{cityData.name}</span>
          </h1>
          <p className="text-secondary-foreground/70 max-w-2xl mx-auto">
            Premium custom trophies, awards, and medals delivered in {cityData.name}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Best Trophy Manufacturer in {cityData.name}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              RG Trophies is a leading trophy manufacturer serving {cityData.name} and surrounding areas. We specialize in custom trophies, corporate awards, sports medals, and recognition products for schools, colleges, corporate companies, and government events.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Whether you need wooden trophies, acrylic awards, fiber trophies, or metal cups for your event in {cityData.name}, we deliver premium quality products at affordable prices with fast delivery.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Contact us today for bulk orders and custom trophy requirements in {cityData.name}. We offer free design consultation and competitive pricing for all types of awards and trophies.
            </p>
          </div>

          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Products Available in {cityData.name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products/${cat.slug}`}
                className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={categoryImages[cat.slug]} alt={`${cat.title} in ${cityData.name}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h4 className="font-heading font-semibold text-foreground mb-1">{cat.title}</h4>
                  <p className="text-muted-foreground text-sm">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`tel:${PHONE_1}`} className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:bg-gold-dark transition-colors">
                Call Now
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-primary text-primary px-8 py-3 rounded-full font-heading font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CityPage;
