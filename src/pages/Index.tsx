import Header from "@/components/Header";
import TravelScrollExpansion from "@/components/TravelScrollExpansion";
import TravelGallery from "@/components/TravelGallery";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <TravelScrollExpansion />
      <TravelGallery />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
