import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PackageForm from '@/components/PackageForm';
import { usePackages, CreatePackageData, TravelPackage } from '@/hooks/usePackages';
import { toast } from 'sonner';

interface TravelPackageFormData extends Omit<CreatePackageData, 'included' | 'experienceGallery'> {
  included: {
    id?: string;
    name: string;
    description?: string;
    subtitle?: string;
    images: string[];
  }[];
  experienceGallery: {
    id?: string;
    title: string;
    description?: string;
    image?: string;
  }[];
}

const CriarEditarPacote = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { createPackage, updatePackage, getPackageById } = usePackages();
  const [initialData, setInitialData] = useState<TravelPackageFormData | null>(null);
  const [loading, setLoading] = useState(!!id);

  const isEditing = !!id;

  useEffect(() => {
    if (id) {
      const packageData = getPackageById(id);
      if (packageData) {
        // Transform Supabase data to form data format
        const formData: TravelPackageFormData = {
          name: packageData.name,
          description: packageData.description,
          destination: packageData.destination,
          duration: packageData.duration,
          price: packageData.price,
          price_note: packageData.price_note || '',
          hero_image: packageData.hero_image || '',
          main_image: packageData.main_image || '',
          highlights: packageData.highlights || [],
          included: packageData.package_included?.map(item => ({
            id: item.id,
            name: item.name,
            description: item.description || '',
            subtitle: item.subtitle || '',
            images: item.images || [],
          })) || [],
          experienceGallery: packageData.package_experiences?.map(exp => ({
            id: exp.id,
            title: exp.title,
            description: exp.description || '',
            image: exp.image || '',
          })) || [],
        };
        setInitialData(formData);
      } else {
        toast.error('Pacote não encontrado');
        navigate('/admin/dashboard');
      }
      setLoading(false);
    }
  }, [id, getPackageById, navigate]);

  const handleSubmit = async (data: CreatePackageData) => {
    try {
      if (isEditing && id) {
        await updatePackage(id, data);
        toast.success('Pacote atualizado com sucesso!');
      } else {
        await createPackage(data);
        toast.success('Pacote criado com sucesso!');
      }
      navigate('/admin/dashboard');
    } catch (error) {
      toast.error('Erro ao salvar pacote');
      console.error('Error saving package:', error);
    }
  };

  const handleCancel = () => {
    navigate('/admin/dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-12">
        <PackageForm
          initialData={initialData}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isEditing={isEditing}
        />
      </div>
      <Footer />
    </div>
  );
};

export default CriarEditarPacote;