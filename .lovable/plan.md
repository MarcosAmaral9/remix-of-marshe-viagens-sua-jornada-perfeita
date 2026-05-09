## Objetivo

Reforçar a segurança (HTTPS forçado em todas as páginas), revisar vulnerabilidades, melhorar a responsividade em diferentes tamanhos de tela e garantir que o favicon exibido pelo Google seja o atual (logo Marshe), não o antigo preto com triângulo branco.

---

## 1. HTTPS em todas as páginas

- O `public/.htaccess` já força HTTPS via `RewriteRule` (válido na Hostinger). Vou complementar com:
  - **Header HSTS** (`Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`) no `.htaccess`, garantindo que o navegador só acesse via HTTPS após a primeira visita.
  - **Content-Security-Policy** básica (com `upgrade-insecure-requests`) para forçar upgrade automático de qualquer recurso http:// remanescente.
  - Headers extras de segurança: `Permissions-Policy`, `X-XSS-Protection`.
- Auditar URLs no código (`index.html`, componentes, edge functions) para garantir que toda referência externa use `https://` — substituir qualquer `http://` que apareça.

## 2. Vulnerabilidades e segurança

- Rodar o linter do banco (Supabase) e o scan de segurança automatizado para confirmar que não há políticas RLS ausentes ou tabelas expostas (escaneamento atual está vazio, mas desatualizado — vou re-executar).
- Revisar as duas Edge Functions (`send-lead-whatsapp`, `tts-narrate`) quanto a:
  - Validação de input (evitar injeção em payloads enviados ao WhatsApp/TTS).
  - Headers CORS restritos ao domínio oficial `marsheviagens.com` em vez de `*` quando aplicável.
  - Não vazar segredos em logs.
- Garantir que `noopener noreferrer` esteja em todos os `target="_blank"` (links WhatsApp, redes sociais).
- Confirmar que o consentimento de cookies já existente continua bloqueando scripts não essenciais até o aceite (revisão do `CookieConsent.tsx` + carregamento de GTM/AdSense em `index.html`).

## 3. Responsividade em diferentes tamanhos de tela

Auditoria visual e ajustes nos breakpoints do Tailwind (`sm`, `md`, `lg`, `xl`, `2xl`) nas seções principais:

- **Hero** — ajustar tamanhos de heading (`text-3xl sm:text-4xl md:text-5xl lg:text-6xl`) e padding em telas pequenas (≤375px) e tablets (768–1024px).
- **SocialProof / Testimonials** — garantir que o card centralizado e a fonte aumentada não quebrem em mobile (≤390px) nem em ultrawide.
- **Header** — verificar menu hambúrguer em 360–414px e dropdown em tablet.
- **FeaturedPackages, Destinations, CircuitosViagem, BlogPreview** — grids responsivos (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) e imagens com `aspect-ratio` consistente.
- **ExitIntentPopup, OrcamentoDialog, LeadCaptureForm** — garantir scroll interno em telas baixas (`max-h-[90vh] overflow-y-auto`).
- **Footer e ContactSection** — empilhamento correto em mobile.
- Adicionar utilitários globais no `index.css` para evitar overflow horizontal em telas estreitas e melhorar `line-height` de títulos longos.

Testes nos viewports: 320, 375, 390, 414, 768, 820, 1024, 1280, 1366, 1920.

## 4. Favicon correto da Marshe

- O `public/favicon.ico` atual tem 180KB (provavelmente PNG renomeado, motivo do Google ainda indexar a versão antiga preta com triângulo).
- Vou:
  1. Substituir o favicon usando a logo oficial da Marshe (`public/lovable-uploads/0d4a3a04-daa2-44e3-b803-68c32f0300e9.png`) como base.
  2. Gerar versões otimizadas: `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png` (180×180) e `favicon.ico` (multi-resolução real 16/32/48).
  3. Atualizar `index.html` com tags completas:
     ```html
     <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png?v=2" />
     <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png?v=2" />
     <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
     <link rel="shortcut icon" href="/favicon.ico?v=2" />
     ```
  4. Adicionar o parâmetro `?v=2` (cache-busting) para forçar navegadores e crawlers a recarregar.
  5. Atualizar `public/sw.js` para cachear os novos arquivos e bumpar `CACHE_NAME` para `marshe-viagens-v2` invalidando o cache antigo.
- Observação ao usuário: o Google pode levar de alguns dias até semanas para atualizar o favicon nos resultados de busca; é necessário publicar o site e, se desejar, solicitar reindexação no Google Search Console.

---

## Detalhes técnicos

- Arquivos editados:
  - `public/.htaccess` — HSTS, CSP, headers extras.
  - `index.html` — tags de favicon completas, ajustes de meta se necessário.
  - `public/favicon.ico` + novos `public/favicon-32.png`, `public/favicon-192.png`, `public/apple-touch-icon.png` (gerados via ImageMagick a partir da logo).
  - `public/sw.js` — bump de cache + novos assets.
  - `src/index.css` — utilitários responsivos (overflow, clamp em headings).
  - Componentes ajustados para responsividade: `Hero.tsx`, `Header.tsx`, `SocialProof.tsx`, `FeaturedPackages.tsx`, `Destinations.tsx`, `Footer.tsx`, `ContactSection.tsx`, `ExitIntentPopup.tsx` (ajustes pontuais de classes Tailwind).
  - `supabase/functions/send-lead-whatsapp/index.ts` e `tts-narrate/index.ts` — CORS restrito e validação de input.
- Re-executar `security--run_security_scan` e `supabase--linter` ao final para confirmar zero findings.

## Fora do escopo

- Republicação no Google Search Console (ação manual do usuário, posso indicar como).
- Mudanças no provedor de DNS/hospedagem.
