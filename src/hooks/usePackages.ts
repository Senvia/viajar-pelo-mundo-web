import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Database } from '@/integrations/supabase/types';

type Package = Database['public']['Tables']['packages']['Row'];
type PackageInsert = Database['public']['Tables']['packages']['Insert'];
type PackageUpdate = Database['public']['Tables']['packages']['Update'];

type PackageIncluded = Database['public']['Tables']['package_included']['Row'];
type PackageIncludedInsert = Database['public']['Tables']['package_included']['Insert'];

type PackageExperience = Database['public']['Tables']['package_experiences']['Row'];
type PackageExperienceInsert = Database['public']['Tables']['package_experiences']['Insert'];

export interface TravelPackage extends Package {
  package_included?: PackageIncluded[];
  package_experiences?: PackageExperience[];
}

export interface CreatePackageData {
  name: string;
  description: string;
  destination: string;
  duration: string;
  price: string;
  price_note?: string;
  hero_image?: string;
  main_image?: string;
  highlights: string[];
  included: {
    name: string;
    description?: string;
    subtitle?: string;
    images: string[];
  }[];
  experienceGallery: {
    title: string;
    description?: string;
    image?: string;
  }[];
}

export const usePackages = () => {
  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPackages = async () => {
    setLoading(true);
    try {
      const { data: packagesData, error: packagesError } = await supabase
        .from('packages')
        .select(`
          *,
          package_included (*),
          package_experiences (*)
        `)
        .order('created_at', { ascending: false });

      if (packagesError) throw packagesError;

      setPackages(packagesData || []);
    } catch (error) {
      console.error('Error fetching packages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const createPackage = async (data: CreatePackageData): Promise<TravelPackage | null> => {
    try {
      // Generate slug from name
      const slug = data.name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      // Insert main package
      const { data: newPackage, error: packageError } = await supabase
        .from('packages')
        .insert({
          slug,
          name: data.name,
          description: data.description,
          destination: data.destination,
          duration: data.duration,
          price: data.price,
          price_note: data.price_note,
          hero_image: data.hero_image,
          main_image: data.main_image,
          highlights: data.highlights,
        })
        .select()
        .single();

      if (packageError) throw packageError;

      // Insert included items
      if (data.included.length > 0) {
        const includedData = data.included.map((item, index) => ({
          package_id: newPackage.id,
          name: item.name,
          description: item.description,
          subtitle: item.subtitle,
          images: item.images,
          order_index: index,
        }));

        const { error: includedError } = await supabase
          .from('package_included')
          .insert(includedData);

        if (includedError) throw includedError;
      }

      // Insert experiences
      if (data.experienceGallery.length > 0) {
        const experiencesData = data.experienceGallery.map((exp, index) => ({
          package_id: newPackage.id,
          title: exp.title,
          description: exp.description,
          image: exp.image,
          order_index: index,
        }));

        const { error: experiencesError } = await supabase
          .from('package_experiences')
          .insert(experiencesData);

        if (experiencesError) throw experiencesError;
      }

      // Fetch complete package with relations
      const { data: completePackage } = await supabase
        .from('packages')
        .select(`
          *,
          package_included (*),
          package_experiences (*)
        `)
        .eq('id', newPackage.id)
        .single();

      await fetchPackages();
      return completePackage;
    } catch (error) {
      console.error('Error creating package:', error);
      throw error;
    }
  };

  const updatePackage = async (id: string, data: Partial<CreatePackageData>): Promise<TravelPackage | null> => {
    try {
      // Update main package
      const updateData: PackageUpdate = {};
      if (data.name) updateData.name = data.name;
      if (data.description) updateData.description = data.description;
      if (data.destination) updateData.destination = data.destination;
      if (data.duration) updateData.duration = data.duration;
      if (data.price) updateData.price = data.price;
      if (data.price_note !== undefined) updateData.price_note = data.price_note;
      if (data.hero_image !== undefined) updateData.hero_image = data.hero_image;
      if (data.main_image !== undefined) updateData.main_image = data.main_image;
      if (data.highlights) updateData.highlights = data.highlights;

      const { error: updateError } = await supabase
        .from('packages')
        .update(updateData)
        .eq('id', id);

      if (updateError) throw updateError;

      // Update included items if provided
      if (data.included) {
        // Delete existing included items
        await supabase
          .from('package_included')
          .delete()
          .eq('package_id', id);

        // Insert new included items
        if (data.included.length > 0) {
          const includedData = data.included.map((item, index) => ({
            package_id: id,
            name: item.name,
            description: item.description,
            subtitle: item.subtitle,
            images: item.images,
            order_index: index,
          }));

          const { error: includedError } = await supabase
            .from('package_included')
            .insert(includedData);

          if (includedError) throw includedError;
        }
      }

      // Update experiences if provided
      if (data.experienceGallery) {
        // Delete existing experiences
        await supabase
          .from('package_experiences')
          .delete()
          .eq('package_id', id);

        // Insert new experiences
        if (data.experienceGallery.length > 0) {
          const experiencesData = data.experienceGallery.map((exp, index) => ({
            package_id: id,
            title: exp.title,
            description: exp.description,
            image: exp.image,
            order_index: index,
          }));

          const { error: experiencesError } = await supabase
            .from('package_experiences')
            .insert(experiencesData);

          if (experiencesError) throw experiencesError;
        }
      }

      await fetchPackages();
      return getPackageById(id);
    } catch (error) {
      console.error('Error updating package:', error);
      throw error;
    }
  };

  const deletePackage = async (id: string): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from('packages')
        .delete()
        .eq('id', id);

      if (error) throw error;

      await fetchPackages();
      return true;
    } catch (error) {
      console.error('Error deleting package:', error);
      throw error;
    }
  };

  const getPackageById = (id: string): TravelPackage | undefined => {
    return packages.find(pkg => pkg.id === id);
  };

  const getPackageBySlug = (slug: string): TravelPackage | undefined => {
    return packages.find(pkg => pkg.slug === slug);
  };

  return {
    packages,
    loading,
    createPackage,
    updatePackage,
    deletePackage,
    getPackageById,
    getPackageBySlug,
    refetch: fetchPackages,
  };
};