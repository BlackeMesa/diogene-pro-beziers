import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBadges from "@/components/TrustBadges";
import balarucCity from "@/assets/balaruc-city.jpg";
import { trackCTAClick, trackPhoneClick, trackServicePageView } from "@/lib/analytics";
import { useEffect } from "react";

const NettoyageDiogeneBalaruc = () => {
  useEffect(() => {
    trackServicePageView('Nettoyage Diogène Balaruc');
  }, []);

  const neighborhoods = [
    "Centre thermal",
    "Les Thermes",
    "Port de Balaruc",
    "Avenue des Thermes",
    "Quartier des Horts",
    "Route de Sète",
    "Les Garrigues",
    "Bord de l'Étang"
  ];

  const nearbyCities = [
    "Balaruc-le-Vieux",
    "Frontignan",
    "Sète",
    "Gigean",
    "Poussan",
    "Montbazin",
    "Bouzigues"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Nettoyage Diogène Balaruc | Station Thermale - Hérault</title>
        <meta name="description" content="Nettoyage syndrome de Diogène à Balaruc-les-Bains (34540). Station thermale. Intervention rapide. Devis gratuit ☎ 07 88 43 20 55" />
        <meta name="keywords" content="nettoyage diogène Balaruc, syndrome Diogène 34540, débarras insalubre Balaruc-les-Bains, nettoyage extrême station thermale" />
        <link rel="canonical" href="https://lelienproprete34.com/nettoyage-diogene-balaruc-les-bains" />
        
        <meta property="og:title" content="Nettoyage Syndrome de Diogène à Balaruc-les-Bains | Le Lien Propreté" />
        <meta property="og:description" content="Experts du nettoyage de syndrome de Diogène à Balaruc-les-Bains. Intervention discrète et professionnelle dans toute la commune." />
        <meta property="og:url" content="https://lelienproprete34.com/nettoyage-diogene-balaruc-les-bains" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Le Lien Propreté 34 - Nettoyage Diogène Balaruc",
            "image": balarucCity,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Balaruc-les-Bains",
              "postalCode": "34540",
              "addressRegion": "Occitanie",
              "addressCountry": "FR"
            },
            "telephone": "+33788432055",
            "priceRange": "800€-8000€",
            "areaServed": "Balaruc-les-Bains et alentours",
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
              { label: "Balaruc-les-Bains" }
            ]} 
          />

          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Nettoyage Syndrome de Diogène à Balaruc-les-Bains (34540)
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Intervention spécialisée dans la station thermale de Balaruc. 
                  Nous accompagnons les situations complexes (curistes, résidents, locataires) 
                  avec une discrétion absolue et un protocole sanitaire strict.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="tel:+33788432055" onClick={() => trackPhoneClick('balaruc_hero')}>
                    <Button size="lg" className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold w-full sm:w-auto">
                      <Phone className="mr-2 w-5 h-5" />
                      07 88 43 20 55
                    </Button>
                  </a>
                  <Link to="/contact" onClick={() => trackCTAClick('devis', 'Devis Gratuit Balaruc', '/contact')}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Devis Gratuit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-success-green">
                    <CheckCircle className="w-5 h-5" />
                    <span>Discrétion thermale assurée</span>
                  </div>
                  <div className="flex items-center gap-2 text-success-green">
                    <CheckCircle className="w-5 h-5" />
                    <span>Protocole sanitaire renforcé</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src={balarucCity}
                  alt="Nettoyage Diogène à Balaruc-les-Bains"
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
                  Zones d'intervention à Balaruc
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Nous intervenons dans tous les quartiers de la station thermale et résidentielle.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 text-card-foreground">Secteurs de Balaruc :</h3>
                  <div className="flex flex-wrap gap-2">
                    {neighborhoods.map((quartier, index) => (
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
                    {nearbyCities.map((ville, index) => (
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
                  <Link to="/nettoyage-diogene-frontignan" className="text-primary hover:underline font-medium">Frontignan</Link> et{' '}
                  <Link to="/zone-intervention-herault" className="text-primary hover:underline font-semibold">toutes les communes du 34</Link>.{' '}
                  <Link to="/prix-nettoyage-diogene-guide-2025" className="text-primary hover:underline font-semibold">Consultez notre guide des prix 2025</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Pourquoi Nous Choisir */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Pourquoi choisir Le Lien Propreté à Balaruc ?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Contexte thermal</h3>
                <p className="text-muted-foreground">
                  Nous sommes habitués aux interventions dans les résidences de curistes et comprenons les contraintes spécifiques de la saison thermale.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Réseau médico-social</h3>
                <p className="text-muted-foreground">
                  Nous collaborons avec les services de santé et le CCAS de Balaruc pour un accompagnement global des personnes vulnérables.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Intervention rapide</h3>
                <p className="text-muted-foreground">
                  Notre proximité nous permet d'intervenir rapidement (40-45 min) pour résoudre les situations urgentes avant l'arrivée ou le départ de locataires.
                </p>
              </div>
            </div>
          </section>

          {/* Délais d'Intervention */}
          <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Délais d'intervention à Balaruc-les-Bains
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
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('balaruc_delais')}>
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
              Questions fréquentes - Balaruc-les-Bains
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Intervenez-vous dans les résidences thermales de Balaruc ?
                </h3>
                <p className="text-muted-foreground">
                  Oui, nous intervenons dans tous les types d'habitations à Balaruc-les-Bains, y compris les résidences de curistes et les logements temporaires. Nous comprenons les enjeux spécifiques de cette commune thermale.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Quel est le délai d'intervention à Balaruc-les-Bains ?
                </h3>
                <p className="text-muted-foreground">
                  Depuis Béziers, nous pouvons être à Balaruc en 40-45 minutes. Pour les interventions urgentes, nous organisons une mobilisation rapide, souvent dans la journée.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Travaillez-vous avec les établissements de santé locaux ?
                </h3>
                <p className="text-muted-foreground">
                  Oui, nous collaborons avec les services sociaux et les établissements de soins de Balaruc-les-Bains. Nous comprenons que certaines situations nécessitent une coordination avec le secteur médico-social.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Combien coûte un nettoyage Diogène à Balaruc-les-Bains ?
                </h3>
                <p className="text-muted-foreground">
                  Le coût varie selon la surface et le niveau d'encombrement. Pour un logement à Balaruc, comptez entre 2 000€ et 7 000€. Nous établissons un devis gratuit après évaluation sur place.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Besoin d'aide à Balaruc-les-Bains ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contactez-nous dès maintenant pour un accompagnement local et humain
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:+33788432055" onClick={() => trackPhoneClick('balaruc_final_cta')}>
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

export default NettoyageDiogeneBalaruc;
