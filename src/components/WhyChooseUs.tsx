import { UserCheck, Gem, ShieldCheck, Eye } from "lucide-react";

const benefits = [
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Nada de respostas automáticas. Cada viagem é planejada de acordo com seu perfil, orçamento e objetivo.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Gem,
    title: "Especialistas em Milhas",
    description: "Transformamos milhas em oportunidades reais de economia e conforto para sua viagem.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: ShieldCheck,
    title: "Suporte Completo",
    description: "Acompanhamento antes, durante e após a viagem para você viajar com total tranquilidade.",
    color: "bg-yellow/10 text-yellow",
  },
  {
    icon: Eye,
    title: "Segurança e Transparência",
    description: "Informações claras, suporte acessível e compromisso com sua experiência de viagem.",
    color: "bg-purple/10 text-purple",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Por que a Marshe?
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Viajar pode ser simples quando você tem{" "}
            <span className="text-primary">especialistas</span> ao seu lado
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group text-center p-8 rounded-2xl bg-card border border-border/50 hover:shadow-card hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl ${b.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <b.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-3">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
