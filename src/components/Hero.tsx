import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-traveler.png";
const Hero = () => {
  return <section className="relative min-h-screen bg-gradient-hero overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-32 right-20 w-16 h-16 bg-coral-light rounded-full opacity-60 animate-float" />
      <div className="absolute bottom-40 left-10 w-8 h-8 bg-teal/20 rounded-full animate-float" style={{
      animationDelay: '1s'
    }} />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-yellow/30 rounded-full animate-float" style={{
      animationDelay: '0.5s'
    }} />
      
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <span className="inline-block text-primary font-semibold tracking-wider uppercase text-sm">
              Melhores destinos do mundo
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              Viaje, aproveite
              <br />
              <span className="relative">
                e viva uma
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 2 150 2 298 10" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              vida nova e plena
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
               A Marshe Viagens é uma empresa familiar criada com o propósito de cuidar da sua viagem com a mesma atenção e dedicação que cuidamos da nossa própria família. Nossa história teve início em 2023, em um momento desafiador, marcado pela busca por novas oportunidades após os impactos causados pela pandemia da Covid-19.

Desde então, construímos nossa trajetória com base em comprometimento, transparência e excelência no atendimento. Esse trabalho consistente resultou no reconhecimento de clientes e parceiros, permitindo a expansão contínua do nosso portfólio de serviços. Até o momento, já realizamos a venda de mais de 700 passagens, atendendo viajantes em mais de 60 destinos diferentes, no Brasil e no exterior.

Seguimos ampliando constantemente nossos destinos e fortalecendo parcerias estratégicas para oferecer ainda mais opções, vantagens e experiências personalizadas. Mais do que vender viagens, nossa missão é auxiliar na criação de memórias inesquecíveis, proporcionando experiências únicas em qualquer destino que o cliente desejar. 
            </p>
            
            
          </div>
          
          {/* Image */}
          <div className="relative animate-slide-in-right hidden lg:block">
            {/* Background decorative shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-coral-light rounded-full -z-10" />
            
            {/* Decorative plane */}
            <div className="absolute top-10 right-0 text-primary animate-float">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>
            
            <img src={heroImage} alt="Viajante feliz em destino tropical" className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;