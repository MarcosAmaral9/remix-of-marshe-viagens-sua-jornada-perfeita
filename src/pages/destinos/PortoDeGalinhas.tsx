import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { MapPin, Calendar, Sun, Thermometer, UtensilsCrossed, Camera, ArrowLeft } from "lucide-react";
import OrcamentoDialog from "@/components/OrcamentoDialog";
import ShareWhatsAppButton from "@/components/ShareWhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/dest-porto-de-galinhas.jpg";
import img_piscinas_naturais_porto from "@/assets/pontos/porto-de-galinhas/piscinas-naturais-porto.jpg.asset.json";
import img_praia_de_muro_alto from "@/assets/pontos/porto-de-galinhas/praia-de-muro-alto.jpg.asset.json";
import img_praia_de_maracaipe from "@/assets/pontos/porto-de-galinhas/praia-de-maracaipe.jpg.asset.json";

const PortoDeGalinhas = () => {
  useSeo({
    title: "Pacote Porto de Galinhas | Marshe Viagens - Saindo de BH",
    description:
      "Pacote de viagem para Porto de Galinhas, PE. Piscinas naturais, Muro Alto e praias paradisíacas. Aéreo, hospedagem e traslados.",
    canonical: "https://marsheviagens.com/destinos/porto-de-galinhas",
    ogParams: {
      title: "Pacote Porto de Galinhas",
      highlight: "",
      kind: "Destino",
    },
  });
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={heroImg} alt="Porto de Galinhas" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-0 right-0 container mx-auto px-4">
            <Link
              to="/destinos/nordeste"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Nordeste
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Porto de Galinhas</h1>
            <div className="flex items-center gap-2 text-primary-foreground/90 mt-2">
              <MapPin className="w-4 h-4" /> Pernambuco, Brasil
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 lg:py-20">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Sobre o Destino</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Porto de Galinhas, em Ipojuca (PE), é eleita repetidamente como a melhor praia do Brasil. Suas famosas
                  piscinas naturais de águas cristalinas, formadas por recifes de coral, são o cartão-postal do destino.
                  Com jangadas coloridas, vilarejos charmosos e uma infraestrutura turística completa, é o lugar
                  perfeito para casais, famílias e grupos de amigos em busca de sol, mar e diversão.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" /> Pontos Turísticos Imperdíveis
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {([
                    { name: "Piscinas Naturais", desc: "O passeio-símbolo de Porto: jangadas coloridas levam os visitantes até piscinas naturais formadas por recifes na maré baixa, com peixes tropicais bem próximos. Água morna e transparente. Verifique a tábua das marés antes.", image: img_piscinas_naturais_porto.url },
                    { name: "Praia de Muro Alto", desc: "Praia com extensa piscina natural formada por uma barreira de arrecifes, com mar sem ondas por 3 km de extensão. Ideal para famílias com crianças. Cercada por resorts de alto padrão.", image: img_praia_de_muro_alto.url },
                    { name: "Passeio de Jangada", desc: "Passeio tradicional pelas piscinas naturais no meio do mar, com parada para banho e mergulho. As jangadas coloridas são símbolo do destino. Reserve com antecedência na alta temporada.", image: heroImg },
                    { name: "Praia de Maracaípe", desc: "Praia mais preservada e rústica, com coqueiros, mar aberto e ondas boas para surfistas. Menos movimentada que a praia central. Restaurantes pé na areia servem lagosta grelhada e caipirinhas.", image: img_praia_de_maracaipe.url },
                    { name: "Vila de Porto de Galinhas", desc: "Vila central com ruas fechadas para pedestres, lojinhas de artesanato, restaurantes e vida noturna descontraída. Ambiente charmoso ao entardecer. Base ideal de hospedagem.", image: heroImg },
                    { name: "Pontal de Maracaípe", desc: "Encontro do rio Maracaípe com o mar, com passeios de jangada para ver cavalos-marinhos em seu habitat natural. Programa ecológico e educativo. Preservação leva a sério — siga as regras.", image: heroImg },
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
                  A melhor época para visitar Porto de Galinhas é de <strong>setembro a março</strong>, quando o sol
                  brilha intensamente e as chuvas são raras. Para aproveitar as piscinas naturais, é fundamental
                  consultar a tábua de marés — elas só aparecem na maré baixa. Os meses de outubro a fevereiro oferecem
                  as melhores condições de maré e clima.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <UtensilsCrossed className="w-5 h-5 text-primary" /> Gastronomia Local
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A culinária de Porto de Galinhas é dominada pelos frutos do mar fresquíssimos. Experimente a lagosta
                  grelhada, o camarão ao molho, o peixe na folha de bananeira e a moqueca pernambucana. A vila tem
                  restaurantes para todos os bolsos, desde quiosques na praia até bistrôs sofisticados. Não deixe de
                  provar a cocada e os sucos de frutas tropicais.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-2xl shadow-card p-6 sticky top-28 space-y-6">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Pacote Aéreo Completo</span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">Porto de Galinhas</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Temperatura média: 28°C</span>
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
                    href="https://wa.me/5531972391400?text=Olá! Tenho interesse no pacote para Porto de Galinhas"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar pelo WhatsApp
                  </a>
                </Button>
                <ShareWhatsAppButton
                  title="Pacote Porto de Galinhas — Marshe Viagens"
                  highlight=""
                  kind="destino"
                />
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Quer reservar uma data diferente? Entre em contato conosco
                  </p>
                  <OrcamentoDialog defaultDestination="Porto de Galinhas" />
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

export default PortoDeGalinhas;
