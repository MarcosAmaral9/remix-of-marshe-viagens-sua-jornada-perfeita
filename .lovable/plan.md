
# Reestruturação Visual Global — Identidade Marshe Premium

## Objetivo
Aplicar nova identidade de marca em todo o site, com paleta expandida (azul + dourado + laranja atual + preto/branco), tipografia hierárquica (Bebas Neue, Montserrat, Poppins, Allison) e estilo premium de agência de viagens.

## 1. Tipografia (Google Fonts)

Carregar no `index.html`:
- **Bebas Neue** → títulos principais (H1, H2, hero)
- **Montserrat** → subtítulos, datas, valores, números, badges
- **Poppins** → corpo de texto / parágrafos (já em uso)
- **Allison** → frases emocionais e citações ("dos sonhos", taglines)

Mapeamento Tailwind (`tailwind.config.ts`):
```
fontFamily: {
  sans: ['Poppins', 'sans-serif'],        // texto
  display: ['Bebas Neue', 'sans-serif'],  // títulos grandes
  serif: ['Bebas Neue', 'sans-serif'],    // alias para manter retrocompat dos h1-h6
  montserrat: ['Montserrat', 'sans-serif'],
  script: ['Allison', 'cursive'],         // emocional
}
```

Em `index.css`, regra global de h1-h6 muda de `Volkhov` para `Bebas Neue` com `letter-spacing` levemente aberto. Subtítulos/eyebrows usam `font-montserrat uppercase tracking-wider`. Frases destacadas como "dos sonhos" usam `font-script text-primary text-5xl`.

## 2. Paleta de cores (HSL em `index.css`)

Mantém laranja como primário (CTA), adiciona azul Marshe como base institucional e dourado como destaque premium.

**Light:**
```
--background: 0 0% 100%
--foreground: 215 60% 12%       (azul-preto)
--primary: 24 95% 53%           (laranja atual — CTAs)
--secondary: 215 65% 18%        (azul Marshe — institucional)
--accent: 42 75% 52%             (dourado — destaques)
--muted: 215 20% 96%
--gold: 42 75% 52%
--gold-light: 42 80% 88%
--navy: 215 65% 18%
--navy-deep: 215 70% 10%
```

**Dark:**
```
--background: 215 70% 7%        (azul profundo)
--foreground: 0 0% 98%
--primary: 24 95% 58%
--secondary: 0 0% 98%
--accent: 42 80% 60%             (dourado mais luminoso)
--gold: 42 80% 62%
--navy: 215 50% 14%
```

Novos gradientes:
- `--gradient-premium: linear-gradient(135deg, hsl(var(--navy)) 0%, hsl(var(--navy-deep)) 100%)`
- `--gradient-gold: linear-gradient(135deg, hsl(42 75% 52%), hsl(38 85% 60%))`
- `--shadow-gold: 0 10px 40px -10px hsl(var(--gold) / 0.4)`

Adicionar tokens `gold`, `navy`, `navy-deep` ao `tailwind.config.ts`.

## 3. Componentes globais a atualizar

- **`Header`** — fundo `bg-navy` em scroll, logo + dourado em hover, links Montserrat uppercase.
- **`Hero`** — H1 em Bebas Neue gigante, "dos sonhos" em Allison dourado, badge eyebrow Montserrat, CTA primário laranja, secundário com borda dourada.
- **`SocialProof`, `WhyChooseUs`, `FeaturedPackages`, `HowItWorks`, `Services`, `LeadMagnet`, `BlogPreview`, `WhatsAppClub`, `FAQ`, `FinalCTA`, `ContactSection`, `Footer`** — títulos Bebas, eyebrow Montserrat, ícones/preços em dourado, cards `rounded-3xl` com borda sutil dourada no hover.
- **`button.tsx`** — adicionar variantes:
  - `gold` (fundo dourado, texto navy)
  - `premium` (gradiente navy → navy-deep com borda dourada)
- **`card.tsx`** — variante premium com `border-gold/20 hover:border-gold/60 hover:shadow-gold`.
- **`OrcamentoDialog`, `LeadCaptureForm`, `ExitIntentPopup`, `CookieConsent`** — adaptar tipografia e botões.

## 4. Páginas internas (mesma linguagem visual)

- `Index`, `Blog`, `BlogPost`, `Destinos`, `DestinosNordeste`, `DestinosSul`, `CircuitosEuropa`, `AboutUs`, `PrivacyPolicy`, `TermsConditions`, `NotFound`
- 10 páginas em `src/pages/destinos/*` e `circuitos/CircuitoDetail`
  - Hero da página com overlay navy + título Bebas + tagline Allison
  - Preços/datas em Montserrat bold dourado
  - "Solicitar Cotação" mantém laranja (regra de marca já memorizada)

## 5. Memória do projeto

Atualizar `mem://style/visual-identity-patterns` com:
- Tipografia oficial (Bebas / Montserrat / Poppins / Allison)
- Paleta HSL final (laranja CTA, azul institucional, dourado destaque)
- Regra: dourado é APENAS destaque (não substitui laranja em CTAs)

## Detalhes técnicos

- Manter regra existente: H1 do hero em preto no light mode; FAQ em laranja no dark — não quebrar.
- Manter `rounded-3xl` global e layout full-width.
- Sem mudança em business logic, rotas, edge functions, Supabase ou conteúdo.
- Service worker `sw.js` não precisa bump (sem mudança de assets binários).
- Verificar contraste WCAG AA em ambos temas após troca.

## Entregáveis

1. `index.html` — preload das 4 famílias do Google Fonts
2. `tailwind.config.ts` — fontes + cores `gold/navy/navy-deep`
3. `src/index.css` — tokens HSL light/dark, gradientes e shadows
4. ~20 componentes + ~15 páginas com classes de tipografia/cor atualizadas
5. `button.tsx` e `card.tsx` com novas variantes premium/gold
6. Memória de identidade visual atualizada
