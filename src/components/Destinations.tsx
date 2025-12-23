import { MapPin, Calendar } from "lucide-react";
import portoSeguroImg from "@/assets/dest-porto-seguro.jpg";
import fortalezaImg from "@/assets/dest-fortaleza.jpg";
import salvadorImg from "@/assets/dest-salvador.jpg";
import goianiaImg from "@/assets/dest-goiania.jpg";
import saoLuisImg from "@/assets/dest-sao-luis.jpg";
import rioImg from "@/assets/dest-rio.jpg";
import houstonImg from "@/assets/dest-houston.jpg";

const destinations = [
  {
    name: "Porto Seguro",
    location: "Bahia, Brasil",
    price: "R$ 1.290",
    duration: "5 dias",
    image: portoSeguroImg,
  },
  {
    name: "Fortaleza",
    location: "Ceará, Brasil",
    price: "R$ 1.450",
    duration: "7 dias",
    image: fortalezaImg,
  },
  {
    name: "Salvador",
    location: "Bahia, Brasil",
    price: "R$ 1.380",
    duration: "5 dias",
    image: salvadorImg,
  },
  {
    name: "Goiânia",
    location: "Goiás, Brasil",
    price: "R$ 890",
    duration: "4 dias",
    image: goianiaImg,
  },
  {
    name: "São Luís",
    location: "Maranhão, Brasil",
    price: "R$ 1.650",
    duration: "7 dias",
    image: saoLuisImg,
  },
  {
    name: "Rio de Janeiro",
    location: "RJ, Brasil",
    price: "R$ 1.190",
    duration: "5 dias",
    image: rioImg,
  },
  {
    name: "Houston",
    location: "Texas, EUA",
    price: "R$ 4.890",
    duration: "10 dias",
    image: houstonImg,
  },
];

const Destinations = () => {
  return (
    <section id="destinos" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Destinos Populares
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Destinos Mais Visitados
          </h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={dest.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
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
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {dest.duration}
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground">a partir de</span>
                    <p className="text-lg font-bold text-primary">{dest.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
