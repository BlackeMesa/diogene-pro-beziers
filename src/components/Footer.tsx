import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-accent-foreground">LP</span>
              </div>
              <div>
                <div className="text-base font-bold">Le Lien Propreté 34</div>
                <div className="text-xs opacity-80">Béziers - Hérault</div>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Spécialiste du nettoyage Diogène et débarras insalubre dans l'Hérault. 
              Intervention rapide et discrète 7J/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/nettoyage-diogene" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Nettoyage Syndrome de Diogène
                </Link>
              </li>
              <li>
                <Link to="/debarras-insalubre" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Débarras Insalubre
                </Link>
              </li>
              <li>
                <Link to="/nettoyage-urgence-24h-herault" className="opacity-90 hover:opacity-100 hover:underline transition-opacity font-semibold">
                  🚨 Nettoyage Urgence 24h
                </Link>
              </li>
              <li>
                <Link to="/prix-nettoyage-diogene-herault" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Nos Tarifs
                </Link>
              </li>
              <li>
                <Link to="/blog" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Blog & Conseils
                </Link>
              </li>
              <li>
                <Link to="/faq" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Questions Fréquentes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Demande de Devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Zone d'intervention */}
          <div>
            <h3 className="text-base font-bold mb-4">Zones d'Intervention</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/nettoyage-diogene-beziers" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Béziers et Agglo
                </Link>
              </li>
              <li>
                <Link to="/nettoyage-diogene-montpellier" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Montpellier Métropole
                </Link>
              </li>
              <li>
                <Link to="/nettoyage-diogene-sete" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Sète - Bassin de Thau
                </Link>
              </li>
              <li>
                <Link to="/nettoyage-diogene-agde" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  Agde et Cap d'Agde
                </Link>
              </li>
              <li>
                <Link to="/zone-intervention-herault" className="opacity-90 hover:opacity-100 hover:underline transition-opacity font-semibold">
                  → Toutes nos villes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">Béziers et alentours (34)</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+33788432055" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                    07 88 43 20 55
                  </a>
                  <div className="text-xs opacity-75 mt-1">Disponible 7J/7</div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">Devis sous 12h garanti</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@lelienproprete34.com" className="opacity-90 hover:opacity-100 hover:underline transition-opacity">
                  contact@lelienproprete34.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm opacity-75">
          <p>© {currentYear} Le Lien Propreté 34. Tous droits réservés.</p>
          <p className="mt-2 text-xs">
            Entreprise certifiée pour le nettoyage insalubre - Protocole QUALIPROPRE 10403
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
            <Link to="/mentions-legales" className="hover:opacity-100 hover:underline transition-opacity">
              Mentions Légales
            </Link>
            <span className="opacity-50">•</span>
            <Link to="/politique-confidentialite" className="hover:opacity-100 hover:underline transition-opacity">
              Politique de Confidentialité
            </Link>
            <span className="opacity-50">•</span>
            <Link to="/contact" className="hover:opacity-100 hover:underline transition-opacity">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
