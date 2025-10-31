import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "33788432055"; // Format international sans +
  
  const handleClick = () => {
    const message = encodeURIComponent("Bonjour, je souhaite obtenir des informations sur vos services de nettoyage.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    trackEvent('whatsapp_click', {
      source: 'floating_button',
      phone_number: phoneNumber,
      page: window.location.pathname
    });
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-strong transition-all duration-300 flex items-center gap-2 group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      {isHovered && (
        <span className="text-sm font-medium whitespace-nowrap pr-2 animate-fade-in">
          Contactez-nous
        </span>
      )}
    </button>
  );
};

export default WhatsAppButton;
