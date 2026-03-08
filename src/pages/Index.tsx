import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedPackages from "@/components/FeaturedPackages";
import HowItWorks from "@/components/HowItWorks";
import BlogPreview from "@/components/BlogPreview";
import LeadMagnet from "@/components/LeadMagnet";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppClub from "@/components/WhatsAppClub";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <WhyChooseUs />
        <FeaturedPackages />
        <HowItWorks />
        <BlogPreview />
        <LeadMagnet />
        <Services />
        <WhatsAppClub />
        <FAQ />
        <FinalCTA />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Index;
