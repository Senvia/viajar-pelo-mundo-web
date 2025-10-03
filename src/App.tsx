import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import ConsultoriaImigrantes from "./pages/services/ConsultoriaImigrantes";
import PacotesViagens from "./pages/services/PacotesViagens";
import ConsultoriaEuropa from "./pages/services/ConsultoriaEuropa";
import ServicosAvulsos from "./pages/services/ServicosAvulsos";
import ConsultoriaViagens from "./pages/services/ConsultoriaViagens";
import PortugalEssence from "./pages/services/pacotes/PortugalEssence";
import PackageDetail from "./pages/services/pacotes/PackageDetail";
import PacotesViagensEstatico from "./pages/services/PacotesViagensEstatico";
import CadastrarPacotes from "./pages/admin/CadastrarPacotes";
import CriarEditarPacote from "./pages/admin/CriarEditarPacote";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/admin/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre-nos" element={<AboutUs />} />
            <Route path="/servicos/imigrantes" element={<ConsultoriaImigrantes />} />
            <Route path="/servicos/pacotes" element={<PacotesViagens />} />
            <Route path="/servicos/pacotes-estatico" element={<PacotesViagensEstatico />} />
            <Route path="/servicos/consultoria-europa" element={<ConsultoriaEuropa />} />
            <Route path="/servicos/avulsos" element={<ServicosAvulsos />} />
            <Route path="/servicos/consultoria-viagens" element={<ConsultoriaViagens />} />
            <Route path="/servicos/pacotes/:id" element={<PackageDetail />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/admin/cadastrar-pacotes" element={<ProtectedRoute><CadastrarPacotes /></ProtectedRoute>} />
            <Route path="/admin/criar-pacote" element={<ProtectedRoute><CriarEditarPacote /></ProtectedRoute>} />
            <Route path="/admin/editar-pacote/:id" element={<ProtectedRoute><CriarEditarPacote /></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
