import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChillsip from "@/components/WhyChillsip";
import BenefitsSection from "@/components/BenefitsSection";
import StatsSection from "@/components/StatsSection";
import CsrSection from "@/components/CsrSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <WhyChillsip />
      <BenefitsSection />
      <StatsSection />
      <CsrSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
