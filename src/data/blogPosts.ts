import portoDeGalinhasImg from "@/assets/dest-porto-de-galinhas.jpg";
import gramadoImg from "@/assets/dest-gramado.jpg";
import malaPraiaImg from "@/assets/blog-mala-praia.jpg";
import salvadorImg from "@/assets/dest-salvador.jpg";
import economizarImg from "@/assets/blog-economizar-nordeste.jpg";
import fozImg from "@/assets/dest-foz-do-iguacu.jpg";
import natalImg from "@/assets/dest-natal.jpg";
import documentosImg from "@/assets/blog-documentos-viagem.jpg";
import joaoPessoaImg from "@/assets/dest-joao-pessoa.jpg";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "guias" | "dicas" | "roteiros";
  categoryLabel: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  metaDescription: string;
}

export const categories = [
  { value: "todos", label: "Todos" },
  { value: "guias", label: "Guias de Destinos" },
  { value: "dicas", label: "Dicas de Viagem" },
  { value: "roteiros", label: "Roteiros" },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "guia-completo-porto-de-galinhas",
    title: "Guia Completo de Porto de Galinhas: O Que Fazer, Onde Comer e Melhor Época",
    excerpt: "Descubra tudo sobre Porto de Galinhas: das piscinas naturais aos melhores restaurantes. Um guia completo para planejar sua viagem perfeita ao paraíso pernambucano.",
    content: `
## Por que visitar Porto de Galinhas?

Porto de Galinhas é um dos destinos mais procurados do Nordeste brasileiro, e não é por acaso. Com suas **piscinas naturais de águas cristalinas**, praias de areia branca e uma infraestrutura turística completa, o destino encanta viajantes de todo o Brasil.

Localizada no município de Ipojuca, a cerca de 60 km de Recife, Porto de Galinhas foi eleita diversas vezes como a **melhor praia do Brasil** pela revista Viagem e Turismo.

## O que fazer em Porto de Galinhas

### 1. Piscinas Naturais
O principal atrativo de Porto de Galinhas são as **piscinas naturais** formadas pelos recifes de coral. O passeio de jangada até as piscinas é obrigatório e custa em média R$ 40 por pessoa. A melhor época para visitá-las é durante a maré baixa.

### 2. Praia de Muro Alto
Considerada uma das praias mais bonitas da região, **Muro Alto** possui uma extensa barreira de recifes que forma uma enorme piscina natural de águas calmas — perfeita para famílias com crianças.

### 3. Praia dos Carneiros
A cerca de 50 km ao sul, a **Praia dos Carneiros** é um verdadeiro paraíso com sua igrejinha à beira-mar, coqueirais e águas transparentes. Um passeio de catamarã é a melhor forma de conhecer.

### 4. Projeto Hippocampus
Para quem gosta de natureza, o **Projeto Hippocampus** é uma visita imperdível. Dedicado à preservação dos cavalos-marinhos, o projeto oferece visitas guiadas educativas.

## Onde comer

- **Beijupirá** — Culinária regional sofisticada com frutos do mar
- **Barcaxeira** — Famoso pelo peixe na telha e caldeirada
- **Pina Colada** — Drinks tropicais com vista para a praia
- **Restaurante La Crêperie** — Crepes doces e salgados à beira-mar

## Melhor época para visitar

A melhor época para visitar Porto de Galinhas é entre **setembro e março**, quando as chuvas são menos frequentes e as piscinas naturais ficam mais visíveis na maré baixa. Evite os meses de junho e julho, que concentram o período chuvoso.

## Como chegar saindo de Belo Horizonte

Saindo de **Belo Horizonte/Confins**, há voos diretos e com conexão para o Aeroporto do Recife (REC). De lá, o trajeto até Porto de Galinhas leva cerca de 1h de carro. A Marshe Viagens oferece **pacotes completos com aéreo, hospedagem e traslado** a partir de R$ 2.319 por pessoa.

## Dica da Marshe Viagens

Reserve seu pacote com antecedência para garantir os melhores preços e disponibilidade nos hotéis mais concorridos. Nossos pacotes incluem **aéreo, hospedagem com café da manhã e traslados**, para você só se preocupar em aproveitar!
    `,
    category: "guias",
    categoryLabel: "Guias de Destinos",
    author: "Marshe Viagens",
    date: "2026-02-10",
    readTime: "8 min",
    image: portoDeGalinhasImg,
    tags: ["Porto de Galinhas", "Nordeste", "Pernambuco", "Praias", "Piscinas Naturais"],
    metaDescription: "Guia completo de Porto de Galinhas: piscinas naturais, melhores praias, restaurantes, melhor época para visitar e como chegar saindo de BH. Planeje sua viagem!",
  },
  {
    slug: "roteiro-7-dias-gramado-canela",
    title: "Roteiro de 7 Dias em Gramado e Canela: Dia a Dia Completo",
    excerpt: "Planeje sua viagem à Serra Gaúcha com este roteiro detalhado de 7 dias por Gramado e Canela, incluindo passeios, restaurantes e dicas práticas.",
    content: `
## Gramado e Canela em 7 Dias

A Serra Gaúcha é um dos destinos mais charmosos do Brasil. Com arquitetura europeia, gastronomia refinada e paisagens de tirar o fôlego, **Gramado e Canela** oferecem experiências únicas em qualquer época do ano.

## Dia 1 — Chegada e Centro de Gramado

Após desembarcar em Porto Alegre e fazer o trajeto até Gramado (cerca de 2h), dedique a tarde para explorar o **centro da cidade**:

- Passeio pela **Rua Coberta**, com seus cafés e lojas
- Degustação de chocolate na **Prawer** ou **Florybal**
- Jantar no **Colosseo Restaurante** com fondues típicos

## Dia 2 — Mini Mundo e Lago Negro

- Manhã: **Mini Mundo** — réplicas em miniatura de construções famosas
- Tarde: Caminhada ao redor do **Lago Negro** com pedalinho
- Noite: Espetáculo no **Natal Luz** (se for época) ou show no **Palácio dos Festivais**

## Dia 3 — Canela

- Manhã: **Catedral de Pedra** e centro de Canela
- Tarde: **Parque do Caracol** — cascata de 131m de altura
- Tarde: **Bondinhos Aéreos** com vista panorâmica

## Dia 4 — Aventura e Natureza

- Manhã: **Skyglass Canela** — plataforma de vidro a 360m de altura
- Tarde: **Alpen Park** — montanha-russa, trenó e tirolesa
- Noite: Jantar no **Empório Canela**

## Dia 5 — Vinícolas e Gastronomia

- Visita à **Vinícola Ravanello** em Gramado
- Almoço harmonizado com vinhos locais
- Tarde livre para compras na **Avenida Borges de Medeiros**

## Dia 6 — Passeios Regionais

- **Vale do Quilombo** — mirante com vista espetacular
- **Estrada para Nova Petrópolis** — pousadas e paisagens rurais
- Tarde: Spa ou descanso no hotel

## Dia 7 — Últimas Compras e Retorno

- Manhã: Compras de chocolates e souvenirs
- Visita ao **Mundo de Chocolate**
- Retorno ao aeroporto de Porto Alegre

## Quanto custa?

A Marshe Viagens oferece pacotes de **7 dias para Gramado** saindo de Belo Horizonte/Confins a partir de **R$ 3.500 por pessoa**, incluindo aéreo, hospedagem com café da manhã e traslados.
    `,
    category: "roteiros",
    categoryLabel: "Roteiros",
    author: "Marshe Viagens",
    date: "2026-02-08",
    readTime: "10 min",
    image: gramadoImg,
    tags: ["Gramado", "Canela", "Serra Gaúcha", "Roteiro", "Sul"],
    metaDescription: "Roteiro completo de 7 dias em Gramado e Canela: passeios dia a dia, restaurantes, vinícolas e dicas práticas. Planeje sua viagem à Serra Gaúcha!",
  },
  {
    slug: "como-fazer-mala-viagem-praia",
    title: "Como Fazer a Mala Perfeita para Viagem de Praia: Lista Completa",
    excerpt: "Nunca mais esqueça nada! Confira nossa lista completa e organizada do que levar na mala para sua viagem de praia, com dicas práticas para economizar espaço.",
    content: `
## A mala perfeita para a praia

Arrumar a mala para uma viagem de praia parece simples, mas quem nunca esqueceu algo essencial? Com esta **lista completa e organizada**, você vai viajar tranquilo sem esquecer nada.

## Documentos e itens essenciais

- ✅ RG ou passaporte (confira a validade!)
- ✅ Cartão do plano de saúde
- ✅ Confirmação de reservas (hotel, passeios)
- ✅ Cartões de crédito/débito e dinheiro
- ✅ Carregador de celular e power bank

## Roupas

### Para o dia
- 👙 Biquínis/sungas (leve pelo menos 3 para revezar)
- 👕 Saídas de praia e cangas
- 🩴 Chinelos e papetes
- 🧢 Chapéu ou boné

### Para a noite
- 👗 2-3 looks para jantares
- 👟 Um par de tênis confortável
- 🧥 Uma blusa leve (ar-condicionado nos restaurantes!)

## Proteção solar (NÃO economize!)

- ☀️ Protetor solar FPS 50+ (rosto e corpo)
- 🕶️ Óculos de sol com proteção UV
- 💧 Hidratante pós-sol
- 🧴 Protetor labial com FPS

## Farmácia de viagem

- 💊 Remédios de uso contínuo
- 🩹 Band-aids à prova d'água
- 💊 Antialérgico e antidiarreico
- 🦟 Repelente de insetos

## Acessórios úteis

- 📱 Capinha à prova d'água para celular
- 🎒 Bolsa impermeável para praia
- 📖 Livro ou Kindle
- 🔌 Adaptador de tomada (se necessário)

## Dica de ouro: a regra do 3

Para viagens de até 8 dias, siga a **regra do 3**: 3 looks de praia, 3 looks casuais e 3 roupas íntimas extras. Isso garante versatilidade sem exagero na mala.

## Viaje sem preocupação

Com os pacotes da **Marshe Viagens**, você cuida apenas da mala — nós cuidamos do aéreo, hospedagem e traslados! Confira nossos destinos de praia no Nordeste com saída de Belo Horizonte.
    `,
    category: "dicas",
    categoryLabel: "Dicas de Viagem",
    author: "Marshe Viagens",
    date: "2026-02-05",
    readTime: "6 min",
    image: malaPraiaImg,
    tags: ["Dicas", "Mala de Viagem", "Praia", "Organização"],
    metaDescription: "Lista completa do que levar na mala para viagem de praia: roupas, proteção solar, documentos e acessórios. Dicas práticas para não esquecer nada!",
  },
  {
    slug: "guia-salvador-pelourinho-praias",
    title: "Guia de Salvador: Pelourinho, Praias e a Cultura Baiana que Encanta",
    excerpt: "Conheça Salvador, a capital da alegria: do Pelourinho histórico às praias paradisíacas, passando pelo acarajé e pelo axé. Um guia completo para sua viagem.",
    content: `
## Salvador: onde história e alegria se encontram

Salvador é a **primeira capital do Brasil** e um dos destinos mais vibrantes do país. Com uma mistura única de história, cultura afro-brasileira, gastronomia e praias deslumbrantes, a capital baiana conquista todos os visitantes.

## Principais pontos turísticos

### Pelourinho
O **Centro Histórico de Salvador**, Patrimônio Mundial da UNESCO, é o coração cultural da cidade. Ruas de paralelepípedo, casarões coloniais coloridos, igrejas barrocas e muita música nas ruas.

- **Igreja de São Francisco** — considerada a igreja mais rica do Brasil
- **Fundação Casa de Jorge Amado** — museu dedicado ao escritor baiano
- **Largo do Pelourinho** — palco de shows e manifestações culturais

### Elevador Lacerda
Cartão-postal de Salvador, o **Elevador Lacerda** conecta a Cidade Alta à Cidade Baixa com uma vista panorâmica da Baía de Todos os Santos.

### Farol da Barra
A **Praia do Farol da Barra** é famosa pelo pôr do sol mais bonito de Salvador. O Forte de Santo Antônio abriga o Museu Náutico.

## Praias imperdíveis

1. **Praia do Porto da Barra** — águas calmas, ideal para famílias
2. **Praia de Itapuã** — imortalizada por Vinícius de Moraes
3. **Praia do Flamengo** — mais afastada, com barracas sofisticadas
4. **Praia de Stella Maris** — ótima para surfe

## Gastronomia baiana

A culinária de Salvador é uma das mais ricas do Brasil:

- **Acarajé** — bolinho de feijão-fradinho frito no azeite de dendê
- **Moqueca baiana** — peixe cozido com leite de coco e dendê
- **Abará** — versão cozida do acarajé, envolto em folha de bananeira
- **Cocada** — doce de coco ralado com açúcar

### Onde comer
- **Restaurante Paraíso Tropical** — frutos do mar com vista para o mar
- **Casa de Tereza** — culinária baiana contemporânea
- **Acarajé da Dinha** — o acarajé mais famoso de Salvador

## Melhor época

Salvador tem **sol o ano inteiro**, mas os meses de **setembro a março** são os mais secos. O Carnaval (fevereiro/março) é a época mais movimentada.

## Pacotes saindo de BH

A Marshe Viagens oferece pacotes de **8 dias para Salvador** saindo de Confins a partir de **R$ 2.750 por pessoa**, com aéreo, hospedagem e traslados inclusos.
    `,
    category: "guias",
    categoryLabel: "Guias de Destinos",
    author: "Marshe Viagens",
    date: "2026-01-28",
    readTime: "9 min",
    image: salvadorImg,
    tags: ["Salvador", "Bahia", "Nordeste", "Pelourinho", "Cultura"],
    metaDescription: "Guia completo de Salvador: Pelourinho, praias, gastronomia baiana, pontos turísticos e dicas. Planeje sua viagem à capital da alegria!",
  },
  {
    slug: "economizar-viagem-nordeste-dicas",
    title: "10 Dicas Para Economizar na Sua Viagem ao Nordeste Sem Perder a Qualidade",
    excerpt: "Viajar para o Nordeste não precisa ser caro! Confira 10 dicas práticas para economizar em passagens, hospedagem e passeios sem abrir mão do conforto.",
    content: `
## Viaje mais gastando menos

O Nordeste brasileiro é um dos destinos mais desejados, mas muita gente acredita que é preciso gastar muito para conhecer essas praias paradisíacas. A verdade é que, com **planejamento inteligente**, é possível fazer uma viagem incrível sem estourar o orçamento.

## 1. Viaje na baixa temporada

Os meses de **abril, maio e início de junho** oferecem preços até 40% menores em passagens e hospedagem. O clima ainda é agradável na maioria dos destinos.

## 2. Reserve com antecedência

Comprar passagens com **3 a 6 meses de antecedência** pode gerar economias significativas. O mesmo vale para hotéis e pousadas.

## 3. Considere pacotes completos

**Pacotes que incluem aéreo, hospedagem e traslado** costumam sair mais baratos do que comprar tudo separado. A Marshe Viagens oferece opções a partir de R$ 1.838 por pessoa.

## 4. Escolha hospedagem com café da manhã

Hotéis e pousadas com **café da manhã incluso** representam uma refeição a menos por dia para pagar. Em 8 dias, isso faz diferença!

## 5. Coma onde os locais comem

Fuja dos restaurantes em frente à praia principal. Ande **2-3 quadras para dentro** e encontre refeições caseiras por metade do preço, muitas vezes mais saborosas.

## 6. Use transporte alternativo

Em vez de táxi/Uber para tudo, use **vans e ônibus locais** para deslocamentos maiores. Para praias próximas, muitas vezes dá para ir a pé.

## 7. Negocie passeios em grupo

Passeios de buggy, barco e lancha ficam **muito mais baratos** quando compartilhados com outros turistas. Combine na pousada ou na praia.

## 8. Leve protetor solar de casa

Protetor solar em destinos turísticos pode custar o **dobro ou triplo** do preço normal. Leve o suficiente de casa.

## 9. Aproveite atrações gratuitas

As melhores coisas do Nordeste são gratuitas: **praias, piscinas naturais na maré baixa, pôr do sol, centros históricos** e trilhas. Planeje seu roteiro priorizando essas experiências.

## 10. Evite compras por impulso

Souvenirs e artesanato podem ser tentadores. Defina um **orçamento fixo para compras** e compare preços antes de comprar. Feiras de artesanato costumam ter melhores preços que lojas turísticas.

## Resumo: quanto levar?

Para uma viagem de 8 dias ao Nordeste com pacote da Marshe (aéreo + hotel + traslado inclusos), calcule cerca de **R$ 100-150 por dia** para alimentação, passeios e extras. Total estimado: R$ 800 a R$ 1.200 além do pacote.

## Viaje com a Marshe Viagens

Nossos pacotes já incluem aéreo, hospedagem com café da manhã e traslados, ajudando você a **economizar tempo e dinheiro**. Confira nossos destinos no Nordeste!
    `,
    category: "dicas",
    categoryLabel: "Dicas de Viagem",
    author: "Marshe Viagens",
    date: "2026-01-20",
    readTime: "7 min",
    image: economizarImg,
    tags: ["Economia", "Nordeste", "Dicas", "Planejamento", "Orçamento"],
    metaDescription: "10 dicas práticas para economizar na viagem ao Nordeste: passagens, hospedagem, alimentação e passeios. Viaje mais gastando menos!",
  },
  {
    slug: "roteiro-5-dias-foz-do-iguacu",
    title: "Roteiro de 5 Dias em Foz do Iguaçu: Cataratas, Itaipu e Mais",
    excerpt: "Aproveite ao máximo Foz do Iguaçu com este roteiro de 5 dias: Cataratas brasileiras e argentinas, Itaipu, Marco das Três Fronteiras e muito mais.",
    content: `
## Foz do Iguaçu: grandiosidade em cada esquina

Foz do Iguaçu é um destino que impressiona pela **grandiosidade**. Com as Cataratas do Iguaçu (uma das Sete Maravilhas da Natureza), a Usina de Itaipu e a tríplice fronteira, a cidade oferece experiências únicas.

## Dia 1 — Cataratas do Iguaçu (Lado Brasileiro)

O primeiro dia deve ser dedicado ao **lado brasileiro das Cataratas**:

- Chegue cedo para evitar filas (abrem às 9h)
- Percorra a trilha de 1,2 km com **vistas panorâmicas**
- Visite o **Espaço Naipi** no final da trilha
- Passeio de barco **Macuco Safari** (opção radical que leva até as quedas d'água!)

**Dica:** Vista roupas que podem molhar — o spray das cataratas é intenso!

## Dia 2 — Cataratas (Lado Argentino)

O lado argentino oferece uma experiência **completamente diferente**:

- Circuito Superior e Inferior com trilhas bem estruturadas
- **Garganta do Diabo** — a queda mais impressionante, com 80m de altura
- Trilha até a **Isla San Martín** (sujeita ao nível da água)
- Mais tempo de passeio (reserve o dia inteiro)

**Documentos:** Leve RG (válido e em bom estado) para cruzar a fronteira.

## Dia 3 — Itaipu Binacional

A maior usina hidrelétrica em geração de energia do mundo:

- **Visita panorâmica** — gratuita, com vista da barragem
- **Circuito especial** — visita interna à usina (pago, vale muito!)
- **Iluminação noturna** — espetáculo de luzes na barragem (sextas e sábados)

À tarde: visite o **Ecomuseu de Itaipu** e o **Refúgio Biológico** com animais resgatados.

## Dia 4 — Marco das Três Fronteiras e Compras

- Manhã: **Marco das Três Fronteiras** — monumento onde Brasil, Argentina e Paraguai se encontram, com show cultural
- Tarde: Visita a **Ciudad del Este** (Paraguai) para compras
- Noite: Jantar no **Rafain Churrascaria Show** com espetáculo folclórico

## Dia 5 — Parque das Aves e Retorno

- Manhã: **Parque das Aves** — ao lado das Cataratas, com 150 espécies de aves tropicais
- Viveiro de araras e tucanos — experiência imersiva
- Últimas compras de souvenirs
- Retorno ao aeroporto

## Quanto custa?

A Marshe Viagens oferece pacotes de **6 dias para Foz do Iguaçu** saindo de Belo Horizonte/Confins a partir de **R$ 1.842 por pessoa**, incluindo aéreo, hospedagem com café da manhã e traslados.

## Dica importante

Foz do Iguaçu recebe turistas o ano inteiro, mas os meses de **março a maio e agosto a outubro** são ideais: menos chuva, temperaturas agradáveis e cachoeiras com bom volume de água.
    `,
    category: "roteiros",
    categoryLabel: "Roteiros",
    author: "Marshe Viagens",
    date: "2026-01-15",
    readTime: "9 min",
    image: fozImg,
    tags: ["Foz do Iguaçu", "Cataratas", "Itaipu", "Roteiro", "Sul"],
    metaDescription: "Roteiro de 5 dias em Foz do Iguaçu: Cataratas brasileiras e argentinas, Itaipu, Marco das Três Fronteiras e Parque das Aves. Planeje sua viagem!",
  },
  // ===== 3 NOVOS POSTS =====
  {
    slug: "guia-natal-praias-dunas-gastronomia",
    title: "Guia de Natal: Praias, Dunas e a Gastronomia Potiguar que Surpreende",
    excerpt: "Descubra Natal, a Cidade do Sol: das dunas de Genipabu às praias de Ponta Negra, passando pela culinária local e passeios imperdíveis.",
    content: `
## Natal: a Cidade do Sol

Natal é conhecida como a **Cidade do Sol** por ter um dos climas mais agradáveis do Brasil, com sol praticamente o ano inteiro. A capital do Rio Grande do Norte combina praias deslumbrantes, dunas impressionantes e uma gastronomia que surpreende os visitantes.

## Principais pontos turísticos

### Praia de Ponta Negra
O **Morro do Careca** é o cartão-postal de Natal. A praia de Ponta Negra é a mais badalada da cidade, com ótima infraestrutura de bares, restaurantes e vida noturna.

### Dunas de Genipabu
O passeio de buggy pelas **Dunas de Genipabu** é obrigatório. A famosa pergunta "com ou sem emoção?" define a intensidade do passeio nas dunas. A Lagoa de Genipabu completa a experiência.

### Forte dos Reis Magos
Construído em 1598, o **Forte dos Reis Magos** é o marco fundador da cidade. Localizado na ponta de uma península, oferece uma vista panorâmica da foz do Rio Potengi.

### Parrachos de Maracajaú
A cerca de 60 km de Natal, os **Parrachos de Maracajaú** são piscinas naturais em alto-mar, ideais para mergulho e snorkel entre peixes coloridos e corais.

## Praias imperdíveis

1. **Ponta Negra** — a mais famosa, com o Morro do Careca
2. **Praia do Forte** — em frente ao Forte dos Reis Magos
3. **Praia de Pirangi** — onde fica o maior cajueiro do mundo
4. **Praia da Pipa** — a 85 km de Natal, com falésias e golfinhos

## Gastronomia potiguar

- **Camarão na moranga** — camarão cremoso servido dentro de uma abóbora assada
- **Ginga com tapioca** — petisco típico, peixinho frito com tapioca
- **Carne de sol com queijo coalho** — clássico nordestino
- **Cartola** — banana frita com queijo coalho e canela

### Onde comer
- **Camarões Potiguar** — referência em frutos do mar
- **Mangai** — buffet de comida regional nordestina
- **Old Five** — gastronomia contemporânea com vista para Ponta Negra

## Melhor época

Natal tem sol o ano inteiro, mas os meses de **setembro a fevereiro** são os mais secos. A temperatura média é de 28°C durante todo o ano.

## Pacotes saindo de BH

A Marshe Viagens oferece pacotes de **8 dias para Natal** saindo de Confins a partir de **R$ 2.387 por pessoa**, com aéreo, hospedagem com café da manhã e traslados inclusos.
    `,
    category: "guias",
    categoryLabel: "Guias de Destinos",
    author: "Marshe Viagens",
    date: "2026-02-14",
    readTime: "8 min",
    image: natalImg,
    tags: ["Natal", "Rio Grande do Norte", "Nordeste", "Praias", "Dunas"],
    metaDescription: "Guia completo de Natal: praias, dunas de Genipabu, Ponta Negra, gastronomia potiguar e dicas práticas. Planeje sua viagem à Cidade do Sol!",
  },
  {
    slug: "documentos-necessarios-viagem-nacional",
    title: "Documentos Necessários para Viagem Nacional: Checklist Completo 2026",
    excerpt: "Não corra riscos! Confira todos os documentos que você precisa levar em viagens nacionais: adultos, crianças, idosos e situações especiais.",
    content: `
## Viaje preparado: documentos em dia

Nada pior do que chegar ao aeroporto e descobrir que esqueceu um documento importante. Este **checklist completo** cobre todas as situações para você viajar tranquilo em 2026.

## Documentos obrigatórios para adultos

- ✅ **RG** (com menos de 10 anos de emissão e em bom estado) OU
- ✅ **CNH** (dentro da validade)
- ✅ **Passaporte** (aceito como documento de identidade)

**Atenção:** Carteiras profissionais (OAB, CRM, CREA) são aceitas como documento de identidade em voos nacionais.

## Crianças e adolescentes

### Viajando com os pais
- ✅ Certidão de nascimento original OU RG da criança
- ✅ Documento dos pais

### Viajando com apenas um dos pais
- ✅ Documentos da criança
- ✅ **Autorização do outro genitor** com firma reconhecida em cartório OU
- ✅ Autorização judicial

### Viajando com terceiros (avós, tios, etc.)
- ✅ **Autorização de ambos os pais** com firma reconhecida
- ✅ Documento do acompanhante

## Idosos (60+)

- ✅ RG ou CNH (mesmo documento dos adultos)
- ✅ **Carteira do Idoso** (para descontos em ônibus e hotéis)

## Documentos recomendados (não obrigatórios)

- 📋 Cartão do plano de saúde
- 📋 Receitas médicas (se tomar medicamentos controlados)
- 📋 Comprovante de reserva do hotel
- 📋 Comprovante de passagem (digital ou impresso)
- 📋 Cartão de vacinação (especialmente para destinos na Amazônia)

## Dicas importantes

### No aeroporto
- Chegue com **2h de antecedência** para voos domésticos
- Check-in online agiliza o embarque
- Documentos digitais (RG digital, CNH digital) são aceitos em aeroportos

### Cópias de segurança
- Tire **fotos de todos os documentos** e salve na nuvem
- Tenha uma **cópia impressa** na mala despachada
- Compartilhe as fotos com alguém de confiança

### Documentos vencidos
- RG com **mais de 10 anos** pode ser recusado
- CNH vencida **não é aceita** como documento de viagem
- Providencie a renovação com antecedência

## Viaje sem preocupação

Com os pacotes da **Marshe Viagens**, além de cuidar do aéreo, hospedagem e traslados, enviamos um guia completo pré-viagem com tudo que você precisa saber. Consulte nossos destinos!
    `,
    category: "dicas",
    categoryLabel: "Dicas de Viagem",
    author: "Marshe Viagens",
    date: "2026-02-12",
    readTime: "6 min",
    image: documentosImg,
    tags: ["Documentos", "Dicas", "Planejamento", "Aeroporto", "Viagem Nacional"],
    metaDescription: "Checklist completo de documentos para viagem nacional em 2026: adultos, crianças, idosos e situações especiais. Não esqueça nada!",
  },
  {
    slug: "roteiro-4-dias-joao-pessoa-litoral-sul",
    title: "Roteiro de 4 Dias em João Pessoa: Praias, Pôr do Sol e Litoral Sul",
    excerpt: "Aproveite o melhor de João Pessoa em 4 dias: praias urbanas, o pôr do sol do Jacaré, praias do litoral sul e a gastronomia paraibana.",
    content: `
## João Pessoa: onde o sol nasce primeiro

João Pessoa é a **capital mais verde do Brasil** e o ponto mais oriental das Américas — onde o sol nasce primeiro. Com praias lindas, clima agradável e um custo-benefício excelente, é um destino que encanta.

## Dia 1 — Praias Urbanas e Centro Histórico

- Manhã: **Praia de Tambaú** — a mais famosa, com boa infraestrutura
- Almoço na **Feirinha de Tambaú** — artesanato e comida regional
- Tarde: **Centro Histórico** — igrejas barrocas e casarões coloniais
- Noite: Pôr do sol no **Jacaré** com som de Bolero de Ravel ao saxofone (imperdível!)

## Dia 2 — Litoral Sul

O Litoral Sul de João Pessoa é um espetáculo:

- Manhã: **Praia do Conde** — águas calmas e coqueirais
- **Praia de Coqueirinho** — considerada uma das mais bonitas do Nordeste
- **Praia de Tambaba** — primeira praia oficial de naturismo do Nordeste (área mista disponível)
- Almoço em restaurante à beira-mar em Coqueirinho

## Dia 3 — Litoral Norte e Picãozinho

- Manhã: Passeio de barco até as **piscinas naturais de Picãozinho** na maré baixa
- Tarde: **Praia do Bessa** — mais tranquila, ótima para relaxar
- Visite o **Farol do Cabo Branco** — ponto mais oriental das Américas
- Noite: Jantar no **Mangai** — buffet de comida nordestina autêntica

## Dia 4 — Compras e Retorno

- Manhã: Compras no **Mercado de Artesanato Paraibano**
- Visite a **Estação Cabo Branco** — centro cultural projetado por Oscar Niemeyer
- Último mergulho em Tambaú
- Retorno ao aeroporto

## Gastronomia paraibana

- **Rubacão** — arroz com feijão verde, carne de sol, queijo coalho e nata
- **Tapioca** — a melhor tapioca do Brasil, segundo os locais
- **Caranguejo** — servido em praticamente todas as barracas de praia
- **Rapadura** — doce típico paraibano

## Quanto custa?

A Marshe Viagens oferece pacotes de **8 dias para João Pessoa** saindo de Belo Horizonte/Confins a partir de **R$ 2.182 por pessoa**, incluindo aéreo, hospedagem com café da manhã e traslados.

## Melhor época

João Pessoa tem clima tropical o ano inteiro. Os meses mais secos são de **setembro a fevereiro**. Evite junho e julho por conta das chuvas.
    `,
    category: "roteiros",
    categoryLabel: "Roteiros",
    author: "Marshe Viagens",
    date: "2026-02-13",
    readTime: "7 min",
    image: joaoPessoaImg,
    tags: ["João Pessoa", "Paraíba", "Nordeste", "Roteiro", "Litoral Sul"],
    metaDescription: "Roteiro de 4 dias em João Pessoa: praias urbanas, pôr do sol do Jacaré, litoral sul, gastronomia paraibana e dicas práticas. Planeje sua viagem!",
  },
];
