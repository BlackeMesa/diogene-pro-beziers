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
import lunelCity from "@/assets/lunel-city.jpg";

const NettoyageDiogeneLunel = () => {
  useEffect(() => {
    trackServicePageView('Nettoyage Diogène Lunel');
  }, []);

  const quartiers = [
    "Centre-ville",
    "Abrivados",
    "Mas de l'Agriculture",
    "ZAC Ste Marie",
    "Quartier de la Gare",
    "Route de Sommières"
  ];

  const villesProches = [
    "Lunel-Viel",
    "Marsillargues",
    "Vérargues",
    "Saint-Just",
    "Saturargues",
    "Valergues",
    "Villetelle",
    "Saint-Nazaire-de-Pézan"
  ];

  return (
    <>
      <Helmet>
        <title>Nettoyage Diogène Lunel | Intervention Est Hérault | Le Lien Propreté 34</title>
        <meta name="description" content="Nettoyage syndrome de Diogène à Lunel (34400) et alentours. Intervention 40 minutes. Secteur est de l'Hérault. ☎ 07 88 43 20 55" />
        <link rel="canonical" href="https://lelienproprete34.com/nettoyage-diogene-lunel" />
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <BreadcrumbNav 
            items={[
              { label: 'Nettoyage Diogène', path: '/nettoyage-diogene' },
              { label: 'Lunel' }
            ]}
          />

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Nettoyage Syndrome de Diogène à Lunel
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Service professionnel à Lunel et dans l'est de l'Hérault. 
                  <strong>40 minutes</strong> depuis Béziers. Spécialiste des situations sensibles en milieu rural et urbain.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="tel:+33788432055" onClick={() => trackPhoneClick('lunel_hero')}>
                    <Button 
                      size="lg"
                      className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold w-full sm:w-auto"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Appeler - 07 88 43 20 55
                    </Button>
                  </a>
                  <Link to="/contact" onClick={() => trackCTAClick('devis', 'Demander Devis Lunel', '/contact')}>
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
                      <div className="font-semibold text-card-foreground">Accessible</div>
                      <div className="text-sm text-muted-foreground">40 min depuis Béziers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-soft">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-card-foreground">Bienveillance</div>
                      <div className="text-sm text-muted-foreground">Approche humaine</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-soft">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-card-foreground">Est Hérault</div>
                      <div className="text-sm text-muted-foreground">Lunel et environs</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={lunelCity} 
                  alt="Lunel - Centre historique et patrimoine" 
                  className="rounded-2xl shadow-strong w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-strong">
                  <div className="text-2xl font-bold">Lunel</div>
                  <div className="text-sm">Est Hérault</div>
                </div>
              </div>
            </div>
          </section>

          <TrustBadges />

          <section className="mb-16 bg-secondary rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Secteurs de Lunel couverts
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
              Communes du Pays de Lunel
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
              Service à Lunel et dans l'est de l'Hérault
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Intervention rapide dans tout le secteur de Lunel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('lunel_final_cta')}>
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold">
                  <Phone className="mr-2 w-5 h-5" />
                  07 88 43 20 55
                </Button>
              </a>
              <Link to="/contact" onClick={() => trackCTAClick('devis', 'Demander Devis Lunel Final', '/contact')}>
                <Button size="lg" variant="outline">
                  Devis gratuit
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

export default NettoyageDiogeneLunel;
