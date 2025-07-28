import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ConsultoriaImigrantes from "./pages/services/ConsultoriaImigrantes";
import PacotesViagens from "./pages/services/PacotesViagens";
import ConsultoriaEuropa from "./pages/services/ConsultoriaEuropa";
import ServicosAvulsos from "./pages/services/ServicosAvulsos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos/imigrantes" element={<ConsultoriaImigrantes />} />
          <Route path="/servicos/pacotes" element={<PacotesViagens />} />
          <Route path="/servicos/consultoria-europa" element={<ConsultoriaEuropa />} />
          <Route path="/servicos/avulsos" element={<ServicosAvulsos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
