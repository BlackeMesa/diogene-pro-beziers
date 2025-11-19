import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBadges from "@/components/TrustBadges";
import marseillanCity from "@/assets/marseillan-city.jpg";
import { trackCTAClick, trackPhoneClick, trackServicePageView } from "@/lib/analytics";
import { useEffect } from "react";

const NettoyageDiogeneMarseillan = () => {
  useEffect(() => {
    trackServicePageView('Nettoyage Diogène Marseillan');
  }, []);

  const quartiers = [
    "Marseillan-Ville",
    "Marseillan-Plage",
    "Le Port",
    "Avenue de la Méditerranée",
    "Rue du Commerce",
    "Quartier du Castellas",
    "Route de Sète",
    "Les Onglous"
  ];

  const villesProches = [
    "Agde",
    "Mèze",
    "Florensac",
    "Pinet",
    "Pomérols",
    "Castelnau-de-Guers",
    "Montagnac"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Nettoyage Diogène Marseillan | Côte Méditerranée 34</title>
        <meta name="description" content="Nettoyage syndrome de Diogène à Marseillan (34340). Marseillan-Ville et Marseillan-Plage. Devis gratuit ☎ 07 88 43 20 55" />
        <meta name="keywords" content="nettoyage diogène Marseillan, syndrome Diogène 34340, débarras insalubre Marseillan-Plage, nettoyage extrême Hérault" />
        <link rel="canonical" href="https://lelienproprete34.com/nettoyage-diogene-marseillan" />
        
        <meta property="og:title" content="Nettoyage Syndrome de Diogène à Marseillan | Le Lien Propreté" />
        <meta property="og:description" content="Experts du nettoyage de syndrome de Diogène à Marseillan. Intervention discrète et professionnelle sur toute la commune." />
        <meta property="og:url" content="https://lelienproprete34.com/nettoyage-diogene-marseillan" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Le Lien Propreté 34 - Nettoyage Diogène Marseillan",
            "image": marseillanCity,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Marseillan",
              "postalCode": "34340",
              "addressRegion": "Occitanie",
              "addressCountry": "FR"
            },
            "telephone": "+33788432055",
            "priceRange": "800€-8000€",
            "areaServed": "Marseillan et alentours",
            "openingHours": "Mo-Su 00:00-23:59"
          })}
        </script>
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <BreadcrumbNav 
            items={[
              { label: "Nettoyage Diogène", path: "/nettoyage-diogene" },
              { label: "Marseillan" }
            ]} 
          />

          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Nettoyage syndrome de Diogène à Marseillan (Ville et Plage)
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Intervention professionnelle à Marseillan-Ville et Marseillan-Plage. 
                  Nous assurons le débarras et le nettoyage complet de logements insalubres, 
                  y compris en période estivale et dans les résidences secondaires.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="tel:+33788432055" onClick={() => trackPhoneClick('marseillan_hero')}>
                    <Button size="lg" className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold w-full sm:w-auto">
                      <Phone className="mr-2 w-5 h-5" />
                      07 88 43 20 55
                    </Button>
                  </a>
                  <Link to="/contact" onClick={() => trackCTAClick('devis', 'Devis Gratuit Marseillan', '/contact')}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Devis Gratuit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-success-green">
                    <CheckCircle className="w-5 h-5" />
                    <span>Intervention 7j/7</span>
                  </div>
                  <div className="flex items-center gap-2 text-success-green">
                    <CheckCircle className="w-5 h-5" />
                    <span>Spécialiste résidences secondaires</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src={marseillanCity}
                  alt="Nettoyage Diogène à Marseillan"
                  className="rounded-2xl shadow-strong w-full object-cover h-[400px]"
                />
              </div>
            </div>
          </section>

          <TrustBadges />

          {/* Quartiers Couverts */}
          <section className="py-16 bg-secondary rounded-2xl px-8 mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-primary">
                  Zones d'intervention à Marseillan
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Nous intervenons sur l'ensemble de la commune, du centre historique jusqu'aux plages.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 text-card-foreground">Secteurs de Marseillan :</h3>
                  <div className="flex flex-wrap gap-2">
                    {quartiers.map((quartier, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-card rounded-full text-sm font-medium text-card-foreground shadow-soft"
                      >
                        {quartier}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4 text-card-foreground">Communes voisines :</h3>
                  <div className="flex flex-wrap gap-2">
                    {villesProches.map((ville, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-card rounded-full text-sm font-medium text-card-foreground shadow-soft"
                      >
                        {ville}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-xl border-l-4 border-accent">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-card-foreground">Nous intervenons aussi dans tout l'Hérault :</strong>{' '}
                  <Link to="/nettoyage-diogene-beziers" className="text-primary hover:underline font-medium">Béziers</Link>,{' '}
                  <Link to="/nettoyage-diogene-montpellier" className="text-primary hover:underline font-medium">Montpellier</Link>,{' '}
                  <Link to="/nettoyage-diogene-sete" className="text-primary hover:underline font-medium">Sète</Link>,{' '}
                  <Link to="/nettoyage-diogene-agde" className="text-primary hover:underline font-medium">Agde</Link>,{' '}
                  <Link to="/nettoyage-diogene-lunel" className="text-primary hover:underline font-medium">Lunel</Link>,{' '}
                  <Link to="/nettoyage-diogene-meze" className="text-primary hover:underline font-medium">Mèze</Link> et{' '}
                  <Link to="/zone-intervention-herault" className="text-primary hover:underline font-semibold">toutes les communes du 34</Link>.{' '}
                  <Link to="/prix-nettoyage-diogene-guide-2025" className="text-primary hover:underline font-semibold">Consultez notre guide des prix 2025</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Pourquoi Nous Choisir */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Pourquoi choisir Le Lien Propreté à Marseillan ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Expertise zone côtière</h3>
                <p className="text-muted-foreground">
                  Nous maîtrisons les problématiques spécifiques au bord de mer (humidité, salinité) et adaptons nos protocoles de nettoyage.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Disponibilité estivale</h3>
                <p className="text-muted-foreground">
                  Nous intervenons toute l'année, y compris en pleine saison touristique, pour répondre aux urgences locatives.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Proximité Béziers</h3>
                <p className="text-muted-foreground">
                  Basés à proximité, nous intervenons rapidement à Marseillan (30 min) sans frais de déplacement excessifs.
                </p>
              </div>
            </div>
          </section>

          {/* Délais d'Intervention */}
          <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Délais d'intervention à Marseillan
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">Urgence</div>
                  <p className="text-lg">Intervention possible dans la journée</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">24-48h</div>
                  <p className="text-lg">Pour une intervention planifiée</p>
                </div>
              </div>
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('marseillan_delais')}>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Appeler maintenant - 07 88 43 20 55
                </Button>
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Questions fréquentes - Marseillan
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Intervenez-vous à Marseillan-Plage et Marseillan-Ville ?
                </h3>
                <p className="text-muted-foreground">
                  Oui, nous intervenons dans les deux secteurs de Marseillan : le centre historique (Marseillan-Ville) et la zone balnéaire (Marseillan-Plage). Nous adaptons nos méthodes selon la localisation.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Quel est le délai d'intervention à Marseillan ?
                </h3>
                <p className="text-muted-foreground">
                  Depuis notre base à Béziers, nous pouvons être à Marseillan en 30-35 minutes. Pour les urgences, nous organisons une intervention dans les plus brefs délais, souvent le jour même.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Travaillez-vous en période estivale ?
                </h3>
                <p className="text-muted-foreground">
                  Oui, nous intervenons toute l'année, y compris pendant la saison touristique. Nous sommes particulièrement réactifs l'été pour répondre aux besoins urgents des propriétaires et gestionnaires locatifs.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Combien coûte un nettoyage Diogène à Marseillan ?
                </h3>
                <p className="text-muted-foreground">
                  Le tarif varie selon la surface et le niveau d'encombrement. Pour une habitation à Marseillan, comptez entre 2 500€ et 8 500€. Devis gratuit après visite sur place.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Besoin d'aide à Marseillan ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contactez-nous dès maintenant pour un accompagnement local et humain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('marseillan_final_cta')}>
                <Button size="lg" className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold">
                  <Phone className="mr-2 w-5 h-5" />
                  07 88 43 20 55
                </Button>
              </a>
              <Link to="/prix-nettoyage-diogene-herault" onClick={() => trackCTAClick('pricing', 'Voir les Tarifs', '/prix-nettoyage-diogene-herault')}>
                <Button size="lg" variant="outline">
                  Voir les Tarifs
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NettoyageDiogeneMarseillan;
