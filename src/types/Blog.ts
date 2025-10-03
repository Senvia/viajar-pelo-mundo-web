export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
  order_index: number;
  created_at: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author_name: string;
  author_id: string | null;
  category_id: string;
  published: boolean;
  views_count: number;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  blog_categories?: BlogCategory;
}

export interface BlogAd {
  id: string;
  title: string;
  image: string;
  link: string;
  position: 'top' | 'middle';
  active: boolean;
  created_at: string;
  updated_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  name: string | null;
  subscribed_at: string;
  active: boolean;
}
