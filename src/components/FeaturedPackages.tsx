import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import OrcamentoDialog from "@/components/OrcamentoDialog";
import { Link } from "react-router-dom";

import imgPortoGalinhas from "@/assets/dest-porto-de-galinhas.jpg";
import imgGramado from "@/assets/dest-gramado.jpg";
import imgMadriParis from "@/assets/circuit-madri-paris.jpg";

const packages = [
  {
    title: "Porto de Galinhas",
    description: "Pacote com hotel, traslado e assistência personalizada para um dos destinos mais procurados do Nordeste.",
    image: imgPortoGalinhas,
    destination: "Porto de Galinhas",
    link: "/destinos/porto-de-galinhas",
    price: "A partir de R$ 1.290",
  },
  {
    title: "Gramado & Canela",
    description: "Roteiro completo pela Serra Gaúcha com hospedagem selecionada e passeios imperdíveis.",
    image: imgGramado,
    destination: "Gramado",
    link: "/destinos/gramado",
    badge: "Saída confirmada",
    badgeColor: "bg-accent text-accent-foreground",
    price: "A partir de R$ 1.490",
  },
  {
    title: "Madri e Paris + Disney",
    description: "Circuito europeu com 7 noites, guia em português, hospedagem e Disneyland Paris inclusos.",
    image: imgMadriParis,
    destination: "Circuito Madri e Paris",
    link: "/circuitos/europa/madri-paris-disneyland",
    badge: "Mais vendido",
    badgeColor: "bg-primary text-primary-foreground",
    price: "A partir de R$ 8.990",
  },
];

const FeaturedPackages = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Pacotes em Destaque
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Destinos mais procurados do momento
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <Link to={pkg.link} className="relative h-56 overflow-hidden block">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width="400"
                  height="224"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${pkg.badgeColor}`}>
                    {pkg.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white font-serif drop-shadow-lg">
                    {pkg.title}
                  </h3>
                  <p className="text-white/90 text-sm font-semibold mt-1">{pkg.price}</p>
                </div>
              </Link>
              <div className="p-6">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {pkg.description}
                </p>
                <div className="flex gap-3">
                  <OrcamentoDialog
                    defaultDestination={pkg.destination}
                    trigger={
                      <Button className="flex-1 gap-2 text-sm">
                        Solicitar Cotação
                      </Button>
                    }
                  />
                  <Button variant="outline" size="icon" asChild>
                    <Link to={pkg.link}>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="gap-2">
            <Link to="/destinos">
              Ver todos os destinos <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
