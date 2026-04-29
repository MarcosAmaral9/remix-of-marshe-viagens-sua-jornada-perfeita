import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { MapPin, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import fozDoIguacuImg from "@/assets/dest-foz-do-iguacu.jpg";
import gramadoImg from "@/assets/dest-gramado.jpg";

export const destinations = [
  { name: "Foz do Iguaçu", location: "Paraná", price: "R$ 1.842", duration: "6 dias", dates: "Dia dos Namorados 09/06/26 a 14/06/26", image: fozDoIguacuImg, slug: "foz-do-iguacu", highlights: ["Cataratas do Iguaçu", "Itaipu Binacional", "Marco das Três Fronteiras"] },
  { name: "Gramado", location: "Rio Grande do Sul", price: "R$ 3.500", duration: "7 dias", dates: "Dia dos Namorados 11/06/26 a 17/06/26", image: gramadoImg, slug: "gramado", highlights: ["Mini Mundo", "Lago Negro", "Rua Coberta"] },
];

const DestinosSul = () => {
  useSeo({
    title: "Pacotes Aéreos Sul | Marshe Viagens - Gramado e Foz do Iguaçu",
    description: "Pacotes de viagem para o Sul do Brasil saindo de BH. Gramado, Canela e Foz do Iguaçu com aéreo, hospedagem e traslados inclusos.",
    canonical: "https://marsheviagens.com/destinos/sul",
  });

  const sortedDestinations = sortByPriceAsc(destinations, (d) => d.price);
  const minPrice = getMinPrice(destinations, (d) => d.price);
  const priceRange = formatPriceRange(destinations, (d) => d.price);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <Link to="/destinos" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Voltar aos destinos
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Pacotes Aéreos — <span className="text-primary">Sul</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
              Explore o charme e a natureza exuberante da região Sul do Brasil. Pacotes especiais para o Dia dos Namorados com aéreo, hospedagem e traslados.
            </p>
            <div className="mt-6 inline-flex flex-wrap items-center gap-3 bg-card border border-border rounded-2xl px-5 py-3 shadow-sm">
              <Tag className="w-5 h-5 text-primary" />
              <div className="text-sm">
                <span className="text-muted-foreground">Faixa de preços: </span>
                <span className="font-bold text-foreground">{priceRange}</span>
                <span className="text-muted-foreground"> por pessoa</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {sortedDestinations.map((dest) => {
                const isCheapest = parsePrice(dest.price) === minPrice;
                return (
                  <Link
                    key={dest.name}
                    to={`/destinos/${dest.slug}`}
                    className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    {isCheapest && (
                      <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        <Tag className="w-3 h-3" /> Menor preço
                      </div>
                    )}
                    <div className="relative h-56 overflow-hidden">
                      <img src={dest.image} alt={`Pacote de viagem para ${dest.name}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h2 className="text-2xl font-bold">{dest.name}</h2>
                        <div className="flex items-center gap-1 text-sm opacity-90">
                          <MapPin className="w-4 h-4" /> {dest.location}
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar className="w-4 h-4" /> {dest.duration} • {dest.dates}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {dest.highlights.map((h) => (
                          <span key={h} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">{h}</span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between border-t border-border pt-4">
                        <div>
                          <span className="text-xs text-muted-foreground">a partir de</span>
                          <p className="text-xl font-bold text-primary">{formatPrice(parsePrice(dest.price))}</p>
                          <span className="text-xs text-muted-foreground">por pessoa</span>
                        </div>
                        <span className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                          Ver detalhes <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
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
