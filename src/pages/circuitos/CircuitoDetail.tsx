import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useSeo } from "@/hooks/use-seo";
import { ArrowLeft, Calendar, Moon, Users, Globe, Check, Hotel, MapPin, CreditCard, AlertTriangle, Info } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import OrcamentoDialog from "@/components/OrcamentoDialog";
import { circuitosEuropa, paymentInfo } from "@/data/circuitos";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CircuitoDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const circuit = circuitosEuropa.find((c) => c.slug === slug);

  if (!circuit) return <Navigate to="/circuitos/europa" replace />;

  useSeo({
    title: `${circuit.name} | Marshe Viagens`,
    description: `Circuito ${circuit.name}. ${circuit.nights} noites a partir de ${circuit.pricePerPerson} por pessoa. Roteiro completo com guia, hospedagem e Disneyland Paris.`,
    canonical: `https://marsheviagens.com/circuitos/europa/${circuit.slug}`,
  });

  // Group hotels by city
  const hotelsByCity = circuit.hotels.reduce((acc, hotel) => {
    const key = `${hotel.city}, ${hotel.country}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(hotel);
    return acc;
  }, {} as Record<string, typeof circuit.hotels>);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
          <img src={circuit.image} alt={circuit.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <Link to="/circuitos/europa" className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4">
                <ArrowLeft className="w-4 h-4" /> Circuitos Europa
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground leading-tight">
                {circuit.name}
              </h1>
              <div className="flex flex-wrap gap-4 mt-4 text-primary-foreground/90 text-sm">
                <span className="flex items-center gap-1.5"><Moon className="w-4 h-4" /> {circuit.nights} noites</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {circuit.departure} a {circuit.returnDate}</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {circuit.passengers}</span>
                <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> Guia em {circuit.language}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Price bar */}
        <section className="bg-primary text-primary-foreground py-4">
          <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-sm opacity-80">A partir de</span>
              <span className="text-2xl font-bold ml-2">{circuit.pricePerPerson}</span>
              <span className="text-sm opacity-80 ml-1">por pessoa, sujeito a reajuste</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="hero-outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a
                  href={`https://wa.me/5531972391400?text=Olá! Tenho interesse no circuito ${circuit.name} (${circuit.departure} a ${circuit.returnDate})`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar pelo WhatsApp
                </a>
              </Button>
              <OrcamentoDialog
                defaultDestination={`Circuito ${circuit.name.includes("Itália") ? "Itália e Paris com Disneyland" : circuit.name.includes("Lisboa") ? "Lisboa, Madri e Paris com Disneyland" : "Madri e Paris com Disneyland"}`}
                trigger={
                  <Button
                    variant="hero-outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Solicitar Orçamento
                  </Button>
                }
              />
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 lg:py-16">
          {/* What's included */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
              <Check className="w-6 h-6 text-primary" /> O que está incluído
            </h2>
            <div className="grid md:grid-cols-2 gap-3">
              {circuit.includes.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-muted/50 rounded-lg p-4">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" /> Roteiro Dia a Dia
            </h2>
            <Accordion type="single" collapsible className="space-y-2">
              {circuit.itinerary.map((day) => (
                <AccordionItem key={day.day} value={`day-${day.day}`} className="bg-card border border-border rounded-xl px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3 text-left">
                      <span className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                        {day.day}
                      </span>
                      <span className="font-semibold text-foreground">{day.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pl-[52px]">
                    <p className="text-muted-foreground leading-relaxed text-sm">{day.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Hotels */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
              <Hotel className="w-6 h-6 text-primary" /> Possíveis Hotéis
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(hotelsByCity).map(([city, hotels]) => (
                <div key={city} className="bg-card border border-border rounded-xl p-5">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" /> {city}
                  </h3>
                  <ul className="space-y-2">
                    {hotels.map((hotel, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                        {hotel.name}
                        <span className="text-xs bg-muted px-2 py-0.5 rounded-full ml-auto shrink-0">{hotel.category}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Payment & Info */}
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-primary" /> Informações Gerais
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Formas de Pagamento</h3>
                <ul className="space-y-3">
                  {paymentInfo.methods.map((m, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-primary" /> Importante
                </h3>
                <ul className="space-y-3">
                  {paymentInfo.notes.map((n, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <Info className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {n}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 mt-6">
              <h3 className="font-semibold text-foreground mb-4">Observações</h3>
              <ul className="space-y-2">
                {paymentInfo.observations.map((o, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" /> {o}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-10">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-3">Interessado neste circuito?</h2>
            <p className="text-muted-foreground mb-6">Entre em contato conosco para solicitar um orçamento personalizado.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <a
                  href={`https://wa.me/5531972391400?text=Olá! Tenho interesse no circuito ${circuit.name} (${circuit.departure} a ${circuit.returnDate})`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reservar pelo WhatsApp
                </a>
              </Button>
              <OrcamentoDialog
                defaultDestination={`Circuito ${circuit.name.includes("Itália") ? "Itália e Paris com Disneyland" : circuit.name.includes("Lisboa") ? "Lisboa, Madri e Paris com Disneyland" : "Madri e Paris com Disneyland"}`}
                trigger={
                  <Button variant="outline" className="gap-2">
                    Solicitar Orçamento
                  </Button>
                }
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4">Quer reservar uma data diferente? Entre em contato conosco</p>
          </section>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CircuitoDetail;
