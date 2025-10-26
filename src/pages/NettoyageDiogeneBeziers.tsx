import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBadges from "@/components/TrustBadges";
import heroCleaningTeam from "@/assets/hero-cleaning-team.jpg";
import { trackCTAClick, trackPhoneClick, trackServicePageView } from "@/lib/analytics";
import { useEffect } from "react";

const NettoyageDiogeneBeziers = () => {
  useEffect(() => {
    trackServicePageView('Nettoyage Diogène Béziers');
  }, []);

  const quartiers = [
    "Centre-Ville", "Polygone", "La Devèze", "Capnau", "La Courondelle",
    "La Madeleine", "Saint-Jean-d'Aureilhan", "La Treille", "Les Montimarts"
  ];

  const villesProches = [
    "Sérignan", "Valras-Plage", "Villeneuve-lès-Béziers", "Vendres",
    "Boujan-sur-Libron", "Sauvian", "Lieuran-lès-Béziers", "Bassan"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Nettoyage Syndrome de Diogène Béziers (34) | Intervention Rapide 7j/7</title>
        <meta name="description" content="Expert en nettoyage Diogène à Béziers et dans l'Hérault. Intervention discrète sous 24h. Devis gratuit ☎️ 07 88 43 20 55" />
        <meta property="og:title" content="Nettoyage Diogène Béziers - Le Lien Propreté 34" />
        <meta property="og:description" content="Accompagnement professionnel et humain pour le nettoyage syndrome de Diogène à Béziers." />
        <link rel="canonical" href="https://www.lelienproprete34.fr/nettoyage-diogene-beziers" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Le Lien Propreté 34 - Nettoyage Diogène Béziers",
            "image": heroCleaningTeam,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Béziers",
              "postalCode": "34500",
              "addressRegion": "Occitanie",
              "addressCountry": "FR"
            },
            "telephone": "+33788432055",
            "priceRange": "800€-8000€",
            "areaServed": "Béziers et agglomération",
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
              { label: "Béziers" }
            ]} 
          />

          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Nettoyage Syndrome de Diogène à Béziers et Alentours
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Professionnel local basé à Béziers, nous intervenons rapidement dans toute l'agglomération 
                  pour un accompagnement humain et respectueux. Protocole certifié QUALIPROPRE 10403.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="tel:+33788432055" onClick={() => trackPhoneClick('beziers_hero')}>
                    <Button size="lg" className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold w-full sm:w-auto">
                      <Phone className="mr-2 w-5 h-5" />
                      07 88 43 20 55
                    </Button>
                  </a>
                  <Link to="/contact" onClick={() => trackCTAClick('devis', 'Devis Gratuit Béziers', '/contact')}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Devis Gratuit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-success-green">
                    <CheckCircle className="w-5 h-5" />
                    <span>Intervention sous 24h</span>
                  </div>
                  <div className="flex items-center gap-2 text-success-green">
                    <CheckCircle className="w-5 h-5" />
                    <span>Devis gratuit sous 12h</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src={heroCleaningTeam}
                  alt="Équipe de nettoyage professionnelle à Béziers"
                  className="rounded-2xl shadow-strong w-full"
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
                  Tous les Quartiers de Béziers Couverts
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Nous intervenons dans l'ensemble des quartiers de Béziers et dans toute l'agglomération.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 text-card-foreground">Quartiers de Béziers :</h3>
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
                  <h3 className="font-bold text-lg mb-4 text-card-foreground">Villes proches :</h3>
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
              <p className="text-sm text-muted-foreground">
                Et toutes les communes de l'agglomération Béziers Méditerranée
              </p>
            </div>
          </section>

          {/* Pourquoi Nous Choisir */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Pourquoi Choisir un Professionnel Local à Béziers ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Réactivité Maximale</h3>
                <p className="text-muted-foreground">
                  Basés à Béziers, nous pouvons intervenir le jour même en cas d'urgence. 
                  Pas de frais de déplacement supplémentaires sur l'agglomération.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Connaissance du Territoire</h3>
                <p className="text-muted-foreground">
                  Nous connaissons parfaitement Béziers et ses spécificités : accès, 
                  déchetteries locales, services sociaux du secteur.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Suivi Personnalisé</h3>
                <p className="text-muted-foreground">
                  Un interlocuteur unique de Béziers vous accompagne tout au long du processus. 
                  Disponibilité et proximité garanties.
                </p>
              </div>
            </div>
          </section>

          {/* Délais d'Intervention */}
          <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Délais d'Intervention à Béziers
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">Même Jour</div>
                  <p className="text-lg">Pour les situations urgentes sur Béziers centre</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-4xl font-bold text-accent mb-2">24-48h</div>
                  <p className="text-lg">Sur toute l'agglomération Béziers Méditerranée</p>
                </div>
              </div>
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('beziers_delais')}>
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Appeler Maintenant - 07 88 43 20 55
                </Button>
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Questions Fréquentes - Béziers
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Intervenez-vous dans tous les quartiers de Béziers ?
                </h3>
                <p className="text-muted-foreground">
                  Oui, nous couvrons l'intégralité de Béziers : centre-ville, Polygone, La Devèze, 
                  et tous les autres quartiers, sans exception ni supplément tarifaire.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Quel est le délai d'intervention à Béziers ?
                </h3>
                <p className="text-muted-foreground">
                  Pour une urgence, nous pouvons intervenir le jour même sur Béziers. 
                  Pour une intervention planifiée, sous 24 à 48h maximum.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Y a-t-il des frais de déplacement sur Béziers ?
                </h3>
                <p className="text-muted-foreground">
                  Aucun frais de déplacement sur Béziers et son agglomération proche (rayon de 15 km). 
                  Au-delà, un forfait modéré peut s'appliquer selon la distance.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Comment se déroule l'évaluation à Béziers ?
                </h3>
                <p className="text-muted-foreground">
                  Nous nous déplaçons gratuitement à votre domicile à Béziers pour évaluer la situation. 
                  Un devis détaillé vous est remis sous 12h.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Besoin d'Aide à Béziers ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contactez-nous dès maintenant pour un accompagnement local et humain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('beziers_final_cta')}>
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

export default NettoyageDiogeneBeziers;
