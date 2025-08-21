-- Create storage bucket for package images
INSERT INTO storage.buckets (id, name, public) VALUES ('package-images', 'package-images', true);

-- Create packages table
CREATE TABLE IF NOT EXISTS public.packages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    destination TEXT NOT NULL,
    duration TEXT NOT NULL,
    price TEXT NOT NULL,
    price_note TEXT,
    hero_image TEXT,
    main_image TEXT,
    highlights TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create package_included table for "what's included" items
CREATE TABLE IF NOT EXISTS public.package_included (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    package_id UUID REFERENCES public.packages(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    subtitle TEXT,
    images TEXT[] DEFAULT '{}',
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create package_experiences table for experience gallery
CREATE TABLE IF NOT EXISTS public.package_experiences (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    package_id UUID REFERENCES public.packages(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    image TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.package_included ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.package_experiences ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a public travel site)
CREATE POLICY "Allow public read access to packages" ON public.packages
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access to package_included" ON public.package_included
    FOR SELECT USING (true);

CREATE POLICY "Allow public read access to package_experiences" ON public.package_experiences
    FOR SELECT USING (true);

-- For now, allow all operations (in production, you'd want to restrict to admin users)
CREATE POLICY "Allow all operations on packages" ON public.packages
    FOR ALL USING (true);

CREATE POLICY "Allow all operations on package_included" ON public.package_included
    FOR ALL USING (true);

CREATE POLICY "Allow all operations on package_experiences" ON public.package_experiences
    FOR ALL USING (true);

-- Create storage policies for package images
CREATE POLICY "Allow public access to package images" ON storage.objects
    FOR SELECT USING (bucket_id = 'package-images');

CREATE POLICY "Allow authenticated uploads to package images" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'package-images');

CREATE POLICY "Allow authenticated updates to package images" ON storage.objects
    FOR UPDATE USING (bucket_id = 'package-images');

CREATE POLICY "Allow authenticated deletes of package images" ON storage.objects
    FOR DELETE USING (bucket_id = 'package-images');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_packages_updated_at
    BEFORE UPDATE ON public.packages
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample packages
DO $$ 
DECLARE
    portugal_essence_id UUID := gen_random_uuid();
    lisboa_imperial_id UUID := gen_random_uuid();
BEGIN
    INSERT INTO public.packages (id, slug, name, description, destination, duration, price, price_note, hero_image, main_image, highlights) VALUES 
    (
        portugal_essence_id,
        'portugal-essence',
        'Portugal Essence',
        'Uma jornada completa pelos encantos do Porto, combinando cultura, gastronomia e experiências únicas',
        'Porto - Portugal',
        '7 dias e 6 noites',
        '3.510 €',
        'Total para 02 Adultos em quarto duplo',
        '/lovable-uploads/6ee4103f-197e-4089-a241-c16fbe356435.png',
        '/lovable-uploads/6ee4103f-197e-4089-a241-c16fbe356435.png',
        ARRAY[
            'City Tour privativo pelo Porto',
            'Experiência vinícola no Museu WOW',
            'Workshop de Pastel de Nata',
            'Cruzeiro gourmet ao pôr do sol',
            'Espetáculo de Fado tradicional',
            'Tour pelo Vale do Douro'
        ]
    ),
    (
        lisboa_imperial_id,
        'lisboa-imperial',
        'Lisboa Imperial',
        'Descubra a majestosa capital portuguesa com suas tradições milenares, arquitetura deslumbrante e gastronomia única',
        'Lisboa - Portugal',
        '5 dias e 4 noites',
        '2.850 €',
        'Total para 02 Adultos em quarto duplo',
        '/lovable-uploads/5b473dd1-d838-4e32-8cd6-8d66f99b8753.png',
        '/lovable-uploads/5b473dd1-d838-4e32-8cd6-8d66f99b8753.png',
        ARRAY[
            'Tour pelos bairros históricos',
            'Visita ao Mosteiro dos Jerónimos',
            'Experiência gastronômica em Belém',
            'Passeio de elétrico tradicional',
            'Espetáculo de Fado em Alfama',
            'Excursão a Sintra e Cascais'
        ]
    );

    -- Insert sample experiences for Portugal Essence
    INSERT INTO public.package_experiences (package_id, title, description, image, order_index) VALUES
    (portugal_essence_id, 'City Tour pelo Porto', 'Explore os principais pontos turísticos do Porto com guia especializado', '/lovable-uploads/78890d5a-286d-4b4f-b8a4-a5d44461d3d4.png', 1),
    (portugal_essence_id, 'Experiência Vinícola', 'Degustação de vinhos e visita às caves do Porto', '/lovable-uploads/2da541d5-fe43-4e23-bf3e-d0a2793efe31.png', 2),
    (portugal_essence_id, 'Workshop Gastronômico', 'Aprenda a fazer os famosos Pastéis de Nata', '/lovable-uploads/00cb83f8-4b51-4af0-9af8-9ccbcd3b0df3.png', 3),
    (portugal_essence_id, 'Cruzeiro ao Pôr do Sol', 'Navegue pelo Rio Douro durante o pôr do sol', '/lovable-uploads/604537d9-c3eb-430c-9d01-820b1bec9336.png', 4),
    (portugal_essence_id, 'Espetáculo de Fado', 'Noite tradicional com música de Fado autêntica', '/lovable-uploads/5df4c253-f819-4e4f-a21c-a865b6ac3605.png', 5),
    (portugal_essence_id, 'Vale do Douro', 'Excursão pelas paisagens vinícolas do Douro', '/lovable-uploads/878dda6e-16ac-446d-bb74-dec63248b020.png', 6);

    -- Insert sample experiences for Lisboa Imperial
    INSERT INTO public.package_experiences (package_id, title, description, image, order_index) VALUES
    (lisboa_imperial_id, 'Bairros Históricos', 'Caminhada pelos bairros históricos de Lisboa', '/lovable-uploads/50a145af-5d83-420a-814c-8f6f70ed394c.png', 1),
    (lisboa_imperial_id, 'Mosteiro dos Jerónimos', 'Visita ao icônico mosteiro de Belém', '/lovable-uploads/fda1f478-5e7a-4434-8926-5f0330501e3a.png', 2),
    (lisboa_imperial_id, 'Gastronomia em Belém', 'Tour gastronômico pela região de Belém', '/lovable-uploads/00cb83f8-4b51-4af0-9af8-9ccbcd3b0df3.png', 3),
    (lisboa_imperial_id, 'Elétrico Tradicional', 'Passeio no famoso elétrico 28 de Lisboa', '/lovable-uploads/5b473dd1-d838-4e32-8cd6-8d66f99b8753.png', 4),
    (lisboa_imperial_id, 'Fado em Alfama', 'Noite de Fado no coração de Alfama', '/lovable-uploads/5df4c253-f819-4e4f-a21c-a865b6ac3605.png', 5),
    (lisboa_imperial_id, 'Sintra e Cascais', 'Excursão de dia inteiro a Sintra e Cascais', '/lovable-uploads/2da541d5-fe43-4e23-bf3e-d0a2793efe31.png', 6);
END $$;