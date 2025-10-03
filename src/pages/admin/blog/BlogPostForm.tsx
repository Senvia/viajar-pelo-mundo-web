import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageUpload from "@/components/ImageUpload";
import { useBlogCategories, useCreateBlogCategory } from "@/hooks/useBlogCategories";
import { useCreateBlogPost, useUpdateBlogPost, useBlogPostById } from "@/hooks/useBlogPosts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, Loader2, Check, ChevronsUpDown, Calendar } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";

const postSchema = z.object({
  title: z.string().min(3, "Título deve ter pelo menos 3 caracteres").max(200),
  slug: z.string().min(3).max(200),
  category_id: z.string().min(1, "Selecione uma categoria"),
  featured_image: z.string().url("Imagem destacada é obrigatória"),
  excerpt: z.string().min(150, "Resumo deve ter pelo menos 150 caracteres").max(200),
  content: z.string().min(300, "Conteúdo deve ter pelo menos 300 caracteres"),
  published: z.boolean(),
  published_at: z.string().nullable(),
});

type PostFormData = z.infer<typeof postSchema>;

const BlogPostForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const isEditing = !!id;

  const { data: categories } = useBlogCategories();
  const { data: existingPost, isLoading: loadingPost } = useBlogPostById(id || "");
  const createMutation = useCreateBlogPost();
  const updateMutation = useUpdateBlogPost();
  const createCategoryMutation = useCreateBlogCategory();
  
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [categorySearchValue, setCategorySearchValue] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      published: false,
      published_at: null,
    },
  });

  const title = watch("title");
  const featuredImage = watch("featured_image");
  const published = watch("published");

  // Generate slug from title
  useEffect(() => {
    if (title && !isEditing) {
      const slug = title
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      setValue("slug", slug);
    }
  }, [title, setValue, isEditing]);

  // Load existing post data
  useEffect(() => {
    if (existingPost && isEditing) {
      setValue("title", existingPost.title);
      setValue("slug", existingPost.slug);
      setValue("category_id", existingPost.category_id);
      setValue("featured_image", existingPost.featured_image);
      setValue("excerpt", existingPost.excerpt);
      setValue("content", existingPost.content);
      setValue("published", existingPost.published);
      setValue("published_at", existingPost.published_at);
    }
  }, [existingPost, isEditing, setValue]);

  const onSubmit = async (data: PostFormData) => {
    // Check if category needs to be created
    const categoryExists = categories?.some(cat => cat.id === data.category_id);
    let finalCategoryId = data.category_id;

    if (!categoryExists && categorySearchValue) {
      // Create new category
      const slug = categorySearchValue
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      const { data: lastCategory } = await supabase
        .from("blog_categories")
        .select("order_index")
        .order("order_index", { ascending: false })
        .limit(1)
        .single();

      const newCategory = await createCategoryMutation.mutateAsync({
        name: categorySearchValue,
        slug: slug,
        icon: "FolderOpen",
        color: "#3B82F6",
        order_index: (lastCategory?.order_index || 0) + 1,
      });

      finalCategoryId = newCategory.id;
    }

    const postData = {
      ...data,
      category_id: finalCategoryId,
      author_name: user?.email || "Admin",
      author_id: user?.id || null,
      published_at: data.published ? new Date().toISOString() : null,
    };

    if (isEditing) {
      updateMutation.mutate(
        { id: id!, ...postData },
        { onSuccess: () => navigate("/admin/blog/posts") }
      );
    } else {
      createMutation.mutate(postData as any, {
        onSuccess: () => navigate("/admin/blog/posts"),
      });
    }
  };

  if (loadingPost && isEditing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="light" />

      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/admin/blog/posts")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para posts
          </Button>

          <Card>
            <CardHeader>
              <CardTitle>
                {isEditing ? "Editar Post" : "Criar Novo Post"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Título */}
                <div>
                  <Label htmlFor="title">Título *</Label>
                  <Input
                    id="title"
                    {...register("title")}
                    placeholder="Digite o título do post"
                  />
                  {errors.title && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                {/* Slug */}
                <div>
                  <Label htmlFor="slug">Slug (URL) *</Label>
                  <Input
                    id="slug"
                    {...register("slug")}
                    placeholder="slug-do-post"
                  />
                  {errors.slug && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.slug.message}
                    </p>
                  )}
                </div>

                {/* Categoria */}
                <div>
                  <Label htmlFor="category_id">Categoria *</Label>
                  <Popover open={categoryOpen} onOpenChange={setCategoryOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={categoryOpen}
                        className="w-full justify-between"
                      >
                        {watch("category_id")
                          ? categories?.find((cat) => cat.id === watch("category_id"))?.name
                          : "Selecione ou crie uma categoria"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput 
                          placeholder="Buscar ou criar categoria..." 
                          value={categorySearchValue}
                          onValueChange={setCategorySearchValue}
                        />
                        <CommandList>
                          <CommandEmpty>
                            <div className="p-2 text-sm">
                              Pressione Enter para criar: <strong>{categorySearchValue}</strong>
                            </div>
                          </CommandEmpty>
                          <CommandGroup>
                            {categories?.map((cat) => (
                              <CommandItem
                                key={cat.id}
                                value={cat.name}
                                onSelect={() => {
                                  setValue("category_id", cat.id);
                                  setCategorySearchValue(cat.name);
                                  setCategoryOpen(false);
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    watch("category_id") === cat.id ? "opacity-100" : "opacity-0"
                                  )}
                                />
                                {cat.name}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <p className="text-xs text-muted-foreground mt-1">
                    Digite para criar uma nova categoria ou selecione existente
                  </p>
                  {errors.category_id && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.category_id.message}
                    </p>
                  )}
                </div>

                {/* Imagem Destacada */}
                <div>
                  <ImageUpload
                    label="Imagem Destacada * (Recomendado: 1200x630px)"
                    value={featuredImage}
                    onChange={(url) => setValue("featured_image", url)}
                  />
                  {errors.featured_image && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.featured_image.message}
                    </p>
                  )}
                </div>

                {/* Resumo */}
                <div>
                  <Label htmlFor="excerpt">Resumo * (150-200 caracteres)</Label>
                  <Textarea
                    id="excerpt"
                    {...register("excerpt")}
                    placeholder="Breve descrição do post"
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {watch("excerpt")?.length || 0} / 200
                  </p>
                  {errors.excerpt && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.excerpt.message}
                    </p>
                  )}
                </div>

                {/* Conteúdo */}
                <div>
                  <Label htmlFor="content">Conteúdo * (Mínimo 300 caracteres)</Label>
                  <Textarea
                    id="content"
                    {...register("content")}
                    placeholder="Conteúdo completo do post em HTML"
                    rows={15}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {watch("content")?.length || 0} caracteres
                  </p>
                  {errors.content && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.content.message}
                    </p>
                  )}
                </div>

                {/* Status */}
                <Card className={published ? "border-green-500/50 bg-green-50/50 dark:bg-green-950/20" : "border-yellow-500/50 bg-yellow-50/50 dark:bg-yellow-950/20"}>
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Status de Publicação
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup
                      value={published ? "published" : "draft"}
                      onValueChange={(value) =>
                        setValue("published", value === "published")
                      }
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="draft" id="draft" />
                        <Label htmlFor="draft" className="cursor-pointer">
                          <div className="flex items-center gap-2">
                            <span>Rascunho</span>
                            <Badge variant="secondary">Não visível</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            O post ficará salvo mas não será visível no blog
                          </p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="published" id="published" />
                        <Label htmlFor="published" className="cursor-pointer">
                          <div className="flex items-center gap-2">
                            <span>Publicado</span>
                            <Badge variant="default">Visível</Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            O post será publicado imediatamente no blog
                          </p>
                        </Label>
                      </div>
                    </RadioGroup>
                    {existingPost?.published_at && (
                      <div className="text-xs text-muted-foreground pt-2 border-t">
                        Publicado em: {new Date(existingPost.published_at).toLocaleString('pt-BR')}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Botões */}
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={createMutation.isPending || updateMutation.isPending}
                  >
                    {(createMutation.isPending || updateMutation.isPending) && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {isEditing ? "Atualizar Post" : "Criar Post"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/admin/blog/posts")}
                  >
                    Cancelar
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostForm;
