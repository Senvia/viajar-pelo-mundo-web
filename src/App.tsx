import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlaneamentoPersonalizado from "./pages/services/PlaneamentoPersonalizado";
import PassagensHospedagem from "./pages/services/PassagensHospedagem";
import AtividadesTuristicas from "./pages/services/AtividadesTuristicas";
import ServicosApoio from "./pages/services/ServicosApoio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos/planeamento" element={<PlaneamentoPersonalizado />} />
          <Route path="/servicos/passagens" element={<PassagensHospedagem />} />
          <Route path="/servicos/atividades" element={<AtividadesTuristicas />} />
          <Route path="/servicos/apoio" element={<ServicosApoio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
