import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PackageForm from '@/components/PackageForm';
import { usePackages } from '@/hooks/usePackages';
import { CreatePackageData } from '@/types/Package';
import { toast } from 'sonner';

const CriarEditarPacote = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { createPackage, updatePackage, getPackageById } = usePackages();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(!!id);

  const isEditing = !!id;

  useEffect(() => {
    if (id) {
      const packageData = getPackageById(id);
      if (packageData) {
        setInitialData(packageData);
      } else {
        toast.error('Pacote não encontrado');
        navigate('/admin/dashboard');
      }
      setLoading(false);
    }
  }, [id, getPackageById, navigate]);

  const handleSubmit = (data: CreatePackageData) => {
    try {
      if (isEditing && id) {
        updatePackage(id, data);
        toast.success('Pacote atualizado com sucesso!');
      } else {
        createPackage(data);
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