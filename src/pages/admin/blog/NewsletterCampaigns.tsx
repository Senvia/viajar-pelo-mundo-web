import { useState } from "react";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Send, Edit, Trash2, Eye } from "lucide-react";
import { useCampaigns, useCreateCampaign, useUpdateCampaign, useSendCampaign } from "@/hooks/useCampaigns";
import { NewsletterCampaign } from "@/types/Newsletter";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function NewsletterCampaigns() {
  const { data: campaigns, isLoading } = useCampaigns();
  const createCampaign = useCreateCampaign();
  const updateCampaign = useUpdateCampaign();
  const sendCampaign = useSendCampaign();

  const [isCreating, setIsCreating] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<NewsletterCampaign | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    content: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingCampaign) {
      await updateCampaign.mutateAsync({
        id: editingCampaign.id,
        ...formData,
      });
      setEditingCampaign(null);
    } else {
      await createCampaign.mutateAsync({
        ...formData,
        status: "draft",
      });
      setIsCreating(false);
    }
    
    setFormData({ title: "", subject: "", content: "" });
  };

  const handleEdit = (campaign: NewsletterCampaign) => {
    setEditingCampaign(campaign);
    setFormData({
      title: campaign.title,
      subject: campaign.subject,
      content: campaign.content,
    });
    setIsCreating(true);
  };

  const handleSend = async (campaignId: string) => {
    if (confirm("Tem certeza que deseja enviar esta newsletter para todos os inscritos?")) {
      await sendCampaign.mutateAsync(campaignId);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      draft: "secondary",
      scheduled: "default",
      sent: "outline",
    } as const;

    const labels = {
      draft: "Rascunho",
      scheduled: "Agendado",
      sent: "Enviado",
    };

    return (
      <Badge variant={variants[status as keyof typeof variants]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <p>Carregando...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Campanhas de Newsletter</h1>
            <p className="text-muted-foreground">
              Crie e envie newsletters para seus inscritos
            </p>
          </div>
          {!isCreating && (
            <Button onClick={() => setIsCreating(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Nova Campanha
            </Button>
          )}
        </div>

        {isCreating && (
          <Card>
            <CardHeader>
              <CardTitle>
                {editingCampaign ? "Editar Campanha" : "Nova Campanha"}
              </CardTitle>
              <CardDescription>
                Preencha os dados da newsletter
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Título da Campanha</label>
                  <Input
                    placeholder="Ex: Newsletter Março 2024"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Assunto do Email</label>
                  <Input
                    placeholder="Ex: As melhores dicas para viajar pela Europa"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Conteúdo (HTML)</label>
                  <Textarea
                    placeholder="Cole seu HTML aqui..."
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={12}
                    required
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" disabled={createCampaign.isPending || updateCampaign.isPending}>
                    {editingCampaign ? "Atualizar" : "Criar"} Rascunho
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsCreating(false);
                      setEditingCampaign(null);
                      setFormData({ title: "", subject: "", content: "" });
                    }}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-4">
          {campaigns?.map((campaign) => (
            <Card key={campaign.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{campaign.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {campaign.subject}
                    </CardDescription>
                  </div>
                  {getStatusBadge(campaign.status)}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>
                      Criado em: {format(new Date(campaign.created_at), "dd/MM/yyyy HH:mm", { locale: ptBR })}
                    </p>
                    {campaign.sent_at && (
                      <>
                        <p>
                          Enviado em: {format(new Date(campaign.sent_at), "dd/MM/yyyy HH:mm", { locale: ptBR })}
                        </p>
                        <p>Destinatários: {campaign.recipients_count}</p>
                      </>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {campaign.status === "draft" && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(campaign)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => handleSend(campaign.id)}
                          disabled={sendCampaign.isPending}
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Enviar
                        </Button>
                      </>
                    )}
                    {campaign.status === "sent" && (
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {campaigns?.length === 0 && !isCreating && (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <p className="text-muted-foreground mb-4">
                Nenhuma campanha criada ainda
              </p>
              <Button onClick={() => setIsCreating(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Criar Primeira Campanha
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
}
