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
import montpellierCity from "@/assets/montpellier-city.jpg";

const NettoyageDiogeneMontpellier = () => {
  useEffect(() => {
    trackServicePageView('Nettoyage Diogène Montpellier');
  }, []);

  const quartiers = [
    "Centre Historique (Écusson)",
    "Antigone",
    "Port Marianne",
    "Odysseum",
    "Beaux-Arts",
    "Arceaux",
    "Boutonnet",
    "Les Cévennes",
    "Figuerolles",
    "Gambetta",
    "Hôpitaux-Facultés",
    "Mosson",
    "Près d'Arènes",
    "Croix d'Argent"
  ];

  const villesProches = [
    "Castelnau-le-Lez",
    "Lattes",
    "Pérols",
    "Palavas-les-Flots",
    "Grabels",
    "Juvignac",
    "Clapiers",
    "Jacou",
    "Le Crès",
    "Saint-Jean-de-Védas",
    "Villeneuve-lès-Maguelone"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Nettoyage Syndrome de Diogène Montpellier",
    "description": "Service professionnel de nettoyage syndrome de Diogène et débarras insalubre à Montpellier. Intervention rapide dans tous les quartiers, 7j/7.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Le Lien Propreté 34",
      "telephone": "+33788432055",
      "areaServed": {
        "@type": "City",
        "name": "Montpellier"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Montpellier",
      "containedIn": {
        "@type": "AdministrativeArea",
        "name": "Hérault"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Nettoyage Diogène Montpellier | Intervention 45min 7j/7</title>
        <meta name="description" content="Nettoyage syndrome de Diogène à Montpellier (34). Tous quartiers : Centre, Antigone, Mosson. Devis gratuit ☎ 07 88 43 20 55" />
        <link rel="canonical" href="https://lelienproprete34.com/nettoyage-diogene-montpellier" />
        <meta property="og:title" content="Nettoyage Diogène Montpellier | Intervention Rapide 7j/7" />
        <meta property="og:description" content="Spécialiste du nettoyage syndrome de Diogène à Montpellier. Tous quartiers, intervention sous 45 minutes. Service confidentiel et humain." />
        <meta property="og:url" content="https://lelienproprete34.com/nettoyage-diogene-montpellier" />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <BreadcrumbNav 
            items={[
              { label: 'Nettoyage Diogène', path: '/nettoyage-diogene' },
              { label: 'Montpellier' }
            ]}
          />

          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Nettoyage Syndrome de Diogène à Montpellier
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Intervention professionnelle dans tous les quartiers de Montpellier et sa métropole. 
                  Nous sommes à <strong>45 minutes</strong> de Montpellier pour une prise en charge rapide et humaine.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="tel:+33788432055" onClick={() => trackPhoneClick('montpellier_hero')}>
                    <Button 
                      size="lg"
                      className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold w-full sm:w-auto"
                    >
                      <Phone className="mr-2 w-5 h-5" />
                      Appeler - 07 88 43 20 55
                    </Button>
                  </a>
                  <Link to="/contact" onClick={() => trackCTAClick('devis', 'Demander Devis Montpellier', '/contact')}>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="w-full sm:w-auto"
                    >
                      Devis gratuit sous 12h
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-soft">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-card-foreground">Intervention rapide</div>
                      <div className="text-sm text-muted-foreground">Sur place en 45 min</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-soft">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-card-foreground">100% confidentiel</div>
                      <div className="text-sm text-muted-foreground">Discrétion assurée</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-soft">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-card-foreground">Tous quartiers</div>
                      <div className="text-sm text-muted-foreground">Centre à périphérie</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src={montpellierCity} 
                  alt="Montpellier - Place de la Comédie et centre-ville" 
                  className="rounded-2xl shadow-strong w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-6 py-4 rounded-xl shadow-strong">
                  <div className="text-2xl font-bold">Montpellier</div>
                  <div className="text-sm">300 000+ habitants</div>
                </div>
              </div>
            </div>
          </section>

          <TrustBadges />

          {/* Quartiers couverts */}
          <section className="mb-16 bg-secondary rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Tous les quartiers de Montpellier couverts
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Du centre historique aux quartiers périphériques, nous intervenons partout à Montpellier 
              sans exception et sans supplément tarifaire.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
              {quartiers.map((quartier, index) => (
                <div key={index} className="bg-card px-4 py-3 rounded-lg shadow-soft text-center text-sm font-medium text-card-foreground">
                  {quartier}
                </div>
              ))}
            </div>

            <div className="bg-accent/10 border border-accent rounded-xl p-6 text-center">
              <p className="text-card-foreground font-medium">
                📍 Votre quartier n'est pas listé ? Pas de problème, nous couvrons l'intégralité de Montpellier !
              </p>
            </div>
          </section>

          {/* Villes proches */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Nous intervenons aussi dans la Métropole de Montpellier
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Service disponible dans toutes les communes de Montpellier Méditerranée Métropole
            </p>
            
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
                <Link to="/nettoyage-diogene-sete" className="text-primary hover:underline font-medium">Sète</Link>,{' '}
                <Link to="/nettoyage-diogene-agde" className="text-primary hover:underline font-medium">Agde</Link>,{' '}
                <Link to="/nettoyage-diogene-lunel" className="text-primary hover:underline font-medium">Lunel</Link>,{' '}
                <Link to="/nettoyage-diogene-pezenas" className="text-primary hover:underline font-medium">Pézenas</Link>,{' '}
                <Link to="/nettoyage-diogene-meze" className="text-primary hover:underline font-medium">Mèze</Link> et{' '}
                <Link to="/zone-intervention-herault" className="text-primary hover:underline font-semibold">toutes les communes du 34</Link>.{' '}
                <Link to="/prix-nettoyage-diogene-guide-2025" className="text-primary hover:underline font-semibold">Consultez notre guide des prix 2025</Link>.
              </p>
            </div>
          </section>

          {/* Pourquoi nous choisir - Local */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Pourquoi choisir un professionnel local à Montpellier ?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Réactivité exceptionnelle</h3>
                <p className="text-muted-foreground">
                  Basés dans l'Hérault, nous intervenons à Montpellier en 45 minutes maximum. 
                  Idéal pour les situations urgentes ou les expulsions imminentes.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Connaissance du territoire</h3>
                <p className="text-muted-foreground">
                  Nous connaissons parfaitement Montpellier : accès difficiles du centre historique, 
                  spécificités des résidences récentes, parkings, déchetteries locales.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Réseau local de soutien</h3>
                <p className="text-muted-foreground">
                  Nous travaillons avec les services sociaux, associations et professionnels de santé 
                  de Montpellier pour un accompagnement complet.
                </p>
              </div>
            </div>
          </section>

          {/* Délais d'intervention */}
          <section className="mb-16 bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Nos délais d'intervention à Montpellier
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">🚨 Urgence</h3>
                <div className="text-4xl font-bold mb-2">45 min</div>
                <p className="opacity-90">
                  Intervention express pour les situations critiques dans le centre de Montpellier 
                  et les quartiers limitrophes
                </p>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">📅 Planifiée</h3>
                <div className="text-4xl font-bold mb-2">24-48h</div>
                <p className="opacity-90">
                  Intervention programmée avec préparation optimale dans tous les quartiers 
                  de Montpellier et sa métropole
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Montpellier */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Questions fréquentes - Montpellier
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Intervenez-vous dans tous les quartiers de Montpellier ?
                </h3>
                <p className="text-muted-foreground">
                  Oui, du centre historique (Écusson) aux quartiers périphériques comme Mosson, 
                  Antigone, Port Marianne, nous couvrons l'intégralité de Montpellier sans exception 
                  ni supplément tarifaire.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Quel est votre délai d'intervention depuis Béziers ?
                </h3>
                <p className="text-muted-foreground">
                  Nous sommes à 45 minutes maximum de Montpellier. En cas d'urgence, nous pouvons 
                  intervenir le jour même. Pour les interventions planifiées, sous 24-48h selon vos disponibilités.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Comment gérez-vous les accès difficiles du centre-ville ?
                </h3>
                <p className="text-muted-foreground">
                  Nous connaissons parfaitement le centre historique de Montpellier. Nous organisons 
                  les autorisations de stationnement si nécessaire et adaptons notre matériel aux 
                  ruelles étroites et escaliers.
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Travaillez-vous avec les services sociaux de Montpellier ?
                </h3>
                <p className="text-muted-foreground">
                  Oui, nous collaborons régulièrement avec le CCAS de Montpellier, les services 
                  d'aide à domicile, et les associations locales. Nous pouvons coordonner l'intervention 
                  avec un suivi social si nécessaire.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Besoin d'une intervention à Montpellier ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Appelez-nous maintenant ou demandez un devis gratuit sous 12h
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('montpellier_final_cta')}>
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Appeler maintenant - 07 88 43 20 55
                </Button>
              </a>
              <Link to="/prix-nettoyage-diogene-herault" onClick={() => trackCTAClick('pricing', 'Voir Tarifs Montpellier', '/prix-nettoyage-diogene-herault')}>
                <Button 
                  size="lg"
                  variant="outline"
                >
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

export default NettoyageDiogeneMontpellier;
