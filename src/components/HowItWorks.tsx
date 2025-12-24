import { MapPin, CreditCard, Plane, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: MapPin,
    title: "Escolha seu Destino",
    description: "Navegue pelos nossos destinos e escolha o lugar dos seus sonhos para sua próxima viagem.",
    color: "bg-coral-light text-primary",
  },
  {
    icon: CreditCard,
    title: "Realize o Pagamento",
    description: "Pagamento facilitado em até 12x no cartão ou à vista com desconto especial.",
    color: "bg-teal/10 text-teal",
  },
  {
    icon: Plane,
    title: "Embarque na Aventura",
    description: "Chegue ao aeroporto e aproveite sua viagem sem preocupações. Cuidamos de tudo!",
    color: "bg-yellow/10 text-yellow",
  },
];

const destinationVideos = [
  {
    name: "Cabo de Santo Agostinho",
    dates: "16/05/26 a 23/05/26",
    videoUrl: "https://player.vimeo.com/video/824804225?autoplay=1&loop=1&muted=1&background=1",
  },
  {
    name: "Fortaleza",
    dates: "21/01/26 a 28/01/26",
    videoUrl: "https://player.vimeo.com/video/517090871?autoplay=1&loop=1&muted=1&background=1",
  },
  {
    name: "Natal",
    dates: "21/03/26 a 28/03/26",
    videoUrl: "https://player.vimeo.com/video/517090871?autoplay=1&loop=1&muted=1&background=1",
  },
  {
    name: "Porto de Galinhas",
    dates: "16/05/26 a 23/05/26",
    videoUrl: "https://player.vimeo.com/video/824804225?autoplay=1&loop=1&muted=1&background=1",
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
    videoUrl: "https://player.vimeo.com/video/824804225?autoplay=1&loop=1&muted=1&background=1",
  },
  {
    name: "Foz do Iguaçu",
    dates: "14/01/26 a 18/01/26",
    videoUrl: "https://player.vimeo.com/video/517090871?autoplay=1&loop=1&muted=1&background=1",
  },
  {
    name: "Gramado",
    dates: "10/01/26 a 17/01/26",
    videoUrl: "https://player.vimeo.com/video/824804225?autoplay=1&loop=1&muted=1&background=1",
  },
];

const HowItWorks = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

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
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              Fácil e Rápido
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-12">
              Reserve sua Viagem
              <br />
              em 3 Passos Simples
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-6 group">
                  <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Card */}
          <div className="relative hidden lg:block">
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

export default HowItWorks;
