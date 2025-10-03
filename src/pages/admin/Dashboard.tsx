import { AdminLayout } from "@/components/admin/AdminLayout";
import { DashboardStats } from "@/components/admin/DashboardStats";
import { usePackages } from "@/hooks/usePackages";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { useNewsletterSubscribers } from "@/hooks/useNewsletter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, FileText, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function Dashboard() {
  const navigate = useNavigate();
  const { packages } = usePackages();
  const { data: blogData } = useBlogPosts(1, 1000, undefined, false);
  const { data: subscribers } = useNewsletterSubscribers();

  const allPosts = blogData?.posts || [];
  const publishedPosts = allPosts.filter(post => post.published);
  const draftPosts = allPosts.filter(post => !post.published);
  const totalViews = allPosts.reduce((sum, post) => sum + (post.views_count || 0), 0);
  const activeSubscribers = subscribers?.filter(sub => sub.active) || [];
  
  // Most read posts
  const mostReadPosts = [...allPosts]
    .sort((a, b) => (b.views_count || 0) - (a.views_count || 0))
    .slice(0, 3);

  // Get last 5 activities (simplified version)
  const recentActivities = [
    ...(subscribers?.slice(0, 2).map(sub => ({
      type: 'newsletter',
      description: `Novo inscrito: ${sub.email}`,
      date: sub.subscribed_at
    })) || []),
    ...(publishedPosts.slice(0, 2).map(post => ({
      type: 'post',
      description: `Post "${post.title}" - ${post.views_count || 0} views`,
      date: post.created_at
    })) || []),
    ...(packages.slice(0, 1).map(pkg => ({
      type: 'package',
      description: `Pacote "${pkg.name}" atualizado`,
      date: pkg.updated_at || pkg.created_at
    })) || [])
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5);

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Page Title */}
        <div>
          <h2 className="text-3xl font-bold">Visão Geral</h2>
          <p className="text-muted-foreground mt-1">
            Resumo geral do sistema
          </p>
        </div>

        {/* Main Stats */}
        <DashboardStats
          totalPackages={packages.length}
          publishedPosts={publishedPosts.length}
          draftPosts={draftPosts.length}
          totalViews={totalViews}
          totalSubscribers={activeSubscribers.length}
        />

        {/* Most Read Posts */}
        {mostReadPosts.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Posts Mais Lidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mostReadPosts.map((post, index) => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="font-bold text-lg text-muted-foreground">
                        #{index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{post.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {post.views_count || 0} visualizações
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate(`/admin/blog/post/editar/${post.id}`)}
                    >
                      Ver
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Acesso Rápido
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={() => navigate("/admin/criar-pacote")}
                className="h-24 text-lg gap-3"
                variant="outline"
              >
                <Plus className="h-6 w-6" />
                Criar Novo Pacote
              </Button>
              <Button
                onClick={() => navigate("/admin/blog/post/novo")}
                className="h-24 text-lg gap-3"
                variant="outline"
              >
                <FileText className="h-6 w-6" />
                Criar Post no Blog
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Atividade Recente
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentActivities.length > 0 ? (
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <span className="text-sm">{activity.description}</span>
                    <span className="text-xs text-muted-foreground">
                      {format(new Date(activity.date), "dd/MM/yyyy HH:mm", { locale: ptBR })}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">Nenhuma atividade recente</p>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
