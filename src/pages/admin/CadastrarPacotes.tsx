import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Plus, Minus, Save, ArrowLeft, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface PackageForm {
  name: string;
  destination: string;
  duration: string;
  price: string;
  priceNote: string;
  image: string;
  description: string;
  highlights: string[];
}

const CadastrarPacotes = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<PackageForm>({
    name: "",
    destination: "",
    duration: "",
    price: "",
    priceNote: "",
    image: "",
    description: "",
    highlights: [""]
  });

  const handleInputChange = (field: keyof PackageForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleHighlightChange = (index: number, value: string) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData(prev => ({
      ...prev,
      highlights: newHighlights
    }));
  };

  const addHighlight = () => {
    setFormData(prev => ({
      ...prev,
      highlights: [...prev.highlights, ""]
    }));
  };

  const removeHighlight = (index: number) => {
    if (formData.highlights.length > 1) {
      const newHighlights = formData.highlights.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        highlights: newHighlights
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.destination || !formData.price) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    // Aqui você integraria com uma API para salvar o pacote
    console.log("Dados do pacote:", formData);
    toast.success("Pacote cadastrado com sucesso!");
    
    // Resetar formulário
    setFormData({
      name: "",
      destination: "",
      duration: "",
      price: "",
      priceNote: "",
      image: "",
      description: "",
      highlights: [""]
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-dark/5 via-secondary/5 to-brand-blue/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/servicos/pacotes')}
              className="mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar aos Pacotes
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Cadastrar Novo Pacote
            </h1>
            <p className="text-xl text-muted-foreground">
              Crie experiências únicas e inesquecíveis para seus clientes
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Informações Básicas */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Save className="w-5 h-5" />
                      Informações Básicas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="name">Nome do Pacote *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Ex: Portugal Essence"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="destination">Destino *</Label>
                      <Input
                        id="destination"
                        value={formData.destination}
                        onChange={(e) => handleInputChange('destination', e.target.value)}
                        placeholder="Ex: Porto - Portugal"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="duration">Duração</Label>
                      <Input
                        id="duration"
                        value={formData.duration}
                        onChange={(e) => handleInputChange('duration', e.target.value)}
                        placeholder="Ex: 7 dias e 6 noites"
                      />
                    </div>

                    <div>
                      <Label htmlFor="price">Preço *</Label>
                      <Input
                        id="price"
                        value={formData.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                        placeholder="Ex: 3.510 €"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="priceNote">Observação do Preço</Label>
                      <Input
                        id="priceNote"
                        value={formData.priceNote}
                        onChange={(e) => handleInputChange('priceNote', e.target.value)}
                        placeholder="Ex: Total para 02 Adultos em quarto duplo"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Descrição e Imagem */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Upload className="w-5 h-5" />
                      Descrição e Imagem
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="description">Descrição</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        placeholder="Descreva a experiência que o pacote oferece..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="image">URL da Imagem</Label>
                      <Input
                        id="image"
                        value={formData.image}
                        onChange={(e) => handleInputChange('image', e.target.value)}
                        placeholder="https://example.com/imagem.jpg ou /path/to/image.jpg"
                      />
                      {formData.image && (
                        <div className="mt-4">
                          <img 
                            src={formData.image} 
                            alt="Preview" 
                            className="w-full h-48 object-cover rounded-lg border"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Destaques do Pacote */}
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Principais Experiências Incluídas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {formData.highlights.map((highlight, index) => (
                      <div key={index} className="flex gap-2">
                        <Input
                          value={highlight}
                          onChange={(e) => handleHighlightChange(index, e.target.value)}
                          placeholder={`Experiência ${index + 1}...`}
                        />
                        {formData.highlights.length > 1 && (
                          <Button 
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => removeHighlight(index)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={addHighlight}
                      className="w-full"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Adicionar Experiência
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Botões de Ação */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-brand-dark hover:bg-brand-dark/90 text-white shadow-elegant flex-1"
                >
                  <Save className="w-5 h-5 mr-2" />
                  Salvar Pacote
                </Button>
                <Button 
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/servicos/pacotes')}
                  className="flex-1"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CadastrarPacotes;