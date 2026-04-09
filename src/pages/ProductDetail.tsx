import Layout from "@/components/Layout";
import { useParams, Link } from "react-router-dom";
import { CATEGORIES, WHATSAPP_URL, PHONE_1 } from "@/lib/constants";
import { categoryImages } from "@/lib/images";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = CATEGORIES.find((c) => c.slug === slug);

  if (!category) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">Back to Products</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={categoryImages[category.slug]} alt={category.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <Link to="/products" className="text-primary text-sm font-medium hover:underline mb-4 inline-block">← Back to Products</Link>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{category.title}</h1>
              <p className="text-muted-foreground leading-relaxed mb-6">{category.description}</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium text-foreground w-32">Material:</span>
                  <span className="text-muted-foreground">{category.material}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium text-foreground w-32">Customization:</span>
                  <span className="text-primary font-medium">Available</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium text-foreground w-32">Minimum Order:</span>
                  <span className="text-muted-foreground">10 pieces</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-medium text-foreground w-32">Delivery:</span>
                  <span className="text-muted-foreground">5-10 business days</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold hover:bg-gold-dark transition-colors"
                >
                  Inquire on WhatsApp
                </a>
                <a
                  href={`tel:${PHONE_1}`}
                  className="border-2 border-primary text-primary px-8 py-3 rounded-full font-heading font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
