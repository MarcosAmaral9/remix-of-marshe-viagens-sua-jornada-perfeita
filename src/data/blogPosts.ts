import portoDeGalinhasImg from "@/assets/dest-porto-de-galinhas.jpg";
import gramadoImg from "@/assets/dest-gramado.jpg";
import malaPraiaImg from "@/assets/blog-mala-praia.jpg";
import salvadorImg from "@/assets/dest-salvador.jpg";
import economizarImg from "@/assets/blog-economizar-nordeste.jpg";
import fozImg from "@/assets/dest-foz-do-iguacu.jpg";
import natalImg from "@/assets/dest-natal.jpg";
import documentosImg from "@/assets/blog-documentos-viagem.jpg";
import joaoPessoaImg from "@/assets/dest-joao-pessoa.jpg";
import maceioImg from "@/assets/blog-guia-maceio.jpg";
import viagemCriancasImg from "@/assets/blog-viagem-criancas.jpg";
import portoSeguroImg from "@/assets/blog-roteiro-porto-seguro.jpg";
import melhorEpocaMaceioImg from "@/assets/blog-melhor-epoca-maceio.jpg";
import custoNordesteImg from "@/assets/blog-custo-nordeste.jpg";
import pacotesBaratosImg from "@/assets/blog-pacotes-baratos-nordeste.jpg";
import guiaFortalezaImg from "@/assets/blog-guia-fortaleza.jpg";
import seguroViagemImg from "@/assets/blog-seguro-viagem.jpg";
import roteirosCaboImg from "@/assets/blog-roteiro-cabo-agostinho.jpg";

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
    excerpt:
      "Descubra tudo sobre Porto de Galinhas: das piscinas naturais aos melhores restaurantes. Um guia completo para planejar sua viagem perfeita ao paraíso pernambucano.",
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
    date: "2026-02-19",
    readTime: "8 min",
    image: portoDeGalinhasImg,
    tags: ["Porto de Galinhas", "Nordeste", "Pernambuco", "Praias", "Piscinas Naturais"],
    metaDescription:
      "Guia completo de Porto de Galinhas: piscinas naturais, melhores praias, restaurantes, melhor época para visitar e como chegar saindo de BH. Planeje sua viagem!",
  },
  {
    slug: "roteiro-7-dias-gramado-canela",
    title: "Roteiro de 7 Dias em Gramado e Canela: Dia a Dia Completo",
    excerpt:
      "Planeje sua viagem à Serra Gaúcha com este roteiro detalhado de 7 dias por Gramado e Canela, incluindo passeios, restaurantes e dicas práticas.",
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
    date: "2026-02-18",
    readTime: "10 min",
    image: gramadoImg,
    tags: ["Gramado", "Canela", "Serra Gaúcha", "Roteiro", "Sul"],
    metaDescription:
      "Roteiro completo de 7 dias em Gramado e Canela: passeios dia a dia, restaurantes, vinícolas e dicas práticas. Planeje sua viagem à Serra Gaúcha!",
  },
  {
    slug: "como-fazer-mala-viagem-praia",
    title: "Como Fazer a Mala Perfeita para Viagem de Praia: Lista Completa",
    excerpt:
      "Nunca mais esqueça nada! Confira nossa lista completa e organizada do que levar na mala para sua viagem de praia, com dicas práticas para economizar espaço.",
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
    date: "2026-02-17",
    readTime: "6 min",
    image: malaPraiaImg,
    tags: ["Dicas", "Mala de Viagem", "Praia", "Organização"],
    metaDescription:
      "Lista completa do que levar na mala para viagem de praia: roupas, proteção solar, documentos e acessórios. Dicas práticas para não esquecer nada!",
  },
  {
    slug: "guia-salvador-pelourinho-praias",
    title: "Guia de Salvador: Pelourinho, Praias e a Cultura Baiana que Encanta",
    excerpt:
      "Conheça Salvador, a capital da alegria: do Pelourinho histórico às praias paradisíacas, passando pelo acarajé e pelo axé. Um guia completo para sua viagem.",
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
    date: "2026-02-16",
    readTime: "9 min",
    image: salvadorImg,
    tags: ["Salvador", "Bahia", "Nordeste", "Pelourinho", "Cultura"],
    metaDescription:
      "Guia completo de Salvador: Pelourinho, praias, gastronomia baiana, pontos turísticos e dicas. Planeje sua viagem à capital da alegria!",
  },
  {
    slug: "economizar-viagem-nordeste-dicas",
    title: "10 Dicas Para Economizar na Sua Viagem ao Nordeste Sem Perder a Qualidade",
    excerpt:
      "Viajar para o Nordeste não precisa ser caro! Confira 10 dicas práticas para economizar em passagens, hospedagem e passeios sem abrir mão do conforto.",
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
    date: "2026-02-15",
    readTime: "7 min",
    image: economizarImg,
    tags: ["Economia", "Nordeste", "Dicas", "Planejamento", "Orçamento"],
    metaDescription:
      "10 dicas práticas para economizar na viagem ao Nordeste: passagens, hospedagem, alimentação e passeios. Viaje mais gastando menos!",
  },
  {
    slug: "roteiro-5-dias-foz-do-iguacu",
    title: "Roteiro de 5 Dias em Foz do Iguaçu: Cataratas, Itaipu e Mais",
    excerpt:
      "Aproveite ao máximo Foz do Iguaçu com este roteiro de 5 dias: Cataratas brasileiras e argentinas, Itaipu, Marco das Três Fronteiras e muito mais.",
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
    date: "2026-02-14",
    readTime: "9 min",
    image: fozImg,
    tags: ["Foz do Iguaçu", "Cataratas", "Itaipu", "Roteiro", "Sul"],
    metaDescription:
      "Roteiro de 5 dias em Foz do Iguaçu: Cataratas brasileiras e argentinas, Itaipu, Marco das Três Fronteiras e Parque das Aves. Planeje sua viagem!",
  },
  // ===== 3 NOVOS POSTS =====
  {
    slug: "guia-natal-praias-dunas-gastronomia",
    title: "Guia de Natal: Praias, Dunas e a Gastronomia Potiguar que Surpreende",
    excerpt:
      "Descubra Natal, a Cidade do Sol: das dunas de Genipabu às praias de Ponta Negra, passando pela culinária local e passeios imperdíveis.",
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
    date: "2026-02-13",
    readTime: "8 min",
    image: natalImg,
    tags: ["Natal", "Rio Grande do Norte", "Nordeste", "Praias", "Dunas"],
    metaDescription:
      "Guia completo de Natal: praias, dunas de Genipabu, Ponta Negra, gastronomia potiguar e dicas práticas. Planeje sua viagem à Cidade do Sol!",
  },
  {
    slug: "documentos-necessarios-viagem-nacional",
    title: "Documentos Necessários para Viagem Nacional: Checklist Completo 2026",
    excerpt:
      "Não corra riscos! Confira todos os documentos que você precisa levar em viagens nacionais: adultos, crianças, idosos e situações especiais.",
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
    metaDescription:
      "Checklist completo de documentos para viagem nacional em 2026: adultos, crianças, idosos e situações especiais. Não esqueça nada!",
  },
  {
    slug: "roteiro-4-dias-joao-pessoa-litoral-sul",
    title: "Roteiro de 4 Dias em João Pessoa: Praias, Pôr do Sol e Litoral Sul",
    excerpt:
      "Aproveite o melhor de João Pessoa em 4 dias: praias urbanas, o pôr do sol do Jacaré, praias do litoral sul e a gastronomia paraibana.",
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
    date: "2026-02-11",
    readTime: "7 min",
    image: joaoPessoaImg,
    tags: ["João Pessoa", "Paraíba", "Nordeste", "Roteiro", "Litoral Sul"],
    metaDescription:
      "Roteiro de 4 dias em João Pessoa: praias urbanas, pôr do sol do Jacaré, litoral sul, gastronomia paraibana e dicas práticas. Planeje sua viagem!",
  },
  // ===== 3 NOVOS POSTS (Fev 2026) =====
  {
    slug: "guia-maceio-praias-piscinas-naturais",
    title: "Guia de Maceió: Praias Caribenhas, Piscinas Naturais e Gastronomia Alagoana",
    excerpt:
      "Descubra Maceió, o Caribe brasileiro: das piscinas naturais de Pajuçara às praias de São Miguel dos Milagres, passando pela culinária alagoana.",
    content: `
## Maceió: o Caribe brasileiro

Maceió é a capital de Alagoas e um dos destinos mais surpreendentes do Nordeste. Com águas em tons de verde e azul que lembram o Caribe, **praias de tirar o fôlego** e uma gastronomia rica, a cidade conquista todos os visitantes.

## Principais pontos turísticos

### Piscinas Naturais de Pajuçara
Na maré baixa, formam-se **piscinas naturais** a cerca de 1 km da costa. O passeio de jangada é imperdível e custa em média R$ 30 por pessoa.

### Praia do Francês
A cerca de 20 km do centro, a **Praia do Francês** é uma das mais bonitas do estado, com barreira de corais que forma uma área de águas calmas e outra com ondas para surfe.

### São Miguel dos Milagres
A 100 km de Maceió, **São Miguel dos Milagres** é um paraíso preservado com piscinas naturais cristalinas e coqueirais infinitos. É possível nadar com tartarugas marinhas!

### Praia do Gunga
Considerada uma das praias mais bonitas do Brasil, a **Praia do Gunga** tem águas verdes esmeralda, falésias coloridas e coqueirais.

## Praias imperdíveis

1. **Pajuçara** — a mais famosa, com piscinas naturais
2. **Ponta Verde** — ótima infraestrutura, ideal para caminhadas
3. **Praia do Francês** — barreira de coral e águas cristalinas
4. **Praia do Gunga** — falésias e paisagem espetacular
5. **Barra de São Miguel** — águas calmas e tranquilidade

## Gastronomia alagoana

- **Sururu** — molusco típico em caldos e moquecas
- **Tapioca recheada** — com carne de sol, queijo e coco
- **Peixe frito com pirão** — clássico à beira-mar
- **Bolo de goma** — sobremesa regional

### Onde comer
- **Wanchako** — gastronomia contemporânea com frutos do mar
- **Massarella** — culinária italiana com toque alagoano
- **Lopana** — pratos regionais com vista para o mar

## Melhor época

Os meses de **setembro a março** são os mais secos e com melhor visibilidade nas piscinas naturais. A temperatura média é de 27°C o ano inteiro.

## Pacotes saindo de BH

A Marshe Viagens oferece pacotes de **8 dias para Maceió** saindo de Confins a partir de **R$ 3.250 por pessoa**, com aéreo, hospedagem com café da manhã e traslados inclusos.
    `,
    category: "guias",
    categoryLabel: "Guias de Destinos",
    author: "Marshe Viagens",
    date: "2026-02-10",
    readTime: "8 min",
    image: maceioImg,
    tags: ["Maceió", "Alagoas", "Nordeste", "Praias", "Piscinas Naturais"],
    metaDescription:
      "Guia completo de Maceió: praias caribenhas, piscinas naturais de Pajuçara, São Miguel dos Milagres, gastronomia alagoana e dicas. Planeje sua viagem!",
  },
  {
    slug: "dicas-viajar-com-criancas-sem-estresse",
    title: "Como Viajar com Crianças Sem Estresse: 12 Dicas Práticas Para Famílias",
    excerpt:
      "Viajar com filhos pequenos pode ser divertido! Confira 12 dicas práticas para planejar viagens em família com tranquilidade, desde a escolha do destino até o entretenimento no avião.",
    content: `
## Viagem em família sem estresse

Viajar com crianças pode parecer desafiador, mas com o **planejamento certo** a experiência se torna incrível para toda a família. Confira nossas dicas testadas e aprovadas.

## 1. Escolha o destino certo

Nem todo destino é ideal para crianças. Prefira locais com:
- **Praias de águas calmas** (Porto de Galinhas, Muro Alto, Porto da Barra)
- **Infraestrutura familiar** (hotéis com kids club, brinquedoteca)
- **Atrações para todas as idades**

## 2. Reserve voos em horários estratégicos

Voos no **início da manhã ou à noite** coincidem com horários de sono das crianças, reduzindo agitação. Evite conexões longas.

## 3. Leve lanches e entretenimento

No avião, leve:
- 🍪 Lanches que a criança gosta
- 📱 Tablet com filmes e jogos baixados (modo offline!)
- 🎨 Kit de colorir e adesivos
- 🎧 Fones de ouvido infantis

## 4. Faça check-in online

Evite filas no aeroporto. Faça **check-in online** e chegue com tempo suficiente para embarcar sem correria.

## 5. Escolha hospedagem com cozinha

Hotéis ou apart-hotéis com **cozinha básica** permitem preparar refeições simples, economizar e atender restrições alimentares.

## 6. Respeite o ritmo das crianças

Não tente fazer tudo em um dia. **Intercale passeios com momentos de descanso**. Crianças cansadas = crianças irritadas.

## 7. Proteção solar redobrada

Crianças têm pele mais sensível. Use:
- ☀️ Protetor solar FPS 60+ infantil
- 🧢 Chapéu e camiseta UV
- ⏰ Evite sol entre 10h e 16h

## 8. Documentos das crianças

Para voos nacionais com crianças:
- ✅ Certidão de nascimento ou RG
- ✅ Se viajar com apenas um dos pais: **autorização do outro** com firma reconhecida
- ✅ Se viajar com avós/tios: autorização de **ambos os pais**

## 9. Contrate seguro viagem

Imprevistos acontecem mais com crianças. Um **seguro viagem familiar** custa pouco e garante tranquilidade.

## 10. Envolva as crianças no planejamento

Deixe as crianças **escolherem um passeio** do roteiro. Isso aumenta o entusiasmo e a cooperação durante a viagem.

## 11. Leve medicamentos básicos

Monte um **kit farmácia infantil**: antitérmico, antialérgico, soro fisiológico, band-aids e medicamentos de uso contínuo.

## 12. Pacotes com tudo incluso são aliados

Pacotes que incluem **aéreo, hospedagem e traslados** eliminam a preocupação com logística. A Marshe Viagens oferece opções perfeitas para famílias.

## Destinos ideais para famílias

A Marshe Viagens recomenda:
- **Porto de Galinhas** — piscinas naturais rasas, perfeitas para crianças
- **Gramado** — Mini Mundo, Mundo de Chocolate e Alpen Park
- **Foz do Iguaçu** — Parque das Aves e Cataratas

Consulte nossos pacotes com saída de Belo Horizonte!
    `,
    category: "dicas",
    categoryLabel: "Dicas de Viagem",
    author: "Marshe Viagens",
    date: "2026-02-09",
    readTime: "7 min",
    image: viagemCriancasImg,
    tags: ["Crianças", "Família", "Dicas", "Planejamento", "Viagem em Família"],
    metaDescription:
      "12 dicas práticas para viajar com crianças sem estresse: destinos, documentos, lanches no avião, proteção solar e planejamento. Guia completo para famílias!",
  },
  {
    slug: "roteiro-6-dias-porto-seguro-arraial-trancoso",
    title: "Roteiro de 6 Dias em Porto Seguro, Arraial d'Ajuda e Trancoso",
    excerpt:
      "Aproveite o melhor do sul da Bahia em 6 dias: as praias de Porto Seguro, o charme de Arraial d'Ajuda e a sofisticação de Trancoso em um roteiro completo.",
    content: `
## Sul da Bahia: Porto Seguro e região

O sul da Bahia concentra alguns dos destinos mais encantadores do Brasil. **Porto Seguro, Arraial d'Ajuda e Trancoso** formam um trio perfeito que combina praias paradisíacas, história e badalação.

## Dia 1 — Chegada e Centro Histórico

- Chegada ao aeroporto de Porto Seguro
- Tarde: **Centro Histórico** — onde o Brasil foi descoberto em 1500
- Visite o **Marco do Descobrimento** e a **Igreja de Nossa Senhora da Pena**
- Noite: **Passarela do Álcool** — rua animada com bares, restaurantes e artesanato

## Dia 2 — Praias de Porto Seguro

- Manhã: **Praia de Taperapuã** — a mais famosa, com barracas como Axé Moi e Tôa Tôa
- Tarde: **Praia de Mutá** — mais tranquila, com coqueirais
- Passeio de escuna pela costa (saída do centro)
- Noite: Luau na praia

## Dia 3 — Arraial d'Ajuda

Atravesse de balsa (10 min) para **Arraial d'Ajuda**:

- Manhã: **Praia de Pitinga** — falésias coloridas e águas cristalinas
- Almoço: **Rua do Mucugê** — a rua mais charmosa, com restaurantes e lojas
- Tarde: **Praia do Parracho** — boa para snorkel na maré baixa
- Noite: Shows e festas no centrinho de Arraial

## Dia 4 — Trancoso

Siga para **Trancoso** (45 min de carro):

- Manhã: **Quadrado de Trancoso** — Patrimônio Histórico, com casinhas coloridas e a Igreja de São João Batista
- Almoço em um dos restaurantes sofisticados do Quadrado
- Tarde: **Praia dos Nativos** — águas mornas e areia dourada
- **Praia do Espelho** — considerada uma das mais bonitas do Brasil (30 min ao sul)

## Dia 5 — Parque Marinho de Recife de Fora

- Manhã: Passeio de barco ao **Recife de Fora** — mergulho em piscinas naturais com peixes coloridos e corais
- Tarde: Relaxar na **Praia do Mundaí** 
- Compras de artesanato indígena Pataxó
- Noite: Jantar especial na Passarela do Álcool

## Dia 6 — Últimos mergulhos e retorno

- Manhã: Último mergulho na praia
- Compras de souvenirs e lembranças
- Retorno ao aeroporto

## Gastronomia do sul da Bahia

- **Moqueca capixaba x baiana** — prove as duas versões!
- **Acarajé** — presente em todas as praias
- **Peixe na folha de bananeira** — especialidade local
- **Cocada e doces regionais** — imperdíveis

## Quanto custa?

A Marshe Viagens oferece pacotes de **4 dias para Porto Seguro** saindo de Belo Horizonte/Confins a partir de **R$ 1.838 por pessoa**, incluindo aéreo, hospedagem e traslados. Para roteiros estendidos com Arraial e Trancoso, consulte condições especiais.

## Melhor época

O sul da Bahia tem clima agradável o ano inteiro. Os meses de **setembro a março** são mais secos, com temperaturas entre 25°C e 32°C. Evite junho-julho por conta das chuvas.
    `,
    category: "roteiros",
    categoryLabel: "Roteiros",
    author: "Marshe Viagens",
    date: "2026-02-08",
    readTime: "9 min",
    image: portoSeguroImg,
    tags: ["Porto Seguro", "Arraial d'Ajuda", "Trancoso", "Bahia", "Roteiro"],
    metaDescription:
      "Roteiro de 6 dias em Porto Seguro, Arraial d'Ajuda e Trancoso: praias, centro histórico, Quadrado e Recife de Fora. Planeje sua viagem ao sul da Bahia!",
  },
  // ===== 6 NOVOS POSTS — Keywords de alta busca =====
  {
    slug: "melhor-epoca-viajar-maceio",
    title: "Melhor Época para Viajar para Maceió: Guia Mês a Mês Completo",
    excerpt:
      "Quando é o melhor momento para visitar Maceió? Descubra as condições climáticas, preços e dicas mês a mês para planejar sua viagem ao Caribe brasileiro.",
    content: `
## Quando visitar Maceió?

Maceió, a capital de Alagoas, tem um clima tropical úmido com temperaturas agradáveis durante todo o ano — a média fica entre 24°C e 30°C. Mas a época certa de visitar faz toda a diferença para aproveitar as **piscinas naturais de Pajuçara**, as praias cristalinas e os passeios pela região.

## Tabela climática mês a mês

### Janeiro e Fevereiro — Início da estação chuvosa
- 🌤️ Temperatura: 27-30°C
- 🌧️ Chuva: moderada (pode chover à tarde)
- 💰 Preços: **altos** (alta temporada, verão)
- ✅ Vale a pena? Sim, mas reserve com antecedência

### Março e Abril — Pico da estação chuvosa
- 🌧️ Temperatura: 26-29°C
- 🌧️ Chuva: frequente
- 💰 Preços: **baixos a moderados**
- ⚠️ Atenção: chuvas podem afetar visibilidade das piscinas naturais

### Maio e Junho — Início do inverno nordestino
- 🌥️ Temperatura: 24-27°C
- 🌧️ Chuva: ainda presente
- 💰 Preços: **baixos** (excelente custo-benefício)
- ⚠️ Mar pode estar agitado

### Julho — Férias de inverno
- ⛅ Temperatura: 23-26°C
- 🌧️ Chuva: diminuindo
- 💰 Preços: **altos** (alta temporada de férias)
- ✅ Boa movimentação e infraestrutura plena

### Agosto — Transição
- ⛅ Temperatura: 24-27°C
- 🌤️ Chuva: poucas
- 💰 Preços: **moderados**
- ✅ Ótima relação custo-benefício

### Setembro a Novembro — **MELHOR ÉPOCA**
- ☀️ Temperatura: 26-30°C
- ☀️ Chuva: mínima
- 💰 Preços: **baixos a moderados**
- ✅✅ **Recomendado**: piscinas naturais visíveis, mar calmo, preços menores

### Dezembro — Pré-temporada
- ☀️ Temperatura: 27-31°C
- 🌤️ Chuva: pouca
- 💰 Preços: **subindo** (pré-carnaval e Réveillon)
- ✅ Boa opção antes do pico de preços

## Resumo: qual é a melhor época?

A **melhor época para viajar para Maceió é entre setembro e novembro**. Nesse período:
- ☀️ Sol garantido quase todos os dias
- 🌊 Piscinas naturais com máxima visibilidade na maré baixa
- 💰 Preços até 30% mais baixos que na alta temporada
- 🐢 Temporada de tartarugas marinhas em São Miguel dos Milagres

## Evite esses períodos
- **Março a maio**: maior índice de chuvas, reduz a visibilidade das piscinas naturais
- **Julho**: alta temporada com preços elevados e maior lotação das praias

## Dica Marshe Viagens

Nossos pacotes para Maceió saindo de Belo Horizonte têm melhores preços justamente nos meses de **setembro a novembro**. Reserve com pelo menos 90 dias de antecedência para garantir as melhores tarifas!
    `,
    category: "guias",
    categoryLabel: "Guias de Destinos",
    author: "Marshe Viagens",
    date: "2026-02-07",
    readTime: "8 min",
    image: melhorEpocaMaceioImg,
    tags: ["Maceió", "Alagoas", "Melhor Época", "Nordeste", "Clima"],
    metaDescription:
      "Melhor época para viajar para Maceió: guia mês a mês com clima, preços e dicas. Saiba quando visitar para aproveitar as piscinas naturais e praias!",
  },
  {
    slug: "quanto-custa-viajar-nordeste-2026",
    title: "Quanto Custa Viajar para o Nordeste em 2026: Guia Completo de Preços",
    excerpt:
      "Planeje seu orçamento com precisão! Descubra quanto custa viajar para os principais destinos do Nordeste em 2026: passagens, hospedagem, passeios e alimentação.",
    content: `
## Planeje seu orçamento para o Nordeste em 2026

Viajar para o Nordeste é um sonho de muitos brasileiros — mas quanto custa de verdade? Preparamos um guia completo com os valores atualizados para 2026, para você planejar sua viagem sem surpresas.

## Passagens aéreas saindo de Belo Horizonte

Os preços abaixo são estimativas para voos saindo de **Confins (BH)** em 2026:

| Destino | Baixa Temporada | Alta Temporada |
|---------|----------------|----------------|
| Maceió | R$ 650 - R$ 900 | R$ 1.200 - R$ 1.800 |
| Natal | R$ 700 - R$ 950 | R$ 1.300 - R$ 2.000 |
| Fortaleza | R$ 600 - R$ 850 | R$ 1.100 - R$ 1.700 |
| Salvador | R$ 500 - R$ 750 | R$ 950 - R$ 1.500 |
| Porto de Galinhas | R$ 650 - R$ 900 | R$ 1.200 - R$ 1.800 |
| João Pessoa | R$ 700 - R$ 1.000 | R$ 1.300 - R$ 2.000 |

**Dica:** Pacotes com aéreo incluído costumam sair até 25% mais baratos do que comprar separado.

## Hospedagem por noite

### Maceió
- **Pousada simples** (sem ar-condicionado): R$ 80-150/noite
- **Hotel 3 estrelas** (com café da manhã): R$ 200-350/noite
- **Hotel 4 estrelas** (beira-mar): R$ 400-700/noite

### Natal
- **Pousada simples**: R$ 90-160/noite
- **Hotel 3 estrelas**: R$ 220-380/noite
- **Hotel 4 estrelas**: R$ 450-750/noite

### Porto de Galinhas
- **Pousada simples**: R$ 120-200/noite
- **Bangalô em resort**: R$ 400-800/noite
- **Resort all-inclusive**: R$ 800-1.500/noite

## Alimentação por dia

- **Refeição em restaurante popular**: R$ 25-40
- **Refeição em restaurante turístico**: R$ 60-100
- **Frutos do mar em restaurante médio**: R$ 80-150
- **Lanche em barraca de praia**: R$ 20-40

**Média diária para 2 refeições + lanches**: R$ 100-180 por pessoa

## Passeios e atrações

### Maceió
- Passeio de jangada (Pajuçara): R$ 30-50
- Passeio para São Miguel dos Milagres: R$ 150-250
- Praia do Gunga: R$ 80-120 (inclui traslado)

### Natal
- Buggy nas dunas de Genipabu: R$ 80-150 por buggy
- Parrachos de Maracajaú: R$ 120-180

### Porto de Galinhas
- Jangada + piscinas naturais: R$ 40-60
- Passeio de barco para Praia dos Carneiros: R$ 120-200

## Quanto levar por pessoa para 8 dias?

Com **pacote da Marshe Viagens** (aéreo + hotel + traslados inclusos), calcule:

- 💰 **Alimentação**: R$ 100-150/dia × 8 dias = **R$ 800-1.200**
- 🚤 **Passeios**: R$ 300-600 (total da viagem)
- 🛍️ **Compras e souvenirs**: R$ 200-400
- 🧴 **Extras (protetor solar, farmácia)**: R$ 100-200

**Total extras estimado**: R$ 1.400-2.400 por pessoa, além do pacote.

## Pacotes prontos Marshe Viagens 2026

| Destino | Duração | A partir de |
|---------|---------|------------|
| Maceió | 8 dias | R$ 3.250/pessoa |
| Natal | 8 dias | R$ 2.387/pessoa |
| Salvador | 8 dias | R$ 2.750/pessoa |
| Porto de Galinhas | 8 dias | R$ 2.319/pessoa |
| João Pessoa | 8 dias | R$ 2.182/pessoa |

*Pacotes incluem aéreo, hospedagem com café da manhã e traslados.*

## Economize até 30% com estas dicas

1. **Viaje em baixa temporada** (abril-junho, agosto-outubro)
2. **Reserve com 3-6 meses de antecedência**
3. **Prefira pacotes completos** a comprar tudo separado
4. **Coma onde os locais comem** — 2-3 quadras da praia principal
5. **Compartilhe passeios** de barco e buggy com outros turistas
    `,
    category: "dicas",
    categoryLabel: "Dicas de Viagem",
    author: "Marshe Viagens",
    date: "2026-02-06",
    readTime: "9 min",
    image: custoNordesteImg,
    tags: ["Custo", "Nordeste", "Orçamento", "Preços 2026", "Planejamento"],
    metaDescription:
      "Quanto custa viajar para o Nordeste em 2026? Guia completo de preços: passagens de BH, hospedagem, alimentação e passeios nos principais destinos. Planeje seu orçamento!",
  },
  {
    slug: "pacotes-baratos-nordeste-2026",
    title: "Pacotes Baratos para o Nordeste em 2026: Os Melhores Destinos e Preços",
    excerpt:
      "Encontre os melhores pacotes de viagem para o Nordeste em 2026. Compare destinos, preços e dicas para fechar o pacote ideal saindo de Belo Horizonte.",
    content: `
## Os melhores pacotes para o Nordeste em 2026

Viajar para o Nordeste com qualidade e sem gastar uma fortuna é possível — especialmente quando você escolhe o destino certo, na época certa e com a agência certa. A **Marshe Viagens** preparou um comparativo completo dos melhores pacotes para 2026.

## Por que escolher um pacote?

- ✅ **Economia**: pacotes costumam ser 20-30% mais baratos que comprar tudo separado
- ✅ **Praticidade**: aéreo, hotel e traslado em um único pagamento
- ✅ **Segurança**: suporte especializado em caso de imprevistos
- ✅ **Parcelamento**: pague em até 10x sem juros

## Destinos mais baratos do Nordeste em 2026

### 1. João Pessoa — A partir de R$ 2.182/pessoa
A capital paraibana é **um dos destinos mais baratos** do Nordeste, com praias lindas como Coqueirinho e o famoso pôr do sol do Jacaré. Ideal para quem quer Nordeste sem pagar caro.

**O que inclui:** Aéreo BH → João Pessoa, 7 noites com café da manhã, traslados.

### 2. Fortaleza — A partir de R$ 2.250/pessoa
Fortaleza combina **praia, cultura e diversão** com preços acessíveis. A Praia do Futuro, o Mercado Central e as dunas de Jericoacoara (excursão) são os destaques.

**O que inclui:** Aéreo BH → Fortaleza, 7 noites com café da manhã, traslados.

### 3. Salvador — A partir de R$ 2.750/pessoa
A capital baiana oferece **cultura, história e praias** em um único destino. Pelourinho, Farol da Barra e acarajé são imperdíveis.

**O que inclui:** Aéreo BH → Salvador, 7 noites com café da manhã, traslados.

### 4. Natal — A partir de R$ 2.387/pessoa
Natal tem sol o ano inteiro e os buggys pelas dunas são uma experiência única. A Praia de Ponta Negra e os Parrachos de Maracajaú são os grandes atrativos.

**O que inclui:** Aéreo BH → Natal, 7 noites com café da manhã, traslados.

### 5. Porto de Galinhas — A partir de R$ 2.319/pessoa
As **piscinas naturais** de Porto de Galinhas são únicas no mundo. É um destino um pouco mais caro, mas o custo-benefício compensa.

**O que inclui:** Aéreo BH → Recife + traslado, 7 noites com café da manhã, traslados.

### 6. Maceió — A partir de R$ 3.250/pessoa
O "Caribe brasileiro" justifica o investimento: águas em tons de turquesa, praias desertas e a experiência de nadar com tartarugas em São Miguel dos Milagres.

**O que inclui:** Aéreo BH → Maceió, 7 noites com café da manhã, traslados.

## Dicas para conseguir os melhores preços

### Reserve com antecedência
Pacotes reservados com **3 a 6 meses de antecedência** têm tarifas de 15-25% mais baixas. Para alta temporada (julho, dezembro-janeiro), reserve com ainda mais tempo.

### Viaje na baixa temporada
Os meses de **abril, maio, agosto, setembro e outubro** têm os melhores preços e menos turistas. O clima ainda é bom na maioria dos destinos nordestinos.

### Aproveite promoções relâmpago
Cadastre-se no grupo do WhatsApp da Marshe Viagens para receber promoções exclusivas em primeira mão.

### Compare datas de ida e volta
Às vezes, mudar a data de ida ou volta em 1-2 dias pode gerar economias significativas.

## Parcelamento facilitado

A Marshe Viagens oferece parcelamento em até **10x no cartão de crédito sem juros** para pacotes selecionados. Entre em contato pelo WhatsApp e simule seu pacote ideal.

## Por que a Marshe Viagens?

- 🏆 Especialistas em turismo saindo de Belo Horizonte
- 📱 Suporte pelo WhatsApp antes, durante e após a viagem
- 🛫 Parcerias com as principais companhias aéreas
- 🏨 Hotéis selecionados e avaliados pela nossa equipe
- 💳 Parcelamento em até 10x sem juros
    `,
    category: "roteiros",
    categoryLabel: "Roteiros",
    author: "Marshe Viagens",
    date: "2026-02-05",
    readTime: "8 min",
    image: pacotesBaratosImg,
    tags: ["Pacotes", "Nordeste", "Preços Baratos", "2026", "Viagem Econômica"],
    metaDescription:
      "Pacotes baratos para o Nordeste em 2026: compare os melhores destinos e preços saindo de BH. João Pessoa, Fortaleza, Maceió, Natal e mais com aéreo incluso!",
  },
  // ===== 3 POSTS EXTRAS (1 por categoria) =====
  {
    slug: "guia-completo-fortaleza-ce",
    title: "Guia Completo de Fortaleza: Praias, Cultura, Gastronomia e Passeios",
    excerpt:
      "Descubra Fortaleza além do óbvio: da Praia do Futuro ao Mercado Central, do lagostim ao caju, passando pelos melhores bairros e dicas para aproveitar ao máximo.",
    content: `
## Fortaleza: a Capital do Ceará

Fortaleza é a **quinta maior cidade do Brasil** e um dos destinos turísticos mais visitados do país. Com 34 km de litoral urbano, culinária diversificada, vida noturna intensa e o interior cheio de atrações como Jericoacoara e Canoa Quebrada, a cidade agrada a todos os perfis de viajante.

## Principais pontos turísticos

### Praia do Futuro
A **Praia do Futuro** é a praia mais famosa de Fortaleza, com seus tradicionais quiosques de palha, o famoso caranguejo e a famosa "quinta da praia do futuro" — terças-feiras com muito forró.

### Beira-Mar
A **Avenida Beira-Mar** é o cartão-postal de Fortaleza: ciclovia, calçadão, barracas coloridas e uma das melhores feiras de artesanato e rendas do Nordeste.

### Mercado Central
O **Mercado Central** é imperdível para compras: renda, artesanato em madeira, cajuína, rapadura, bordados e muito mais. Quatro andares de cultura cearense.

### Dragão do Mar
O **Centro Dragão do Mar de Arte e Cultura** é o coração cultural de Fortaleza: museus, teatro, cinema, bares e o Museu da Cultura Cearense.

### Cais do Porto
Um dos complexos gastronômicos mais animados de Fortaleza, com bares, restaurantes e shows de forró ao vivo.

## Praias imperdíveis

1. **Praia do Futuro** — badalada, com barracas e quiosques
2. **Praia de Iracema** — histórica, com o famoso "Iracema à beira-mar"
3. **Praia Meireles** — urbanizada, ótima para caminhadas
4. **Canoa Quebrada** (175 km) — falésias cor-de-rosa e duna
5. **Jericoacoara** (300 km) — paraíso preservado, na lista de 10 melhores praias do mundo

## Gastronomia cearense

- **Lagosta e camarão** — frutos do mar abundantes e frescos
- **Caranguejo** — especialidade da Praia do Futuro
- **Paçoca de pilão** — amendoim moído com rapadura
- **Caju-amigo** — suco de caju com vodca, típico de Fortaleza

### Onde comer
- **Coco Bambu** — referência em frutos do mar
- **La Tablita** — espetinhos e petiscos com vista para a Beira-Mar
- **Restaurante Colher de Pau** — culinária cearense autêntica

## Melhor época

Fortaleza tem sol praticamente o ano inteiro. Os meses de **agosto a dezembro** têm menos chuva. De dezembro a março, o vento é forte — ótimo para kite surf!

## Excursões imperdíveis

- **Jericoacoara**: 300 km, mas vale cada quilômetro. Reserve 1-2 dias
- **Canoa Quebrada**: 175 km, falésias e dunas deslumbrantes
- **Canyons do Guarani**: para os amantes de aventura e natureza

## Pacotes saindo de BH

A Marshe Viagens oferece pacotes de **8 dias para Fortaleza** saindo de Confins a partir de **R$ 2.250 por pessoa**, com aéreo, hospedagem com café da manhã e traslados inclusos.
    `,
    category: "guias",
    categoryLabel: "Guias de Destinos",
    author: "Marshe Viagens",
    date: "2026-02-04",
    readTime: "9 min",
    image: guiaFortalezaImg,
    tags: ["Fortaleza", "Ceará", "Nordeste", "Praias", "Jericoacoara"],
    metaDescription:
      "Guia completo de Fortaleza: praias, Mercado Central, Dragão do Mar, gastronomia cearense, Jericoacoara e Canoa Quebrada. Planeje sua viagem à capital cearense!",
  },
  {
    slug: "seguro-viagem-vale-a-pena-contratar",
    title: "Seguro Viagem: Vale a Pena Contratar? Guia Completo Para Decidir",
    excerpt:
      "Entenda de uma vez por todas se o seguro viagem compensa, o que cobre, quanto custa e como escolher o melhor plano para sua viagem nacional ou internacional.",
    content: `
## Seguro viagem: uma proteção que pode salvar sua viagem

Você já se perguntou se o **seguro viagem vale a pena**? A resposta curta é: sim, especialmente para viagens internacionais. Mas para viagens nacionais também há situações em que ele faz toda a diferença.

## O que é seguro viagem?

O seguro viagem é um produto que cobre **imprevistos durante a viagem**: problemas médicos, cancelamentos, extravio de bagagem, atrasos de voo e muito mais. Existem planos para viagens nacionais e internacionais.

## O que cobre o seguro viagem nacional?

### Coberturas mais comuns
- ✅ **Assistência médica** em caso de acidentes ou emergências
- ✅ **Cancelamento ou interrupção** da viagem (em alguns planos)
- ✅ **Extravio de bagagem** e reembolso por itens essenciais
- ✅ **Atraso de voo** — reembolso de despesas extras
- ✅ **Assistência jurídica** em caso de acidentes

### O que geralmente não cobre
- ❌ Doenças preexistentes (na maioria dos planos básicos)
- ❌ Esportes radicais sem addendum específico
- ❌ Danos a terceiros
- ❌ Casos que não sejam emergências médicas

## Quanto custa?

Para viagens **nacionais** (8-10 dias):
- Plano básico: R$ 30-60
- Plano intermediário: R$ 60-120
- Plano completo: R$ 100-200

Para viagens **internacionais** (10 dias):
- América do Sul: R$ 80-200
- Europa/EUA: R$ 200-500
- Planos premium: R$ 400-800

## Quando o seguro viagem é obrigatório?

- 🌍 **Europa (Schengen)**: obrigatório para obter o visto, com cobertura mínima de €30.000
- 🌎 **Estados Unidos**: não obrigatório, mas altamente recomendado — uma consulta médica pode custar US$ 500-5.000
- 🇧🇷 **Brasil**: não obrigatório, mas recomendado em destinos remotos

## Vale a pena para viagens nacionais?

**Sim, em algumas situações:**
- Viagem de avião (atraso/cancelamento de voo é mais frequente do que parece)
- Destinos com baixa infraestrutura médica (interior, praia remota)
- Viagem com crianças ou idosos
- Quando a viagem tem custo total alto

**Pode dispensar:**
- Viagem curta (fim de semana) de carro
- Destinos com boa infraestrutura médica e hospital perto
- Quando você tem plano de saúde com boa cobertura nacional

## Como escolher o melhor seguro?

### 1. Analise a cobertura médica
Para viagens nacionais, verifique se já tem **plano de saúde** com cobertura no destino. Se sim, o seguro adicional pode focar em assistência de viagem.

### 2. Verifique a rede credenciada
Prefira seguradoras com ampla rede de atendimento no destino.

### 3. Compare exclusões
Leia o contrato com atenção. Atividades de aventura (mergulho, rapel, kite surf) geralmente precisam de cobertura adicional.

### 4. Prefira franquias menores
Franquia é o valor que você paga antes do seguro entrar. Franquias menores significam menos gasto no seu bolso.

## Seguro viagem nos pacotes Marshe

Os pacotes da Marshe Viagens podem ser complementados com **seguro viagem sob medida**. Consulte nossos especialistas pelo WhatsApp para adicionar essa proteção ao seu pacote por um valor acessível.
    `,
    category: "dicas",
    categoryLabel: "Dicas de Viagem",
    author: "Marshe Viagens",
    date: "2026-02-03",
    readTime: "8 min",
    image: seguroViagemImg,
    tags: ["Seguro Viagem", "Dicas", "Planejamento", "Proteção", "Viagem Segura"],
    metaDescription:
      "Seguro viagem vale a pena? Guia completo: o que cobre, quanto custa, quando contratar e como escolher o melhor plano para viagem nacional e internacional.",
  },
  {
    slug: "roteiro-3-dias-cabo-santo-agostinho",
    title: "Roteiro de 3 Dias em Cabo de Santo Agostinho: Praias Secretas de Pernambuco",
    excerpt:
      "Descubra as praias secretas perto de Recife em 3 dias: Cabo de Santo Agostinho concentra Cupe, Muro Alto, Porto de Galinhas e algumas das praias mais bonitas do Nordeste.",
    content: `
## Cabo de Santo Agostinho: o destino que surpreende

A menos de 60 km de Recife, o município de **Cabo de Santo Agostinho** reúne algumas das praias mais deslumbrantes de Pernambuco. De Porto de Galinhas a Muro Alto, passando por praias praticamente desertas, é um destino que surpreende até os viajantes mais experientes.

## Dia 1 — Porto de Galinhas e Piscinas Naturais

Comece pelo destino mais famoso da região:

- Manhã: Chegada em **Porto de Galinhas** e café da manhã com tapioca
- 9h: **Passeio de jangada** até as piscinas naturais (maré baixa — chegue cedo!)
- Almoço: **Beijupirá** ou **Barcaxeira** — restaurantes icônicos da vila
- Tarde: **Praia de Maracaípe** — ótima para surf e observação de cavalos-marinhos
- Noite: Explorar a vila de Porto de Galinhas, bares e lojas

**Dica:** Compre o passeio de jangada direto na praia, sem intermediários.

## Dia 2 — Muro Alto e Praias Desertas

O segundo dia é para praias mais tranquilas:

- Manhã: **Praia de Muro Alto** — extensa barreira de recifes cria uma enorme piscina natural calma, perfeita para famílias
- Almoço: Barracas de praia em Muro Alto
- Tarde: **Praia de Cupe** — quase deserta, com coqueirais e areias brancas
- **Praia de Serrambi** — acesso mais difícil, mas vale a pena pela beleza selvagem

## Dia 3 — Forte Orange e Retorno

O último dia para história e paisagem:

- Manhã: **Ilha de Itamaracá** (ao norte, 1h de carro) — Forte Orange, construído pelos holandeses em 1631
- Visita ao **Centro de Mamíferos Aquáticos** — projeto de preservação de peixe-boi
- Almoço de frutos do mar em Itamaracá
- Tarde: Passeio pela **Vila Velha de Itamaracá** — a primeira capital de Pernambuco
- Retorno a Recife

## Praias do Cabo para todos os perfis

| Praia | Perfil | Destaque |
|-------|--------|---------|
| Porto de Galinhas | Todos | Piscinas naturais de jangada |
| Muro Alto | Famílias | Águas calmas, sem ondas |
| Maracaípe | Surfistas | Ondas perfeitas |
| Cupe | Casais | Isolada e romântica |
| Serrambi | Aventureiros | Preservada e selvagem |

## Gastronomia pernambucana

- **Tainha na brasa** — peixe típico das barracas de praia
- **Casquinha de caranguejo** — entrada obrigatória
- **Caldo de sururu** — molusco típico em caldo temperado
- **Bolo de rolo** — doce pernambucano com goiabada

## Onde ficar?

- **Porto de Galinhas**: pousadas charmosas a partir de R$ 250/noite
- **Muro Alto**: resorts com área de piscinas naturais (R$ 600-1.500/noite)
- **Recife**: hotéis com preços menores e aluguel de carro para explorar a região

## Quanto custa?

A Marshe Viagens oferece pacotes de **8 dias para Porto de Galinhas** (Cabo de Santo Agostinho) saindo de Belo Horizonte/Confins a partir de **R$ 2.319 por pessoa**, incluindo aéreo, hospedagem e traslados.
    `,
    category: "roteiros",
    categoryLabel: "Roteiros",
    author: "Marshe Viagens",
    date: "2026-02-02",
    readTime: "7 min",
    image: roteirosCaboImg,
    tags: ["Cabo de Santo Agostinho", "Pernambuco", "Porto de Galinhas", "Muro Alto", "Nordeste"],
    metaDescription:
      "Roteiro de 3 dias em Cabo de Santo Agostinho: Porto de Galinhas, Muro Alto, Cupe e praias desertas de Pernambuco. Guia completo para planejar sua viagem!",
  },
];
