import madriParisImg from "@/assets/circuit-madri-paris.jpg";
import lisboaMadriParisImg from "@/assets/circuit-lisboa-madri-paris.jpg";
import italiaParisImg from "@/assets/circuit-italia-paris.jpg";

export interface CircuitoHotel {
  name: string;
  city: string;
  country: string;
  category: string;
}

export interface CircuitoDia {
  day: number;
  title: string;
  description: string;
}

export interface Circuito {
  slug: string;
  code: string;
  name: string;
  shortName: string;
  image: string;
  nights: number;
  departure: string;
  returnDate: string;
  pricePerPerson: string;
  passengers: string;
  language: string;
  includes: string[];
  hotels: CircuitoHotel[];
  itinerary: CircuitoDia[];
}

export const circuitosEuropa: Circuito[] = [
  {
    slug: "madri-paris-disneyland",
    code: "ST26447-Disney-Pt",
    name: "Madri e Paris visitando a Disneyland Paris",
    shortName: "Madri e Paris + Disney",
    image: madriParisImg,
    nights: 7,
    departure: "19/10/2026",
    returnDate: "26/10/2026",
    pricePerPerson: "R$ 12.600,00",
    passengers: "2 Adultos 1 Criança",
    language: "Português",
    includes: [
      "Passeios panorâmicos por Madri e Paris com guia local em espanhol/português",
      "Outros lugares comentados pelo guia: Burgos, Bordeaux e Blois",
      "Ingressos a Disneyland Park e Walt Disney Studios para 1 dia",
      "Transfer Paris – Disneyland Paris",
      "Serviço de áudio individual",
      "1 refeição",
      "Guia acompanhante em espanhol/português durante o passeio",
      "Traslados de chegada e partida do aeroporto principal",
      "Ônibus modernos equipados com as melhores medidas de segurança",
      "Seguro viagem (cobertura conforme nosso site)",
      "Serviço de assistência telefônica 24 horas",
    ],
    hotels: [
      { name: "Santos Praga", city: "Madrid", country: "Espanha", category: "Selección" },
      { name: "Rafael Atocha", city: "Madrid", country: "Espanha", category: "Selección" },
      { name: "1881 Las Ventas Hotel", city: "Madrid", country: "Espanha", category: "Selección" },
      { name: "Agumar", city: "Madrid", country: "Espanha", category: "Selección" },
      { name: "The One Hotel Chamartín Madrid", city: "Madrid", country: "Espanha", category: "Selección" },
      { name: "Mercure Bordeaux Château Chartrons", city: "Bordeaux", country: "França", category: "Selección" },
      { name: "Firstname Bordeaux Hotel", city: "Bordeaux", country: "França", category: "Selección" },
      { name: "Novotel Bordeaux Centre Gare Saint Jean", city: "Bordeaux", country: "França", category: "Selección" },
      { name: "Novotel Paris La Défense", city: "Paris", country: "França", category: "Selección" },
      { name: "Tribe Paris La Défense Esplanade", city: "Paris", country: "França", category: "Selección" },
      { name: "Maison Montmartre Hotel Paris", city: "Paris", country: "França", category: "Selección" },
      { name: "Mercure Paris La Défense 5", city: "Paris", country: "França", category: "Selección" },
    ],
    itinerary: [
      { day: 1, title: "Cidade de Origem – Madri", description: "Chegada a Madri e traslado ao hotel. Tempo livre para um primeiro contacto com esta bela cidade, desfrutar das suas gentes ou descansar numa das inúmeras esplanadas que pontilham a cidade. À noite, se desejar, poderá realizar um agradável passeio opcional pelos locais mais emblemáticos da cidade, dando-lhe a oportunidade de mergulhar na animada vida nocturna madrilena. Durante o passeio será incluída uma degustação de tapas típicas próximo à Plaza Mayor (incluída na categoria Seleção-Vi). Acomodação." },
      { day: 2, title: "Madri", description: "Café da manhã. Sairemos do hotel para fazer um passeio panorâmico pelos edifícios e monumentos mais característicos da capital de Espanha como: as Praças de Cibeles, Espanha e Netuno, Puerta del Sol, Gran Vía, Calle Mayor, a fachada da praça de touros Las Ventas, a Rua Alcalá e o Paseos del Prado e Castellana, entre outros. Você terá o resto do dia livre para explorar esta maravilhosa cidade. Se desejar, pode participar na excursão opcional a Toledo, declarada Património Mundial pela UNESCO. Faremos um passeio de ônibus pelo perímetro da cidade, de onde teremos uma esplêndida visão geral do seu patrimônio artístico. Depois percorreremos as suas ruas e praças mais emblemáticas, incluindo a entrada para o interior da Catedral. Voltar para o hotel. À noite, poderá opcionalmente assistir a um tablao de flamenco (incluída na categoria Seleção-Vi). Acomodação." },
      { day: 3, title: "Madri – Burgos – Bordeaux", description: "Após o café da manhã partiremos para terras castelhanas, atravessando o Sistema Central, para chegar a Burgos, declarada Património Mundial pela UNESCO. Foi a antiga capital de Castela desde 1236. Tempo livre para visitar seu centro histórico, onde se destaca a catedral de Santa María La Mayor, do século 13. Continuaremos a viagem pelo País Basco e a reserva natural das Landes, até chegarmos a Bordeaux, capital da região francesa da Aquitânia, famosa pelos seus excelentes vinhos. Jantar e acomodação." },
      { day: 4, title: "Bordeaux – Blois – Paris", description: 'Após o café da manhã partiremos para o Vale do Loire, casa de Leonardo da Vinci e onde estão localizados os famosos castelos do Renascimento francês. Faremos uma parada em Blois onde teremos tempo livre para visitar lugares como o seu castelo, a igreja de São Nicolau ou a catedral de Saint-Louis. Chegada a Paris e tempo livre. Se desejar, terá a possibilidade de realizar a visita opcional "Iluminações de Paris" (incluída na categoria Seleção-Vi). Acomodação.' },
      { day: 5, title: "Paris", description: "Café da manhã. Pela manhã partiremos para um passeio panorâmico com guia local: Place de la Concorde, Ópera, Champs Élysées, Arco do Triunfo, Saint Germain, as grandes avenidas, etc. Tempo livre para visitas opcionais como o passeio de barco pelo Sena e o Quartier Latin a bordo do famoso Bateaux Mouche. Acomodação." },
      { day: 6, title: "Paris", description: "Café da manhã. Dia livre. Excursão opcional ao Palácio de Versalhes (incluída na categoria Seleção-Vi), com seus maravilhosos jardins, a Galeria dos Espelhos, a capela real e as salas privadas. À tarde, visita opcional a Montmartre, o bairro boêmio com a Basílica do Sagrado Coração. Acomodação." },
      { day: 7, title: "Paris – Disneyland Paris – Paris", description: "Café da manhã. Traslado para Disneyland Paris, com entrada incluída nos 2 parques temáticos: Disneyland Park, o mais clássico com todos os personagens da Disney e atrações variadas, e Disney Adventure World com efeitos especiais impressionantes, o mundo de Toy Story e a Torre do Terror. Retorno ao hotel por conta própria. Acomodação." },
      { day: 8, title: "Paris – Cidade de Origem", description: "Café da manhã. Tempo livre até a hora indicada para traslado ao aeroporto para embarque no voo com destino à cidade de destino. Fim dos nossos serviços." },
    ],
  },
  {
    slug: "lisboa-madri-paris-disneyland",
    code: "ST26445-Disney-Pt",
    name: "Lisboa, Madri e Paris visitando a Disneyland Paris",
    shortName: "Lisboa, Madri e Paris + Disney",
    image: lisboaMadriParisImg,
    nights: 9,
    departure: "17/10/2026",
    returnDate: "26/10/2026",
    pricePerPerson: "R$ 15.600,00",
    passengers: "2 Adultos 1 Criança",
    language: "Português",
    includes: [
      "Passeios panorâmicos por Lisboa, Madri e Paris com guia local em espanhol/português",
      "Outros lugares comentados pelo guia: Mérida, Burgos, Bordeaux e Blois",
      "Ingressos a Disneyland Park e Walt Disney Studios para 1 dia",
      "Transfer Paris – Disneyland Paris",
      "Serviço de áudio individual",
      "1 refeição",
      "Guia acompanhante em espanhol/português durante o passeio",
      "Traslados de chegada e partida do aeroporto principal",
      "Ônibus modernos equipados com as melhores medidas de segurança",
      "Seguro viagem (cobertura conforme nosso site)",
      "Serviço de assistência telefônica 24 horas",
    ],
    hotels: [
      { name: "VIP Executive Entrecampos", city: "Lisboa", country: "Portugal", category: "Selección" },
      { name: "Sana Metropolitan", city: "Lisboa", country: "Portugal", category: "Selección" },
      { name: "Roma Lisboa Hotel", city: "Lisboa", country: "Portugal", category: "Selección" },
      { name: "Lutecia Smart Design", city: "Lisboa", country: "Portugal", category: "Selección" },
      { name: "Santos Praga", city: "Madrid", country: "Espanha", category: "Selección" },
      { name: "Rafael Atocha", city: "Madrid", country: "Espanha", category: "Selección" },
      { name: "1881 Las Ventas Hotel", city: "Madrid", country: "Espanha", category: "Selección" },
      { name: "Agumar", city: "Madrid", country: "Espanha", category: "Selección" },
      { name: "The One Hotel Chamartín Madrid", city: "Madrid", country: "Espanha", category: "Selección" },
      { name: "Mercure Bordeaux Château Chartrons", city: "Bordeaux", country: "França", category: "Selección" },
      { name: "Firstname Bordeaux Hotel", city: "Bordeaux", country: "França", category: "Selección" },
      { name: "Novotel Bordeaux Centre Gare Saint Jean", city: "Bordeaux", country: "França", category: "Selección" },
      { name: "Novotel Paris La Défense", city: "Paris", country: "França", category: "Selección" },
      { name: "Tribe Paris La Défense Esplanade", city: "Paris", country: "França", category: "Selección" },
      { name: "Maison Montmartre Hotel Paris", city: "Paris", country: "França", category: "Selección" },
      { name: "Mercure Paris La Défense 5", city: "Paris", country: "França", category: "Selección" },
    ],
    itinerary: [
      { day: 1, title: "Cidade de Origem – Lisboa", description: "Chegada a Lisboa e transfer para o hotel. Tempo livre para desfrutar da capital portuguesa. Acomodação." },
      { day: 2, title: "Lisboa", description: "Café da manhã. Passeio panorâmico pela cidade: Parque de Eduardo VII, Praça do Marquês de Pombal, Avenida da Liberdade, praças dos Restauradores e do Rossio, monumento dos Descobridores, Torre de Belém e Mosteiro dos Jerónimos. Tarde livre ou excursão opcional à Costa de Lisboa com visita a Cascais e ao Palácio Nacional de Sintra, Património Mundial da UNESCO. Acomodação." },
      { day: 3, title: "Lisboa – Mérida – Madri", description: "Café da manhã e saída para Mérida, fundada por Otávio Augusto em 25 a.C. e declarada Património Mundial pela UNESCO. Tempo livre para conhecer o legado romano, incluindo o teatro com excelente acústica. Continuação para Madri. À noite, passeio opcional com degustação de tapas próximo à Plaza Mayor (incluída na categoria Seleção-Vi). Acomodação." },
      { day: 4, title: "Madri", description: "Café da manhã. Passeio panorâmico pelos edifícios e monumentos mais característicos: Praças de Cibeles, Espanha e Netuno, Puerta del Sol, Gran Vía, Las Ventas, Rua Alcalá, Paseos del Prado e Castellana. Excursão opcional a Toledo, Património Mundial pela UNESCO. À noite, tablao de flamenco opcional (incluída na categoria Seleção-Vi). Acomodação." },
      { day: 5, title: "Madri – Burgos – Bordeaux", description: "Após café da manhã, partida para Burgos, Património Mundial pela UNESCO, com destaque para a catedral de Santa María La Mayor do século 13. Continuação pelo País Basco e reserva natural das Landes até Bordeaux, famosa pelos seus excelentes vinhos. Jantar e acomodação." },
      { day: 6, title: "Bordeaux – Blois – Paris", description: 'Café da manhã e partida para o Vale do Loire com parada em Blois. Chegada a Paris e tempo livre. Visita opcional "Iluminações de Paris" (incluída na categoria Seleção-Vi). Acomodação.' },
      { day: 7, title: "Paris", description: "Café da manhã. Passeio panorâmico com guia local: Place de la Concorde, Ópera, Champs Élysées, Arco do Triunfo, Saint Germain. Visita opcional de barco pelo Sena e Quartier Latin. Acomodação." },
      { day: 8, title: "Paris", description: "Café da manhã. Dia livre. Excursão opcional ao Palácio de Versalhes (incluída na categoria Seleção-Vi). À tarde, visita opcional a Montmartre com a Basílica do Sagrado Coração. Acomodação." },
      { day: 9, title: "Paris – Disneyland Paris – Paris", description: "Café da manhã. Traslado para Disneyland Paris com entrada nos 2 parques temáticos: Disneyland Park e Disney Adventure World. Retorno ao hotel por conta própria. Acomodação." },
      { day: 10, title: "Paris – Cidade de Origem", description: "Café da manhã. Tempo livre até traslado ao aeroporto. Fim dos nossos serviços." },
    ],
  },
  {
    slug: "italia-turistica-paris-disneyland",
    code: "ST26084Cl-Disney",
    name: "Itália Turística e Paris visitando Disneyland Paris",
    shortName: "Itália e Paris + Disney",
    image: italiaParisImg,
    nights: 10,
    departure: "16/10/2026",
    returnDate: "26/10/2026",
    pricePerPerson: "R$ 16.300,00",
    passengers: "2 Adultos 1 Criança",
    language: "Espanhol",
    includes: [
      "Passeios panorâmicos por Roma, Florença e Paris com guia local",
      "Outros lugares comentados pelo guia: Veneza, Milão e Zurique",
      "Passeio panorâmico de barco em Veneza",
      "Visita a uma fábrica de vidros de Murano",
      "Ingressos a Disneyland Park e Walt Disney Studios para 1 dia",
      "Transfer Paris – Disneyland Paris",
      "Serviço de áudio individual",
      "Guia acompanhante em espanhol durante o passeio",
      "Traslados de chegada e partida do aeroporto principal",
      "Ônibus modernos equipados com as melhores medidas de segurança",
      "Seguro viagem (cobertura conforme nosso site)",
      "Serviço de assistência telefônica 24 horas",
    ],
    hotels: [
      { name: "The Brand Roma", city: "Roma", country: "Itália", category: "Clásico" },
      { name: "Black Hotel", city: "Roma", country: "Itália", category: "Clásico" },
      { name: "Pineta Palace Roma", city: "Roma", country: "Itália", category: "Clásico" },
      { name: "Ibis Firenze Nord", city: "Florença", country: "Itália", category: "Clásico" },
      { name: "The Gate Florencia", city: "Florença", country: "Itália", category: "Clásico" },
      { name: "Alexander Palace Abano", city: "Veneza", country: "Itália", category: "Clásico" },
      { name: "Da Poppi", city: "Veneza", country: "Itália", category: "Clásico" },
      { name: "B&B Padova", city: "Pádua", country: "Itália", category: "Clásico" },
      { name: "B&B Hotel Zurich East Wallisellen", city: "Zurique", country: "Suíça", category: "Clásico" },
      { name: "B&B Zurich Airport Rumlang", city: "Zurique", country: "Suíça", category: "Clásico" },
      { name: "Ibis Paris La Villette Cité des Sciences", city: "Paris", country: "França", category: "Clásico" },
      { name: "Campanile Paris La Villette", city: "Paris", country: "França", category: "Clásico" },
      { name: "Ibis Paris Issy Les Moulineaux Val de Seine", city: "Paris", country: "França", category: "Clásico" },
    ],
    itinerary: [
      { day: 1, title: "Cidade de Origem – Roma", description: "Chegada a Roma e traslado ao hotel. Acomodação." },
      { day: 2, title: "Roma", description: "Café da manhã. Manhã livre. Excursão opcional aos Museus do Vaticano e Capela Sistina (incluída na categoria Clássico-Vi). Passeio panorâmico por Roma: Cidade do Vaticano, Castel Sant'Angelo, Ilha Tiberina, Boca da Verdade, Circo Máximo, Termas de Caracalla, Basílicas de São João de Latrão e Santa Maria Maggiore, Via Vêneto e Villa Borghese. Acomodação." },
      { day: 3, title: "Roma", description: 'Café da manhã. Dia livre. Excursão opcional de dia inteiro "Nápoles e Capri". Passeio panorâmico por Nápoles com vista do Monte Vesúvio, Piazza del Plebiscito, Galeria Umberto I e Teatro San Carlo. Barco para a ilha de Capri com passeio de barco pelas grutas e falésias. Acomodação.' },
      { day: 4, title: "Roma – Florença", description: 'Café da manhã e saída para Florença, berço do Renascimento. Passeio panorâmico: Duomo de Santa María del Fiore com cúpula de Brunelleschi, torre sineira de Giotto, Batistério com as Portas do Paraíso, Ponte Vecchio e Piazza della Signoria. Excursão opcional "Santa Croce e Florença medieval" com túmulos de Galileu, Michelangelo e Maquiavel. Acomodação.' },
      { day: 5, title: "Florença – Veneza – Região do Vêneto", description: 'Café da manhã e saída para Veneza. Passeio panorâmico de barco com vista de Santa Maria della Salute e ilha de San Giorgio. Visita ao Palácio Ducal (exterior), Praça de São Marcos e fábrica de vidro de Murano. Excursão opcional "Gôndolas com Veneza Escondida". Acomodação.' },
      { day: 6, title: "Região do Vêneto – Milão – Zurique", description: "Café da manhã e viagem pela Itália continental. Tempo livre em Milão para descobrir o Castello Sforzesco, Galeria Vittorio Emmanuele e o Duomo. Continuação pela fronteira suíça, passando pelo cantão do Ticino até Zurique, centro financeiro da Suíça. Acomodação." },
      { day: 7, title: "Zurique – Paris", description: 'Café da manhã e saída para Paris, atravessando a Alsácia e La Bourgogne. Visita opcional "Iluminações de Paris" à noite. Acomodação.' },
      { day: 8, title: "Paris", description: "Café da manhã. Passeio panorâmico com guia local: Place de la Concorde, Ópera, Champs Élysées, Arco do Triunfo, Saint Germain. Visita opcional de barco pelo Sena e Quartier Latin a bordo do Bateaux Mouche. Acomodação." },
      { day: 9, title: "Paris", description: "Café da manhã. Dia livre. Excursão opcional ao Palácio de Versalhes. À tarde, visita opcional a Montmartre com a Basílica do Sagrado Coração. Acomodação." },
      { day: 10, title: "Paris – Disneyland Paris", description: "Café da manhã. Traslado para Disneyland Paris com entrada nos 2 parques temáticos: Disneyland Park e Disney Adventure World. Retorno ao hotel por conta própria. Acomodação." },
      { day: 11, title: "Paris – Cidade de Origem", description: "Café da manhã. Tempo livre até traslado ao aeroporto. Fim dos nossos serviços." },
    ],
  },
];

export const paymentInfo = {
  methods: [
    "Cartão de crédito: 10x nos cartões (sujeito à aprovação de crédito)",
    "Boleto: Entrada + 9 vezes (sujeito à aprovação de crédito)",
    "Taxas de embarque nacionais e internacionais devem ser pagas na primeira parcela",
    "À vista: 3% de desconto (desconto não incide sobre taxas)",
  ],
  notes: [
    "Vendas internacionais estão sujeitas ao câmbio da data do pagamento da reserva",
    "Hotéis internacionais podem cobrar taxas adicionais (Resort Fee) a serem pagas localmente",
    "Hotel em período de multa, tarifa somente confirma após pagamento",
    "Circuitos: consulte condições gerais do fornecedor do circuito",
    "Caso o pagamento não seja efetuado dentro do prazo, a reserva será automaticamente cancelada",
    "Bloqueios e fretamentos: bilhete aéreo são tarifas não reembolsáveis",
  ],
  observations: [
    "A reserva dos serviços só será feita após o aceite do orçamento com os dados dos passageiros",
    "Reserva não garante tarifa",
    "Preços sujeitos a disponibilidade e alteração sem aviso prévio",
    "Não nos responsabilizamos por erros de bilhetes não conferidos no mesmo dia",
  ],
};
