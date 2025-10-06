import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "351911734711";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-elegant hover:shadow-2xl transition-all duration-300 hover:scale-110 p-0 bg-transparent hover:bg-transparent"
      >
        <img 
          src="/whatsapp-icon.png" 
          alt="WhatsApp" 
          className="h-14 w-14 rounded-full object-cover scale-110"
        />
      </Button>
      <span className="absolute -top-1 -left-1 h-4 w-4 bg-red-500 rounded-full animate-ping"></span>
      <span className="absolute -top-1 -left-1 h-4 w-4 bg-red-500 rounded-full"></span>
    </a>
  );
};

export default WhatsAppButton;
