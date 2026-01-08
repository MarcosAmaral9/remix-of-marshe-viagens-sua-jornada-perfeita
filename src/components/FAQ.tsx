import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Como faço para reservar um pacote de viagem?",
      answer: "É muito simples! Você pode entrar em contato conosco pelo WhatsApp, telefone ou e-mail. Nossa equipe irá apresentar as melhores opções para o seu perfil e cuidar de toda a documentação e reservas necessárias."
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos diversas formas de pagamento: cartão de crédito (em até 12x), PIX, transferência bancária e boleto. Consulte nossa equipe para condições especiais de parcelamento."
    },
    {
      question: "Com quanto tempo de antecedência devo reservar minha viagem?",
      answer: "Recomendamos reservar com pelo menos 30 dias de antecedência para viagens nacionais e 60 dias para internacionais. Isso garante melhores preços e disponibilidade. Porém, também trabalhamos com viagens de última hora!"
    },
    {
      question: "O que está incluso nos pacotes de viagem?",
      answer: "Nossos pacotes geralmente incluem hospedagem, transporte (aéreo ou terrestre), traslados e, em alguns casos, passeios e refeições. Cada pacote tem suas especificidades, que são detalhadas no momento da consulta."
    },
    {
      question: "Posso personalizar meu roteiro de viagem?",
      answer: "Sim! Oferecemos roteiros personalizados de acordo com suas preferências, orçamento e tempo disponível. Nossa equipe está preparada para montar a viagem dos seus sonhos."
    },
    {
      question: "Como funciona o seguro viagem?",
      answer: "Oferecemos seguro viagem completo que cobre assistência médica, extravio de bagagem, cancelamento de voos e muito mais. É altamente recomendado para todas as viagens e obrigatório para alguns destinos internacionais."
    },
    {
      question: "Vocês atendem grupos e excursões?",
      answer: "Sim! Temos condições especiais para grupos, excursões corporativas, viagens de formatura e eventos. Entre em contato para receber uma proposta personalizada."
    },
    {
      question: "Como posso acompanhar minha reserva?",
      answer: "Após confirmar sua reserva, você receberá todos os detalhes por e-mail e WhatsApp. Nossa equipe está sempre disponível para esclarecer dúvidas e fornecer atualizações sobre sua viagem."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-coral font-semibold text-sm uppercase tracking-wider">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mt-2 mb-4 font-serif">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira as respostas para as dúvidas mais comuns dos nossos clientes
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg mb-3 px-6 border border-border/50 shadow-sm"
              >
                <AccordionTrigger className="text-left text-navy font-medium hover:text-coral hover:no-underline">
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
              href="#contato" 
              className="text-coral font-semibold hover:underline"
            >
              Entre em contato conosco
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
