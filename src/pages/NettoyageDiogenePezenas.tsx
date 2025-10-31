import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBadges from "@/components/TrustBadges";
import { FAQSection } from "@/components/FAQSection";
import pezenasCity from "@/assets/pezenas-city.jpg";

const NettoyageDiogenePezenas = () => {
  const phoneNumber = "07 49 66 03 62";

  const faqItems = [
    {
      question: "Intervenez-vous dans le centre historique de Pézenas ?",
      answer: "Oui, nous intervenons dans tout Pézenas, y compris dans le centre historique avec ses ruelles étroites. Nous adaptons notre matériel et notre organisation pour accéder aux logements du vieux Pézenas."
    },
    {
      question: "Quel est le délai d'intervention à Pézenas ?",
      answer: "Depuis notre base à Béziers, nous pouvons intervenir à Pézenas en moins d'une heure en cas d'urgence. Pour les interventions planifiées, nous nous adaptons à vos disponibilités."
    },
    {
      question: "Travaillez-vous avec les services sociaux de Pézenas ?",
      answer: "Oui, nous collaborons régulièrement avec les services sociaux, le CCAS de Pézenas et les associations locales pour accompagner les personnes en difficulté dans votre commune."
    },
    {
      question: "Combien coûte un nettoyage Diogène à Pézenas ?",
      answer: "Le tarif dépend de la surface et du niveau d'encombrement. Pour un appartement à Pézenas, comptez entre 2 500€ et 8 000€. Nous vous proposons un devis gratuit après visite."
    },
    {
      question: "Proposez-vous des solutions pour les maisons anciennes de Pézenas ?",
      answer: "Absolument. Nous avons l'habitude des bâtiments historiques et adaptons nos techniques pour respecter le patrimoine tout en assurant un nettoyage efficace et une désinfection complète."
    }
  ];

  const neighborhoods = [
    "Centre historique",
    "Cours Jean Jaurès",
    "Avenue Louis Montagne",
    "Quartier de la Gare",
    "Route de Nizas",
    "Route de Nézignan",
    "Route de Montagnac",
    "Quartier des Aires"
  ];

  const nearbyCities = [
    "Tourbes",
    "Nizas",
    "Nézignan-l'Évêque",
    "Montagnac",
    "Castelnau-de-Guers",
    "Aumes",
    "Lézignan-la-Cèbe"
  ];

  return (
    <>
      <Helmet>
        <title>Nettoyage Syndrome de Diogène à Pézenas (34120) | Intervention Rapide Hérault</title>
        <meta name="description" content="Service spécialisé de nettoyage syndrome de Diogène à Pézenas. Équipe discrète et professionnelle. Intervention rapide dans tout le centre historique. Devis gratuit." />
        <meta name="keywords" content="nettoyage diogène Pézenas, syndrome Diogène 34120, débarras insalubre Pézenas, nettoyage extrême Hérault" />
        <link rel="canonical" href="https://lelienproprete34.com/nettoyage-diogene-pezenas" />
        
        <meta property="og:title" content="Nettoyage Syndrome de Diogène à Pézenas | Le Lien Propreté" />
        <meta property="og:description" content="Experts du nettoyage de syndrome de Diogène à Pézenas. Intervention discrète et professionnelle dans tout le secteur." />
        <meta property="og:url" content="https://lelienproprete34.com/nettoyage-diogene-pezenas" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Nettoyage Syndrome de Diogène",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Le Lien Propreté",
              "telephone": "07 49 66 03 62",
              "areaServed": {
                "@type": "City",
                "name": "Pézenas",
                "postalCode": "34120"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Pézenas",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pézenas",
                "postalCode": "34120",
                "addressRegion": "Hérault",
                "addressCountry": "FR"
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/5">
        <Navigation />
        
        <main>
          {/* Hero Section */}
          <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${pezenasCity})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
            </div>
            
            <div className="container-custom relative z-10 text-center text-white px-4">
              <BreadcrumbNav 
                items={[
                  { label: "Accueil", path: "/" },
                  { label: "Zone d'intervention", path: "/zone-intervention-herault" },
                  { label: "Pézenas" }
                ]}
              />
              
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up">
                Nettoyage Syndrome de Diogène<br />
                <span className="text-accent">à Pézenas (34120)</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/95 animate-fade-in-up animation-delay-200">
                Intervention rapide et discrète dans tout Pézenas et son centre historique
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-glow"
                  asChild
                >
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {phoneNumber}
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/contact">Devis gratuit</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Trust Badges */}
          <section className="py-8 bg-card">
            <TrustBadges />
          </section>

          {/* Quartiers Section */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <h2 className="section-title text-center mb-12">
                Intervention dans tous les quartiers de Pézenas
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {neighborhoods.map((neighborhood, index) => (
                  <div 
                    key={index}
                    className="bg-card p-4 rounded-lg text-center shadow-soft hover:shadow-medium transition-all"
                  >
                    <p className="font-semibold text-card-foreground">{neighborhood}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Votre quartier n'est pas listé ? Nous intervenons dans toute la commune de Pézenas.
                </p>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                    Appelez-nous au {phoneNumber}
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Pézenas Specific Section */}
          <section className="section-padding bg-secondary/5">
            <div className="container-custom">
              <h2 className="section-title text-center mb-12">
                Pourquoi choisir Le Lien Propreté à Pézenas ?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold mb-4 text-primary">Expertise patrimoine historique</h3>
                  <p className="text-muted-foreground">
                    Nous comprenons les contraintes des bâtiments anciens du centre historique de Pézenas et adaptons notre intervention pour respecter l'architecture tout en garantissant une propreté optimale.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold mb-4 text-primary">Proximité réactive</h3>
                  <p className="text-muted-foreground">
                    À seulement 20 minutes de Béziers, nous intervenons rapidement à Pézenas. En cas d'urgence, notre équipe peut être sur place en moins d'une heure.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold mb-4 text-primary">Accompagnement social</h3>
                  <p className="text-muted-foreground">
                    Nous travaillons en collaboration avec les services sociaux de Pézenas et les associations locales pour un accompagnement global et respectueux de la personne.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <h2 className="section-title text-center mb-12">
                Nous intervenons aussi aux alentours de Pézenas
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {nearbyCities.map((city, index) => (
                  <div 
                    key={index}
                    className="bg-card p-4 rounded-lg text-center shadow-soft hover:shadow-medium transition-all"
                  >
                    <p className="text-card-foreground">{city}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="section-padding bg-secondary/5">
            <div className="container-custom">
              <FAQSection items={faqItems} />
            </div>
          </section>

          {/* CTA Final */}
          <section className="section-padding bg-primary text-white">
            <div className="container-custom text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Besoin d'une intervention à Pézenas ?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
                Notre équipe est à votre écoute pour une intervention rapide et discrète
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8"
                  asChild
                >
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {phoneNumber}
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8"
                  asChild
                >
                  <Link to="/contact">Demander un devis</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NettoyageDiogenePezenas;
