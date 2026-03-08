import { MessageSquareText, Sparkles, PlaneTakeoff } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrcamentoDialog from "@/components/OrcamentoDialog";

const steps = [
  {
    icon: MessageSquareText,
    number: "01",
    title: "Solicite sua cotação",
    description: "Preencha o formulário ou fale conosco pelo WhatsApp. É rápido e sem compromisso.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Receba uma proposta personalizada",
    description: "Montamos opções alinhadas ao seu orçamento, perfil e objetivos de viagem.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: PlaneTakeoff,
    number: "03",
    title: "Confirme e viaje tranquilo",
    description: "Cuidamos de cada detalhe para você focar apenas na experiência.",
    color: "bg-yellow/10 text-yellow",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Viajar com a Marshe é <span className="text-primary">simples</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-border z-0" />
              )}
              <div className={`relative z-10 w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-9 h-9" />
              </div>
              <span className="text-xs font-bold text-primary tracking-widest mb-2 block">
                PASSO {step.number}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <OrcamentoDialog
              trigger={
                <Button variant="hero" size="lg" className="text-base px-8">
                  Solicitar Cotação Grátis
                </Button>
              }
            />
            <Button asChild variant="outline" size="lg" className="text-base px-8">
              <a href="https://wa.me/5531972391400?text=Ol%C3%A1!%20Quero%20uma%20cota%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
