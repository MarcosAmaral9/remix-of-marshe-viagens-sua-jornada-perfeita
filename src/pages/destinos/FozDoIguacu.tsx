import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { MapPin, Calendar, Sun, Thermometer, UtensilsCrossed, Camera, ArrowLeft } from "lucide-react";
import OrcamentoDialog from "@/components/OrcamentoDialog";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/dest-foz-do-iguacu.jpg";

const FozDoIguacu = () => {
  useSeo({ title: "Pacote Foz do Iguaçu | Marshe Viagens - Saindo de BH", description: "Pacote de viagem para Foz do Iguaçu, PR. Cataratas, Itaipu e Marco das Três Fronteiras. Aéreo, hospedagem e traslados.", canonical: "https://marsheviagens.com.br/destinos/foz-do-iguacu" });
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="Foz do Iguaçu" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
            <Link to="/destinos/sul" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Voltar para Sul
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Foz do Iguaçu</h1>
            <div className="flex items-center gap-2 text-primary-foreground/90 mt-2">
              <MapPin className="w-4 h-4" /> Paraná, Brasil
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Sobre o Destino</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Foz do Iguaçu é lar de uma das Sete Novas Maravilhas da Natureza: as Cataratas do Iguaçu. Com 275 quedas d'água que se estendem por quase 3 km, o espetáculo é de tirar o fôlego. Além das cataratas, a cidade na tríplice fronteira (Brasil, Argentina e Paraguai) oferece a impressionante Usina de Itaipu, parques temáticos e uma rica diversidade cultural.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" /> Pontos Turísticos Imperdíveis
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "Cataratas do Iguaçu", desc: "Uma das 7 Novas Maravilhas da Natureza com 275 quedas. A passarela da Garganta do Diabo é inesquecível." },
                    { name: "Itaipu Binacional", desc: "A maior hidrelétrica do mundo em geração de energia, com visitas guiadas e iluminação noturna espetacular." },
                    { name: "Marco das Três Fronteiras", desc: "Ponto onde Brasil, Argentina e Paraguai se encontram, com show cultural e vista do encontro dos rios." },
                    { name: "Parque das Aves", desc: "Viveiros imensos com mais de 1.400 aves de 150 espécies, incluindo tucanos, araras e flamingos." },
                    { name: "Macuco Safari", desc: "Passeio de barco radical que leva até a base das cataratas — prepare-se para se molhar!" },
                    { name: "Compras no Paraguai", desc: "Ciudad del Este oferece compras com preços atrativos em eletrônicos, perfumes e produtos importados." },
                  ].map((spot) => (
                    <div key={spot.name} className="bg-muted/50 rounded-xl p-4">
                      <h3 className="font-semibold text-foreground mb-1">{spot.name}</h3>
                      <p className="text-sm text-muted-foreground">{spot.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-primary" /> Melhor Época para Viajar
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Foz do Iguaçu pode ser visitada o ano todo, mas cada estação oferece uma experiência diferente. De <strong>março a maio</strong>, o volume de água das cataratas é maior (mais impressionante). De <strong>agosto a outubro</strong>, o tempo é mais seco e agradável para caminhadas. O verão (dezembro a fevereiro) é quente (até 35°C) com chuvas ocasionais. O inverno (junho a agosto) é mais ameno, com temperaturas entre 10°C e 20°C.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" /> Gastronomia Local
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Por estar na tríplice fronteira, Foz do Iguaçu tem uma gastronomia diversificada. Prove o churrasco paranaense, a parrilla argentina, os pratos árabes (grande colônia na cidade), o pintado na brasa (peixe de rio) e as empanadas. A influência paraguaia traz a sopa paraguaia e a chipa. Os restaurantes da cidade oferecem cardápios internacionais com sabores únicos.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-28 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Pacote Aéreo Completo</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">Foz do Iguaçu</h3>
                  <span className="text-sm text-primary font-medium">🎉 Especial Dia dos Namorados</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>6 dias • 09/06/26 a 14/06/26</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Temperatura média: 18°C</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">a partir de</span>
                  <p className="text-3xl font-bold text-primary">R$ 1.842</p>
                  <span className="text-xs text-muted-foreground">por pessoa</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✈️ Passagem aérea ida e volta</li>
                  <li>🏨 Hospedagem com café da manhã</li>
                  <li>🚐 Traslado aeroporto/hotel</li>
                  
                </ul>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="https://wa.me/5531972391400?text=Olá! Tenho interesse no pacote para Foz do Iguaçu - Dia dos Namorados (09/06/26 a 14/06/26)" target="_blank" rel="noopener noreferrer">
                    Reservar pelo WhatsApp
                  </a>
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">Quer reservar uma data diferente? Entre em contato conosco</p>
                  <OrcamentoDialog defaultDestination="Foz do Iguaçu" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default FozDoIguacu;
