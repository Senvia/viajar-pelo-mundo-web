import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { supabase } from "@/integrations/supabase/client";
import { 
  MapPin, 
  Calendar, 
  Star, 
  CheckCircle,
  Phone,
  ArrowLeft,
  Loader2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PackageData {
  id: string;
  name: string;
  destination: string;
  duration: string;
  price: string;
  price_note: string | null;
  description: string;
  hero_image: string | null;
  main_image: string | null;
  highlights: string[];
  package_experiences: {
    id: string;
    title: string;
    description: string | null;
    image: string | null;
    order_index: number;
  }[];
  package_included: {
    id: string;
    name: string;
    subtitle: string | null;
    description: string | null;
    images: string[];
    order_index: number;
  }[];
}

const PackageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [packageData, setPackageData] = useState<PackageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadPackageData();
  }, [id]);

  const loadPackageData = async () => {
    if (!id) return;

    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('packages')
        .select(`
          *,
          package_experiences(*),
          package_included(*)
        `)
        .eq('id', id)
        .single();

      if (error) throw error;

      if (!data) {
        toast({
          title: "Pacote não encontrado",
          description: "O pacote solicitado não existe.",
          variant: "destructive",
        });
        navigate('/servicos/pacotes');
        return;
      }

      // Sort experiences and included items by order_index
      const sortedData = {
        ...data,
        package_experiences: data.package_experiences?.sort((a: any, b: any) => a.order_index - b.order_index) || [],
        package_included: data.package_included?.sort((a: any, b: any) => a.order_index - b.order_index) || [],
      };

      setPackageData(sortedData as PackageData);
    } catch (error: any) {
      console.error('Error loading package:', error);
      toast({
        title: "Erro ao carregar pacote",
        description: "Não foi possível carregar os detalhes do pacote.",
        variant: "destructive",
      });
      navigate('/servicos/pacotes');
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const message = packageData 
      ? `Olá! Gostaria de saber mais sobre o pacote "${packageData.name}".`
      : 'Olá! Gostaria de saber mais sobre os pacotes de viagem.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/351911734711?text=${encodedMessage}`, '_blank');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-brand-blue mx-auto mb-4" />
          <p className="text-muted-foreground">Carregando pacote...</p>
        </div>
      </div>
    );
  }

  if (!packageData) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={packageData.hero_image || packageData.main_image || '/lovable-uploads/0d6db174-1deb-46b7-8372-803af136d59f.png'}
            alt={packageData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative container">
          <Button
            variant="ghost"
            className="mb-6 text-white hover:bg-white/20"
            onClick={() => navigate('/servicos/pacotes')}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para pacotes
          </Button>
          
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] pb-2">
              {packageData.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl">
              {packageData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-brand-dark text-white hover:bg-brand-dark/90 shadow-2xl"
                onClick={handleWhatsApp}
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar Conosco
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Destino</h3>
                    <p className="text-muted-foreground">{packageData.destination}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Duração</h3>
                    <p className="text-muted-foreground">{packageData.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-icons flex items-center justify-center">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">Preço</h3>
                    <p className="text-2xl font-bold text-brand-blue">{packageData.price}</p>
                    {packageData.price_note && (
                      <p className="text-sm text-muted-foreground">{packageData.price_note}</p>
                    )}
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    size="lg" 
                    className="w-full bg-brand-dark hover:bg-brand-dark/90 shadow-elegant text-lg py-4 text-white"
                    onClick={handleWhatsApp}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Solicitar Orçamento
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div 
                  className="rounded-2xl overflow-hidden shadow-2xl h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${packageData.main_image || packageData.hero_image || '/lovable-uploads/6ee4103f-197e-4089-a241-c16fbe356435.png'}')`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      {packageData.highlights && packageData.highlights.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
                Destaques do Pacote
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {packageData.highlights.map((highlight, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{highlight}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Experiences */}
      {packageData.package_experiences && packageData.package_experiences.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
                Experiências Incluídas
              </h2>
              <div className="space-y-16">
                {packageData.package_experiences.map((experience, index) => (
                  <div 
                    key={experience.id} 
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className={index % 2 === 0 ? '' : 'lg:order-last'}>
                      {experience.image && (
                        <div 
                          className="rounded-2xl overflow-hidden shadow-2xl h-80 bg-cover bg-center"
                          style={{ backgroundImage: `url('${experience.image}')` }}
                        />
                      )}
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-secondary">{experience.title}</h3>
                      {experience.description && (
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Included Items */}
      {packageData.package_included && packageData.package_included.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
                O Que Está Incluído
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {packageData.package_included.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    {item.images && item.images.length > 0 && (
                      <div 
                        className="h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url('${item.images[0]}')` }}
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-secondary mb-2">{item.name}</h3>
                      {item.subtitle && (
                        <p className="text-sm text-brand-blue mb-3">{item.subtitle}</p>
                      )}
                      {item.description && (
                        <p className="text-muted-foreground">{item.description}</p>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-brand-blue/5 via-secondary/5 to-brand-dark/5 rounded-3xl p-12 border border-border/50">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Interessado Neste Pacote?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Entre em contato conosco para personalizar sua experiência e garantir sua reserva
              </p>
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg bg-brand-dark hover:bg-brand-dark/90 shadow-elegant text-white"
                onClick={handleWhatsApp}
              >
                <Phone className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default PackageDetail;
