import { getDestinationPrice } from "@/lib/destination-lookup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { MapPin, Calendar, Sun, Thermometer, UtensilsCrossed, Camera, ArrowLeft } from "lucide-react";
import OrcamentoDialog from "@/components/OrcamentoDialog";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/dest-porto-seguro.jpg";

const PortoSeguro = () => {
  useSeo({
    title: "Pacote Porto Seguro | Marshe Viagens - Saindo de BH",
    description:
      "Pacote de viagem para Porto Seguro, BA. Arraial d'Ajuda, Trancoso e Passarela do Álcool. Aéreo, hospedagem e traslados.",
    canonical: "https://marsheviagens.com/destinos/porto-seguro",
  });
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="Porto Seguro" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
            <Link
              to="/destinos/nordeste"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Nordeste
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Porto Seguro</h1>
            <div className="flex items-center gap-2 text-primary-foreground/90 mt-2">
              <MapPin className="w-4 h-4" /> Bahia, Brasil
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Sobre o Destino</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Porto Seguro é onde a história do Brasil começou — foi aqui que os portugueses desembarcaram em 1500.
                  Mas além da riqueza histórica, a cidade oferece praias espetaculares, vida noturna animada e vilas
                  charmosas como Arraial d'Ajuda e Trancoso. É um destino versátil, perfeito tanto para quem busca
                  diversão quanto para quem quer relaxar em praias paradisíacas.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" /> Pontos Turísticos Imperdíveis
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Passarela do Álcool",
                      desc: "Rua mais famosa de Porto Seguro com barracas, artesanato, drinks coloridos e muita animação noturna.",
                    },
                    {
                      name: "Arraial d'Ajuda",
                      desc: "Vila boêmia com praias paradisíacas, falésias coloridas e a charmosa Rua do Mucugê com lojas e restaurantes.",
                    },
                    {
                      name: "Trancoso",
                      desc: "O Quadrado de Trancoso é Patrimônio Histórico, com casinhas coloridas, restaurantes sofisticados e praias desertas.",
                    },
                    {
                      name: "Recife de Fora",
                      desc: "Parque marinho com piscinas naturais cristalinas, ideal para snorkeling e mergulho com peixes tropicais.",
                    },
                    {
                      name: "Centro Histórico",
                      desc: "Marco do Descobrimento, Igreja de Nossa Senhora da Pena e vista panorâmica do alto da cidade.",
                    },
                    {
                      name: "Praia de Taperapuã",
                      desc: "A praia mais badalada com mega barracas, shows ao vivo e estrutura completa de lazer.",
                    },
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
                  Porto Seguro tem clima quente o ano inteiro, com temperaturas entre 24°C e 30°C. A melhor época é de{" "}
                  <strong>setembro a março</strong>, com sol forte e pouca chuva. O período de dezembro a fevereiro é
                  alta temporada com muita animação. De abril a agosto chove mais, mas os preços são mais acessíveis e a
                  cidade fica mais tranquila — ótimo para quem prefere sossego.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" /> Gastronomia Local
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A culinária de Porto Seguro é rica e variada. Experimente a moqueca baiana, o acarajé, o bobó de
                  camarão e os peixes grelhados frescos. Em Arraial d'Ajuda e Trancoso, encontram-se restaurantes de
                  alta gastronomia com sabores regionais. Na Passarela do Álcool, prove os drinks típicos e petiscos
                  como a casquinha de siri e o bolinho de peixe.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-28 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Pacote Aéreo Completo</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">Porto Seguro</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>8 dias • 05/07/26 a 12/07/26</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Temperatura média: 27°C</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">a partir de</span>
                  <p className="text-3xl font-bold text-primary">{getDestinationPrice("porto-seguro")}</p>
                  <span className="text-xs text-muted-foreground">por pessoa</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✈️ Passagem aérea ida e volta</li>
                  <li>🏨 Hospedagem com café da manhã</li>
                  <li>🚐 Traslado aeroporto/hotel</li>
                </ul>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a
                    href="https://wa.me/5531972391400?text=Olá! Tenho interesse no pacote para Porto Seguro (04/05/26 a 08/05/26)"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar pelo WhatsApp
                  </a>
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Quer reservar uma data diferente? Entre em contato conosco
                  </p>
                  <OrcamentoDialog defaultDestination="Porto Seguro" />
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

export default PortoSeguro;
