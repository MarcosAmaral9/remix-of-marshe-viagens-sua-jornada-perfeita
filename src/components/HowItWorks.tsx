import { MapPin, CreditCard, Plane } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Escolha seu Destino",
    description: "Navegue pelos nossos destinos e escolha o lugar dos seus sonhos para sua próxima viagem.",
    color: "bg-coral-light text-primary",
  },
  {
    icon: CreditCard,
    title: "Realize o Pagamento",
    description: "Pagamento facilitado em até 12x no cartão ou à vista com desconto especial.",
    color: "bg-teal/10 text-teal",
  },
  {
    icon: Plane,
    title: "Embarque na Aventura",
    description: "Chegue ao aeroporto e aproveite sua viagem sem preocupações. Cuidamos de tudo!",
    color: "bg-yellow/10 text-yellow",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              Fácil e Rápido
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4 mb-12">
              Reserve sua Viagem
              <br />
              em 3 Passos Simples
            </h2>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-6 group">
                  <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Card */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-coral-light rounded-3xl -rotate-6 scale-95" />
            <div className="relative bg-card rounded-3xl p-8 shadow-card">
              <div className="aspect-video bg-muted rounded-2xl mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600" 
                  alt="Praia paradisíaca"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-foreground">Viagem para o Nordeste</h4>
                  <p className="text-muted-foreground text-sm">14-20 Jul | Família</p>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-medium text-muted-foreground">
                      {i}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-2/3 h-full bg-primary rounded-full" />
                </div>
                <span className="text-sm text-muted-foreground">67% concluído</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
