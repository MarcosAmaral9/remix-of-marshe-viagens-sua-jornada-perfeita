import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { MapPin, Calendar, Sun, Thermometer, UtensilsCrossed, Camera, ArrowLeft } from "lucide-react";
import OrcamentoDialog from "@/components/OrcamentoDialog";
import ShareWhatsAppButton from "@/components/ShareWhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/dest-natal.jpg";
import img_dunas_de_genipabu from "@/assets/pontos/natal/dunas-de-genipabu.jpg.asset.json";
import img_praia_de_pipa from "@/assets/pontos/natal/praia-de-pipa.jpg.asset.json";
import img_forte_dos_reis_magos from "@/assets/pontos/natal/forte-dos-reis-magos.jpg.asset.json";
import img_parrachos_de_maracajau from "@/assets/pontos/natal/parrachos-de-maracajau.jpg.asset.json";
import img_praia_de_ponta_negra from "@/assets/pontos/natal/praia-de-ponta-negra.jpg.asset.json";

const Natal = () => {
  useSeo({
    title: "Pacote Natal | Marshe Viagens - Saindo de BH",
    description:
      "Pacote de viagem para Natal, RN. Dunas de Genipabu, Ponta Negra, Pipa e mais. Aéreo, hospedagem e traslados inclusos.",
    canonical: "https://marsheviagens.com/destinos/natal",
    ogParams: {
      title: "Pacote Natal",
      highlight: "",
      kind: "Destino",
    },
  });
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="Natal" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
            <Link
              to="/destinos/nordeste"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Nordeste
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Natal</h1>
            <div className="flex items-center gap-2 text-primary-foreground/90 mt-2">
              <MapPin className="w-4 h-4" /> Rio Grande do Norte, Brasil
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Sobre o Destino</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Natal, a "Cidade do Sol", é a capital do Rio Grande do Norte e um dos destinos mais procurados do
                  Nordeste. Com mais de 300 dias de sol por ano, dunas impressionantes, praias de água morna e parrachos
                  (recifes de coral), a cidade oferece aventura e relaxamento na medida certa. É porta de entrada para a
                  Praia de Pipa, um dos destinos mais charmosos do Brasil.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" /> Pontos Turísticos Imperdíveis
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {([
                    { name: "Dunas de Genipabu", desc: "Passeio clássico de buggy pelas dunas móveis, com paradas para esquibunda e travessia por lagoas cristalinas. A famosa frase 'com ou sem emoção?' virou marca registrada. Programa de meio-dia inesquecível.", image: img_dunas_de_genipabu.url },
                    { name: "Praia da Pipa", desc: "Vila charmosa a 85 km ao sul de Natal, com falésias, golfinhos que aparecem quase todos os dias e vida noturna animada. Praia do Amor, Baía dos Golfinhos e Chapadão são paradas obrigatórias. Ideal para 2-3 diárias.", image: img_praia_de_pipa.url },
                    { name: "Forte dos Reis Magos", desc: "Fortaleza histórica em formato de estrela, construída em 1598, marca da fundação da cidade. Acesso a pé pela areia na maré baixa. Vista da foz do rio Potengi e do mar aberto.", image: img_forte_dos_reis_magos.url },
                    { name: "Parrachos de Maracajaú", desc: "Piscinas naturais em alto-mar (7 km da praia), com formação de corais e vida marinha rica em peixes coloridos. Passeio de catamarã com mergulho livre e cilindro opcional. Água quente o ano todo.", image: img_parrachos_de_maracajau.url },
                    { name: "Lagoa de Pitangui", desc: "Lagoa de águas cristalinas cercada por dunas em Extremoz, ideal para banho e passeios de caiaque. Menos turística que Genipabu. Ótimo bate-volta pela costa norte.", image: heroImg },
                    { name: "Praia de Ponta Negra", desc: "A praia urbana mais movimentada de Natal, com o icônico Morro do Careca — duna de 120 metros que desce até o mar. Excelente estrutura de hotéis, bares e restaurantes. Ideal para hospedagem.", image: img_praia_de_ponta_negra.url },
                  ]).map((spot) => (
                    <div key={spot.name} className="bg-muted/50 rounded-3xl overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={spot.image}
                          alt={spot.name}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-2">{spot.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{spot.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Sun className="w-5 h-5 text-primary" /> Melhor Época para Viajar
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Natal faz jus ao apelido de "Cidade do Sol" — faz sol o ano inteiro! A melhor época é de{" "}
                  <strong>setembro a fevereiro</strong>, período mais seco com temperaturas entre 28°C e 32°C. De março
                  a julho chove mais, principalmente em junho, mas as chuvas costumam ser rápidas. Para os passeios de
                  mergulho nos parrachos, prefira os meses com menos vento e marés mais baixas.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" /> Gastronomia Local
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A culinária potiguar é deliciosa e variada. Prove a ginga com tapioca (peixinho frito servido na
                  tapioca), o camarão regional, a carne de sol com queijo coalho e macaxeira frita, e a caldeirada de
                  frutos do mar. Em Ponta Negra, os restaurantes servem pratos com vista para o mar. Não deixe de
                  experimentar a cocada e os sorvetes de frutas tropicais.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-28 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Pacote Aéreo Completo</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">Natal</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Temperatura média: 29°C</span>
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-lg font-semibold text-primary">Faça uma cotação</p>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>✈️ Passagem aérea ida e volta</li>
                  <li>🏨 Hospedagem com café da manhã</li>
                  <li>🚐 Traslado aeroporto/hotel</li>
                </ul>
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a
                    href="https://wa.me/5531972391400?text=Olá! Tenho interesse no pacote para Natal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar pelo WhatsApp
                  </a>
                </Button>
                <ShareWhatsAppButton
                  title="Pacote Natal — Marshe Viagens"
                  highlight=""
                  kind="destino"
                />
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Quer reservar uma data diferente? Entre em contato conosco
                  </p>
                  <OrcamentoDialog defaultDestination="Natal" />
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

export default Natal;
