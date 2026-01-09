import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const destinationVideos = [
  {
    name: "Cabo de Santo Agostinho",
    dates: "16/05/26 a 23/05/26",
    videoUrl: "/videos/cabo-santo-agostinho.mp4",
    isLocal: true,
  },
  {
    name: "Maceió",
    dates: "13/06/26 a 20/06/26",
    videoUrl: "/videos/maceio.mp4",
    isLocal: true,
  },
  {
    name: "Natal",
    dates: "21/03/26 a 28/03/26",
    videoUrl: "/videos/natal.mp4",
    isLocal: true,
  },
  {
    name: "Porto de Galinhas",
    dates: "16/05/26 a 23/05/26",
    videoUrl: "/videos/porto-de-galinhas.mp4",
    isLocal: true,
  },
  {
    name: "Porto Seguro",
    dates: "13/02/26 a 18/02/26",
    videoUrl: "/videos/porto-seguro.mp4",
    isLocal: true,
  },
  {
    name: "Salvador",
    dates: "04/03/26 a 11/03/26",
    videoUrl: "/videos/salvador.mp4",
    isLocal: true,
  },
  {
    name: "Foz do Iguaçu",
    dates: "09/06/26 a 14/06/26",
    videoUrl: "/videos/foz-do-iguacu.mp4",
    isLocal: true,
  },
  {
    name: "Gramado",
    dates: "11/06/26 a 17/06/26",
    videoUrl: "/videos/gramado.mp4",
    isLocal: true,
  },
];

export const getVideoIndexByDestination = (destinationName: string): number => {
  return destinationVideos.findIndex(
    (video) => video.name.toLowerCase() === destinationName.toLowerCase()
  );
};

interface DestinationVideosProps {
  selectedVideoIndex?: number;
}

const DestinationVideos = ({ selectedVideoIndex }: DestinationVideosProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(selectedVideoIndex ?? 0);

  useEffect(() => {
    if (selectedVideoIndex !== undefined) {
      setCurrentVideoIndex(selectedVideoIndex);
    }
  }, [selectedVideoIndex]);

  const handlePrevious = () => {
    setCurrentVideoIndex((prev) => 
      prev === 0 ? destinationVideos.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentVideoIndex((prev) => 
      prev === destinationVideos.length - 1 ? 0 : prev + 1
    );
  };

  const currentDestination = destinationVideos[currentVideoIndex];

  return (
    <section id="videos" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Conheça os Destinos
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Vídeos de Apresentação
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Video Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-coral-light rounded-3xl -rotate-6 scale-95" />
            <div className="relative bg-card rounded-3xl p-8 shadow-card">
              <div className="aspect-[4/3] bg-muted rounded-2xl mb-6 overflow-hidden">
                {currentDestination.isLocal ? (
                  <video
                    src={currentDestination.videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <iframe
                    src={currentDestination.videoUrl}
                    className="w-full h-full"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title={`Vídeo de ${currentDestination.name}`}
                  />
                )}
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevious}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                <div className="flex gap-1">
                  {destinationVideos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideoIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentVideoIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  className="rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Destination Info */}
              <div className="text-center">
                <h4 className="font-bold text-foreground text-lg">{currentDestination.name}</h4>
                <p className="text-muted-foreground text-sm">{currentDestination.dates}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationVideos;
