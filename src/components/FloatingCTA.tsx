import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Phone } from "lucide-react";
import { trackCTAClick, trackPhoneClick } from "@/lib/analytics";

const FloatingCTA = () => {
  return (
    <>
      {/* Desktop version - bottom right */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <Link to="/contact" onClick={() => trackCTAClick('devis_12h', 'Devis Garanti sous 12h - Floating Desktop', '/contact')}>
          <Button 
            size="lg"
            className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold shadow-strong hover:shadow-medium transition-all duration-300 hover:scale-105 px-6 py-6 text-base"
          >
            <Clock className="w-5 h-5 mr-2" />
            Devis Garanti sous 12h
          </Button>
        </Link>
      </div>

      {/* Mobile version - bottom sticky bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border shadow-strong">
        <div className="grid grid-cols-2 gap-2 p-3">
          <a href="tel:+33788432055" onClick={() => trackPhoneClick('floating_cta_mobile')}>
            <Button 
              variant="outline"
              className="w-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="w-4 h-4 mr-2" />
              Appeler
            </Button>
          </a>
          <Link to="/contact" className="w-full" onClick={() => trackCTAClick('devis_12h', 'Devis 12h - Floating Mobile', '/contact')}>
            <Button 
              className="w-full bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold"
            >
              <Clock className="w-4 h-4 mr-2" />
              Devis 12h
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;
