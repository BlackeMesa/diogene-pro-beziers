import { AlertCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackPhoneClick } from "@/lib/analytics";

const UrgencyBanner = () => {
  return (
    <div className="bg-destructive text-destructive-foreground rounded-xl p-6 shadow-strong animate-pulse-slow">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-destructive-foreground/20 rounded-full p-3">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Intervention Urgente 24h/24</h3>
            <p className="text-sm opacity-90">Disponible même les week-ends et jours fériés</p>
          </div>
        </div>
        <a href="tel:+33788432055" onClick={() => trackPhoneClick('urgency_banner')}>
          <Button 
            size="lg"
            className="bg-destructive-foreground text-destructive hover:bg-destructive-foreground/90 font-bold whitespace-nowrap"
          >
            <Phone className="w-5 h-5 mr-2" />
            07 88 43 20 55
          </Button>
        </a>
      </div>
    </div>
  );
};

export default UrgencyBanner;
