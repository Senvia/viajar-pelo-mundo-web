import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePackages } from "@/hooks/usePackages";
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
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const { packages, deletePackage } = usePackages();

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
    },
    {
      title: "Total de Reservas",
      value: packages.length * 5, // Mock data
      icon: Users,
      color: "bg-purple-500"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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