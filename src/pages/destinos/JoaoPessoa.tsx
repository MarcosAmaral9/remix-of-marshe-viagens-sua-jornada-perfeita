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
import img_ponta_do_seixas from "@/assets/pontos/joao-pessoa/ponta-do-seixas.jpg.asset.json";
import img_praia_de_tambaba from "@/assets/pontos/joao-pessoa/praia-de-tambaba.jpg.asset.json";
import img_centro_historico_joao_pessoa from "@/assets/pontos/joao-pessoa/centro-historico-joao-pessoa.jpg.asset.json";
import img_picaozinho from "@/assets/pontos/joao-pessoa/picaozinho.jpg.asset.json";
import img_praia_de_coqueirinho from "@/assets/pontos/joao-pessoa/praia-de-coqueirinho.jpg.asset.json";
import img_por_do_sol_jacare from "@/assets/pontos/joao-pessoa/por-do-sol-jacare.jpg.asset.json";

const JoaoPessoa = () => {
  useSeo({
    title: "Pacote João Pessoa | Marshe Viagens - Saindo de BH",
    description:
      "Pacote de viagem para João Pessoa, PB. Praias, pôr do sol do Jacaré e litoral sul. Aéreo, hospedagem e traslados.",
    canonical: "https://marsheviagens.com/destinos/joao-pessoa",
    ogParams: {
      title: "Pacote João Pessoa",
      highlight: "",
      kind: "Destino",
    },
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
                <div className="grid sm:grid-cols-2 gap-6">
                  {([
                    { name: "Ponta do Seixas", desc: "Ponto mais oriental das Américas, onde o sol nasce primeiro no continente. Farol histórico, mirante e trilha curta até a praia. Vá ao amanhecer para viver a experiência completa.", image: img_ponta_do_seixas.url },
                    { name: "Praia de Tambaba", desc: "A primeira praia oficial de naturismo do Brasil, com área mista e área exclusiva para naturistas, cercada por falésias e mata atlântica preservada. Águas mornas e cristalinas. Fica a 40 km ao sul de João Pessoa.", image: img_praia_de_tambaba.url },
                    { name: "Centro Histórico", desc: "Um dos conjuntos coloniais mais antigos do Brasil, com igrejas barrocas como São Francisco e a Igreja da Misericórdia. A cidade foi fundada em 1585 e preserva a atmosfera colonial em ruas de pedra. Ideal para caminhada guiada pela manhã.", image: img_centro_historico_joao_pessoa.url },
                    { name: "Picãozinho", desc: "Piscinas naturais a 1,5 km da costa de Tambaú, acessadas por catamarã na maré baixa. Peixes coloridos, água transparente e a sensação de estar em pleno oceano. Um dos passeios mais requisitados da cidade.", image: img_picaozinho.url },
                    { name: "Praia de Coqueirinho", desc: "Praia paradisíaca do litoral sul, com falésias coloridas, coqueirais e mar de águas mornas. Cenário quase intocado, ideal para dia inteiro de praia. Restaurantes rústicos servem frutos do mar frescos.", image: img_praia_de_coqueirinho.url },
                    { name: "Pôr do Sol na Praia do Jacaré", desc: "Tradição diária em Cabedelo: ao entardecer, o saxofonista toca o Bolero de Ravel em um barco à deriva enquanto o sol se põe sobre o rio Paraíba. Chegue com antecedência para pegar boa mesa nos bares flutuantes. Experiência inesquecível.", image: img_por_do_sol_jacare.url },
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
                  <a href="https://wa.me/5531972391400?text=Olá! Tenho interesse no pacote para João Pessoa" target="_blank" rel="noopener noreferrer">
                    Reservar pelo WhatsApp
                  </a>
                </Button>
                <ShareWhatsAppButton
                  title="Pacote João Pessoa — Marshe Viagens"
                  highlight=""
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
