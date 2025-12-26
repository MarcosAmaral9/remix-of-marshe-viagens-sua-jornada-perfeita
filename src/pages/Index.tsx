import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingSteps from "@/components/BookingSteps";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import WhatsAppClub from "@/components/WhatsAppClub";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <BookingSteps />
        <Destinations />
        <Testimonials />
        <ContactSection />
        <WhatsAppClub />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
