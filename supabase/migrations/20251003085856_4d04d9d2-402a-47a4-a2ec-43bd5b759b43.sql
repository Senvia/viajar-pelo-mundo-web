-- Create blog_categories table
CREATE TABLE public.blog_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  icon TEXT NOT NULL DEFAULT 'FolderOpen',
  color TEXT NOT NULL DEFAULT '#3B82F6',
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image TEXT NOT NULL,
  author_name TEXT NOT NULL,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  category_id UUID NOT NULL REFERENCES public.blog_categories(id) ON DELETE RESTRICT,
  published BOOLEAN NOT NULL DEFAULT false,
  views_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Create blog_ads table
CREATE TABLE public.blog_ads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  image TEXT NOT NULL,
  link TEXT NOT NULL,
  position TEXT NOT NULL CHECK (position IN ('top', 'middle')),
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  active BOOLEAN NOT NULL DEFAULT true
);

-- Enable RLS
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_ads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- RLS Policies for blog_categories
CREATE POLICY "Allow public read access to blog_categories"
  ON public.blog_categories FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage blog_categories"
  ON public.blog_categories FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for blog_posts
CREATE POLICY "Allow public read access to published blog_posts"
  ON public.blog_posts FOR SELECT
  USING (published = true OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can manage blog_posts"
  ON public.blog_posts FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for blog_ads
CREATE POLICY "Allow public read access to active blog_ads"
  ON public.blog_ads FOR SELECT
  USING (active = true);

CREATE POLICY "Admins can manage blog_ads"
  ON public.blog_ads FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for newsletter_subscribers
CREATE POLICY "Allow public insert to newsletter_subscribers"
  ON public.newsletter_subscribers FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can manage newsletter_subscribers"
  ON public.newsletter_subscribers FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Triggers for updated_at
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_blog_ads_updated_at
  BEFORE UPDATE ON public.blog_ads
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-images', 'blog-images', true);

INSERT INTO storage.buckets (id, name, public)
VALUES ('blog-ads', 'blog-ads', true);

-- Storage policies for blog-images
CREATE POLICY "Allow public read access to blog-images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'blog-images');

CREATE POLICY "Admins can upload blog-images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'blog-images' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update blog-images"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'blog-images' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete blog-images"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'blog-images' AND has_role(auth.uid(), 'admin'::app_role));

-- Storage policies for blog-ads
CREATE POLICY "Allow public read access to blog-ads"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'blog-ads');

CREATE POLICY "Admins can upload blog-ads"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'blog-ads' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update blog-ads"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'blog-ads' AND has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete blog-ads"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'blog-ads' AND has_role(auth.uid(), 'admin'::app_role));