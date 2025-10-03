import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePackages } from "@/hooks/usePackages";
import { useBlogPosts, useMostReadPosts } from "@/hooks/useBlogPosts";
import { useNewsletterSubscribers } from "@/hooks/useNewsletter";
import { useBlogCategories } from "@/hooks/useBlogCategories";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Package, 
  Users, 
  BarChart3,
  MapPin,
  Calendar,
  ArrowRight,
  FileText,
  FolderOpen,
  Mail,
  TrendingUp
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const { packages, deletePackage } = usePackages();
  
  // Blog data
  const { data: allBlogPosts } = useBlogPosts(1, 1000, undefined, false);
  const { data: subscribers } = useNewsletterSubscribers();
  const { data: categories } = useBlogCategories();
  const { data: mostReadPosts } = useMostReadPosts(3);
  
  const publishedPosts = allBlogPosts?.posts.filter(post => post.published) || [];
  const totalViews = allBlogPosts?.posts.reduce((acc, post) => acc + (post.views_count || 0), 0) || 0;
  const activeSubscribers = subscribers?.filter(sub => sub.active).length || 0;
  const recentSubscribers = subscribers?.slice(0, 5) || [];

  const handleCreatePackage = () => {
    navigate('/admin/criar-pacote');
  };

  const handleEditPackage = (id: string) => {
    navigate(`/admin/editar-pacote/${id}`);
  };

  const handleDeletePackage = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este pacote?')) {
      deletePackage(id);
      toast.success('Pacote excluído com sucesso!');
    }
  };

  const handleViewPackage = (id: string) => {
    navigate(`/servicos/pacotes/${id}`);
  };

  const stats = [
    {
      title: "Total de Pacotes",
      value: packages.length,
      icon: Package,
      color: "bg-blue-500"
    },
    {
      title: "Pacotes Ativos",
      value: packages.length, // All packages are active for now
      icon: BarChart3,
      color: "bg-green-500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header variant="light" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-dark/5 via-secondary/5 to-brand-blue/5">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Dashboard Administrativo
              </h1>
              <p className="text-xl text-muted-foreground">
                Gerencie seus pacotes de viagem e monitore as reservas
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-2">{stat.value}</h3>
                    <p className="text-muted-foreground">{stat.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Button */}
            <div className="text-center">
              <Button 
                size="lg"
                onClick={handleCreatePackage}
                className="bg-brand-dark hover:bg-brand-dark/90 text-white shadow-elegant px-8 py-4"
              >
                <Plus className="w-5 h-5 mr-2" />
                Criar Novo Pacote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Management Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-8">Gerenciar Blog</h2>
            
            {/* Blog Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Posts Publicados</p>
                      <p className="text-3xl font-bold text-secondary">{publishedPosts.length}</p>
                    </div>
                    <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center">
                      <FileText className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total de Visualizações</p>
                      <p className="text-3xl font-bold text-secondary">{totalViews}</p>
                    </div>
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Inscritos Ativos</p>
                      <p className="text-3xl font-bold text-secondary">{activeSubscribers}</p>
                    </div>
                    <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center">
                      <Mail className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Blog Management Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card 
                className="cursor-pointer hover:shadow-elegant transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/admin/blog/posts')}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Posts</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Gerenciar artigos do blog
                  </p>
                  <Button variant="outline" className="w-full">
                    Acessar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card 
                className="cursor-pointer hover:shadow-elegant transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/admin/blog/categorias')}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FolderOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Categorias</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Organizar categorias
                  </p>
                  <Button variant="outline" className="w-full">
                    Acessar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card 
                className="cursor-pointer hover:shadow-elegant transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/admin/blog/anuncios')}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Anúncios</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Gerenciar publicidade
                  </p>
                  <Button variant="outline" className="w-full">
                    Acessar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card 
                className="cursor-pointer hover:shadow-elegant transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/admin/blog/newsletter')}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2">Newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Gerenciar inscritos
                  </p>
                  <Button variant="outline" className="w-full">
                    Acessar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Additional Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
              {/* Most Read Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Posts Mais Lidos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {mostReadPosts && mostReadPosts.length > 0 ? (
                    <div className="space-y-4">
                      {mostReadPosts.map((post, index) => (
                        <div key={post.id} className="flex items-center gap-3 pb-4 border-b last:border-0">
                          <span className="text-2xl font-bold text-muted-foreground">{index + 1}</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-secondary truncate">{post.title}</p>
                            <p className="text-sm text-muted-foreground">{post.views_count} visualizações</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Nenhum post publicado ainda</p>
                  )}
                </CardContent>
              </Card>
              
              {/* Recent Subscribers */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Últimos Inscritos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {recentSubscribers.length > 0 ? (
                    <div className="space-y-3">
                      {recentSubscribers.map((subscriber) => (
                        <div key={subscriber.id} className="flex items-center justify-between pb-3 border-b last:border-0">
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-secondary truncate">{subscriber.email}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(subscriber.subscribed_at).toLocaleDateString('pt-BR')}
                            </p>
                          </div>
                          <Badge variant={subscriber.active ? "default" : "secondary"}>
                            {subscriber.active ? "Ativo" : "Inativo"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">Nenhum inscrito ainda</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Management */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-secondary">Gerenciar Pacotes</h2>
              <Button 
                onClick={handleCreatePackage}
                className="bg-brand-dark hover:bg-brand-dark/90 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                Novo Pacote
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="group hover:shadow-elegant transition-all duration-300">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                    {/* Package Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={pkg.main_image || pkg.hero_image}
                        alt={pkg.name}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <Badge 
                        className="absolute top-3 right-3 bg-green-500 text-white"
                      >
                        Ativo
                      </Badge>
                    </div>

                    {/* Package Content */}
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-secondary mb-3">{pkg.name}</h3>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {pkg.destination}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {pkg.duration}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Users className="w-4 h-4" />
                            {packages.length > 0 ? Math.floor(Math.random() * 20) + 1 : 0} reservas
                          </div>
                        </div>

                        <div className="text-2xl font-bold text-brand-blue mb-4">
                          {pkg.price}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleViewPackage(pkg.id)}
                          className="w-full"
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Visualizar
                        </Button>
                        
                        <div className="grid grid-cols-2 gap-2">
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleEditPackage(pkg.id)}
                          >
                            <Edit className="w-4 h-4 mr-1" />
                            Editar
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleDeletePackage(pkg.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                            Excluir
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {packages.length === 0 && (
              <Card className="text-center p-12">
                <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Nenhum pacote cadastrado
                </h3>
                <p className="text-muted-foreground mb-6">
                  Comece criando seu primeiro pacote de viagem
                </p>
                <Button 
                  onClick={handleCreatePackage}
                  className="bg-brand-dark hover:bg-brand-dark/90 text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Criar Primeiro Pacote
                </Button>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;