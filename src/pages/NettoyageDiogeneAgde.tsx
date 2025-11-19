import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, MapPin, Clock, Shield } from "lucide-react";
import { trackServicePageView, trackPhoneClick, trackCTAClick } from "@/lib/analytics";
import agdeCity from "@/assets/agde-city.jpg";

const NettoyageDiogeneAgde = () => {
  useEffect(() => {
    trackServicePageView('Nettoyage Diogène Agde');
  }, []);

  const quartiers = [
    "Centre historique",
    "Cap d'Agde",
    "Le Grau d'Agde",
    "La Tamarissière",
    "Rochelongue",
    "Les Cayrets",
    "Port Ambonne",
    "Richelieu"
  ];

  const villesProches = [
    "Vias",
    "Portiragnes",
    "Marseillan",
    "Bessan",
    "Florensac",
    "Pinet",
    "Montagnac"
  ];

  return (
    <>
      <Helmet>
        <title>Nettoyage Diogène Agde | Cap d'Agde | Le Lien Propreté 34</title>
        <meta name="description" content="Nettoyage syndrome de Diogène à Agde et Cap d'Agde (34300). Intervention 25 minutes. Centre historique et littoral. ☎ 07 88 43 20 55" />
        <link rel="canonical" href="https://lelienproprete34.com/nettoyage-diogene-agde" />
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <BreadcrumbNav 
            items={[
              { label: 'Nettoyage Diogène', path: '/nettoyage-diogene' },
              { label: 'Agde' }
            ]}
          />

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Nettoyage Syndrome de Diogène à Agde
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Intervention à Agde, Cap d'Agde et Le Grau d'Agde. 
                  <strong>25 minutes</strong> depuis Béziers. Service toute l'année pour résidences principales et secondaires.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="tel:+33788432055" onClick={() => trackPhoneClick('agde_hero')}>
                    <Button 
                      size="lg"
                      className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold w-full sm:w-auto"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Appeler - 07 88 43 20 55
                    </Button>
                  </a>
                  <Link to="/contact" onClick={() => trackCTAClick('devis', 'Demander Devis Agde', '/contact')}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Devis gratuit sous 12h
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-soft">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-card-foreground">Très proche</div>
                      <div className="text-sm text-muted-foreground">25 min de Béziers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-soft">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-card-foreground">Toute saison</div>
                      <div className="text-sm text-muted-foreground">Hiver comme été</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-soft">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-card-foreground">Tout Agde</div>
                      <div className="text-sm text-muted-foreground">Centre et Cap</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={agdeCity} 
                  alt="Agde et Cap d'Agde - Plages méditerranéennes" 
                  className="rounded-2xl shadow-strong w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-strong">
                  <div className="text-2xl font-bold">Agde</div>
                  <div className="text-sm">Perle noire</div>
                </div>
              </div>
            </div>
          </section>

          <TrustBadges />

          <section className="mb-16 bg-secondary rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Tous les secteurs d'Agde couverts
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Centre historique, Cap d'Agde, Le Grau : nous intervenons partout.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {quartiers.map((quartier, index) => (
                <div key={index} className="bg-card px-4 py-3 rounded-lg shadow-soft text-center text-sm font-medium text-card-foreground">
                  {quartier}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Communes du secteur Agde
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {villesProches.map((ville, index) => (
                <div key={index} className="bg-card px-4 py-3 rounded-lg shadow-soft text-center text-sm text-card-foreground">
                  {ville}
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-accent/10 rounded-xl border-l-4 border-accent">
              <p className="text-sm text-muted-foreground">
                <strong className="text-card-foreground">Nous intervenons aussi dans tout l'Hérault :</strong>{' '}
                <Link to="/nettoyage-diogene-beziers" className="text-primary hover:underline font-medium">Béziers</Link>,{' '}
                <Link to="/nettoyage-diogene-montpellier" className="text-primary hover:underline font-medium">Montpellier</Link>,{' '}
                <Link to="/nettoyage-diogene-sete" className="text-primary hover:underline font-medium">Sète</Link>,{' '}
                <Link to="/nettoyage-diogene-lunel" className="text-primary hover:underline font-medium">Lunel</Link>,{' '}
                <Link to="/nettoyage-diogene-pezenas" className="text-primary hover:underline font-medium">Pézenas</Link>,{' '}
                <Link to="/nettoyage-diogene-meze" className="text-primary hover:underline font-medium">Mèze</Link> et{' '}
                <Link to="/zone-intervention-herault" className="text-primary hover:underline font-semibold">toutes les communes du 34</Link>.{' '}
                <Link to="/prix-nettoyage-diogene-guide-2025" className="text-primary hover:underline font-semibold">Consultez notre guide des prix 2025</Link>.
              </p>
            </div>
          </section>

          <section className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Intervention rapide à Agde
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Nous sommes votre voisin, à 25 minutes d'Agde
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('agde_final_cta')}>
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold">
                  <Phone className="mr-2 w-5 h-5" />
                  07 88 43 20 55
                </Button>
              </a>
              <Link to="/prix-nettoyage-diogene-herault" onClick={() => trackCTAClick('pricing', 'Voir Tarifs Agde', '/prix-nettoyage-diogene-herault')}>
                <Button size="lg" variant="outline">
                  Voir nos tarifs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default NettoyageDiogeneAgde;
