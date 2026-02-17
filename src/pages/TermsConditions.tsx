import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";
import { useSeo } from "@/hooks/use-seo";

const TermsConditions = () => {
  useSeo({
    title: "Termos e Condições | Marshe Viagens",
    description: "Termos e condições de uso da Marshe Viagens. Leia antes de contratar nossos serviços de viagem.",
    canonical: "https://marsheviagens.com.br/termos",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-center">
            Termos e <span className="text-primary">Condições</span>
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground text-sm">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e usar o site da Marshe Viagens, você concorda em cumprir e estar vinculado 
                a estes Termos e Condições de Uso. Se você não concordar com qualquer parte destes termos, 
                não deve usar nosso site.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                2. Uso do Site
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você concorda em usar este site apenas para fins legais e de maneira que não:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Viole qualquer lei ou regulamento aplicável</li>
                <li>Infrinja direitos de terceiros</li>
                <li>Interfira no funcionamento normal do site</li>
                <li>Tente acessar áreas não autorizadas do site</li>
                <li>Utilize o site para fins fraudulentos ou maliciosos</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                3. Conteúdo e Propriedade Intelectual
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo o conteúdo deste site, incluindo textos, imagens, logotipos, design e código, 
                é de propriedade da Marshe Viagens ou de seus licenciadores e está protegido por leis 
                de propriedade intelectual. É proibida a reprodução, distribuição ou modificação 
                do conteúdo sem autorização prévia por escrito.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                4. Cookies e Rastreamento
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ao continuar navegando em nosso site após visualizar o aviso de cookies, você consente com:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>O uso de cookies essenciais para funcionamento do site</li>
                <li>Cookies de análise (Google Analytics) para melhorar nossos serviços</li>
                <li>Cookies de publicidade (Google AdSense) para exibição de anúncios personalizados</li>
                <li>O armazenamento de preferências do usuário (como tema claro/escuro)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Você pode gerenciar ou retirar seu consentimento a qualquer momento através das 
                configurações do navegador ou do banner de cookies.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                5. Publicidade
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Este site exibe anúncios do Google AdSense. Os anúncios são claramente identificados 
                e separados do conteúdo editorial. O conteúdo dos anúncios é de responsabilidade dos 
                respectivos anunciantes. Ao clicar em um anúncio, você será direcionado para um site 
                de terceiros, cujos termos e políticas de privacidade são de responsabilidade do 
                respectivo site.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                6. Dados Coletados e Armazenados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para o funcionamento do site e exibição de anúncios, coletamos e armazenamos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Dados de navegação:</strong> Páginas visitadas, tempo de permanência, origem do acesso</li>
                <li><strong className="text-foreground">Dados técnicos:</strong> Endereço IP, tipo de dispositivo, navegador utilizado</li>
                <li><strong className="text-foreground">Preferências:</strong> Configurações de tema, idioma e consentimento de cookies</li>
                <li><strong className="text-foreground">Dados de anúncios:</strong> Interações com anúncios para personalização publicitária</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Estes dados são utilizados para melhorar a experiência do usuário, análise de tráfego 
                e personalização de anúncios. Para mais detalhes, consulte nossa{" "}
                <a href="/privacidade" className="text-primary hover:underline">Política de Privacidade</a>.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                7. Limitação de Responsabilidade
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                As informações fornecidas neste site são apenas para fins informativos. A Marshe Viagens 
                não garante a precisão, completude ou atualidade das informações. Não nos responsabilizamos 
                por quaisquer danos diretos ou indiretos decorrentes do uso deste site ou da impossibilidade 
                de utilizá-lo.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                8. Links para Sites de Terceiros
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Este site pode conter links para sites de terceiros. Não temos controle sobre o conteúdo 
                ou práticas de privacidade desses sites e não nos responsabilizamos por eles. Recomendamos 
                que você leia as políticas de privacidade de qualquer site que visitar.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                9. Alterações nos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações 
                entrarão em vigor imediatamente após a publicação no site. O uso continuado do site 
                após as alterações constitui aceitação dos novos termos.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                10. Lei Aplicável
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos e Condições são regidos pelas leis da República Federativa do Brasil. 
                Qualquer disputa será submetida à jurisdição dos tribunais de Contagem, Minas Gerais.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                11. Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para dúvidas sobre estes termos, entre em contato:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">E-mail:</strong> marshe.viagens@gmail.com</p>
                <p><strong className="text-foreground">Telefone:</strong> (31) 97239-1400</p>
                <p><strong className="text-foreground">Endereço:</strong> Rua Dom Geraldo Fernandes Bijos, 375, Santa Helena, Contagem, MG</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default TermsConditions;
