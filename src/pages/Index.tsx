import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import VideoShowcase from "@/components/VideoShowcase";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <VideoShowcase />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
