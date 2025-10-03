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
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogCategory from "./pages/BlogCategory";
import BlogPosts from "./pages/admin/blog/BlogPosts";
import BlogPostForm from "./pages/admin/blog/BlogPostForm";
import BlogCategories from "./pages/admin/blog/BlogCategories";
import BlogAds from "./pages/admin/blog/BlogAds";
import BlogNewsletter from "./pages/admin/blog/BlogNewsletter";

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog/categoria/:slug" element={<BlogCategory />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/admin/cadastrar-pacotes" element={<ProtectedRoute><CadastrarPacotes /></ProtectedRoute>} />
            <Route path="/admin/criar-pacote" element={<ProtectedRoute><CriarEditarPacote /></ProtectedRoute>} />
            <Route path="/admin/editar-pacote/:id" element={<ProtectedRoute><CriarEditarPacote /></ProtectedRoute>} />
            <Route path="/admin/blog/posts" element={<ProtectedRoute><BlogPosts /></ProtectedRoute>} />
            <Route path="/admin/blog/post/novo" element={<ProtectedRoute><BlogPostForm /></ProtectedRoute>} />
            <Route path="/admin/blog/post/editar/:id" element={<ProtectedRoute><BlogPostForm /></ProtectedRoute>} />
            <Route path="/admin/blog/categorias" element={<ProtectedRoute><BlogCategories /></ProtectedRoute>} />
            <Route path="/admin/blog/anuncios" element={<ProtectedRoute><BlogAds /></ProtectedRoute>} />
            <Route path="/admin/blog/newsletter" element={<ProtectedRoute><BlogNewsletter /></ProtectedRoute>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
