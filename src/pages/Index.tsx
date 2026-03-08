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
        {/* 1. Hero - Conversion focused */}
        <Hero />
        {/* 2. Prova Social */}
        <SocialProof />
        {/* 3. Por que escolher a Marshe */}
        <WhyChooseUs />
        {/* 4. Pacotes em Destaque */}
        <FeaturedPackages />
        {/* 5. Como Funciona */}
        <HowItWorks />
        {/* 6. Conteúdo / Blog */}
        <BlogPreview />
        {/* 7. Lead Magnet - Guia de Milhas */}
        <LeadMagnet />
        {/* 8. Serviços */}
        <Services />
        {/* 9. FAQ */}
        {/* 9. Clube do Viajante WhatsApp */}
        <WhatsAppClub />
        {/* 10. FAQ */}
        <FAQ />
        {/* 11. CTA Final */}
        <FinalCTA />
        {/* Contato */}
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Index;
