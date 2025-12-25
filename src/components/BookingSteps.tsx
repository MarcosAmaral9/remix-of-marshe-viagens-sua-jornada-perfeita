import { MapPin, MessageCircle, CreditCard, Plane } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Escolha seu Destino",
    description: "Navegue pelos nossos destinos e escolha o lugar dos seus sonhos para sua próxima viagem.",
    color: "bg-coral-light text-primary",
  },
  {
    icon: MessageCircle,
    title: "Entre em Contato Conosco",
    description: "Converse conosco pelo WhatsApp, Instagram ou e-mail para tirar dúvidas e personalizar sua viagem.",
    color: "bg-navy/10 text-navy",
  },
  {
    icon: CreditCard,
    title: "Realize o Pagamento",
    description: "Pagamento facilitado em até 10x no cartão ou à vista com desconto especial.",
    color: "bg-teal/10 text-teal",
  },
  {
    icon: Plane,
    title: "Embarque na Aventura",
    description: "Chegue ao aeroporto e aproveite sua viagem sem preocupações. Cuidamos de tudo!",
    color: "bg-yellow/10 text-yellow",
  },
];

const BookingSteps = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Fácil e Rápido
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Reserve sua Viagem
            <br />
            em 4 Passos Simples
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center group">
              <div className={`w-16 h-16 rounded-xl ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSteps;
