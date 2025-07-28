import Header from "@/components/Header";
import TravelScrollExpansion from "@/components/TravelScrollExpansion";
import TravelInteractiveBentoGallery from "@/components/TravelInteractiveBentoGallery";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <TravelScrollExpansion />
      <TravelInteractiveBentoGallery />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
