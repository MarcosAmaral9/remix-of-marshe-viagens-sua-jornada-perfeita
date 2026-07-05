import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { MapPin, Calendar, Sun, Thermometer, UtensilsCrossed, Camera, ArrowLeft } from "lucide-react";
import OrcamentoDialog from "@/components/OrcamentoDialog";
import ShareWhatsAppButton from "@/components/ShareWhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/dest-porto-seguro.jpg";
import img_passarela_do_alcool from "@/assets/pontos/porto-seguro/passarela-do-alcool.jpg.asset.json";
import img_arraial_dajuda from "@/assets/pontos/porto-seguro/arraial-dajuda.jpg.asset.json";
import img_trancoso from "@/assets/pontos/porto-seguro/trancoso.jpg.asset.json";

const PortoSeguro = () => {
  useSeo({
    title: "Pacote Porto Seguro | Marshe Viagens - Saindo de BH",
    description:
      "Pacote de viagem para Porto Seguro, BA. Arraial d'Ajuda, Trancoso e Passarela do Álcool. Aéreo, hospedagem e traslados.",
    canonical: "https://marsheviagens.com/destinos/porto-seguro",
    ogParams: {
      title: "Pacote Porto Seguro",
      highlight: "",
      kind: "Destino",
    },
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
                <div className="grid sm:grid-cols-2 gap-6">
                  {([
                    { name: "Passarela do Álcool", desc: "Calçadão à beira-mar com barracas de artesanato, quiosques e as famosas 'passarelas' onde se prova caipirinhas de todos os sabores. Anima-se após o pôr do sol. Ambiente turístico, ideal para primeira noite.", image: img_passarela_do_alcool.url },
                    { name: "Arraial d'Ajuda", desc: "Vila charmosa do outro lado do rio Buranhém (acesso por balsa), com ruas de chão batido, Broadway movimentada e praias belíssimas como Mucugê e Pitinga. Vida noturna descontraída. Bate-volta de meio-dia.", image: img_arraial_dajuda.url },
                    { name: "Trancoso", desc: "O famoso 'Quadrado' de Trancoso é um dos cenários mais desejados do Brasil: gramado central, casas coloridas e a Igreja de São João Batista. Praias de tirar o fôlego. Destino chique com ótimos restaurantes.", image: img_trancoso.url },
                    { name: "Recife de Fora", desc: "Parque marinho a 9 km da costa com piscinas naturais e recifes de coral vivos. Mergulho monitorado, com número limitado de visitantes por dia. Um dos passeios mais completos da região.", image: heroImg },
                    { name: "Centro Histórico (Cidade Alta)", desc: "Marco Zero do descobrimento do Brasil, com igrejas do século XVI, marco de posse e vista panorâmica da costa. Museu do Descobrimento vale a visita. Acesso por escadaria ou carro.", image: heroImg },
                    { name: "Praia de Taperapuã", desc: "Praia com barracas famosas (Axé Moi, Barramares), luaus, aulas de dança e ambiente animado durante o dia todo. Cardápio farto de frutos do mar. Ideal para curtir com grupo.", image: heroImg },
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
                    <Thermometer className="w-4 h-4 text-primary" />
                    <span>Temperatura média: 27°C</span>
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
                    href="https://wa.me/5531972391400?text=Olá! Tenho interesse no pacote para Porto Seguro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar pelo WhatsApp
                  </a>
                </Button>
                <ShareWhatsAppButton
                  title="Pacote Porto Seguro — Marshe Viagens"
                  highlight=""
                  kind="destino"
                />
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
