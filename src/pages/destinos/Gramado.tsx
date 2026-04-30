import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { MapPin, Calendar, Sun, Thermometer, UtensilsCrossed, Camera, ArrowLeft } from "lucide-react";
import OrcamentoDialog from "@/components/OrcamentoDialog";
import ShareWhatsAppButton from "@/components/ShareWhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/dest-gramado.jpg";

const Gramado = () => {
  useSeo({ title: "Pacote Gramado | Marshe Viagens - Saindo de BH", description: "Pacote de viagem para Gramado e Canela, RS. Mini Mundo, Lago Negro, vinícolas e fondue. Aéreo, hospedagem e traslados.", canonical: "https://marsheviagens.com/destinos/gramado" });
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="Gramado" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
            <Link to="/destinos/sul" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4">
              <ArrowLeft className="w-4 h-4" /> Voltar para Sul
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Gramado</h1>
            <div className="flex items-center gap-2 text-primary-foreground/90 mt-2">
              <MapPin className="w-4 h-4" /> Rio Grande do Sul, Brasil
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Sobre o Destino</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Gramado é a "Europa brasileira" na Serra Gaúcha. Com arquitetura enxaimel, jardins floridos, chocolaterias artesanais e um clima de montanha encantador, a cidade é um dos destinos mais românticos do Brasil. Perfeita para casais, famílias e amantes da boa gastronomia, Gramado oferece festivais durante o ano todo, como o Natal Luz e o Festival de Cinema.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" /> Pontos Turísticos Imperdíveis
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "Mini Mundo", desc: "Parque temático com réplicas em miniatura de construções famosas do mundo, encantador para todas as idades." },
                    { name: "Lago Negro", desc: "Lago cercado por hortênsias e árvores importadas da Floresta Negra alemã, perfeito para passeios de pedalinho." },
                    { name: "Rua Coberta", desc: "Rua coberta com restaurantes, cafés e lojas, palco de shows e eventos culturais durante todo o ano." },
                    { name: "Snowland", desc: "Primeiro parque de neve indoor das Américas com pista de esqui, snowboard e montanha de neve." },
                    { name: "Chocolaterias", desc: "Mais de 20 fábricas artesanais de chocolate com degustações gratuitas — Prawer, Caracol e Lugano são imperdíveis." },
                    { name: "Vale do Quilombo", desc: "Mirante com vista panorâmica espetacular do vale, especialmente bonito ao nascer e pôr do sol." },
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
                  Gramado é encantadora em qualquer estação. O <strong>inverno (junho a agosto)</strong> é a alta temporada, com temperaturas entre 5°C e 15°C, fondue e chocolate quente. A <strong>primavera (setembro a novembro)</strong> traz flores por toda cidade. O <strong>Natal Luz (outubro a janeiro)</strong> transforma Gramado em um cenário mágico com desfiles e espetáculos de luz. O verão é mais tranquilo e com temperaturas agradáveis de até 25°C.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" /> Gastronomia Local
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A gastronomia de Gramado é uma experiência à parte. O fondue (queijo e chocolate) é obrigatório. Prove também o café colonial (farto café da tarde com cucas, pães, geleias e embutidos), a galinha recheada, o churrasco gaúcho e as trutas frescas. As chocolaterias oferecem bombons, trufas e fondue de chocolate artesanal. A Rua Coberta concentra ótimos restaurantes.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-28 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Pacote Aéreo Completo</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">Gramado</h3>
                  <span className="text-sm text-primary font-medium">🎉 Especial Dia dos Namorados</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>7 dias • 11/06/26 a 17/06/26</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Temperatura média: 12°C</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">a partir de</span>
                  <p className="text-3xl font-bold text-primary">R$ 3.500</p>
                  <span className="text-xs text-muted-foreground">por pessoa</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✈️ Passagem aérea ida e volta</li>
                  <li>🏨 Hospedagem com café da manhã</li>
                  <li>🚐 Traslado aeroporto/hotel</li>
                  
                </ul>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="https://wa.me/5531972391400?text=Olá! Tenho interesse no pacote para Gramado - Dia dos Namorados (11/06/26 a 17/06/26)" target="_blank" rel="noopener noreferrer">
                    Reservar pelo WhatsApp
                  </a>
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">Quer reservar uma data diferente? Entre em contato conosco</p>
                  <OrcamentoDialog defaultDestination="Gramado" />
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

export default Gramado;
