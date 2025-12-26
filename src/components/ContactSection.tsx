import { Phone, Mail, Instagram } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    title: "WhatsApp",
    value: "(31) 97239-1400",
    href: "https://wa.me/5531972391400",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "marshe.viagens@gmail.com",
    href: "mailto:marshe.viagens@gmail.com",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@marsheviagens",
    href: "https://www.instagram.com/marsheviagens",
    color: "bg-pink-500/10 text-pink-600",
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

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contacts.map((contact) => (
            <a
              key={contact.title}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-8 bg-card rounded-2xl border border-border hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-xl ${contact.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <contact.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">
                {contact.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
