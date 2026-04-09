import Layout from "@/components/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import CategoriesSlider from "@/components/home/CategoriesSlider";
import AboutCompany from "@/components/home/AboutCompany";
import ParallaxSection from "@/components/ParallaxSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WorkProcess from "@/components/home/WorkProcess";
import VideoSection from "@/components/home/VideoSection";
import GalleryGrid from "@/components/home/GalleryGrid";
import ClientsSection from "@/components/home/ClientsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import HomeFAQ from "@/components/home/HomeFAQ";
import CTABanner from "@/components/home/CTABanner";
import CitiesSection from "@/components/home/CitiesSection";
import ContactSection from "@/components/home/ContactSection";
import { Link } from "react-router-dom";
import { WHATSAPP_URL } from "@/lib/constants";
import { heroTrophy } from "@/lib/images";

const Index = () => (
  <Layout>
    <HeroSlider />
    <CategoriesSlider />
    <AboutCompany />

    <ParallaxSection bgImage={heroTrophy} className="py-32">
      <div className="container text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-secondary-foreground mb-6">
          Custom Trophy <span className="text-primary">Manufacturer</span>
        </h2>
        <p className="text-secondary-foreground/70 mb-10 max-w-2xl mx-auto text-lg">
          Premium quality trophies and awards designed and manufactured to celebrate every achievement
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact" className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-heading font-semibold hover:bg-gold-dark transition-all hover:scale-105">
            Get Quote
          </Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-primary text-primary px-10 py-4 rounded-full font-heading font-semibold hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105">
            Contact Now
          </a>
        </div>
      </div>
    </ParallaxSection>

    <FeaturedProducts />
    <WhyChooseUs />
    <WorkProcess />
    <VideoSection />
    <GalleryGrid />
    <ClientsSection />
    <TestimonialsSection />
    <HomeFAQ />
    <CTABanner />
    <CitiesSection />
    <ContactSection />
  </Layout>
);

export default Index;
