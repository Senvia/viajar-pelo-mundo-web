export interface PackageIncluded {
  id: string;
  name: string;
  description: string;
  subtitle?: string;
  images: string[];
}

export interface PackageExperience {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface TravelPackage {
  id: string;
  name: string;
  description: string;
  destination: string;
  duration: string;
  price: string;
  priceNote: string;
  heroImage: string;
  mainImage: string;
  highlights: string[];
  included: PackageIncluded[];
  experienceGallery: PackageExperience[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CreatePackageData extends Omit<TravelPackage, 'id' | 'createdAt' | 'updatedAt'> {}