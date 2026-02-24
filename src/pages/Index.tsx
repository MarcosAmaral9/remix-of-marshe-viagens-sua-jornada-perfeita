import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MissionVisionValues from "@/components/MissionVisionValues";
import Services from "@/components/Services";
import BookingSteps from "@/components/BookingSteps";
import Destinations from "@/components/Destinations";
import BlogPreview from "@/components/BlogPreview";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import WhatsAppClub from "@/components/WhatsAppClub";
import CircuitosViagem from "@/components/CircuitosViagem";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BlogPreview />
        <MissionVisionValues />
        <Services />
        <BookingSteps />
        <Destinations />
        <CircuitosViagem />
        <LeadCaptureForm />
        <Testimonials />
        <ContactSection />
        <WhatsAppClub />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Index;
