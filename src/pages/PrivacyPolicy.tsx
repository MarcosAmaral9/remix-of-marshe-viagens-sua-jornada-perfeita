import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-center">
            Política de <span className="text-primary">Privacidade</span>
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-muted-foreground text-sm">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                1. Introdução
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A Marshe Viagens ("nós", "nosso" ou "empresa") está comprometida em proteger a privacidade 
                dos visitantes do nosso site. Esta Política de Privacidade explica como coletamos, usamos, 
                compartilhamos e protegemos suas informações pessoais quando você visita nosso site.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                2. Dados Coletados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Podemos coletar os seguintes tipos de informações:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Dados de navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo de permanência</li>
                <li><strong className="text-foreground">Cookies:</strong> Utilizamos cookies para melhorar sua experiência e para fins publicitários</li>
                <li><strong className="text-foreground">Dados de contato:</strong> Nome, e-mail e telefone, quando fornecidos voluntariamente</li>
                <li><strong className="text-foreground">Dados de localização:</strong> Região geográfica aproximada baseada no IP</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                3. Uso dos Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Melhorar nosso site e serviços</li>
                <li>Personalizar sua experiência de navegação</li>
                <li>Exibir anúncios relevantes através do Google AdSense</li>
                <li>Analisar o tráfego do site através do Google Analytics</li>
                <li>Responder às suas solicitações de contato</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                4. Cookies e Tecnologias de Rastreamento
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos cookies e tecnologias similares para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><strong className="text-foreground">Cookies essenciais:</strong> Necessários para o funcionamento do site</li>
                <li><strong className="text-foreground">Cookies de análise:</strong> Google Analytics para entender como o site é utilizado</li>
                <li><strong className="text-foreground">Cookies de publicidade:</strong> Google AdSense para exibir anúncios personalizados</li>
                <li><strong className="text-foreground">Cookies de preferências:</strong> Para lembrar suas configurações (ex: tema claro/escuro)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Você pode gerenciar suas preferências de cookies através do banner de consentimento exibido 
                ao acessar o site, ou através das configurações do seu navegador.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                5. Google AdSense e Publicidade
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos o Google AdSense para exibir anúncios em nosso site. O Google pode usar cookies 
                para exibir anúncios com base em visitas anteriores a este e outros sites. Você pode optar 
                por desativar a publicidade personalizada visitando as{" "}
                <a 
                  href="https://www.google.com/settings/ads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Configurações de Anúncios do Google
                </a>.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                6. Compartilhamento de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Podemos compartilhar suas informações com:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Google (Analytics e AdSense) para análise e publicidade</li>
                <li>Autoridades legais, quando exigido por lei</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Não vendemos suas informações pessoais a terceiros.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                7. Seus Direitos (LGPD)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Confirmar a existência de tratamento de dados</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou desatualizados</li>
                <li>Solicitar a exclusão de dados desnecessários</li>
                <li>Revogar o consentimento a qualquer momento</li>
                <li>Solicitar a portabilidade dos dados</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                8. Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">E-mail:</strong> marshe.viagens@gmail.com</p>
                <p><strong className="text-foreground">Telefone:</strong> (31) 97239-1400</p>
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

export default PrivacyPolicy;
