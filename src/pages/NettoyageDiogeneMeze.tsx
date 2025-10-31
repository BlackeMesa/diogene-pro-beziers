import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBadges from "@/components/TrustBadges";
import { FAQSection } from "@/components/FAQSection";
import mezeCity from "@/assets/meze-city.jpg";

const NettoyageDiogeneMeze = () => {
  const phoneNumber = "07 49 66 03 62";

  const faqItems = [
    {
      question: "Intervenez-vous dans les zones proches de l'étang de Thau ?",
      answer: "Oui, nous intervenons dans tous les quartiers de Mèze, y compris les résidences en bord d'étang. Nous adaptons nos méthodes pour tenir compte de la proximité de l'eau et de l'environnement naturel."
    },
    {
      question: "Quel est le délai d'intervention à Mèze ?",
      answer: "Depuis Béziers, nous pouvons intervenir à Mèze en 30-40 minutes en cas d'urgence. Pour les interventions planifiées, nous nous adaptons à vos disponibilités et aux contraintes locales."
    },
    {
      question: "Gérez-vous les odeurs liées à l'humidité ?",
      answer: "Absolument. Mèze étant proche de l'étang, nous avons l'habitude des problématiques d'humidité. Nous utilisons des techniques spécifiques pour traiter les odeurs et l'humidité lors du nettoyage."
    },
    {
      question: "Combien coûte un nettoyage Diogène à Mèze ?",
      answer: "Le tarif dépend de la surface et du niveau d'encombrement. Pour une habitation à Mèze, comptez entre 2 000€ et 7 500€. Nous vous proposons un devis gratuit après évaluation sur place."
    },
    {
      question: "Collaborez-vous avec les services sociaux de Mèze ?",
      answer: "Oui, nous travaillons en étroite collaboration avec le CCAS de Mèze et les services sociaux du bassin de Thau pour accompagner au mieux les personnes en situation de syndrome de Diogène."
    }
  ];

  const neighborhoods = [
    "Centre-ville",
    "Port de Mèze",
    "Les Salins",
    "Sesquier",
    "Route de Montpellier",
    "Avenue de Pézenas",
    "Quartier de la Conque",
    "Les Terres Blanches"
  ];

  const nearbyCities = [
    "Bouzigues",
    "Loupian",
    "Poussan",
    "Montbazin",
    "Villeveyrac",
    "Florensac",
    "Marseillan"
  ];

  return (
    <>
      <Helmet>
        <title>Nettoyage Syndrome de Diogène à Mèze (34140) | Intervention Bassin de Thau</title>
        <meta name="description" content="Service spécialisé de nettoyage syndrome de Diogène à Mèze. Équipe discrète et professionnelle. Intervention rapide sur le bassin de Thau. Devis gratuit." />
        <meta name="keywords" content="nettoyage diogène Mèze, syndrome Diogène 34140, débarras insalubre Mèze, nettoyage extrême bassin de Thau" />
        <link rel="canonical" href="https://lelienproprete34.com/nettoyage-diogene-meze" />
        
        <meta property="og:title" content="Nettoyage Syndrome de Diogène à Mèze | Le Lien Propreté" />
        <meta property="og:description" content="Experts du nettoyage de syndrome de Diogène à Mèze. Intervention discrète et professionnelle sur tout le bassin de Thau." />
        <meta property="og:url" content="https://lelienproprete34.com/nettoyage-diogene-meze" />
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
                "name": "Mèze",
                "postalCode": "34140"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Mèze",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mèze",
                "postalCode": "34140",
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
                backgroundImage: `url(${mezeCity})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
            </div>
            
            <div className="container-custom relative z-10 text-center text-white px-4">
              <BreadcrumbNav 
                items={[
                  { label: "Accueil", path: "/" },
                  { label: "Zone d'intervention", path: "/zone-intervention-herault" },
                  { label: "Mèze" }
                ]}
              />
              
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up">
                Nettoyage Syndrome de Diogène<br />
                <span className="text-accent">à Mèze (34140)</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/95 animate-fade-in-up animation-delay-200">
                Intervention rapide et discrète sur tout le bassin de Thau
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
                Intervention dans tous les quartiers de Mèze
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
                  Votre quartier n'est pas listé ? Nous intervenons dans toute la commune de Mèze.
                </p>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                    Appelez-nous au {phoneNumber}
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Mèze Specific Section */}
          <section className="section-padding bg-secondary/5">
            <div className="container-custom">
              <h2 className="section-title text-center mb-12">
                Pourquoi choisir Le Lien Propreté à Mèze ?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold mb-4 text-primary">Connaissance du territoire</h3>
                  <p className="text-muted-foreground">
                    Nous connaissons parfaitement Mèze et le bassin de Thau. Nous adaptons nos interventions aux spécificités locales, notamment la proximité de l'étang et l'humidité ambiante.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold mb-4 text-primary">Intervention rapide</h3>
                  <p className="text-muted-foreground">
                    Situés à proximité, nous pouvons intervenir rapidement à Mèze, généralement sous 24-48h pour une intervention planifiée, et en moins d'une heure en cas d'urgence.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold mb-4 text-primary">Traitement spécialisé</h3>
                  <p className="text-muted-foreground">
                    Nous utilisons des protocoles adaptés aux problématiques locales : traitement anti-humidité, désinfection renforcée, et gestion des odeurs spécifiques aux zones côtières.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <h2 className="section-title text-center mb-12">
                Nous intervenons aussi aux alentours de Mèze
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
                Besoin d'une intervention à Mèze ?
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

export default NettoyageDiogeneMeze;
