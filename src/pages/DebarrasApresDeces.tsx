import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Phone, Clock, Heart, CheckCircle, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { trackServicePageView, trackCTAClick } from "@/lib/analytics";
import { useEffect } from "react";

const DebarrasApresDeces = () => {
  useEffect(() => {
    trackServicePageView("Article Débarras Après Décès");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Débarras Après Décès : Guide Complet des Démarches (Hérault 34)</title>
        <meta name="description" content="Guide complet pour le débarras d'un logement après décès : démarches, délais, tri des biens, nettoyage. Intervention rapide et discrète. ☎️ 07 88 43 20 55" />
        <link rel="canonical" href="https://lienproprete34.fr/debarras-apres-deces-guide" />
        <meta property="og:title" content="Débarras Après Décès : Guide Complet des Démarches" />
        <meta property="og:description" content="Toutes les étapes pour organiser le débarras d'un logement après un décès : timing, tri, valorisation, nettoyage complet." />
        <meta property="og:url" content="https://lienproprete34.fr/debarras-apres-deces-guide" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Débarras Après Décès : Guide Complet des Démarches",
            description: "Guide pratique pour organiser le débarras d'un logement après un décès dans l'Hérault : démarches administratives, tri des biens, valorisation, nettoyage et remise en état.",
            author: {
              "@type": "Organization",
              name: "Lien Propreté 34",
            },
            publisher: {
              "@type": "Organization",
              name: "Lien Propreté 34",
              logo: {
                "@type": "ImageObject",
                url: "https://lienproprete34.fr/logo-lienproprete.png",
              },
            },
            datePublished: "2026-01-26",
            dateModified: "2026-01-26",
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
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Débarras Après Décès : Guide Complet des Démarches</h1>
              <p className="text-xl text-muted-foreground">Toutes les étapes pour organiser le débarras d'un logement après un décès avec sérénité et respect</p>
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                La perte d'un proche est une épreuve difficile. Devoir s'occuper du <strong>débarras du logement</strong> ajoute une charge émotionnelle et pratique importante. Ce guide vous accompagne pas à pas dans les{" "}
                <strong>démarches administratives et pratiques</strong>, avec empathie et professionnalisme, pour vous permettre de vous concentrer sur votre deuil.
              </p>
            </div>

            {/* Bandeau urgence */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Délai court ou urgence ?</h3>
                  <p className="text-blue-800 mb-3">Vente immobilière, état des lieux de sortie, contrainte familiale ? Nous intervenons sous 24-48h pour le débarras complet, le nettoyage et la remise en état.</p>
                  <Button
                    onClick={() => {
                      trackCTAClick("Urgence - Article Débarras Décès");
                      window.location.href = "tel:+33788432055";
                    }}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Intervention rapide : 07 88 43 20 55
                  </Button>
                </div>
              </div>
            </div>

            {/* Table des matières */}
            <div className="bg-secondary rounded-xl p-6 mb-12">
              <h2 className="text-2xl font-bold text-primary mb-4">📋 Sommaire</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  •{" "}
                  <a href="#demarches" className="hover:text-primary hover:underline">
                    Démarches administratives préalables
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#timing" className="hover:text-primary hover:underline">
                    Quand organiser le débarras ?
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#tri" className="hover:text-primary hover:underline">
                    Comment trier les biens ?
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#valorisation" className="hover:text-primary hover:underline">
                    Valorisation et succession
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#professionnels" className="hover:text-primary hover:underline">
                    Faire appel à des professionnels
                  </a>
                </li>
                <li>
                  •{" "}
                  <a href="#couts" className="hover:text-primary hover:underline">
                    Coûts et aides financières
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 1 : Démarches administratives */}
            <section id="demarches" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Démarches administratives préalables</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Avant d'organiser le débarras, plusieurs <strong>étapes administratives</strong> doivent être respectées :
              </p>

              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground mb-2">1. Acte de décès</h3>
                      <p className="text-muted-foreground">Obtenir l'acte de décès auprès de la mairie du lieu de décès (gratuit). Document indispensable pour toutes les démarches ultérieures.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground mb-2">2. Vérifier le testament</h3>
                      <p className="text-muted-foreground">
                        Consulter un notaire pour connaître les dernières volontés du défunt et les héritiers légaux. Le notaire interroge le Fichier Central des Dispositions de Dernières Volontés.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground mb-2">3. Établir l'acte de notoriété</h3>
                      <p className="text-muted-foreground">Document délivré par le notaire qui identifie officiellement les héritiers. Nécessaire pour accéder aux comptes bancaires et au logement si location.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground mb-2">4. Résilier les contrats</h3>
                      <p className="text-muted-foreground">Électricité, gaz, eau, internet, assurance habitation, téléphone. Conserver l'électricité jusqu'à la fin du débarras.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground mb-2">5. Gérer le bail (si location)</h3>
                      <p className="text-muted-foreground">Informer le propriétaire ou l'agence. Le bail se poursuit jusqu'au terme du préavis (1 à 3 mois selon la zone). Les héritiers doivent régler les loyers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 : Timing */}
            <section id="timing" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Quand organiser le débarras ?</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-green-900 mb-3">Le bon moment</h3>
                  <ul className="space-y-2 text-green-800">
                    <li>• Après avoir obtenu l'acte de notoriété</li>
                    <li>• Lorsque tous les héritiers sont d'accord</li>
                    <li>• Après avoir identifié les objets de valeur</li>
                    <li>• En prévoyant suffisamment de temps (1-2 semaines)</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">Situations d'urgence</h3>
                  <ul className="space-y-2 text-amber-800">
                    <li>• Vente immobilière signée</li>
                    <li>• Fin de bail imminente</li>
                    <li>• État des lieux de sortie prévu</li>
                    <li>• Logement insalubre à risque sanitaire</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <p className="text-blue-900">
                  <strong>💡 Conseil :</strong> Ne vous précipitez pas si ce n'est pas nécessaire. Le deuil nécessite du temps. Mais si une urgence se présente, des professionnels peuvent intervenir rapidement tout en
                  respectant votre situation.
                </p>
              </div>
            </section>

            {/* Section 3 : Comment trier */}
            <section id="tri" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Comment trier les biens ?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Le tri est l'étape la plus <strong>émotionnellement chargée</strong>. Voici une méthodologie pour avancer sereinement :
              </p>

              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">📦 Catégorie 1 : À conserver</h3>
                  <p className="text-muted-foreground mb-3">Objets de valeur sentimentale ou patrimoniale :</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Photos, albums, lettres, carnets</li>
                    <li>• Bijoux, montres, objets de famille</li>
                    <li>• Documents importants (actes, contrats, papiers d'identité)</li>
                    <li>• Objets ayant une valeur marchande (meubles anciens, œuvres d'art)</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">🎁 Catégorie 2 : À donner</h3>
                  <p className="text-muted-foreground mb-3">Objets en bon état qui peuvent servir :</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Vêtements, linge de maison</li>
                    <li>• Vaisselle, ustensiles de cuisine</li>
                    <li>• Petits meubles, électroménager fonctionnel</li>
                    <li>• Livres, jouets en bon état</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3 italic">Associations : Emmaüs, Secours Populaire, Croix-Rouge, Ressourceries locales</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">💰 Catégorie 3 : À vendre</h3>
                  <p className="text-muted-foreground mb-3">Objets de valeur marchande :</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Meubles anciens, antiquités</li>
                    <li>• Collections (timbres, monnaies, livres rares)</li>
                    <li>• Électroménager récent, high-tech</li>
                    <li>• Véhicules, motos, outils de valeur</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3 italic">Options : brocanteur, commissaire-priseur, vente en ligne, vide-maison</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">🗑️ Catégorie 4 : À évacuer</h3>
                  <p className="text-muted-foreground mb-3">Objets sans valeur ou usage :</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Vieux meubles abîmés</li>
                    <li>• Appareils électroménagers hors d'usage</li>
                    <li>• Produits périmés, médicaments</li>
                    <li>• Encombrants, déchets</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3 italic">Évacuation conforme : déchetterie, collecte encombrants, prestataire spécialisé</p>
                </div>
              </div>
            </section>

            {/* Section 4 : Valorisation */}
            <section id="valorisation" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Valorisation et succession</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La valorisation des biens peut <strong>réduire considérablement les coûts</strong> de débarras et même générer des revenus pour la succession.
              </p>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 mb-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Notre service de valorisation</h3>
                <p className="text-muted-foreground mb-4">
                  Nous identifions les objets de valeur et vous orientons vers les meilleurs canaux de vente. La valorisation peut réduire votre facture de <strong>30% à 50%</strong>.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                    <p className="text-sm font-semibold mb-1">Estimation gratuite</p>
                    <p className="text-xs text-muted-foreground">Identification des objets de valeur</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                    <p className="text-sm font-semibold mb-1">Mise en relation</p>
                    <p className="text-xs text-muted-foreground">Brocanteurs, commissaires-priseurs</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <AlertCircle className="w-6 h-6 text-amber-600 mb-3" />
                <p className="text-amber-900">
                  <strong>⚠️ Attention :</strong> Ne jetez rien avant d'avoir vérifié ! Des objets apparemment sans valeur peuvent surprendre : bijoux cachés, collections oubliées, pièces rares. Nous vous accompagnons
                  dans ce tri avec expertise.
                </p>
              </div>
            </section>

            {/* Section 5 : Faire appel à des professionnels */}
            <section id="professionnels" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Faire appel à des professionnels</h2>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Pourquoi nous confier le débarras ?</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-5">
                    <Heart className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-bold text-card-foreground mb-2">Respect et empathie</h4>
                    <p className="text-sm text-muted-foreground">Nous comprenons la charge émotionnelle. Tri respectueux, conservation des souvenirs, accompagnement bienveillant.</p>
                  </div>

                  <div className="bg-white rounded-lg p-5">
                    <Clock className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-bold text-card-foreground mb-2">Gain de temps</h4>
                    <p className="text-sm text-muted-foreground">Intervention complète en 1 à 3 jours selon la surface. Vous vous concentrez sur l'essentiel : le deuil et la famille.</p>
                  </div>

                  <div className="bg-white rounded-lg p-5">
                    <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-card-foreground mb-2">Prestation complète</h4>
                    <p className="text-sm text-muted-foreground">Débarras, tri, valorisation, nettoyage, désinfection, évacuation conforme. Remise en état clé en main.</p>
                  </div>

                  <div className="bg-white rounded-lg p-5">
                    <FileText className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-bold text-card-foreground mb-2">Tarification transparente</h4>
                    <p className="text-sm text-muted-foreground">Devis détaillé, pas de frais cachés. Facture acceptée par les notaires pour prise en charge succession.</p>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <Link to="/contact">
                    <Button size="lg" onClick={() => trackCTAClick("Contact - Article Débarras Décès")} className="text-lg">
                      <Phone className="w-5 h-5 mr-2" />
                      Demander un devis gratuit
                    </Button>
                  </Link>
                  <p className="text-sm text-muted-foreground mt-3">Devis sous 12h • Intervention 24-48h • Discrétion assurée</p>
                </div>
              </div>
            </section>

            {/* Section 6 : Coûts */}
            <section id="couts" className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Coûts et aides financières</h2>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-card-foreground mb-4">Grille tarifaire indicative</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-card rounded-xl overflow-hidden shadow-medium">
                    <thead className="bg-primary/10">
                      <tr>
                        <th className="p-4 text-left font-bold">Surface</th>
                        <th className="p-4 text-left font-bold">Fourchette de prix</th>
                        <th className="p-4 text-left font-bold">Inclus</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-4">Studio/T1 (&lt; 30 m²)</td>
                        <td className="p-4 font-semibold text-primary">800 - 1 500 €</td>
                        <td className="p-4 text-sm">Débarras, nettoyage, évacuation</td>
                      </tr>
                      <tr>
                        <td className="p-4">T2/T3 (30-60 m²)</td>
                        <td className="p-4 font-semibold text-primary">1 500 - 3 500 €</td>
                        <td className="p-4 text-sm">+ Désinfection complète</td>
                      </tr>
                      <tr>
                        <td className="p-4">T4+/Maison (60-100 m²)</td>
                        <td className="p-4 font-semibold text-primary">3 500 - 8 000 €</td>
                        <td className="p-4 text-sm">+ Remise en état</td>
                      </tr>
                      <tr>
                        <td className="p-4">Grande Maison (&gt; 100 m²)</td>
                        <td className="p-4 font-semibold text-primary">Sur devis</td>
                        <td className="p-4 text-sm">Évaluation gratuite sur place</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Prise en charge par la succession</h3>
                  <p className="text-muted-foreground">
                    Les frais de débarras et nettoyage peuvent être <strong>déduits de l'actif successoral</strong>. Notre facture détaillée est acceptée par les notaires. Les héritiers se partagent ensuite le coût
                    proportionnellement à leurs parts.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">Aides financières disponibles</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • <strong>Assurance Habitation</strong> : Vérifiez la garantie "frais de relogement" ou "frais de remise en état"
                    </li>
                    <li>
                      • <strong>Assurance Obsèques</strong> : Certains contrats couvrent les frais de débarras du logement
                    </li>
                    <li>
                      • <strong>Aide Sociale du CCAS</strong> : Pour les successions modestes
                    </li>
                    <li>
                      • <strong>Caisse de retraite du défunt</strong> : Aide ponctuelle possible selon les cas
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Link to="/prix-nettoyage-diogene-guide-2026">
                  <Button variant="outline" onClick={() => trackCTAClick("Lien Prix - Article Débarras")}>
                    Consulter le guide complet des prix
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </section>

            {/* CTA Final */}
            <div className="bg-gradient-hero text-primary-foreground rounded-xl p-8 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Un accompagnement humain dans un moment difficile</h2>
              <p className="text-lg mb-6 opacity-95">Plus de 15 ans d'expérience dans l'accompagnement des familles. Discrétion, empathie et professionnalisme garantis.</p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => {
                  trackCTAClick("CTA Final - Article Débarras Décès");
                  window.location.href = "tel:+33788432055";
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Parler à un conseiller : 07 88 43 20 55
              </Button>
              <p className="text-sm mt-4 opacity-90">Devis gratuit et sans engagement • Intervention rapide</p>
            </div>

            {/* Liens vers autres services */}
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">Articles complémentaires</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Link to="/syndrome-diogene-comprendre-accompagner" className="bg-card rounded-xl p-6 hover:shadow-strong transition-shadow">
                  <h4 className="font-bold text-card-foreground mb-2">Comprendre le Syndrome de Diogène</h4>
                  <p className="text-sm text-muted-foreground">Accompagner un proche avec empathie</p>
                </Link>
                <Link to="/prix-nettoyage-diogene-guide-2026" className="bg-card rounded-xl p-6 hover:shadow-strong transition-shadow">
                  <h4 className="font-bold text-card-foreground mb-2">Guide des Prix 2026</h4>
                  <p className="text-sm text-muted-foreground">Grille tarifaire complète</p>
                </Link>
                <Link to="/aides-financieres-nettoyage-diogene" className="bg-card rounded-xl p-6 hover:shadow-strong transition-shadow">
                  <h4 className="font-bold text-card-foreground mb-2">Aides Financières</h4>
                  <p className="text-sm text-muted-foreground">APA, PCH, CCAS, Action Logement</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DebarrasApresDeces;
