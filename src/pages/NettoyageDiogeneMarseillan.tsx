import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import TrustBadges from "@/components/TrustBadges";
import { FAQSection } from "@/components/FAQSection";
import marseillanCity from "@/assets/marseillan-city.jpg";

const NettoyageDiogeneMarseillan = () => {
  const phoneNumber = "07 49 66 03 62";

  const faqItems = [
    {
      question: "Intervenez-vous à Marseillan-Plage et Marseillan-Ville ?",
      answer: "Oui, nous intervenons dans les deux secteurs de Marseillan : le centre historique (Marseillan-Ville) et la zone balnéaire (Marseillan-Plage). Nous adaptons nos méthodes selon la localisation."
    },
    {
      question: "Quel est le délai d'intervention à Marseillan ?",
      answer: "Depuis notre base à Béziers, nous pouvons être à Marseillan en 30-35 minutes. Pour les urgences, nous organisons une intervention dans les plus brefs délais, souvent le jour même."
    },
    {
      question: "Travaillez-vous en période estivale ?",
      answer: "Oui, nous intervenons toute l'année, y compris pendant la saison touristique. Nous sommes particulièrement réactifs l'été pour répondre aux besoins urgents des propriétaires et gestionnaires locatifs."
    },
    {
      question: "Combien coûte un nettoyage Diogène à Marseillan ?",
      answer: "Le tarif varie selon la surface et le niveau d'encombrement. Pour une habitation à Marseillan, comptez entre 2 500€ et 8 500€. Devis gratuit après visite sur place."
    },
    {
      question: "Gérez-vous les résidences secondaires ?",
      answer: "Absolument. Nous avons l'habitude d'intervenir dans les résidences secondaires à Marseillan, notamment lorsque la situation est découverte après une longue absence. Nous coordonnons avec les propriétaires ou leurs représentants."
    }
  ];

  const neighborhoods = [
    "Marseillan-Ville",
    "Marseillan-Plage",
    "Le Port",
    "Avenue de la Méditerranée",
    "Rue du Commerce",
    "Quartier du Castellas",
    "Route de Sète",
    "Les Onglous"
  ];

  const nearbyCities = [
    "Agde",
    "Mèze",
    "Florensac",
    "Pinet",
    "Pomérols",
    "Castelnau-de-Guers",
    "Montagnac"
  ];

  return (
    <>
      <Helmet>
        <title>Nettoyage Syndrome de Diogène à Marseillan (34340) | Intervention Côte Méditerranée</title>
        <meta name="description" content="Service spécialisé de nettoyage syndrome de Diogène à Marseillan. Équipe discrète et professionnelle. Intervention à Marseillan-Ville et Marseillan-Plage. Devis gratuit." />
        <meta name="keywords" content="nettoyage diogène Marseillan, syndrome Diogène 34340, débarras insalubre Marseillan-Plage, nettoyage extrême Hérault" />
        <link rel="canonical" href="https://lelienproprete34.com/nettoyage-diogene-marseillan" />
        
        <meta property="og:title" content="Nettoyage Syndrome de Diogène à Marseillan | Le Lien Propreté" />
        <meta property="og:description" content="Experts du nettoyage de syndrome de Diogène à Marseillan. Intervention discrète et professionnelle sur toute la commune." />
        <meta property="og:url" content="https://lelienproprete34.com/nettoyage-diogene-marseillan" />
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
                "name": "Marseillan",
                "postalCode": "34340"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Marseillan",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Marseillan",
                "postalCode": "34340",
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
                backgroundImage: `url(${marseillanCity})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
            </div>
            
            <div className="container-custom relative z-10 text-center text-white px-4">
              <BreadcrumbNav 
                items={[
                  { label: "Accueil", path: "/" },
                  { label: "Zone d'intervention", path: "/zone-intervention-herault" },
                  { label: "Marseillan" }
                ]}
              />
              
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in-up">
                Nettoyage Syndrome de Diogène<br />
                <span className="text-accent">à Marseillan (34340)</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/95 animate-fade-in-up animation-delay-200">
                Intervention rapide à Marseillan-Ville et Marseillan-Plage
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
                Intervention dans tous les quartiers de Marseillan
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
                  Votre quartier n'est pas listé ? Nous intervenons dans toute la commune de Marseillan.
                </p>
                <Button asChild variant="outline" size="lg">
                  <a href={`tel:${phoneNumber.replace(/\s/g, '')}`}>
                    Appelez-nous au {phoneNumber}
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Marseillan Specific Section */}
          <section className="section-padding bg-secondary/5">
            <div className="container-custom">
              <h2 className="section-title text-center mb-12">
                Pourquoi choisir Le Lien Propreté à Marseillan ?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold mb-4 text-primary">Expertise zone côtière</h3>
                  <p className="text-muted-foreground">
                    Marseillan étant en bord de mer et d'étang, nous maîtrisons les problématiques spécifiques : humidité saline, corrosion, odeurs marines. Nos protocoles sont adaptés à cet environnement unique.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold mb-4 text-primary">Disponibilité toute l'année</h3>
                  <p className="text-muted-foreground">
                    Nous intervenons été comme hiver à Marseillan. Nous comprenons les enjeux particuliers de la saison touristique et adaptons notre planning pour répondre aux urgences locatives.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-all">
                  <h3 className="text-xl font-bold mb-4 text-primary">Proximité géographique</h3>
                  <p className="text-muted-foreground">
                    Depuis Béziers, nous sommes à 30 minutes de Marseillan. Cette proximité nous permet d'intervenir rapidement en cas d'urgence et de planifier efficacement les interventions programmées.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="section-padding bg-background">
            <div className="container-custom">
              <h2 className="section-title text-center mb-12">
                Nous intervenons aussi aux alentours de Marseillan
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
                Besoin d'une intervention à Marseillan ?
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

export default NettoyageDiogeneMarseillan;
