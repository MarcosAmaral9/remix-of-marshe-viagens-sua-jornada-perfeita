import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { MapPin, Calendar, Sun, Thermometer, UtensilsCrossed, Camera, ArrowLeft } from "lucide-react";
import OrcamentoDialog from "@/components/OrcamentoDialog";
import ShareWhatsAppButton from "@/components/ShareWhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/dest-joao-pessoa.jpg";

const JoaoPessoa = () => {
  useSeo({
    title: "Pacote João Pessoa | Marshe Viagens - Saindo de BH",
    description:
      "Pacote de viagem para João Pessoa, PB. Praias, pôr do sol do Jacaré e litoral sul. Aéreo, hospedagem e traslados.",
    canonical: "https://marsheviagens.com/destinos/joao-pessoa",
  });
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="João Pessoa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
            <Link
              to="/destinos/nordeste"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Nordeste
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">João Pessoa</h1>
            <div className="flex items-center gap-2 text-primary-foreground/90 mt-2">
              <MapPin className="w-4 h-4" /> Paraíba, Brasil
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Sobre o Destino</h2>
                <p className="text-muted-foreground leading-relaxed">
                  João Pessoa, capital da Paraíba, é conhecida como a "Porta do Sol" por ser a cidade mais oriental das
                  Américas. Com praias urbanas de águas mornas, arrecifes naturais, um centro histórico rico e a famosa
                  Ponta do Seixas — o ponto mais oriental do continente americano — a cidade combina natureza, cultura e
                  tranquilidade em um só lugar. É uma das capitais mais arborizadas do Brasil.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" /> Pontos Turísticos Imperdíveis
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Ponta do Seixas",
                      desc: "O ponto mais oriental das Américas, onde o sol nasce primeiro. Vista deslumbrante do farol e do oceano.",
                    },
                    {
                      name: "Praia de Tambaba",
                      desc: "Praia com falésias e piscinas naturais, conhecida por ser a primeira praia oficial de naturismo do Nordeste.",
                    },
                    {
                      name: "Centro Histórico",
                      desc: "Igrejas barrocas, casarões coloniais e o Convento de São Francisco, patrimônio cultural da humanidade.",
                    },
                    {
                      name: "Picãozinho",
                      desc: "Piscinas naturais formadas por corais a 1,5 km da costa, acessíveis de catamarã na maré baixa.",
                    },
                    {
                      name: "Praia de Coqueirinho",
                      desc: "Uma das praias mais bonitas do litoral sul, com falésias avermelhadas e águas transparentes.",
                    },
                    {
                      name: "Pôr do Sol na Praia do Jacaré",
                      desc: "Tradição local com o som do Bolero de Ravel tocado ao saxofone durante o pôr do sol no rio.",
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
                  João Pessoa tem clima tropical com sol praticamente o ano todo. A melhor época é de{" "}
                  <strong>setembro a fevereiro</strong>, quando chove menos e as temperaturas ficam entre 27°C e 31°C. O
                  período de março a agosto tem mais chuvas, mas normalmente são passageiras e não impedem os passeios.
                  A temperatura do mar é agradável durante todo o ano.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" /> Gastronomia Local
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A gastronomia pessoense é rica e diversificada. Destaque para o rubacão (prato típico com feijão
                  verde, charque e queijo coalho), a macaxeira com carne de sol, os frutos do mar frescos e o
                  caranguejo. Na orla, os quiosques servem petiscos deliciosos acompanhados de sucos de frutas regionais
                  como cajá, mangaba e graviola.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-28 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Pacote Aéreo Completo</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">João Pessoa</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>7 dias • 13/06/26 a 20/06/26</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Temperatura média: 28°C</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">a partir de</span>
                  <p className="text-3xl font-bold text-primary">R$ 2.790</p>
                  <span className="text-xs text-muted-foreground">por pessoa</span>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✈️ Passagem aérea ida e volta</li>
                  <li>🏨 Hospedagem com café da manhã</li>
                  <li>🚐 Traslado aeroporto/hotel</li>
                </ul>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="https://wa.me/5531972391400?text=Olá! Tenho interesse no pacote para João Pessoa (13/06/26 a 20/06/26)" target="_blank" rel="noopener noreferrer">
                    Reservar pelo WhatsApp
                  </a>
                </Button>
                <ShareWhatsAppButton
                  title="Pacote João Pessoa — Marshe Viagens"
                  highlight="A partir de R$ 2.790 • Saindo de BH"
                  kind="destino"
                />
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">Quer reservar uma data diferente? Entre em contato conosco</p>
                  <OrcamentoDialog defaultDestination="João Pessoa" />
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

export default JoaoPessoa;
