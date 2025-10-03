import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageUpload from "@/components/ImageUpload";
import { useAllBlogAds, useUpdateBlogAd, useCreateBlogAd } from "@/hooks/useBlogAds";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Loader2 } from "lucide-react";
import { BlogAd } from "@/types/Blog";

const BlogAds = () => {
  const { data: ads } = useAllBlogAds();
  const updateMutation = useUpdateBlogAd();
  const createMutation = useCreateBlogAd();

  const [topAd, setTopAd] = useState<BlogAd | null>(null);
  const [middleAd, setMiddleAd] = useState<BlogAd | null>(null);

  useEffect(() => {
    if (ads) {
      setTopAd(ads.find(ad => ad.position === 'top') || null);
      setMiddleAd(ads.find(ad => ad.position === 'middle') || null);
    }
  }, [ads]);

  const { register: registerTop, handleSubmit: handleSubmitTop, setValue: setValueTop, watch: watchTop } = useForm({
    defaultValues: {
      title: "",
      image: "",
      link: "",
      active: true,
    },
  });

  const { register: registerMiddle, handleSubmit: handleSubmitMiddle, setValue: setValueMiddle, watch: watchMiddle } = useForm({
    defaultValues: {
      title: "",
      image: "",
      link: "",
      active: true,
    },
  });

  useEffect(() => {
    if (topAd) {
      setValueTop("title", topAd.title);
      setValueTop("image", topAd.image);
      setValueTop("link", topAd.link);
      setValueTop("active", topAd.active);
    }
  }, [topAd, setValueTop]);

  useEffect(() => {
    if (middleAd) {
      setValueMiddle("title", middleAd.title);
      setValueMiddle("image", middleAd.image);
      setValueMiddle("link", middleAd.link);
      setValueMiddle("active", middleAd.active);
    }
  }, [middleAd, setValueMiddle]);

  const onSubmitTop = (data: any) => {
    if (topAd) {
      updateMutation.mutate({ id: topAd.id, ...data });
    } else {
      createMutation.mutate({ ...data, position: 'top' } as any);
    }
  };

  const onSubmitMiddle = (data: any) => {
    if (middleAd) {
      updateMutation.mutate({ id: middleAd.id, ...data });
    } else {
      createMutation.mutate({ ...data, position: 'middle' } as any);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Gerenciar Anúncios</h1>
            <p className="text-muted-foreground">
              Configure os anúncios que aparecem na sidebar do blog
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              <strong>Tamanho obrigatório:</strong> 300x250 pixels
            </p>
          </div>

          <div className="space-y-8">
            {/* Anúncio Topo */}
            <Card>
              <CardHeader>
                <CardTitle>Anúncio #1 (Topo)</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitTop(onSubmitTop)} className="space-y-4">
                  {watchTop("image") && (
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                      <img
                        src={watchTop("image")}
                        alt="Preview"
                        className="rounded-lg border"
                        style={{ width: '300px', height: '250px', objectFit: 'cover' }}
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="top-title">Título Interno</Label>
                    <Input
                      id="top-title"
                      {...registerTop("title")}
                      placeholder="Para identificação interna"
                      required
                    />
                  </div>

                  <ImageUpload
                    label="Imagem do Anúncio (300x250px obrigatório)"
                    value={watchTop("image")}
                    onChange={(url) => setValueTop("image", url)}
                  />

                  <div>
                    <Label htmlFor="top-link">Link de Destino</Label>
                    <Input
                      id="top-link"
                      {...registerTop("link")}
                      placeholder="https://exemplo.com"
                      type="url"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="top-active"
                      checked={watchTop("active")}
                      onCheckedChange={(checked) => setValueTop("active", checked)}
                    />
                    <Label htmlFor="top-active">Anúncio ativo</Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={updateMutation.isPending || createMutation.isPending}
                  >
                    {(updateMutation.isPending || createMutation.isPending) && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Salvar Anúncio #1
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Anúncio Meio */}
            <Card>
              <CardHeader>
                <CardTitle>Anúncio #2 (Meio)</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitMiddle(onSubmitMiddle)} className="space-y-4">
                  {watchMiddle("image") && (
                    <div className="mb-4">
                      <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                      <img
                        src={watchMiddle("image")}
                        alt="Preview"
                        className="rounded-lg border"
                        style={{ width: '300px', height: '250px', objectFit: 'cover' }}
                      />
                    </div>
                  )}

                  <div>
                    <Label htmlFor="middle-title">Título Interno</Label>
                    <Input
                      id="middle-title"
                      {...registerMiddle("title")}
                      placeholder="Para identificação interna"
                      required
                    />
                  </div>

                  <ImageUpload
                    label="Imagem do Anúncio (300x250px obrigatório)"
                    value={watchMiddle("image")}
                    onChange={(url) => setValueMiddle("image", url)}
                  />

                  <div>
                    <Label htmlFor="middle-link">Link de Destino</Label>
                    <Input
                      id="middle-link"
                      {...registerMiddle("link")}
                      placeholder="https://exemplo.com"
                      type="url"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="middle-active"
                      checked={watchMiddle("active")}
                      onCheckedChange={(checked) => setValueMiddle("active", checked)}
                    />
                    <Label htmlFor="middle-active">Anúncio ativo</Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={updateMutation.isPending || createMutation.isPending}
                  >
                    {(updateMutation.isPending || createMutation.isPending) && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Salvar Anúncio #2
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogAds;
