import { Plane, Bus, Building, Palmtree, Package, Scale } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Passagens Aéreas",
    description: "As melhores tarifas para voos nacionais e internacionais com as principais companhias aéreas.",
    color: "bg-coral-light text-primary",
  },
  {
    icon: Bus,
    title: "Passagens Rodoviárias",
    description: "Viagens de ônibus com conforto e segurança para diversos destinos do Brasil.",
    color: "bg-teal/10 text-teal",
  },
  {
    icon: Building,
    title: "Hospedagens",
    description: "Hotéis, pousadas e apartamentos selecionados para garantir seu conforto.",
    color: "bg-yellow/10 text-yellow",
  },
  {
    icon: Palmtree,
    title: "Resorts",
    description: "Experiências all-inclusive em resorts paradisíacos com toda a estrutura de lazer.",
    color: "bg-purple/10 text-purple",
  },
  {
    icon: Package,
    title: "Pacotes Completos",
    description: "Viagens completas com passagens, hospedagem e passeios inclusos.",
    color: "bg-coral-light text-primary",
  },
  {
    icon: Scale,
    title: "Acompanhamento Jurídico",
    description: "Suporte jurídico especializado para garantir seus direitos em viagens.",
    color: "bg-teal/10 text-teal",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Oferecemos os Melhores Serviços
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
