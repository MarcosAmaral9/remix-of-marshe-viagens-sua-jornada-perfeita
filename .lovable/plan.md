## Objetivo

Enriquecer as páginas de cada destino adicionando uma foto real e um texto descritivo mais completo para cada "Ponto Turístico Imperdível" já listado.

## Escopo

10 páginas em `src/pages/destinos/`:
Cabo de Santo Agostinho, Fortaleza, João Pessoa, Maceió, Natal, Porto de Galinhas, Porto Seguro, Salvador (Nordeste) + Foz do Iguaçu e Gramado (Sul).

Cada página tem 6 pontos turísticos → total de **~60 fotos** a adicionar.

## Fonte das imagens

Buscar fotos reais de cada atração via **Firecrawl** (scrape/search em Wikipedia, sites oficiais de turismo e bancos livres). Para pontos onde não houver imagem livre de bom uso disponível, usar `imagegen` (modelo standard, estilo fotográfico realista) como fallback.

As imagens serão salvas em `src/assets/pontos/{destino}/{slug-do-ponto}.jpg` e enviadas para o CDN via `lovable-assets` (cria `.asset.json` e remove o binário do repo, seguindo o padrão do projeto).

## Mudança de UI em cada página

Substituir o grid atual de cards texto-only:

```text
Antes: card compacto (nome + 1 linha)
Depois: card com foto no topo (aspect-video), nome (h3), 3–5 linhas descrevendo:
        - o que é o lugar
        - o que fazer / experiência
        - dica prática (melhor horário, acesso, etc.)
```

Layout continua `grid sm:grid-cols-2 gap-4`, com `rounded-3xl` (regra do projeto), `overflow-hidden`, imagem `loading="lazy"` + `alt` descritivo para SEO.

## Passos de execução

1. Para cada destino, expandir o array de `spots` no arquivo `.tsx` incluindo campos `image` (import do `.asset.json`) e `desc` reescrito (2–4 frases).
2. Gerar/coletar as ~60 imagens em paralelo por destino, subir ao CDN.
3. Atualizar o JSX do bloco "Pontos Turísticos Imperdíveis" em cada página para renderizar a foto + descrição.
4. Rodar `bun run build` para validar imports.

## Detalhes técnicos

- Novo shape do item: `{ name: string; desc: string; image: string; alt: string }`
- Import padrão: `import praiaCalhetas from "@/assets/pontos/cabo-de-santo-agostinho/praia-de-calhetas.jpg.asset.json";` → usar `praiaCalhetas.url` no `<img src>`.
- Imagens ~1200×800, JPG, otimizadas para web (aspect-video no card).
- Preferência de fonte: Firecrawl → Wikimedia Commons (licença livre). Fallback: `imagegen` com prompt fotográfico realista descrevendo o local.
- Nenhuma alteração em preços, datas, layout do sidebar de cotação ou outros componentes.

## Fora de escopo

- Circuitos Europa (não foi pedido).
- Alterar seções "Sobre o Destino", "Melhor Época", "Gastronomia".
- Adicionar galeria/lightbox (só a foto no card).

## Confirmação necessária

Antes de executar: prefere que eu use **fotos reais coletadas via Firecrawl/Wikimedia** (autênticas, mas dependem de disponibilidade e podem exigir crédito de autor), ou **imagens geradas por IA** (100% consistentes visualmente, sem preocupação de licença)? A recomendação é priorizar Firecrawl e usar IA só como fallback. Use apenas imagens sem direitos autorais, se não houver, faça uma lista das imagens que terão que ser feitas por ia. Depois irei utilizar a ajuda de outras ferramentas como o Flow para criar as imagens de IA.