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
import frontignanCity from "@/assets/frontignan-city.jpg";

const NettoyageDiogeneFrontignan = () => {
  useEffect(() => {
    trackServicePageView('Nettoyage Diogène Frontignan');
  }, []);

  const quartiers = [
    "Centre-ville",
    "Frontignan-Plage",
    "Les Aresquiers",
    "Le Barrou",
    "Les Salins"
  ];

  const villesProches = [
    "Vic-la-Gardiole",
    "Mireval",
    "Villeneuve-lès-Maguelone",
    "Balaruc-les-Bains",
    "Gigean",
    "Poussan"
  ];

  return (
    <>
      <Helmet>
        <title>Nettoyage Diogène Frontignan | Bassin de Thau | Le Lien Propreté 34</title>
        <meta name="description" content="Nettoyage syndrome de Diogène à Frontignan (34110) et Frontignan-Plage. Intervention 35 minutes. Bassin de Thau. ☎ 07 88 43 20 55" />
        <link rel="canonical" href="https://lelienproprete34.com/nettoyage-diogene-frontignan" />
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <BreadcrumbNav 
            items={[
              { label: 'Nettoyage Diogène', path: '/nettoyage-diogene' },
              { label: 'Frontignan' }
            ]}
          />

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Nettoyage Syndrome de Diogène à Frontignan
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Intervention à Frontignan et Frontignan-Plage, secteur Bassin de Thau. 
                  <strong>35 minutes</strong> depuis Béziers. Service littoral et centre-ville.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="tel:+33788432055" onClick={() => trackPhoneClick('frontignan_hero')}>
                    <Button 
                      size="lg"
                      className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold w-full sm:w-auto"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Appeler - 07 88 43 20 55
                    </Button>
                  </a>
                  <Link to="/contact" onClick={() => trackCTAClick('devis', 'Demander Devis Frontignan', '/contact')}>
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
                      <div className="font-semibold text-card-foreground">Rapide</div>
                      <div className="text-sm text-muted-foreground">35 min de Béziers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-soft">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-card-foreground">Discret</div>
                      <div className="text-sm text-muted-foreground">100% confidentiel</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-soft">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-card-foreground">Ville & Plage</div>
                      <div className="text-sm text-muted-foreground">Tout Frontignan</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={frontignanCity} 
                  alt="Frontignan - Marina et Bassin de Thau" 
                  className="rounded-2xl shadow-strong w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-strong">
                  <div className="text-2xl font-bold">Frontignan</div>
                  <div className="text-sm">Bassin de Thau</div>
                </div>
              </div>
            </div>
          </section>

          <TrustBadges />

          <section className="mb-16 bg-secondary rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Secteurs de Frontignan couverts
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {quartiers.map((quartier, index) => (
                <div key={index} className="bg-card px-4 py-3 rounded-lg shadow-soft text-center text-sm font-medium text-card-foreground">
                  {quartier}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Communes du littoral proches
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {villesProches.map((ville, index) => (
                <div key={index} className="bg-card px-4 py-3 rounded-lg shadow-soft text-center text-sm text-card-foreground">
                  {ville}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Intervention à Frontignan
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Service proche et réactif sur le secteur de Frontignan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('frontignan_final_cta')}>
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold">
                  <Phone className="mr-2 w-5 h-5" />
                  07 88 43 20 55
                </Button>
              </a>
              <Link to="/prix-nettoyage-diogene-herault" onClick={() => trackCTAClick('pricing', 'Voir Tarifs Frontignan', '/prix-nettoyage-diogene-herault')}>
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

export default NettoyageDiogeneFrontignan;
