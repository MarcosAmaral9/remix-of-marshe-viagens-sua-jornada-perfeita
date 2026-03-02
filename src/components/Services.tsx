import { Plane, Hotel, Globe, Ship, Shield, Scale, MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrcamentoDialog from "@/components/OrcamentoDialog";

const services = [
  { icon: Plane, title: "Passagens Aéreas", description: "Nacionais e internacionais com as melhores tarifas.", color: "bg-primary/10 text-primary" },
  { icon: Hotel, title: "Hospedagem", description: "Hotéis, pousadas e resorts com qualidade garantida.", color: "bg-accent/10 text-accent" },
  { icon: Globe, title: "Pacotes Personalizados", description: "Roteiros sob medida para o seu perfil e orçamento.", color: "bg-yellow/10 text-yellow" },
  { icon: Ship, title: "Cruzeiros", description: "Experiências completas em alto mar com todo conforto.", color: "bg-purple/10 text-purple" },
  { icon: Shield, title: "Seguro Viagem", description: "Proteção completa para você viajar tranquilo.", color: "bg-coral-light text-primary" },
  { icon: Scale, title: "Acompanhamento Jurídico", description: "Suporte jurídico especializado para garantir seus direitos em viagens.", color: "bg-accent/10 text-accent" },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Tudo o que você precisa para viajar com <span className="text-primary">tranquilidade</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="group p-8 rounded-2xl bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-border/50">
              <div className={`w-16 h-16 rounded-xl ${s.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <s.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <OrcamentoDialog
            trigger={
              <Button variant="hero" className="gap-2">
                <FileText className="w-5 h-5" />
                Solicitar Cotação
              </Button>
            }
          />
          <Button
            variant="hero-outline"
            className="gap-2"
            onClick={() => window.open("https://wa.me/5531972391400?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista.", "_blank")}
          >
            <MessageCircle className="w-5 h-5" />
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
