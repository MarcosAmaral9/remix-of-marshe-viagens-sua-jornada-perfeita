import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Posso parcelar minha viagem?",
      answer: "Sim! Trabalhamos com opções flexíveis de pagamento, incluindo parcelamento em até 10x no cartão de crédito, PIX e transferência bancária.",
    },
    {
      question: "Vocês oferecem suporte durante a viagem?",
      answer: "Sim. Nosso atendimento acompanha você em todas as etapas — antes, durante e após a viagem — para garantir sua tranquilidade.",
    },
    {
      question: "Posso usar minhas milhas?",
      answer: "Sim! Analisamos a melhor estratégia para maximizar seus pontos e proporcionar economia real na sua viagem.",
    },
    {
      question: "É seguro comprar online?",
      answer: "Sim. Trabalhamos com parceiros confiáveis e processos transparentes. Seus dados são protegidos e você tem suporte em cada etapa.",
    },
    {
      question: "Posso personalizar meu roteiro de viagem?",
      answer: "Claro! Oferecemos roteiros personalizados de acordo com suas preferências, orçamento e tempo disponível.",
    },
    {
      question: "Vocês atendem grupos e excursões?",
      answer: "Sim! Temos condições especiais para grupos, excursões corporativas, viagens de formatura e eventos.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg mb-3 px-6 border border-border/50 shadow-sm"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            Ainda tem dúvidas?{" "}
            <a
              href="https://wa.me/5531972391400?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida."
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              Fale conosco no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
