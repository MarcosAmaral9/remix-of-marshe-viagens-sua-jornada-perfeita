import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import RouteScrollToTop from "@/components/RouteScrollToTop";
import { useAnalytics } from "@/hooks/use-analytics";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import DestinosNordeste from "./pages/DestinosNordeste";
import DestinosSul from "./pages/DestinosSul";
import CaboSantoAgostinho from "./pages/destinos/CaboSantoAgostinho";
import Fortaleza from "./pages/destinos/Fortaleza";
import JoaoPessoa from "./pages/destinos/JoaoPessoa";
import Maceio from "./pages/destinos/Maceio";
import Natal from "./pages/destinos/Natal";
import PortoDeGalinhas from "./pages/destinos/PortoDeGalinhas";
import PortoSeguro from "./pages/destinos/PortoSeguro";
import Salvador from "./pages/destinos/Salvador";
import FozDoIguacu from "./pages/destinos/FozDoIguacu";
import Gramado from "./pages/destinos/Gramado";

const queryClient = new QueryClient();

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
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<AboutUs />} />
              <Route path="/privacidade" element={<PrivacyPolicy />} />
              <Route path="/termos" element={<TermsConditions />} />
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
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnalyticsWrapper>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
