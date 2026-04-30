import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { MapPin, Calendar, Sun, Thermometer, UtensilsCrossed, Camera, ArrowLeft } from "lucide-react";
import OrcamentoDialog from "@/components/OrcamentoDialog";
import ShareWhatsAppButton from "@/components/ShareWhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/dest-cabo-santo-agostinho.jpg";

const CaboSantoAgostinho = () => {
  useSeo({ title: "Pacote Cabo de Santo Agostinho | Marshe Viagens", description: "Pacote de viagem para Cabo de Santo Agostinho, PE. Praia de Calhetas, piscinas naturais e mais, saindo de BH.", canonical: "https://marsheviagens.com/destinos/cabo-de-santo-agostinho" });
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="Cabo de Santo Agostinho" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
            <Link to="/destinos/nordeste" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Voltar para Nordeste
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Cabo de Santo Agostinho</h1>
            <div className="flex items-center gap-2 text-primary-foreground/90 mt-2">
              <MapPin className="w-4 h-4" /> Pernambuco, Brasil
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Sobre o Destino</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cabo de Santo Agostinho é um paraíso escondido no litoral sul de Pernambuco, a apenas 35 km de Recife. Com praias de águas mornas e cristalinas, piscinas naturais formadas por recifes de coral e uma rica história colonial, o destino encanta visitantes em busca de tranquilidade e beleza natural. A região abriga algumas das praias mais bonitas do Nordeste brasileiro, muitas delas ainda preservadas do turismo de massa.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" /> Pontos Turísticos Imperdíveis
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "Praia de Calhetas", desc: "Considerada uma das praias mais bonitas do Brasil, com águas calmas e cenário deslumbrante cercado por falésias." },
                    { name: "Piscinas Naturais de Gaibu", desc: "Formadas por recifes de coral na maré baixa, perfeitas para mergulho e contemplação da vida marinha." },
                    { name: "Forte Castelo do Mar", desc: "Ruínas históricas do período colonial holandês, acessíveis na maré baixa, com vista panorâmica." },
                    { name: "Praia de Suape", desc: "Praia tranquila com rio de águas doces que desemboca no mar, ideal para famílias." },
                    { name: "Igreja de Nazaré", desc: "Construção histórica do século XVI com arquitetura colonial portuguesa preservada." },
                    { name: "Praia de Itapuama", desc: "Extensa faixa de areia com coqueiros, ótima para caminhadas e esportes aquáticos." },
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
                  A melhor época para visitar Cabo de Santo Agostinho é entre <strong>setembro e março</strong>, quando o clima é mais seco e ensolarado. Os meses de dezembro a fevereiro são os mais quentes, com temperaturas entre 28°C e 32°C. De abril a agosto ocorre a temporada de chuvas, mas ainda é possível aproveitar dias de sol. A temperatura da água do mar se mantém agradável o ano inteiro, entre 26°C e 29°C.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" /> Gastronomia Local
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A culinária local é rica em frutos do mar. Experimente a lagosta grelhada, o peixe na telha, a caldeirada e o tradicional bolo de rolo pernambucano. Os quiosques à beira-mar oferecem petiscos frescos e sucos de frutas tropicais. Não deixe de provar a tapioca recheada e o famoso cartola, sobremesa típica feita com banana e queijo coalho.
                </p>
              </div>
            </div>

            {/* Sidebar - Package Info */}
            <div>
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-28 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Pacote Aéreo Completo</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">Cabo de Santo Agostinho</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>8 dias • 16/05/26 a 23/05/26</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Temperatura média: 28°C</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">a partir de</span>
                  <p className="text-3xl font-bold text-primary">R$ 2.650</p>
                  <span className="text-xs text-muted-foreground">por pessoa</span>
                </div>

                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">✈️ Passagem aérea ida e volta</li>
                  <li className="flex items-start gap-2">🏨 Hospedagem com café da manhã</li>
                  <li className="flex items-start gap-2">🚐 Traslado aeroporto/hotel</li>
                  
                </ul>

                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="https://wa.me/5531972391400?text=Olá! Tenho interesse no pacote para Cabo de Santo Agostinho (16/05/26 a 23/05/26)" target="_blank" rel="noopener noreferrer">
                    Reservar pelo WhatsApp
                  </a>
                </Button>
                <ShareWhatsAppButton
                  title="Pacote Cabo de Santo Agostinho — Marshe Viagens"
                  highlight="A partir de R$ 2.650 • Saindo de BH"
                  kind="destino"
                />
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">Quer reservar uma data diferente? Entre em contato conosco</p>
                  <OrcamentoDialog defaultDestination="Cabo Santo Agostinho" />
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

export default CaboSantoAgostinho;
