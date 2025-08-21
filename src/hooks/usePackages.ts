import { useState, useEffect } from 'react';
import { TravelPackage, CreatePackageData } from '@/types/Package';

// Mock data storage (in real app, this would be Supabase)
const STORAGE_KEY = 'travel-packages';

const getStoredPackages = (): TravelPackage[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

const savePackages = (packages: TravelPackage[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(packages));
};

export const usePackages = () => {
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedPackages = getStoredPackages();
    setPackages(storedPackages);
    setLoading(false);
  }, []);

  const createPackage = (data: CreatePackageData): TravelPackage => {
    const newPackage: TravelPackage = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const updatedPackages = [...packages, newPackage];
    setPackages(updatedPackages);
    savePackages(updatedPackages);
    
    return newPackage;
  };

  const updatePackage = (id: string, data: Partial<TravelPackage>): TravelPackage | null => {
    const packageIndex = packages.findIndex(pkg => pkg.id === id);
    if (packageIndex === -1) return null;

    const updatedPackage = {
      ...packages[packageIndex],
      ...data,
      updatedAt: new Date().toISOString(),
    };

    const updatedPackages = [...packages];
    updatedPackages[packageIndex] = updatedPackage;
    
    setPackages(updatedPackages);
    savePackages(updatedPackages);
    
    return updatedPackage;
  };

  const deletePackage = (id: string): boolean => {
    const updatedPackages = packages.filter(pkg => pkg.id !== id);
    setPackages(updatedPackages);
    savePackages(updatedPackages);
    return true;
  };

  const getPackageById = (id: string): TravelPackage | undefined => {
    return packages.find(pkg => pkg.id === id);
  };

  return {
    packages,
    loading,
    createPackage,
    updatePackage,
    deletePackage,
    getPackageById,
  };
};