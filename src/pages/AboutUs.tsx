import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieConsent from "@/components/CookieConsent";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8 text-center">
            Sobre <span className="text-primary">Nós</span>
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Quem Somos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A <strong className="text-foreground">Marshe Viagens</strong> é uma agência de viagens comprometida em transformar sonhos em experiências inesquecíveis. 
                Localizada em Contagem, Minas Gerais, nossa missão é oferecer pacotes de viagem personalizados, 
                passagens aéreas, hospedagens e serviços turísticos com as melhores condições do mercado.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Nossa Missão
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar experiências de viagem únicas e memoráveis, com atendimento personalizado e 
                preços acessíveis. Acreditamos que viajar é mais do que conhecer novos lugares - é criar 
                memórias que duram para sempre.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Sobre Este Site
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este site foi desenvolvido para apresentar a empresa Marshe Viagens e seu trabalho aos leitores, 
                com o objetivo de:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Apresentar nossos serviços e destinos de forma clara e atrativa</li>
                <li>Facilitar o contato entre clientes e nossa equipe</li>
                <li>Aumentar a visibilidade e credibilidade da empresa</li>
                <li>Atrair novos clientes interessados em viagens de qualidade</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Publicidade e Anúncios
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Para manter este site funcionando e continuar oferecendo conteúdo de qualidade, 
                utilizamos anúncios do Google AdSense. Os anúncios exibidos são selecionados com base 
                em suas preferências de navegação e são gerenciados de acordo com as políticas de 
                privacidade do Google. A receita gerada pelos anúncios nos ajuda a manter e melhorar 
                nossos serviços continuamente.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Entre em Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Estamos sempre prontos para ajudá-lo a planejar sua próxima viagem!
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong className="text-foreground">Telefone:</strong> (31) 97239-1400</p>
                <p><strong className="text-foreground">E-mail:</strong> marshe.viagens@gmail.com</p>
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

export default AboutUs;
