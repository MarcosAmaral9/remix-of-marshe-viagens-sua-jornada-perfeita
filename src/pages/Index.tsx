import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | undefined>(undefined);

  const handleDestinationClick = (videoIndex: number) => {
    setSelectedVideoIndex(videoIndex);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Destinations onDestinationClick={handleDestinationClick} />
        <HowItWorks selectedVideoIndex={selectedVideoIndex} />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
