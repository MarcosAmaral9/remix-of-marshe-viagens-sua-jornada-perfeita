import { MapPin, Calendar, Play } from "lucide-react";
import { useState } from "react";
import { getVideoIndexByDestination } from "./HowItWorks";
import VideoModal from "./VideoModal";
import portoSeguroImg from "@/assets/dest-porto-seguro.jpg";

import maceioImg from "@/assets/dest-maceio.jpg";
import salvadorImg from "@/assets/dest-salvador.jpg";
import natalImg from "@/assets/dest-natal.jpg";
import portoGalinhasImg from "@/assets/dest-porto-de-galinhas.jpg";
import caboSantoAgostinhoImg from "@/assets/dest-cabo-santo-agostinho.jpg";
import fortalezaImg from "@/assets/dest-fortaleza.jpg";
import fozDoIguacuImg from "@/assets/dest-foz-do-iguacu.jpg";
import gramadoImg from "@/assets/dest-gramado.jpg";

// Destinos organizados por região e ordem alfabética
const destinationsByRegion = [{
  region: "Nordeste",
  destinations: [{
    name: "Cabo de Santo Agostinho",
    location: "Pernambuco, Brasil",
    price: "R$ 2.650",
    duration: "8 dias",
    dates: "16/05/26 a 23/05/26",
    image: caboSantoAgostinhoImg
  }, {
    name: "Fortaleza",
    location: "Ceará, Brasil",
    price: "R$ 4.100",
    duration: "6 dias",
    dates: "19/04/26 a 25/04/26",
    image: fortalezaImg
  }, {
    name: "Maceió",
    location: "Alagoas, Brasil",
    price: "R$ 3.250",
    duration: "8 dias",
    dates: "13/06/26 a 20/06/26",
    image: maceioImg
  }, {
    name: "Natal",
    location: "Rio Grande do Norte, Brasil",
    price: "R$ 3.640",
    duration: "8 dias",
    dates: "21/03/26 a 28/03/26",
    image: natalImg
  }, {
    name: "Porto de Galinhas",
    location: "Pernambuco, Brasil",
    price: "R$ 2.319",
    duration: "8 dias",
    dates: "16/05/26 a 23/05/26",
    image: portoGalinhasImg
  }, {
    name: "Porto Seguro",
    location: "Bahia, Brasil",
    price: "R$ 3.357",
    duration: "6 dias",
    dates: "Carnaval 13/02/26 a 18/02/26",
    image: portoSeguroImg
  }, {
    name: "Salvador",
    location: "Bahia, Brasil",
    price: "R$ 2.750",
    duration: "8 dias",
    dates: "04/03/26 a 11/03/26",
    image: salvadorImg
  }]
}, {
  region: "Sul",
  destinations: [{
    name: "Foz do Iguaçu",
    location: "Paraná, Brasil",
    price: "R$ 1.842",
    duration: "6 dias",
    dates: "Dia dos Namorados 09/06/26 a 14/06/26",
    image: fozDoIguacuImg
  }, {
    name: "Gramado",
    location: "Rio Grande do Sul, Brasil",
    price: "R$ 3.500",
    duration: "7 dias",
    dates: "Dia dos Namorados 11/06/26 a 17/06/26",
    image: gramadoImg
  }]
}];
const Destinations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const handleDestinationClick = (destinationName: string) => {
    const videoIndex = getVideoIndexByDestination(destinationName);
    if (videoIndex !== -1) {
      setSelectedVideoIndex(videoIndex);
      setIsModalOpen(true);
    }
  };
  return <>
    <section id="destinos" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Destinos Populares
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Pacotes Aéreos Completos
          </h2>
        </div>

        {/* Destinations by Region */}
        {destinationsByRegion.map(regionData => <div key={regionData.region} className="mb-12 last:mb-0">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 border-l-4 border-primary pl-4">
              {regionData.region}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regionData.destinations.map(dest => <div key={dest.name} onClick={() => handleDestinationClick(dest.name)} className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground ml-1" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 text-primary-foreground">
                      <h3 className="text-xl font-bold">{dest.name}</h3>
                      <div className="flex items-center gap-1 text-sm opacity-90">
                        <MapPin className="w-4 h-4" />
                        {dest.location}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col gap-1 text-muted-foreground text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {dest.duration}
                        </div>
                        {dest.dates && <span className="text-xs">
                          {dest.dates.match(/^([A-Za-zÀ-ú\s]+)(\d{2}\/\d{2}\/\d{2}.*)$/) ? (
                            <>
                              <span className="block">{dest.dates.match(/^([A-Za-zÀ-ú\s]+)(\d{2}\/\d{2}\/\d{2}.*)$/)?.[1]}</span>
                              <span className="block">{dest.dates.match(/^([A-Za-zÀ-ú\s]+)(\d{2}\/\d{2}\/\d{2}.*)$/)?.[2]}</span>
                            </>
                          ) : dest.dates}
                        </span>}
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-muted-foreground">a partir de</span>
                        <p className="text-lg font-bold text-primary">{dest.price}</p>
                        <span className="text-xs text-muted-foreground">por pessoa</span>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>)}
      </div>
    </section>

    <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialVideoIndex={selectedVideoIndex} />
    </>;
};
export default Destinations;