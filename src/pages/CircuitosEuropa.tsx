import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { Calendar, ArrowLeft, ArrowRight, Moon, Globe, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { circuitosEuropa } from "@/data/circuitos";
import { sortByPriceAsc, parsePrice, getMinPrice, formatPriceRange, formatPrice } from "@/lib/price-utils";

const CircuitosEuropa = () => {
  useSeo({
    title: "Circuitos Europa com Disneyland Paris | Marshe Viagens",
    description: "Circuitos completos pela Europa com roteiros guiados. Madri, Paris, Lisboa, Roma, Florença e mais com Disneyland Paris incluída.",
    canonical: "https://marsheviagens.com/circuitos/europa",
  });

  const sortedCircuits = sortByPriceAsc(circuitosEuropa, (c) => c.pricePerPerson);
  const minPrice = getMinPrice(circuitosEuropa, (c) => c.pricePerPerson);
  const priceRange = formatPriceRange(circuitosEuropa, (c) => c.pricePerPerson);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <Link to="/destinos" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" /> Voltar aos destinos
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <Globe className="w-8 h-8 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Circuitos de Viagem</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
              Circuitos <span className="text-primary">Europa</span>
            </h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
              Roteiros completos pela Europa com guia, hospedagem, traslados e Disneyland Paris incluída. Todos os circuitos saindo de Belo Horizonte / Confins.
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
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {sortedCircuits.map((circuit) => {
                const isCheapest = parsePrice(circuit.pricePerPerson) === minPrice;
                return (
                  <Link
                    key={circuit.slug}
                    to={`/circuitos/europa/${circuit.slug}`}
                    className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    {isCheapest && (
                      <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        <Tag className="w-3 h-3" /> Menor preço
                      </div>
                    )}
                    <div className="relative h-56 overflow-hidden">
                      <img src={circuit.image} alt={circuit.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                        {circuit.nights} noites
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                        <h2 className="text-xl font-bold leading-tight">{circuit.shortName}</h2>
                        <div className="flex items-center gap-1 text-sm opacity-90 mt-1">
                          <Calendar className="w-3.5 h-3.5" /> {circuit.departure} a {circuit.returnDate}
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Moon className="w-4 h-4" /> {circuit.nights} noites • {circuit.passengers}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {circuit.includes.slice(0, 3).map((inc, i) => (
                          <span key={i} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full line-clamp-1">
                            {inc.length > 40 ? inc.substring(0, 40) + "…" : inc}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between border-t border-border pt-4">
                        <div>
                          <span className="text-xs text-muted-foreground">a partir de</span>
                          <p className="text-xl font-bold text-primary">{formatPrice(parsePrice(circuit.pricePerPerson))}</p>
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

export default CircuitosEuropa;
