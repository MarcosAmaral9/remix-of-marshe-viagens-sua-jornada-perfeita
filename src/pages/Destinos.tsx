import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Palmtree, Mountain, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import portoSeguroImg from "@/assets/dest-porto-seguro.jpg";
import gramadoImg from "@/assets/dest-gramado.jpg";
import madriParisImg from "@/assets/circuit-madri-paris.jpg";

const regions = [
  {
    name: "Destinos Nordeste",
    slug: "/destinos/nordeste",
    icon: Palmtree,
    description: "Praias paradisíacas, águas cristalinas e sol o ano inteiro. 8 destinos incríveis para você explorar.",
    destinationCount: 8,
    image: portoSeguroImg,
    highlight: "A partir de R$ 1.838",
  },
  {
    name: "Destinos Sul",
    slug: "/destinos/sul",
    icon: Mountain,
    description: "Natureza exuberante, charme europeu e experiências únicas. Pacotes especiais para o Dia dos Namorados.",
    destinationCount: 2,
    image: gramadoImg,
    highlight: "A partir de R$ 1.842",
  },
  {
    name: "Circuitos Europa",
    slug: "/circuitos/europa",
    icon: Globe,
    description: "Roteiros completos pela Europa com guia, hospedagem e Disneyland Paris inclusos. Saídas de Belo Horizonte.",
    destinationCount: 3,
    image: madriParisImg,
    highlight: "A partir de R$ 12.600",
  },
];

const Destinos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Voltar para Home
          </Link>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              Todos os Destinos
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
              Explore nossos <span className="text-primary">destinos e roteiros</span>
            </h1>
            <p className="text-muted-foreground mt-4">
              Escolha entre destinos nacionais no Nordeste e Sul do Brasil, ou circuitos internacionais pela Europa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {regions.map((region) => {
              const Icon = region.icon;
              return (
                <Link
                  key={region.slug}
                  to={region.slug}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={region.image}
                      alt={region.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="256"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-6 h-6" />
                        <h2 className="text-2xl font-serif font-bold">{region.name}</h2>
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
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Destinos;
