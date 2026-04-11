export const PHONE_1 = "9310651066";
export const PHONE_2 = "9315879315";
export const EMAIL = "xpertawards23@gmail.com";
export const WHATSAPP_URL = `https://wa.me/91${PHONE_1}?text=Hi%20Xpert%20Awards%2C%20I%20am%20interested%20in%20your%20products.`;
export const ADDRESS = "Shop No. - 2/73, GF, Lalita Park, Near Gurudwara, Laxmi Nagar, New Delhi, 110092";

export const CATEGORIES = [
  {
    slug: "wooden-trophy",
    title: "Wooden Trophy",
    description: "Personalized trophies designed to celebrate unique achievements with premium materials and craftsmanship.",
    material: "Premium Wood with Metal/Gold Plating",
  },
  {
    slug: "acrylic-trophy",
    title: "Acrylic Trophy",
    description: "Corporate and academic recognition pieces that honor excellence and motivate continued success.",
    material: "High-grade Acrylic Crystal",
  },
  {
    slug: "fiber-trophy",
    title: "Fiber Trophy",
    description: "Grand championship trophies and awards for sporting events, competitions, and tournaments.",
    material: "Durable Fiber with Gold/Silver Finish",
  },
  {
    slug: "metal-trophy",
    title: "Metal Trophy",
    description: "High-quality metal trophies designed to showcase remarkable achievements with lasting elegance.",
    material: "Brass / Stainless Steel / Zinc Alloy",
  },
  {
    slug: "sports-medals",
    title: "Sports Medals",
    description: "Elegant and customizable medals perfect for corporate events, clients, and employee recognition.",
    material: "Metal with Custom Ribbon",
  },
  {
    slug: "corporate-gifts",
    title: "Corporate Gifts",
    description: "Complete award solutions for schools, colleges, and large-scale events with custom branding.",
    material: "Mixed Premium Materials",
  },
] as const;

export const CITIES = [
  { slug: "delhi", name: "Delhi" },
  { slug: "noida", name: "Noida" },
  { slug: "gurgaon", name: "Gurgaon" },
  { slug: "ghaziabad", name: "Ghaziabad" },
  { slug: "faridabad", name: "Faridabad" },
] as const;
