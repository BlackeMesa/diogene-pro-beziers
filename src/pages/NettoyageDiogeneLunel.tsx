import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBadges from "@/components/TrustBadges";
import { FAQSection } from "@/components/FAQSection";
import lunelCity from "@/assets/lunel-city.jpg";
import { trackCTAClick, trackPhoneClick, trackServicePageView } from "@/lib/analytics";
import { useEffect } from "react";

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

  const faqItems = [
    {
      question: "Intervenez-vous dans le centre historique de Lunel ?",
      answer: "Oui, nous intervenons dans tout Lunel, y compris dans le centre ancien (l'Écusson) avec ses accès parfois difficiles. Nous disposons du matériel adapté pour évacuer les encombrants même dans les rues étroites."
    },
    {
      question: "Quel est le délai d'intervention à Lunel ?",
      answer: "Depuis notre base, nous pouvons intervenir à Lunel en environ 40 minutes. Pour les urgences, nous pouvons mobiliser une équipe dans la journée."
    },
    {
      question: "Travaillez-vous avec les services sociaux de Lunel ?",
      answer: "Oui, nous collaborons régulièrement avec le CCAS de Lunel et les assistantes sociales du secteur pour accompagner les personnes atteintes du syndrome de Diogène."
    },
    {
      question: "Combien coûte un nettoyage Diogène à Lunel ?",
      answer: "Le prix varie selon le volume à débarrasser et l'état de salubrité. Pour un logement à Lunel, la fourchette se situe généralement entre 2 000€ et 7 500€. Le devis est gratuit et sans engagement."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Nettoyage Diogène Lunel | Intervention Est Hérault 7j/7</title>
        <meta name="description" content="Nettoyage syndrome de Diogène à Lunel (34400). Intervention 40 minutes. Secteur est Hérault. Devis gratuit ☎ 07 88 43 20 55" />
        <meta name="keywords" content="nettoyage diogène Lunel, syndrome Diogène 34400, débarras insalubre Lunel, nettoyage extrême Hérault" />
        <link rel="canonical" href="https://lelienproprete34.com/nettoyage-diogene-lunel" />
        
        <meta property="og:title" content="Nettoyage Syndrome de Diogène à Lunel | Le Lien Propreté" />
        <meta property="og:description" content="Experts du nettoyage de syndrome de Diogène à Lunel. Intervention discrète et professionnelle dans tout le secteur." />
        <meta property="og:url" content="https://lelienproprete34.com/nettoyage-diogene-lunel" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Le Lien Propreté 34 - Nettoyage Diogène Lunel",
            "image": lunelCity,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Lunel",
              "postalCode": "34400",
              "addressRegion": "Occitanie",
              "addressCountry": "FR"
            },
            "telephone": "+33788432055",
            "priceRange": "800€-8000€",
            "areaServed": "Lunel et Est Hérault",
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
              { label: "Lunel" }
            ]} 
          />

          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Nettoyage Syndrome de Diogène à Lunel (34400)
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Service professionnel de débarras et nettoyage extrême à Lunel et dans l'Est de l'Hérault. 
                  Nous intervenons avec discrétion pour remettre en état les logements insalubres.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="tel:+33788432055" onClick={() => trackPhoneClick('lunel_hero')}>
                    <Button size="lg" className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold w-full sm:w-auto">
                      <Phone className="mr-2 w-5 h-5" />
                      07 88 43 20 55
                    </Button>
                  </a>
                  <Link to="/contact" onClick={() => trackCTAClick('devis', 'Devis Gratuit Lunel', '/contact')}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Devis Gratuit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-success-green">
                    <CheckCircle className="w-5 h-5" />
                    <span>Intervention Est Hérault</span>
                  </div>
                  <div className="flex items-center gap-2 text-success-green">
                    <CheckCircle className="w-5 h-5" />
                    <span>Devis gratuit sous 12h</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src={lunelCity}
                  alt="Nettoyage Diogène à Lunel"
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
                  Zones d'intervention à Lunel
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Nous couvrons l'ensemble de la commune de Lunel ainsi que les villages environnants du Pays de Lunel.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 text-card-foreground">Quartiers de Lunel :</h3>
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
                  <Link to="/nettoyage-diogene-pezenas" className="text-primary hover:underline font-medium">Pézenas</Link>,{' '}
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
              Pourquoi choisir Le Lien Propreté à Lunel ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Réactivité Est Hérault</h3>
                <p className="text-muted-foreground">
                  Nous intervenons rapidement sur le secteur de Lunel. En cas d'urgence, notre équipe peut être sur place dans la journée.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Expertise locale</h3>
                <p className="text-muted-foreground">
                  Nous connaissons bien les spécificités de l'habitat lunellois, du centre ancien aux zones pavillonnaires récentes.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Discrétion assurée</h3>
                <p className="text-muted-foreground">
                  Nos interventions sont réalisées avec la plus grande discrétion, sans véhicules marqués, pour respecter votre vie privée.
                </p>
              </div>
            </div>
          </section>

          {/* Délais d'Intervention */}
          <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Délais d'intervention à Lunel
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
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('lunel_delais')}>
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
              Questions fréquentes - Lunel
            </h2>
            <div className="container-custom">
              <FAQSection items={faqItems} />
            </div>
          </section>

          {/* CTA Final */}
          <section className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Besoin d'aide à Lunel ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contactez-nous dès maintenant pour un accompagnement local et humain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('lunel_final_cta')}>
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

export default NettoyageDiogeneLunel;
