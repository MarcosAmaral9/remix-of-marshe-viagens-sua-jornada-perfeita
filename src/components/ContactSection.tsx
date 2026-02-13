import { Phone, Mail, Instagram, MapPin } from "lucide-react";

const TikTokIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const contacts = [
  {
    icon: Phone,
    title: "WhatsApp",
    value: "(31) 97239-1400",
    href: "https://wa.me/5531972391400",
    color: "bg-green-500/10 text-green-600",
    isCustomIcon: false,
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "(31) 97239-1400",
    href: "tel:+5531972391400",
    color: "bg-blue-500/10 text-blue-600",
    isCustomIcon: false,
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "marshe.viagens@gmail.com",
    href: "mailto:marshe.viagens@gmail.com",
    color: "bg-primary/10 text-primary",
    isCustomIcon: false,
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@marsheviagens",
    href: "https://www.instagram.com/marsheviagens",
    color: "bg-pink-500/10 text-pink-600",
    isCustomIcon: false,
  },
  {
    icon: TikTokIcon,
    title: "TikTok",
    value: "@marshe.viagens",
    href: "https://www.tiktok.com/@marshe.viagens",
    color: "bg-foreground/10 text-foreground",
    isCustomIcon: true,
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Rua Dom Geraldo Fernandes Bijos, 375, Contagem - MG",
    href: "https://www.google.com/maps/search/?api=1&query=Rua+Dom+Geraldo+Fernandes+Bijos+375+Santa+Helena+Contagem+MG",
    color: "bg-red-500/10 text-red-600",
    isCustomIcon: false,
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            Fale Conosco
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Estamos prontos para ajudar você a planejar a viagem dos seus sonhos.
            Escolha o canal de sua preferência!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {contacts.map((contact) => {
            return (
              <a
                key={contact.title}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-6 md:p-8 bg-card rounded-2xl border border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group touch-manipulation"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-xl ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {contact.isCustomIcon ? (
                    <contact.icon />
                  ) : (
                    <contact.icon className="w-7 h-7 md:w-8 md:h-8" />
                  )}
                </div>
                <h3 className="font-bold text-base md:text-lg text-foreground mb-1 md:mb-2">
                  {contact.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm break-all">
                  {contact.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
