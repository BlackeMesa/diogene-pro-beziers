import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Phone, Heart, Shield, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import empathySupport from "@/assets/empathy-support.jpg";
import { trackCTAClick, trackPhoneClick, trackServicePageView } from "@/lib/analytics";
import { useEffect } from "react";

const AppartementTresSale = () => {
  useEffect(() => {
    trackServicePageView('Appartement Très Sale');
  }, []);

  const signes = [
    "Accumulation d'objets inutiles sur plusieurs mois",
    "Mauvaises odeurs persistantes même en aérant",
    "Présence d'insectes (cafards, mouches) ou rongeurs",
    "Déchets non évacués depuis plus d'un mois",
    "Sol invisible sous les objets et déchets",
    "Sanitaires (WC, douche) inutilisables",
    "Moisissures visibles sur les murs",
    "Sentiment de honte ou d'isolement social"
  ];

  const etapes = [
    {
      numero: "1",
      titre: "Évaluation Gratuite",
      description: "Nous nous déplaçons chez vous pour évaluer la situation en toute confidentialité. Sans jugement."
    },
    {
      numero: "2",
      titre: "Devis Détaillé",
      description: "Vous recevez un devis complet et transparent sous 12h. Nous expliquons chaque poste de dépense."
    },
    {
      numero: "3",
      titre: "Intervention Rapide",
      description: "Nous pouvons commencer sous 48h, ou même le jour même si c'est urgent. Équipe professionnelle et discrète."
    },
    {
      numero: "4",
      titre: "Tri & Évacuation",
      description: "Nous trions avec soin : objets à conserver, à donner, à recycler. Respect de vos souvenirs."
    },
    {
      numero: "5",
      titre: "Nettoyage Complet",
      description: "Nettoyage en profondeur et désinfection selon protocole QUALIPROPRE 10403. Traitement anti-odeurs."
    },
    {
      numero: "6",
      titre: "Remise en État",
      description: "Votre logement retrouve sa fonctionnalité. Vous pouvez repartir sur de bonnes bases."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Appartement Très Sale : Que Faire ? Solution Rapide Hérault (34)</title>
        <meta name="description" content="Votre logement est devenu insalubre ? Aide professionnelle et discrète dans l'Hérault. Intervention rapide, sans jugement. ☎️ 07 88 43 20 55" />
        <meta property="og:title" content="Appartement Très Sale - Solution Professionnelle Hérault" />
        <meta property="og:description" content="Accompagnement humain pour retrouver un logement sain. Intervention discrète et respectueuse." />
        <link rel="canonical" href="https://www.lelienproprete34.fr/appartement-tres-sale-que-faire" />
      </Helmet>

      <Navigation />
      <FloatingCTA />

      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <BreadcrumbNav 
            items={[
              { label: "Appartement Très Sale - Que Faire ?" }
            ]} 
          />

          {/* Hero Section Empathique */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                  <Heart className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                  Votre Appartement est Très Sale ?<br />Voici la Solution
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Vous n'êtes pas seul(e) face à cette situation. Nous sommes là pour vous aider 
                  à retrouver un espace de vie sain, avec humanité et sans aucun jugement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+33788432055" onClick={() => trackPhoneClick('appartement_sale_hero')}>
                    <Button size="lg" className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold w-full sm:w-auto">
                      <Phone className="mr-2 w-5 h-5" />
                      Parlons-en - 07 88 43 20 55
                    </Button>
                  </a>
                  <Link to="/contact" onClick={() => trackCTAClick('devis', 'Contact Confidentiel', '/contact')}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Contact Confidentiel
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <img 
                  src={empathySupport}
                  alt="Accompagnement humain et respectueux"
                  className="rounded-2xl shadow-strong w-full"
                />
              </div>
            </div>
          </section>

          {/* Section Empathie */}
          <section className="py-16 bg-secondary rounded-2xl px-8 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Vous N'Êtes Pas Seul(e)
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Beaucoup de personnes se retrouvent dans cette situation : maladie, dépression, 
                perte d'un proche, surmenage... Les raisons sont multiples et nous les comprenons.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                <strong className="text-card-foreground">Ce n'est pas une question de volonté.</strong> 
                {" "}C'est une situation qui peut arriver à chacun, et il existe des solutions 
                pour s'en sortir avec dignité.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-4 rounded-xl">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-card-foreground">Confidentialité</p>
                  <p className="text-sm text-muted-foreground">100% garanti</p>
                </div>
                <div className="bg-card p-4 rounded-xl">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-card-foreground">Sans Jugement</p>
                  <p className="text-sm text-muted-foreground">Accompagnement humain</p>
                </div>
                <div className="bg-card p-4 rounded-xl">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold text-card-foreground">Intervention Rapide</p>
                  <p className="text-sm text-muted-foreground">Sous 48h si urgent</p>
                </div>
              </div>
            </div>
          </section>

          {/* Checklist Signes */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Signes Qu'il Faut Faire Appel à un Professionnel
            </h2>
            <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 shadow-medium">
              <p className="text-muted-foreground mb-6">
                Si vous reconnaissez plusieurs de ces situations, il est temps d'agir :
              </p>
              <ul className="space-y-4">
                {signes.map((signe, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-card-foreground">{signe}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-accent/10 rounded-xl border border-accent">
                <p className="text-sm text-card-foreground text-center">
                  <strong>Important :</strong> Plus vous attendez, plus la situation se dégrade. 
                  Agir maintenant, c'est reprendre le contrôle.
                </p>
              </div>
            </div>
          </section>

          {/* Étapes Intervention */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Les Étapes de Notre Intervention
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {etapes.map((etape, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-medium relative"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-strong">
                    {etape.numero}
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3 mt-2">
                    {etape.titre}
                  </h3>
                  <p className="text-muted-foreground">
                    {etape.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Émotionnel */}
          <section className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Reprenez le Contrôle - Appelez-Nous
              </h2>
              <p className="text-xl mb-8 opacity-95 leading-relaxed">
                Chaque jour qui passe rend la situation plus difficile. Ensemble, 
                nous pouvons retrouver un espace de vie sain et digne.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a href="tel:+33788432055" onClick={() => trackPhoneClick('appartement_sale_cta')}>
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold text-lg px-8"
                  >
                    <Phone className="mr-2 w-6 h-6" />
                    Appelez Maintenant - 07 88 43 20 55
                  </Button>
                </a>
                <Link to="/nettoyage-urgence-24h-herault" onClick={() => trackCTAClick('urgence', 'Urgence 24h', '/nettoyage-urgence-24h-herault')}>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-primary-foreground/10 backdrop-blur-sm border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    🚨 Situation Urgente ?
                  </Button>
                </Link>
              </div>
              <p className="text-sm opacity-90">
                Disponible 7j/7 - Réponse garantie sous 2h
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              Vos Questions, Nos Réponses
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  C'est vraiment confidentiel ?
                </h3>
                <p className="text-muted-foreground">
                  Oui, absolument. Nous intervenons en toute discrétion, sans logo apparent sur nos véhicules 
                  si vous le souhaitez. Votre situation reste strictement confidentielle.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Que faire des objets de valeur ou souvenirs ?
                </h3>
                <p className="text-muted-foreground">
                  Nous trions avec vous ou selon vos consignes. Les objets de valeur sont mis de côté, 
                  les souvenirs sont protégés. Vous décidez ce qui doit être conservé.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Combien de temps prend l'intervention ?
                </h3>
                <p className="text-muted-foreground">
                  Selon la surface et le niveau : de 1 à 5 jours en moyenne. 
                  Nous vous donnons une estimation précise lors de l'évaluation gratuite.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-medium">
                <h3 className="font-bold text-lg mb-2 text-card-foreground">
                  Dois-je être présent pendant l'intervention ?
                </h3>
                <p className="text-muted-foreground">
                  Pas nécessairement. Certains clients préfèrent nous confier les clés et revenir 
                  une fois terminé. D'autres veulent être présents. C'est vous qui décidez.
                </p>
              </div>
            </div>
          </section>

          {/* Liens Utiles */}
          <section className="bg-secondary rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">
              En Savoir Plus
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/prix-nettoyage-diogene-herault" onClick={() => trackCTAClick('pricing', 'Voir Tarifs', '/prix-nettoyage-diogene-herault')}>
                <Button variant="outline">
                  Voir les Tarifs
                </Button>
              </Link>
              <Link to="/nettoyage-diogene" onClick={() => trackCTAClick('service', 'Protocole Diogène', '/nettoyage-diogene')}>
                <Button variant="outline">
                  Notre Protocole Diogène
                </Button>
              </Link>
              <Link to="/contact" onClick={() => trackCTAClick('devis', 'Demander Devis', '/contact')}>
                <Button variant="default">
                  Demander un Devis
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

export default AppartementTresSale;
