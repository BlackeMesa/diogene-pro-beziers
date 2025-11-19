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
import seteCity from "@/assets/sete-city.jpg";

const NettoyageDiogeneSete = () => {
  useEffect(() => {
    trackServicePageView('Nettoyage Diogène Sète');
  }, []);

  const quartiers = [
    "Centre-ville",
    "Quartier Haut",
    "La Corniche",
    "Les Quilles",
    "Villeroy",
    "La Plagette",
    "Barrou",
    "L'Île de Thau"
  ];

  const villesProches = [
    "Frontignan",
    "Balaruc-les-Bains",
    "Balaruc-le-Vieux",
    "Marseillan",
    "Mèze",
    "Gigean",
    "Poussan"
  ];

  return (
    <>
      <Helmet>
        <title>Nettoyage Diogène Sète | Intervention 30min | Le Lien Propreté 34</title>
        <meta name="description" content="Nettoyage syndrome de Diogène à Sète (34200). Intervention rapide dans tous les quartiers, centre-ville et Bassin de Thau. Devis gratuit. ☎ 07 88 43 20 55" />
        <link rel="canonical" href="https://lelienproprete34.com/nettoyage-diogene-sete" />
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <BreadcrumbNav 
            items={[
              { label: 'Nettoyage Diogène', path: '/nettoyage-diogene' },
              { label: 'Sète' }
            ]}
          />

          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Nettoyage Syndrome de Diogène à Sète
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Intervention professionnelle dans tout Sète et le Bassin de Thau. 
                  Nous sommes à <strong>30 minutes</strong> de Sète pour une intervention rapide et discrète.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="tel:+33788432055" onClick={() => trackPhoneClick('sete_hero')}>
                    <Button 
                      size="lg"
                      className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold w-full sm:w-auto"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Appeler - 07 88 43 20 55
                    </Button>
                  </a>
                  <Link to="/contact" onClick={() => trackCTAClick('devis', 'Demander Devis Sète', '/contact')}>
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
                      <div className="font-semibold text-card-foreground">Proximité</div>
                      <div className="text-sm text-muted-foreground">30 min de Sète</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-soft">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-card-foreground">Confidentiel</div>
                      <div className="text-sm text-muted-foreground">Discrétion totale</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-soft">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-card-foreground">Tout Sète</div>
                      <div className="text-sm text-muted-foreground">Port et colline</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={seteCity} 
                  alt="Sète - Port et Mont Saint-Clair" 
                  className="rounded-2xl shadow-strong w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-strong">
                  <div className="text-2xl font-bold">Sète</div>
                  <div className="text-sm">Île singulière</div>
                </div>
              </div>
            </div>
          </section>

          <TrustBadges />

          <section className="mb-16 bg-secondary rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Tous les quartiers de Sète couverts
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Du port au Mont Saint-Clair, nous intervenons partout à Sète sans exception.
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
              Bassin de Thau et communes proches
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
                <Link to="/nettoyage-diogene-agde" className="text-primary hover:underline font-medium">Agde</Link>,{' '}
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
              Besoin d'une intervention à Sète ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Service rapide dans tout le Bassin de Thau
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('sete_final_cta')}>
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold">
                  <Phone className="mr-2 w-5 h-5" />
                  07 88 43 20 55
                </Button>
              </a>
              <Link to="/contact" onClick={() => trackCTAClick('devis', 'Demander Devis Sète Final', '/contact')}>
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

export default NettoyageDiogeneSete;
