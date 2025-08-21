import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ConsultoriaImigrantes from "./pages/services/ConsultoriaImigrantes";
import PacotesViagens from "./pages/services/PacotesViagens";
import ConsultoriaEuropa from "./pages/services/ConsultoriaEuropa";
import ServicosAvulsos from "./pages/services/ServicosAvulsos";
import ConsultoriaViagens from "./pages/services/ConsultoriaViagens";
import PackageDetails from "./pages/services/pacotes/PackageDetails";
import CadastrarPacotes from "./pages/admin/CadastrarPacotes";
import Dashboard from "./pages/admin/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-nos" element={<AboutUs />} />
          <Route path="/servicos/imigrantes" element={<ConsultoriaImigrantes />} />
          <Route path="/servicos/pacotes" element={<PacotesViagens />} />
          <Route path="/servicos/consultoria-europa" element={<ConsultoriaEuropa />} />
          <Route path="/servicos/avulsos" element={<ServicosAvulsos />} />
          <Route path="/servicos/consultoria-viagens" element={<ConsultoriaViagens />} />
          <Route path="/servicos/pacotes/:packageId" element={<PackageDetails />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/cadastrar-pacotes" element={<CadastrarPacotes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
