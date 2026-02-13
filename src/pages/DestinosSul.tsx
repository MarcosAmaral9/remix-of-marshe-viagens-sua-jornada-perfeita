import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { MapPin, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import fozDoIguacuImg from "@/assets/dest-foz-do-iguacu.jpg";
import gramadoImg from "@/assets/dest-gramado.jpg";

const destinations = [
  {
    name: "Foz do Iguaçu",
    location: "Paraná, Brasil",
    price: "R$ 1.842",
    duration: "6 dias",
    dates: "Dia dos Namorados 09/06/26 a 14/06/26",
    image: fozDoIguacuImg,
    highlights: ["Cataratas do Iguaçu", "Itaipu Binacional", "Marco das Três Fronteiras"],
  },
  {
    name: "Gramado",
    location: "Rio Grande do Sul, Brasil",
    price: "R$ 3.500",
    duration: "7 dias",
    dates: "Dia dos Namorados 11/06/26 a 17/06/26",
    image: gramadoImg,
    highlights: ["Mini Mundo", "Lago Negro", "Rua Coberta"],
  },
];

const DestinosSul = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Banner */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Pacotes Aéreos — <span className="text-primary">Sul</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
              Explore o charme e a natureza exuberante da região Sul do Brasil. Pacotes especiais para o Dia dos Namorados com aéreo, hospedagem e traslados.
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {destinations.map((dest) => (
                <div
                  key={dest.name}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={`Pacote de viagem para ${dest.name}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-primary-foreground">
                      <h2 className="text-2xl font-bold">{dest.name}</h2>
                      <div className="flex items-center gap-1 text-sm opacity-90">
                        <MapPin className="w-4 h-4" />
                        {dest.location}
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                      <Calendar className="w-4 h-4" />
                      {dest.duration} •{" "}
                      {dest.dates.match(/^([A-Za-zÀ-ú\s]+)(\d{2}\/\d{2}\/\d{2}.*)$/) ? (
                        <>
                          {dest.dates.match(/^([A-Za-zÀ-ú\s]+)(\d{2}\/\d{2}\/\d{2}.*)$/)?.[1]}
                          {dest.dates.match(/^([A-Za-zÀ-ú\s]+)(\d{2}\/\d{2}\/\d{2}.*)$/)?.[2]}
                        </>
                      ) : (
                        dest.dates
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {dest.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <div>
                        <span className="text-xs text-muted-foreground">a partir de</span>
                        <p className="text-xl font-bold text-primary">{dest.price}</p>
                        <span className="text-xs text-muted-foreground">por pessoa</span>
                      </div>
                      <Button
                        variant="hero"
                        size="sm"
                        className="px-6 py-2 h-auto text-sm"
                        asChild
                      >
                        <a
                          href={`https://wa.me/5531991292442?text=Olá! Tenho interesse no pacote para ${dest.name} (${dest.dates})`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Reservar
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default DestinosSul;
