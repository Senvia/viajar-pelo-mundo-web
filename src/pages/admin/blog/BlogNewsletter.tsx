import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNewsletterSubscribers, useToggleNewsletterSubscriber } from "@/hooks/useNewsletter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, Search } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const BlogNewsletter = () => {
  const { data: subscribers } = useNewsletterSubscribers();
  const toggleMutation = useToggleNewsletterSubscriber();
  const [search, setSearch] = useState("");

  const filteredSubscribers = subscribers?.filter(
    (sub) =>
      sub.email.toLowerCase().includes(search.toLowerCase()) ||
      sub.name?.toLowerCase().includes(search.toLowerCase())
  );

  const activeCount = subscribers?.filter((sub) => sub.active).length || 0;
  const last30Days = subscribers?.filter((sub) => {
    const date = new Date(sub.subscribed_at);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 30;
  }).length || 0;

  const exportToCSV = () => {
    if (!subscribers) return;

    const csv = [
      ["Email", "Nome", "Data de Inscrição", "Status"],
      ...subscribers.map((sub) => [
        sub.email,
        sub.name || "",
        format(new Date(sub.subscribed_at), "dd/MM/yyyy HH:mm", { locale: ptBR }),
        sub.active ? "Ativo" : "Inativo",
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `newsletter-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Newsletter</h1>
            <p className="text-muted-foreground">
              Gerencie os inscritos na newsletter
            </p>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Total de Inscritos Ativos
                  </p>
                  <p className="text-4xl font-bold">{activeCount}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Novos (Últimos 30 dias)
                  </p>
                  <p className="text-4xl font-bold text-primary">{last30Days}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Inscritos */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <CardTitle>Inscritos ({filteredSubscribers?.length || 0})</CardTitle>
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Buscar por email ou nome..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  <Button onClick={exportToCSV} variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Exportar CSV
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Data de Inscrição</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSubscribers?.map((subscriber) => (
                    <TableRow key={subscriber.id}>
                      <TableCell className="font-medium">{subscriber.email}</TableCell>
                      <TableCell>{subscriber.name || "-"}</TableCell>
                      <TableCell>
                        {format(new Date(subscriber.subscribed_at), "dd/MM/yyyy HH:mm", {
                          locale: ptBR,
                        })}
                      </TableCell>
                      <TableCell>
                        <Badge variant={subscriber.active ? "default" : "secondary"}>
                          {subscriber.active ? "Ativo" : "Inativo"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            toggleMutation.mutate({
                              id: subscriber.id,
                              active: !subscriber.active,
                            })
                          }
                        >
                          {subscriber.active ? "Desativar" : "Ativar"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {!filteredSubscribers?.length && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    {search ? "Nenhum inscrito encontrado" : "Nenhum inscrito ainda"}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogNewsletter;
