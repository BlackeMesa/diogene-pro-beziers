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
    <>
      {/* Desktop version - positioned to the left of FloatingCTA */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hidden md:flex fixed bottom-8 right-[280px] z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-strong transition-all duration-300 items-center gap-2 group"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        {isHovered && (
          <span className="text-sm font-medium whitespace-nowrap pr-2 animate-fade-in">
            WhatsApp
          </span>
        )}
      </button>

      {/* Mobile version - above bottom bar */}
      <button
        onClick={handleClick}
        className="md:hidden fixed bottom-20 right-4 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-3 shadow-strong transition-all duration-300"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </button>
    </>
  );
};

export default WhatsAppButton;
