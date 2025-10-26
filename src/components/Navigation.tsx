import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logoLeLien from "@/assets/logo-le-lien-proprete.png";
import { trackNavigationClick, trackPhoneClick } from "@/lib/analytics";

interface NavLink {
  path?: string;
  label: string;
  dropdown?: { path: string; label: string; urgent?: boolean }[];
}

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks: NavLink[] = [
    { path: "/", label: "Accueil" },
    { 
      label: "Services", 
      dropdown: [
        { path: "/nettoyage-diogene", label: "Nettoyage Diogène" },
        { path: "/debarras-insalubre", label: "Débarras Insalubre" },
        { path: "/nettoyage-urgence-24h-herault", label: "🚨 Urgence 24h", urgent: true }
      ]
    },
    { 
      label: "Prix & Zones",
      dropdown: [
        { path: "/prix-nettoyage-diogene-herault", label: "Nos Tarifs" },
        { path: "/zone-intervention-herault", label: "Zone d'Intervention" },
        { path: "/nettoyage-diogene-beziers", label: "Béziers & Agglo" }
      ]
    },
  { path: "/appartement-tres-sale-que-faire", label: "Besoin d'aide ?" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logoLeLien} 
              alt="Le Lien Propreté 34 Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="hidden md:block">
              <div className="text-lg font-bold text-primary leading-tight">
                Le Lien Propreté 34
              </div>
              <div className="text-xs text-muted-foreground">Béziers - Hérault</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              link.dropdown ? (
              <div 
                key={link.label}
                className="relative group"
              >
                  <button
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-colors text-foreground hover:bg-secondary flex items-center gap-1"
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 bg-popover border border-border rounded-lg shadow-strong min-w-[220px] py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => {
                            trackNavigationClick(item.path, item.label);
                          }}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            location.pathname === item.path
                              ? "bg-primary text-primary-foreground"
                              : "text-popover-foreground hover:bg-secondary"
                          } ${item.urgent ? 'font-bold' : 'font-medium'}`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path!}
                  onClick={() => trackNavigationClick(link.path!, link.label)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="tel:+33788432055" 
              onClick={() => trackPhoneClick('header')}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">07 88 43 20 55</span>
            </a>
            <Link to="/contact" onClick={() => trackNavigationClick('/contact', 'Devis gratuit Header')}>
              <Button className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-semibold shadow-medium">
                Devis gratuit
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                link.dropdown ? (
                  <div key={link.label} className="space-y-1">
                    <div className="px-4 py-2 text-sm font-bold text-muted-foreground">
                      {link.label}
                    </div>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          trackNavigationClick(item.path, `${item.label} Mobile`);
                        }}
                        className={`pl-8 pr-4 py-2 rounded-lg text-sm transition-colors block ${
                          location.pathname === item.path
                            ? "bg-primary text-primary-foreground font-semibold"
                            : "text-foreground hover:bg-secondary font-medium"
                        } ${item.urgent ? 'font-bold' : ''}`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path!}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      trackNavigationClick(link.path!, `${link.label} Mobile`);
                    }}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <a
                href="tel:+33788432055"
                onClick={() => trackPhoneClick('mobile_menu')}
                className="px-4 py-3 flex items-center space-x-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>07 88 43 20 55</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
