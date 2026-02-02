import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import logoLeLien from "@/assets/simple_logo.png";
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
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
  const [openMobileSubSubmenu, setOpenMobileSubSubmenu] = useState<string | null>(null);

  // Bloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks: NavLink[] = [
    { path: "/", label: "Accueil" },
    {
      label: "Services",
      dropdown: [
        { path: "/nettoyage-diogene", label: "Nettoyage diogène" },
        { path: "/debarras-insalubre", label: "Débarras insalubre" },
        { path: "/nettoyage-urgence-24h-herault", label: "🚨 Urgence 24h", urgent: true },
      ],
    },
    {
      label: "Villes",
      dropdown: [
        // Hérault
        { path: "/nettoyage-diogene-beziers", label: "Béziers" },
        { path: "/nettoyage-diogene-montpellier", label: "Montpellier" },
        { path: "/nettoyage-diogene-sete", label: "Sète" },
        { path: "/nettoyage-diogene-agde", label: "Agde" },
        { path: "/nettoyage-diogene-lunel", label: "Lunel" },
        { path: "/nettoyage-diogene-frontignan", label: "Frontignan" },
        { path: "/nettoyage-diogene-marseillan", label: "Marseillan" },
        { path: "/nettoyage-diogene-meze", label: "Mèze" },
        { path: "/nettoyage-diogene-balaruc-les-bains", label: "Balaruc-les-Bains" },
        { path: "/nettoyage-diogene-pezenas", label: "Pézenas" },
        { path: "/zone-intervention-herault", label: "→ Toutes villes Hérault" },
        // Aude
        { path: "/nettoyage-diogene-narbonne", label: "Narbonne" },
        { path: "/nettoyage-diogene-carcassonne", label: "Carcassonne" },
        { path: "/nettoyage-diogene-lezignan", label: "Lézignan-Corbières" },
        { path: "/nettoyage-diogene-limoux", label: "Limoux" },
        { path: "/nettoyage-diogene-castelnaudary", label: "Castelnaudary" },
        { path: "/nettoyage-diogene-port-la-nouvelle", label: "Port-la-Nouvelle" },
        { path: "/zone-intervention-aude", label: "→ Toutes villes Aude" },
      ],
    },
    { path: "/prix-nettoyage-diogene-herault", label: "Tarifs" },
    { path: "/blog", label: "Blog" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  // Structure des villes pour le menu mobile avec sous-menus
  const villesHerault = [
    { path: "/nettoyage-diogene-beziers", label: "Béziers" },
    { path: "/nettoyage-diogene-montpellier", label: "Montpellier" },
    { path: "/nettoyage-diogene-sete", label: "Sète" },
    { path: "/nettoyage-diogene-agde", label: "Agde" },
    { path: "/nettoyage-diogene-lunel", label: "Lunel" },
    { path: "/nettoyage-diogene-frontignan", label: "Frontignan" },
    { path: "/nettoyage-diogene-marseillan", label: "Marseillan" },
    { path: "/nettoyage-diogene-meze", label: "Mèze" },
    { path: "/nettoyage-diogene-balaruc-les-bains", label: "Balaruc-les-Bains" },
    { path: "/nettoyage-diogene-pezenas", label: "Pézenas" },
    { path: "/zone-intervention-herault", label: "→ Voir toutes les villes" },
  ];

  const villesAude = [
    { path: "/nettoyage-diogene-narbonne", label: "Narbonne" },
    { path: "/nettoyage-diogene-carcassonne", label: "Carcassonne" },
    { path: "/nettoyage-diogene-lezignan", label: "Lézignan-Corbières" },
    { path: "/nettoyage-diogene-limoux", label: "Limoux" },
    { path: "/nettoyage-diogene-castelnaudary", label: "Castelnaudary" },
    { path: "/nettoyage-diogene-port-la-nouvelle", label: "Port-la-Nouvelle" },
    { path: "/zone-intervention-aude", label: "→ Voir toutes les villes" },
  ];

  // Ordre des liens pour mobile (Tarifs et Contact remontés)
  const mobileNavOrder = ["Accueil", "Services", "Tarifs", "Contact", "Villes", "Blog", "FAQ"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <img src={logoLeLien} alt="Lien Propreté 34 Logo" className="w-10 h-10 object-contain flex-shrink-0" />
            <div>
              <div className="text-sm sm:text-lg font-bold text-primary leading-tight">Lien Propreté 34</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground">Hérault - Aude</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <button className="px-4 py-2 rounded-lg text-sm font-medium transition-colors text-foreground hover:bg-secondary flex items-center gap-1">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 bg-popover border border-border rounded-lg shadow-strong min-w-[220px] py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 max-h-[80vh] overflow-y-auto">
                    {link.label === "Villes" ? (
                      <>
                        <div className="px-4 py-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">Hérault (34)</div>
                        {link.dropdown.slice(0, 11).map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => {
                              trackNavigationClick(item.path, item.label);
                            }}
                            className={`block px-4 py-2 text-sm transition-colors ${location.pathname === item.path ? "bg-primary text-primary-foreground" : "text-popover-foreground hover:bg-secondary"} ${
                              item.urgent ? "font-bold" : "font-medium"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                        <div className="my-2 border-t border-border"></div>
                        <div className="px-4 py-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">Aude (11)</div>
                        {link.dropdown.slice(11).map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => {
                              trackNavigationClick(item.path, item.label);
                            }}
                            className={`block px-4 py-2 text-sm transition-colors ${location.pathname === item.path ? "bg-primary text-primary-foreground" : "text-popover-foreground hover:bg-secondary"} ${
                              item.urgent ? "font-bold" : "font-medium"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </>
                    ) : (
                      link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => {
                            trackNavigationClick(item.path, item.label);
                          }}
                          className={`block px-4 py-2 text-sm transition-colors ${location.pathname === item.path ? "bg-primary text-primary-foreground" : "text-popover-foreground hover:bg-secondary"} ${
                            item.urgent ? "font-bold" : "font-medium"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path!}
                  onClick={() => trackNavigationClick(link.path!, link.label)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a href="tel:+33788432055" onClick={() => trackPhoneClick("header")} className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-semibold">07 88 43 20 55</span>
            </a>
            <Link to="/contact" onClick={() => trackNavigationClick("/contact", "Devis gratuit Header")}>
              <Button className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-semibold shadow-medium">Devis gratuit</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors">
            {mobileMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain">
            <div className="flex flex-col space-y-1">
              {/* Téléphone en haut */}
              <a
                href="tel:+33788432055"
                onClick={() => trackPhoneClick("mobile_menu")}
                className="px-4 py-3 flex items-center justify-center space-x-2 text-sm font-bold bg-gradient-cta text-accent-foreground rounded-lg mx-2 mb-2"
              >
                <Phone className="w-4 h-4" />
                <span>07 88 43 20 55</span>
              </a>

              {/* Navigation réorganisée */}
              {mobileNavOrder.map((linkLabel) => {
                const link = navLinks.find((l) => l.label === linkLabel);
                if (!link) return null;

                // Liens simples (Accueil, Tarifs, Contact, Blog, FAQ)
                if (link.path) {
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        trackNavigationClick(link.path!, `${link.label} Mobile`);
                      }}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-secondary"}`}
                    >
                      {link.label}
                    </Link>
                  );
                }

                // Menu Services (avec dropdown simple)
                if (link.label === "Services") {
                  return (
                    <div key="services" className="space-y-1">
                      <button
                        onClick={() => setOpenMobileSubmenu(openMobileSubmenu === "services" ? null : "services")}
                        className="w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors text-foreground hover:bg-secondary flex items-center justify-between"
                      >
                        <span>Services</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSubmenu === "services" ? "rotate-180" : ""}`} />
                      </button>
                      {openMobileSubmenu === "services" && (
                        <div className="bg-secondary/50 rounded-lg mx-2 py-2">
                          {link.dropdown?.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                trackNavigationClick(item.path, `${item.label} Mobile`);
                              }}
                              className={`block px-6 py-2 text-sm transition-colors ${
                                location.pathname === item.path ? "bg-primary text-primary-foreground font-semibold" : "text-foreground hover:bg-secondary font-medium"
                              } ${item.urgent ? "font-bold" : ""}`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                // Menu Villes (avec sous-menus Hérault / Aude)
                if (link.label === "Villes") {
                  return (
                    <div key="villes" className="space-y-1">
                      <button
                        onClick={() => {
                          setOpenMobileSubmenu(openMobileSubmenu === "villes" ? null : "villes");
                          setOpenMobileSubSubmenu(null);
                        }}
                        className="w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors text-foreground hover:bg-secondary flex items-center justify-between"
                      >
                        <span>Villes</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSubmenu === "villes" ? "rotate-180" : ""}`} />
                      </button>
                      {openMobileSubmenu === "villes" && (
                        <div className="bg-secondary/50 rounded-lg mx-2 py-2 space-y-1">
                          {/* Sous-menu Hérault */}
                          <button
                            onClick={() => setOpenMobileSubSubmenu(openMobileSubSubmenu === "herault" ? null : "herault")}
                            className="w-full px-6 py-2 text-sm font-semibold text-primary flex items-center justify-between"
                          >
                            <span>🏛️ Hérault (34)</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSubSubmenu === "herault" ? "rotate-180" : ""}`} />
                          </button>
                          {openMobileSubSubmenu === "herault" && (
                            <div className="bg-background/50 rounded-lg mx-2 py-1">
                              {villesHerault.map((ville) => (
                                <Link
                                  key={ville.path}
                                  to={ville.path}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    trackNavigationClick(ville.path, `${ville.label} Mobile`);
                                  }}
                                  className={`block px-8 py-2 text-sm transition-colors ${
                                    location.pathname === ville.path ? "bg-primary text-primary-foreground font-semibold" : "text-foreground hover:bg-secondary font-medium"
                                  }`}
                                >
                                  {ville.label}
                                </Link>
                              ))}
                            </div>
                          )}

                          {/* Sous-menu Aude */}
                          <button
                            onClick={() => setOpenMobileSubSubmenu(openMobileSubSubmenu === "aude" ? null : "aude")}
                            className="w-full px-6 py-2 text-sm font-semibold text-primary flex items-center justify-between"
                          >
                            <span>🏰 Aude (11)</span>
                            <ChevronDown className={`w-4 h-4 transition-transform ${openMobileSubSubmenu === "aude" ? "rotate-180" : ""}`} />
                          </button>
                          {openMobileSubSubmenu === "aude" && (
                            <div className="bg-background/50 rounded-lg mx-2 py-1">
                              {villesAude.map((ville) => (
                                <Link
                                  key={ville.path}
                                  to={ville.path}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    trackNavigationClick(ville.path, `${ville.label} Mobile`);
                                  }}
                                  className={`block px-8 py-2 text-sm transition-colors ${
                                    location.pathname === ville.path ? "bg-primary text-primary-foreground font-semibold" : "text-foreground hover:bg-secondary font-medium"
                                  }`}
                                >
                                  {ville.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
