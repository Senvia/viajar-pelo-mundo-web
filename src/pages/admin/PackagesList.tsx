import { AdminLayout } from "@/components/admin/AdminLayout";
import { usePackages } from "@/hooks/usePackages";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Eye, Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function PackagesList() {
  const navigate = useNavigate();
  const { packages, loading, deletePackage } = usePackages();
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const filteredPackages = packages.filter((pkg) =>
    pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pkg.destination.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      const success = await deletePackage(deleteId);
      if (success) {
        toast.success("Pacote excluído com sucesso!");
      } else {
        toast.error("Erro ao excluir pacote");
      }
    } catch (error) {
      toast.error("Erro ao excluir pacote");
    } finally {
      setDeleteId(null);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Pacotes de Viagem</h2>
            <p className="text-muted-foreground mt-1">
              Gerencie todos os pacotes de viagem disponíveis
            </p>
          </div>
          <Button onClick={() => navigate("/admin/criar-pacote")} className="gap-2">
            <Plus className="h-4 w-4" />
            Criar Pacote
          </Button>
        </div>

        {/* Search */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar pacotes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Packages List */}
        {loading ? (
          <div className="text-center py-12">Carregando pacotes...</div>
        ) : filteredPackages.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                {searchQuery ? "Nenhum pacote encontrado" : "Nenhum pacote cadastrado ainda"}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {filteredPackages.map((pkg) => (
              <Card key={pkg.id}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-6">
                    {/* Image */}
                    <img
                      src={pkg.hero_image || pkg.main_image}
                      alt={pkg.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold">{pkg.name}</h3>
                      <p className="text-muted-foreground mt-1">
                        {pkg.duration} • {pkg.price}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {pkg.destination}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => navigate(`/pacotes/${pkg.id}`)}
                        title="Visualizar"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => navigate(`/admin/editar-pacote/${pkg.id}`)}
                        title="Editar"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setDeleteId(pkg.id)}
                        title="Excluir"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este pacote? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Excluir</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
}
