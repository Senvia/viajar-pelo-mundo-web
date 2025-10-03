import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogPosts, useDeleteBlogPost, usePublishBlogPost } from "@/hooks/useBlogPosts";
import { Button } from "@/components/ui/button";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Plus, Pencil, Trash2, ExternalLink, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const BlogPosts = () => {
  const navigate = useNavigate();
  const { data } = useBlogPosts(1, 100, undefined, false);
  const deleteMutation = useDeleteBlogPost();
  const publishMutation = usePublishBlogPost();
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const handleDelete = () => {
    if (deleteId) {
      deleteMutation.mutate(deleteId);
      setDeleteId(null);
    }
  };

  const handlePublish = (id: string) => {
    publishMutation.mutate(id);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold">Gerenciar Posts</h2>
            <p className="text-muted-foreground mt-1">
              Crie, edite e gerencie os posts do blog
            </p>
          </div>
          <Button onClick={() => navigate("/admin/blog/post/novo")}>
            <Plus className="mr-2 h-4 w-4" />
            Criar Novo Post
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Todos os Posts ({data?.posts.length || 0})</CardTitle>
          </CardHeader>
          <CardContent>
            {data?.posts.length ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Título</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead>Autor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium max-w-xs truncate">
                        {post.title}
                      </TableCell>
                      <TableCell>
                        {post.blog_categories && (
                          <Badge style={{ backgroundColor: post.blog_categories.color }}>
                            {post.blog_categories.name}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell>{post.author_name}</TableCell>
                      <TableCell>
                        <Badge variant={post.published ? "default" : "secondary"}>
                          {post.published ? "Publicado" : "Rascunho"}
                        </Badge>
                      </TableCell>
                      <TableCell>{post.views_count}</TableCell>
                      <TableCell>
                        {format(new Date(post.created_at), "dd/MM/yyyy", { locale: ptBR })}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          {!post.published && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handlePublish(post.id)}
                              title="Publicar agora"
                            >
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            </Button>
                          )}
                          {post.published && (
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => window.open(`/blog/${post.slug}`, "_blank")}
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          )}
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => navigate(`/admin/blog/post/editar/${post.id}`)}
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setDeleteId(post.id)}
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">
                  Nenhum post encontrado. Crie o primeiro!
                </p>
                <Button onClick={() => navigate("/admin/blog/post/novo")}>
                  Criar Primeiro Post
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
              <AlertDialogDescription>
                Tem certeza que deseja excluir este post? Esta ação não pode ser desfeita.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>Excluir</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </AdminLayout>
  );
};

export default BlogPosts;
