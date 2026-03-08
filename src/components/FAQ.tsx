import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import OrcamentoDialog from "@/components/OrcamentoDialog";

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
    {
      question: "Qual a antecedência ideal para reservar minha viagem?",
      answer: "Recomendamos reservar com 3 a 6 meses de antecedência para garantir melhores tarifas e disponibilidade. Porém, também atendemos viagens de última hora!",
    },
    {
      question: "O que está incluso nos pacotes de viagem?",
      answer: "Nossos pacotes geralmente incluem passagens aéreas, hospedagem com café da manhã e traslados. Passeios e seguro viagem podem ser adicionados conforme sua preferência.",
    },
    {
      question: "Vocês oferecem seguro viagem?",
      answer: "Sim! Oferecemos seguros completos que cobrem assistência médica, extravio de bagagem, cancelamento de voo e muito mais.",
    },
    {
      question: "Como funciona o acompanhamento jurídico?",
      answer: "Contamos com suporte jurídico especializado para auxiliar em casos de cancelamentos, atrasos, overbooking e outros imprevistos, garantindo seus direitos como consumidor.",
    },
    {
      question: "Vocês trabalham com destinos internacionais?",
      answer: "Sim! Além dos destinos nacionais, oferecemos circuitos completos pela Europa com guia em português, hospedagem e traslados inclusos.",
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
                className="bg-card rounded-lg mb-3 px-6 border border-border/50 shadow-sm"
              >
                <AccordionTrigger className="text-left text-card-foreground font-medium hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 bg-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-serif font-bold text-foreground mb-2">
            Não encontrou o que procurava?
          </h3>
          <p className="text-muted-foreground mb-6">
            Nossa equipe está pronta para tirar todas as suas dúvidas e montar o roteiro perfeito para você.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/5531972391400?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20os%20pacotes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg rounded-lg px-6 py-3 font-semibold transition-all"
            >
              Falar no WhatsApp
            </a>
            <OrcamentoDialog
              trigger={
                <span className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary/5 rounded-lg px-6 py-3 font-semibold transition-all cursor-pointer">
                  Solicitar Orçamento
                </span>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
