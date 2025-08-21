import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { TravelPackage, CreatePackageData, PackageIncluded, PackageExperience } from '@/types/Package';
import { Plus, X, Upload, Trash2 } from 'lucide-react';

interface PackageFormProps {
  initialData?: TravelPackage;
  onSubmit: (data: CreatePackageData) => void;
  onCancel: () => void;
  isEditing?: boolean;
}

const PackageForm: React.FC<PackageFormProps> = ({ 
  initialData, 
  onSubmit, 
  onCancel, 
  isEditing = false 
}) => {
  const [formData, setFormData] = useState<CreatePackageData>({
    name: initialData?.name || '',
    description: initialData?.description || '',
    destination: initialData?.destination || '',
    duration: initialData?.duration || '',
    price: initialData?.price || '',
    priceNote: initialData?.priceNote || '',
    heroImage: initialData?.heroImage || '',
    mainImage: initialData?.mainImage || '',
    highlights: initialData?.highlights || [''],
    included: initialData?.included || [],
    experienceGallery: initialData?.experienceGallery || [],
  });

  const updateFormData = (field: keyof CreatePackageData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addHighlight = () => {
    updateFormData('highlights', [...formData.highlights, '']);
  };

  const updateHighlight = (index: number, value: string) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    updateFormData('highlights', newHighlights);
  };

  const removeHighlight = (index: number) => {
    updateFormData('highlights', formData.highlights.filter((_, i) => i !== index));
  };

  const addIncluded = () => {
    const newIncluded: PackageIncluded = {
      id: Date.now().toString(),
      name: '',
      description: '',
      subtitle: '',
      images: [''],
    };
    updateFormData('included', [...formData.included, newIncluded]);
  };

  const updateIncluded = (index: number, field: keyof PackageIncluded, value: any) => {
    const newIncluded = [...formData.included];
    newIncluded[index] = { ...newIncluded[index], [field]: value };
    updateFormData('included', newIncluded);
  };

  const removeIncluded = (index: number) => {
    updateFormData('included', formData.included.filter((_, i) => i !== index));
  };

  const addIncludedImage = (includedIndex: number) => {
    const newIncluded = [...formData.included];
    newIncluded[includedIndex].images.push('');
    updateFormData('included', newIncluded);
  };

  const updateIncludedImage = (includedIndex: number, imageIndex: number, value: string) => {
    const newIncluded = [...formData.included];
    newIncluded[includedIndex].images[imageIndex] = value;
    updateFormData('included', newIncluded);
  };

  const removeIncludedImage = (includedIndex: number, imageIndex: number) => {
    const newIncluded = [...formData.included];
    newIncluded[includedIndex].images = newIncluded[includedIndex].images.filter((_, i) => i !== imageIndex);
    updateFormData('included', newIncluded);
  };

  const addExperience = () => {
    const newExperience: PackageExperience = {
      id: Date.now().toString(),
      title: '',
      description: '',
      image: '',
    };
    updateFormData('experienceGallery', [...formData.experienceGallery, newExperience]);
  };

  const updateExperience = (index: number, field: keyof PackageExperience, value: any) => {
    const newExperiences = [...formData.experienceGallery];
    newExperiences[index] = { ...newExperiences[index], [field]: value };
    updateFormData('experienceGallery', newExperiences);
  };

  const removeExperience = (index: number) => {
    updateFormData('experienceGallery', formData.experienceGallery.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-secondary">
          {isEditing ? 'Editar Pacote' : 'Criar Novo Pacote'}
        </h1>
        <div className="flex gap-4">
          <Button variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit} className="bg-brand-dark hover:bg-brand-dark/90 text-white">
            {isEditing ? 'Salvar Alterações' : 'Criar Pacote'}
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Informações Básicas */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-secondary mb-4">Informações Básicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="name">Nome do Pacote</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => updateFormData('name', e.target.value)}
                placeholder="Ex: Portugal Essence"
                required
              />
            </div>
            <div>
              <Label htmlFor="destination">Destino</Label>
              <Input
                id="destination"
                value={formData.destination}
                onChange={(e) => updateFormData('destination', e.target.value)}
                placeholder="Ex: Porto - Portugal"
                required
              />
            </div>
            <div>
              <Label htmlFor="duration">Duração</Label>
              <Input
                id="duration"
                value={formData.duration}
                onChange={(e) => updateFormData('duration', e.target.value)}
                placeholder="Ex: 7 dias e 6 noites"
                required
              />
            </div>
            <div>
              <Label htmlFor="price">Preço</Label>
              <Input
                id="price"
                value={formData.price}
                onChange={(e) => updateFormData('price', e.target.value)}
                placeholder="Ex: 3.510 €"
                required
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="priceNote">Nota do Preço</Label>
              <Input
                id="priceNote"
                value={formData.priceNote}
                onChange={(e) => updateFormData('priceNote', e.target.value)}
                placeholder="Ex: Total para 02 Adultos em quarto duplo"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => updateFormData('description', e.target.value)}
                placeholder="Descrição do pacote..."
                rows={3}
                required
              />
            </div>
          </div>
        </Card>

        {/* Imagens */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-secondary mb-4">Imagens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="heroImage">Imagem Hero (Página inicial)</Label>
              <Input
                id="heroImage"
                value={formData.heroImage}
                onChange={(e) => updateFormData('heroImage', e.target.value)}
                placeholder="URL da imagem hero"
                required
              />
            </div>
            <div>
              <Label htmlFor="mainImage">Imagem Principal do Pacote</Label>
              <Input
                id="mainImage"
                value={formData.mainImage}
                onChange={(e) => updateFormData('mainImage', e.target.value)}
                placeholder="URL da imagem principal"
                required
              />
            </div>
          </div>
        </Card>

        {/* Destaques */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-secondary">Principais Destaques</h2>
            <Button type="button" onClick={addHighlight} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar
            </Button>
          </div>
          <div className="space-y-3">
            {formData.highlights.map((highlight, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={highlight}
                  onChange={(e) => updateHighlight(index, e.target.value)}
                  placeholder="Ex: City Tour privativo pelo Porto"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => removeHighlight(index)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* O que está Incluído */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-secondary">O que está Incluído</h2>
            <Button type="button" onClick={addIncluded} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Item
            </Button>
          </div>
          <div className="space-y-6">
            {formData.included.map((item, index) => (
              <Card key={item.id} className="p-4 border-l-4 border-l-brand-blue">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">Item {index + 1}</Badge>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeIncluded(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label>Nome do Item</Label>
                    <Input
                      value={item.name}
                      onChange={(e) => updateIncluded(index, 'name', e.target.value)}
                      placeholder="Ex: Transporte"
                    />
                  </div>
                  <div>
                    <Label>Subtítulo</Label>
                    <Input
                      value={item.subtitle || ''}
                      onChange={(e) => updateIncluded(index, 'subtitle', e.target.value)}
                      placeholder="Ex: Carro executivo confortável"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Label>Descrição</Label>
                  <Textarea
                    value={item.description}
                    onChange={(e) => updateIncluded(index, 'description', e.target.value)}
                    placeholder="Descrição detalhada do item..."
                    rows={2}
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Imagens do Item</Label>
                    <Button
                      type="button"
                      onClick={() => addIncludedImage(index)}
                      size="sm"
                      variant="outline"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Adicionar Imagem
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {item.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="flex gap-2">
                        <Input
                          value={image}
                          onChange={(e) => updateIncludedImage(index, imageIndex, e.target.value)}
                          placeholder="URL da imagem"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeIncludedImage(index, imageIndex)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Galeria de Experiências */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-secondary">Galeria de Experiências</h2>
            <Button type="button" onClick={addExperience} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar Experiência
            </Button>
          </div>
          <div className="space-y-4">
            {formData.experienceGallery.map((experience, index) => (
              <Card key={experience.id} className="p-4 border-l-4 border-l-brand-dark">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">Experiência {index + 1}</Badge>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeExperience(index)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label>Título da Experiência</Label>
                    <Input
                      value={experience.title}
                      onChange={(e) => updateExperience(index, 'title', e.target.value)}
                      placeholder="Ex: City Tour pelo Porto"
                    />
                  </div>
                  <div>
                    <Label>Imagem</Label>
                    <Input
                      value={experience.image}
                      onChange={(e) => updateExperience(index, 'image', e.target.value)}
                      placeholder="URL da imagem"
                    />
                  </div>
                </div>
                <div>
                  <Label>Descrição da Experiência</Label>
                  <Textarea
                    value={experience.description}
                    onChange={(e) => updateExperience(index, 'description', e.target.value)}
                    placeholder="Descrição da experiência..."
                    rows={2}
                  />
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </form>
    </div>
  );
};

export default PackageForm;