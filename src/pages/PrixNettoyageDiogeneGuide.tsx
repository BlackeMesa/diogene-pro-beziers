import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Euro, HelpCircle, Phone, Calculator } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { trackServicePageView, trackCTAClick } from "@/lib/analytics";
import { useEffect } from "react";

const PrixNettoyageDiogeneGuide = () => {
  useEffect(() => {
    trackServicePageView('Guide Prix Nettoyage Diogène');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Prix Nettoyage Diogène 2025 : Guide Complet & Tarifs Hérault (34)</title>
        <meta name="description" content="Guide complet des prix nettoyage syndrome de Diogène dans l'Hérault. Grille tarifaire détaillée, facteurs de coût, aides financières. Devis gratuit ☎️ 07 88 43 20 55" />
        <link rel="canonical" href="https://lelienproprete34.com/prix-nettoyage-diogene-guide-2025" />
        <meta property="og:title" content="Prix Nettoyage Diogène 2025 : Guide Complet Hérault" />
        <meta property="og:description" content="Tout savoir sur les tarifs de nettoyage syndrome de Diogène : grille tarifaire, facteurs de prix, aides financières disponibles." />
        <meta property="og:url" content="https://lelienproprete34.com/prix-nettoyage-diogene-guide-2025" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Prix Nettoyage Diogène 2025 : Guide Complet & Tarifs Hérault",
            "description": "Guide complet des prix et tarifs pour le nettoyage syndrome de Diogène dans l'Hérault. Grille tarifaire détaillée, facteurs influençant les coûts, et aides financières disponibles.",
            "author": {
              "@type": "Organization",
              "name": "Le Lien Propreté 34"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Le Lien Propreté 34",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lelienproprete34.com/logo-le-lien-proprete.png"
              }
            },
            "datePublished": "2025-11-19",
            "dateModified": "2025-11-19"
          })}
        </script>
      </Helmet>
      
      <Navigation />
      <FloatingCTA />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Euro className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Prix Nettoyage Diogène 2025 : Guide Complet
              </h1>
              <p className="text-xl text-muted-foreground">
                Tout savoir sur les tarifs de nettoyage syndrome de Diogène dans l'Hérault : grille tarifaire, facteurs de coût, et aides financières
              </p>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Le <strong>nettoyage d'un logement touché par le syndrome de Diogène</strong> est une intervention spécialisée qui nécessite expertise technique et accompagnement humain. Dans ce guide complet, nous détaillons les <strong>prix pratiqués dans l'Hérault en 2025</strong>, les facteurs qui influencent le coût, et les aides financières disponibles pour vous accompagner.
              </p>
            </div>

            {/* Table des matières */}
            <div className="bg-secondary rounded-xl p-6 mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">📋 Sommaire</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <a href="#comprendre" className="hover:text-primary hover:underline">Comprendre le syndrome de Diogène</a></li>
                <li>• <a href="#facteurs" className="hover:text-primary hover:underline">Facteurs influençant le prix</a></li>
                <li>• <a href="#grille-tarifaire" className="hover:text-primary hover:underline">Grille tarifaire détaillée 2025</a></li>
                <li>• <a href="#aides" className="hover:text-primary hover:underline">Aides financières disponibles</a></li>
                <li>• <a href="#devis" className="hover:text-primary hover:underline">Comment obtenir un devis</a></li>
                <li>• <a href="#faq" className="hover:text-primary hover:underline">Questions fréquentes</a></li>
              </ul>
            </div>

            {/* Section 1 : Comprendre */}
            <section id="comprendre" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Qu'est-ce que le syndrome de Diogène ?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le syndrome de Diogène est un <strong>trouble comportemental</strong> caractérisé par une accumulation compulsive d'objets, une négligence extrême de l'hygiène personnelle et du logement, et un isolement social progressif. Il touche principalement les personnes âgées mais peut concerner toute personne en situation de détresse psychologique.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Le nettoyage d'un tel logement ne peut pas être comparé à un simple ménage : il nécessite un <strong>protocole spécialisé</strong>, du matériel professionnel, et surtout une <strong>approche humaine et respectueuse</strong>.
              </p>
            </section>

            {/* Section 2 : Facteurs */}
            <section id="facteurs" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Les 5 facteurs qui influencent le prix
              </h2>
              
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary font-bold">1</span>
                    Surface du logement
                  </h3>
                  <p className="text-muted-foreground">
                    Plus la surface est importante, plus le temps d'intervention et la quantité de déchets à évacuer seront élevés. Un studio nécessitera 1-2 jours, tandis qu'une maison peut demander jusqu'à 7 jours de travail.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary font-bold">2</span>
                    Niveau d'insalubrité
                  </h3>
                  <p className="text-muted-foreground">
                    Le degré de saleté et de contamination détermine le niveau de protection nécessaire (EPI), les produits à utiliser, et le temps de désinfection. Un logement très insalubre nécessite un protocole DASRI complet.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary font-bold">3</span>
                    Volume de déchets
                  </h3>
                  <p className="text-muted-foreground">
                    Le coût d'évacuation des déchets (déchetterie, traitement DASRI) représente une part importante du budget. Plus le volume est élevé, plus le coût augmente. Comptez 150-300€ par m³ de déchets.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary font-bold">4</span>
                    Accessibilité
                  </h3>
                  <p className="text-muted-foreground">
                    Un logement en étage sans ascenseur, un accès difficile, ou un stationnement éloigné augmentent le temps et la difficulté de l'intervention. Cela peut ajouter 10-20% au coût total.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 flex items-center">
                    <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary font-bold">5</span>
                    Urgence de l'intervention
                  </h3>
                  <p className="text-muted-foreground">
                    Une intervention en urgence (sous 24h) ou le week-end peut entraîner un surcoût de 15-25%. Planifier l'intervention permet d'optimiser les coûts.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 : Grille tarifaire */}
            <section id="grille-tarifaire" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Grille tarifaire détaillée 2025 (Hérault)
              </h2>
              
              <div className="bg-accent/10 rounded-xl p-6 mb-8 border-l-4 border-accent">
                <p className="text-sm text-muted-foreground">
                  <strong>💡 Bon à savoir :</strong> Ces tarifs sont indicatifs et peuvent varier selon votre situation spécifique. Un devis personnalisé gratuit vous sera fourni après évaluation sur place.
                </p>
              </div>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-4 text-left">Type de logement</th>
                      <th className="p-4 text-left">Surface</th>
                      <th className="p-4 text-left">Durée</th>
                      <th className="p-4 text-left">Prix indicatif</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Studio / T1</td>
                      <td className="p-4">20-30 m²</td>
                      <td className="p-4">1-2 jours</td>
                      <td className="p-4 font-bold text-primary">800 - 2 000 €</td>
                    </tr>
                    <tr className="border-b bg-secondary/50">
                      <td className="p-4 font-medium">T2</td>
                      <td className="p-4">30-50 m²</td>
                      <td className="p-4">2-3 jours</td>
                      <td className="p-4 font-bold text-primary">1 500 - 3 500 €</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">T3</td>
                      <td className="p-4">50-70 m²</td>
                      <td className="p-4">3-4 jours</td>
                      <td className="p-4 font-bold text-primary">2 500 - 5 000 €</td>
                    </tr>
                    <tr className="border-b bg-secondary/50">
                      <td className="p-4 font-medium">T4</td>
                      <td className="p-4">70-90 m²</td>
                      <td className="p-4">4-5 jours</td>
                      <td className="p-4 font-bold text-primary">3 500 - 6 500 €</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium">Maison</td>
                      <td className="p-4">90-150 m²</td>
                      <td className="p-4">5-7 jours</td>
                      <td className="p-4 font-bold text-primary">5 000 - 10 000 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-medium">
                <h3 className="text-xl font-bold text-card-foreground mb-4">
                  <Calculator className="inline w-6 h-6 mr-2 text-primary" />
                  Ce qui est inclus dans nos tarifs
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Évaluation gratuite sur place</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Tri et débarras complet</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Nettoyage en profondeur</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Désinfection certifiée QUALIPROPRE</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Évacuation des déchets</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Traitement DASRI si nécessaire</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Accompagnement humain</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Discrétion absolue garantie</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 : Aides financières */}
            <section id="aides" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Aides financières disponibles
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Bonne nouvelle :</strong> Plusieurs aides peuvent financer tout ou partie de votre intervention de nettoyage Diogène. Voici les principales :
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-success/10 rounded-xl p-6 border-l-4 border-success">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">
                    💰 APA (Allocation Personnalisée d'Autonomie)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Pour les personnes âgées de 60 ans et plus en perte d'autonomie. Peut financer jusqu'à 1 800€/mois selon le niveau de dépendance.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Contact :</strong> Conseil Départemental de l'Hérault
                  </p>
                </div>

                <div className="bg-success/10 rounded-xl p-6 border-l-4 border-success">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">
                    💰 PCH (Prestation de Compensation du Handicap)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Pour les personnes en situation de handicap. Peut couvrir les frais d'aménagement et d'entretien du logement.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Contact :</strong> MDPH de l'Hérault
                  </p>
                </div>

                <div className="bg-success/10 rounded-xl p-6 border-l-4 border-success">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">
                    💰 Caisses de retraite (CARSAT, MSA, etc.)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Aides pour l'amélioration de l'habitat. Montants variables selon les caisses et situations.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Contact :</strong> Votre caisse de retraite
                  </p>
                </div>

                <div className="bg-success/10 rounded-xl p-6 border-l-4 border-success">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">
                    💰 Action Logement
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Pour les salariés du secteur privé. Prêts et subventions pour travaux d'amélioration du logement.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Contact :</strong> www.actionlogement.fr
                  </p>
                </div>

                <div className="bg-success/10 rounded-xl p-6 border-l-4 border-success">
                  <h3 className="text-lg font-bold text-card-foreground mb-2">
                    💰 CCAS (Centre Communal d'Action Sociale)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Aides ponctuelles selon votre situation. Montants variables selon les communes.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Contact :</strong> CCAS de votre commune
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 rounded-xl p-6 border-l-4 border-accent">
                <p className="text-sm text-muted-foreground">
                  <strong>💡 Notre accompagnement :</strong> Nous pouvons vous orienter vers les bonnes démarches et vous aider à constituer vos dossiers de demande d'aide. N'hésitez pas à nous en parler lors de l'évaluation gratuite.
                </p>
              </div>
            </section>

            {/* Section 5 : Devis */}
            <section id="devis" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Comment obtenir un devis personnalisé ?
              </h2>
              
              <div className="bg-gradient-hero text-primary-foreground rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Devis gratuit sous 12h garanti
                </h3>
                <p className="mb-6 opacity-95">
                  Notre processus est simple, rapide et totalement confidentiel :
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold text-accent mb-2">1</div>
                    <p className="text-sm">Vous nous contactez par téléphone ou formulaire</p>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold text-accent mb-2">2</div>
                    <p className="text-sm">Nous nous déplaçons gratuitement pour évaluer</p>
                  </div>
                  <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-3xl font-bold text-accent mb-2">3</div>
                    <p className="text-sm">Vous recevez un devis détaillé sous 12h</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+33788432055" onClick={() => trackCTAClick('phone', 'Appel Guide Prix', 'tel:+33788432055')}>
                    <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground font-bold w-full sm:w-auto">
                      <Phone className="mr-2 w-5 h-5" />
                      07 88 43 20 55
                    </Button>
                  </a>
                  <Link to="/contact" onClick={() => trackCTAClick('devis', 'Devis Guide Prix', '/contact')}>
                    <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary w-full sm:w-auto">
                      Demander un devis
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 6 : FAQ */}
            <section id="faq" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">
                <HelpCircle className="inline w-8 h-8 mr-2" />
                Questions fréquentes sur les prix
              </h2>
              
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="font-bold text-lg text-card-foreground mb-2">
                    Le devis est-il vraiment gratuit ?
                  </h3>
                  <p className="text-muted-foreground">
                    Oui, totalement. Nous nous déplaçons gratuitement partout dans l'Hérault pour évaluer votre situation. Le devis détaillé est fourni sous 12h maximum, sans aucun engagement de votre part.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="font-bold text-lg text-card-foreground mb-2">
                    Puis-je payer en plusieurs fois ?
                  </h3>
                  <p className="text-muted-foreground">
                    Oui, nous proposons des facilités de paiement adaptées à votre situation. Parlez-en avec nous lors de l'établissement du devis.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="font-bold text-lg text-card-foreground mb-2">
                    Y a-t-il des frais cachés ?
                  </h3>
                  <p className="text-muted-foreground">
                    Non, jamais. Notre devis est détaillé et transparent. Le prix final correspond exactement au devis accepté, sauf si vous demandez des prestations supplémentaires en cours d'intervention.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="font-bold text-lg text-card-foreground mb-2">
                    Le prix varie-t-il selon la ville dans l'Hérault ?
                  </h3>
                  <p className="text-muted-foreground">
                    Non, nos tarifs sont identiques sur tout le département. Aucun frais de déplacement sur Béziers et un rayon de 15 km. Au-delà, un forfait modéré peut s'appliquer selon la distance.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="font-bold text-lg text-card-foreground mb-2">
                    Combien coûte une intervention d'urgence ?
                  </h3>
                  <p className="text-muted-foreground">
                    Une intervention en urgence (sous 24h) ou le week-end entraîne un surcoût de 15-25% par rapport au tarif standard. Nous vous informons toujours du coût exact avant intervention.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Final */}
            <div className="bg-secondary rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Besoin d'un devis personnalisé ?
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Contactez-nous pour une évaluation gratuite et un devis détaillé sous 12h
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+33788432055">
                  <Button size="lg" className="bg-gradient-cta hover:bg-accent-hover text-accent-foreground font-bold">
                    <Phone className="mr-2 w-5 h-5" />
                    07 88 43 20 55
                  </Button>
                </a>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Demander un devis
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Interventions à <Link to="/nettoyage-diogene-beziers" className="text-primary hover:underline">Béziers</Link>, <Link to="/nettoyage-diogene-montpellier" className="text-primary hover:underline">Montpellier</Link>, <Link to="/nettoyage-diogene-sete" className="text-primary hover:underline">Sète</Link> et <Link to="/zone-intervention-herault" className="text-primary hover:underline">tout l'Hérault</Link>
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrixNettoyageDiogeneGuide;
