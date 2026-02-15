import { ArrowRight, Palmtree, Mountain } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import portoSeguroImg from "@/assets/dest-porto-seguro.jpg";
import gramadoImg from "@/assets/dest-gramado.jpg";

const regions = [
  {
    name: "Nordeste",
    slug: "nordeste",
    icon: Palmtree,
    description: "Praias paradisíacas, águas cristalinas e sol o ano inteiro. 8 destinos incríveis para você explorar.",
    destinationCount: 8,
    image: portoSeguroImg,
    highlight: "A partir de R$ 1.838",
  },
  {
    name: "Sul",
    slug: "sul",
    icon: Mountain,
    description: "Natureza exuberante, charme europeu e experiências únicas. Pacotes especiais para o Dia dos Namorados.",
    destinationCount: 2,
    image: gramadoImg,
    highlight: "A partir de R$ 1.842",
  },
];

const Destinations = () => {
  return (
    <section id="destinos" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Destinos Populares
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Pacotes Aéreos Completos Saindo de Belo Horizonte / Confins
          </h2>
          <p className="text-muted-foreground mt-4">
            Escolha a região e descubra destinos incríveis com pacotes completos incluindo aéreo, hospedagem e traslados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {regions.map((region) => {
            const Icon = region.icon;
            return (
              <Link
                key={region.slug}
                to={`/destinos/${region.slug}`}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={region.image}
                    alt={`Destinos ${region.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-6 h-6" />
                      <h3 className="text-2xl font-serif font-bold">{region.name}</h3>
                    </div>
                    <p className="text-sm opacity-90 leading-relaxed">{region.description}</p>
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground">{region.destinationCount} destinos</span>
                    <p className="text-lg font-bold text-primary">{region.highlight}</p>
                  </div>
                  <Button variant="ghost" className="gap-2 group-hover:text-primary transition-colors">
                    Explorar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
