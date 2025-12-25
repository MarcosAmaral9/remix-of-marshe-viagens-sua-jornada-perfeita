import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingSteps from "@/components/BookingSteps";
import Destinations from "@/components/Destinations";
import DestinationVideos from "@/components/HowItWorks";
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
        <BookingSteps />
        <Destinations onDestinationClick={handleDestinationClick} />
        <DestinationVideos selectedVideoIndex={selectedVideoIndex} />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
