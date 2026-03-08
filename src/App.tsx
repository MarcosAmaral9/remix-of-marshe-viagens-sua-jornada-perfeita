import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import RouteScrollToTop from "@/components/RouteScrollToTop";
import { useAnalytics } from "@/hooks/use-analytics";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";

// Lazy-loaded routes
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const DestinosNordeste = lazy(() => import("./pages/DestinosNordeste"));
const DestinosSul = lazy(() => import("./pages/DestinosSul"));
const CaboSantoAgostinho = lazy(() => import("./pages/destinos/CaboSantoAgostinho"));
const Fortaleza = lazy(() => import("./pages/destinos/Fortaleza"));
const JoaoPessoa = lazy(() => import("./pages/destinos/JoaoPessoa"));
const Maceio = lazy(() => import("./pages/destinos/Maceio"));
const Natal = lazy(() => import("./pages/destinos/Natal"));
const PortoDeGalinhas = lazy(() => import("./pages/destinos/PortoDeGalinhas"));
const PortoSeguro = lazy(() => import("./pages/destinos/PortoSeguro"));
const Salvador = lazy(() => import("./pages/destinos/Salvador"));
const FozDoIguacu = lazy(() => import("./pages/destinos/FozDoIguacu"));
const Gramado = lazy(() => import("./pages/destinos/Gramado"));
const CircuitosEuropa = lazy(() => import("./pages/CircuitosEuropa"));
const CircuitoDetail = lazy(() => import("./pages/circuitos/CircuitoDetail"));
const Destinos = lazy(() => import("./pages/Destinos"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const AnalyticsWrapper = ({ children }: { children: React.ReactNode }) => {
  useAnalytics();
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteScrollToTop />
          <AnalyticsWrapper>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/sobre" element={<AboutUs />} />
                <Route path="/privacidade" element={<PrivacyPolicy />} />
                <Route path="/termos" element={<TermsConditions />} />
                <Route path="/destinos" element={<Destinos />} />
                <Route path="/destinos/nordeste" element={<DestinosNordeste />} />
                <Route path="/destinos/sul" element={<DestinosSul />} />
                <Route path="/destinos/cabo-de-santo-agostinho" element={<CaboSantoAgostinho />} />
                <Route path="/destinos/fortaleza" element={<Fortaleza />} />
                <Route path="/destinos/joao-pessoa" element={<JoaoPessoa />} />
                <Route path="/destinos/maceio" element={<Maceio />} />
                <Route path="/destinos/natal" element={<Natal />} />
                <Route path="/destinos/porto-de-galinhas" element={<PortoDeGalinhas />} />
                <Route path="/destinos/porto-seguro" element={<PortoSeguro />} />
                <Route path="/destinos/salvador" element={<Salvador />} />
                <Route path="/destinos/foz-do-iguacu" element={<FozDoIguacu />} />
                <Route path="/destinos/gramado" element={<Gramado />} />
                <Route path="/circuitos/europa" element={<CircuitosEuropa />} />
                <Route path="/circuitos/europa/:slug" element={<CircuitoDetail />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AnalyticsWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
