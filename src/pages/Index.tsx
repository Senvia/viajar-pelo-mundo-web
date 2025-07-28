import Header from "@/components/Header";
import ModernHero from "@/components/ModernHero";
import TravelGallery from "@/components/TravelGallery";
import PremiumServices from "@/components/PremiumServices";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ModernHero />
      <TravelGallery />
      <PremiumServices />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
