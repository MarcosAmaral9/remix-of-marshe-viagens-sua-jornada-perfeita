import { ArrowRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { circuitosEuropa } from "@/data/circuitos";

const CircuitosViagem = () => {
  const europaImage = circuitosEuropa[0]?.image;
  const minPrice = "R$ 12.600";

  return (
    <section id="circuitos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Circuitos de Viagem
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Circuitos Internacionais com Roteiros Completos
          </h2>
          <p className="text-muted-foreground mt-4">
            Explore a Europa com circuitos guiados incluindo hospedagem, traslados, passeios panorâmicos e ingressos para atrações imperdíveis.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Link
            to="/circuitos/europa"
            className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 block"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={europaImage}
                alt="Circuitos Europa"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-6 h-6" />
                  <h3 className="text-2xl font-serif font-bold">Circuitos Europa</h3>
                </div>
                <p className="text-sm opacity-90 leading-relaxed">
                  Roteiros completos pela Europa com Disneyland Paris incluída. Espanha, França, Portugal, Itália e Suíça.
                </p>
              </div>
            </div>

            <div className="p-5 flex items-center justify-between">
              <div>
                <span className="text-xs text-muted-foreground">{circuitosEuropa.length} circuitos disponíveis</span>
                <p className="text-lg font-bold text-primary">A partir de {minPrice}</p>
              </div>
              <Button variant="ghost" className="gap-2 group-hover:text-primary transition-colors">
                Explorar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CircuitosViagem;
