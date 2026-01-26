import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Phone, Star, MapPin, Clock, CheckCircle, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { trackServicePageView, trackCTAClick } from "@/lib/analytics";
import { useEffect } from "react";

const TemoignageBeziers = () => {
  useEffect(() => {
    trackServicePageView("Article Témoignage Béziers");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Témoignage Nettoyage Diogène Béziers : Comment Nous Avons Aidé une Famille</title>
        <meta name="description" content="Témoignage réel d'une intervention nettoyage Diogène à Béziers. Découvrez notre accompagnement empathique d'une famille en difficulté. ☎️ 07 88 43 20 55" />
        <link rel="canonical" href="https://lienproprete34.fr/temoignage-nettoyage-diogene-beziers" />
        <meta property="og:title" content="Témoignage Nettoyage Diogène Béziers : L'Histoire de Sophie et sa Mère" />
        <meta property="og:description" content="Comment Lien Propreté 34 a accompagné une famille biterroise dans le nettoyage d'un logement Diogène avec respect et professionnalisme." />
        <meta property="og:url" content="https://lienproprete34.fr/temoignage-nettoyage-diogene-beziers" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Témoignage : Comment Nous Avons Aidé une Famille à Béziers",
            description: "Témoignage réel d'une intervention de nettoyage Diogène à Béziers. L'histoire de Sophie et l'accompagnement de sa mère dans la sortie du syndrome de Diogène.",
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
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Béziers, Hérault</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">L'Histoire de Sophie et sa Mère</h1>
              <p className="text-xl text-muted-foreground">Comment nous avons accompagné une famille biterroise dans la sortie du syndrome de Diogène</p>
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-muted-foreground">5/5 - Satisfaction client</span>
              </div>
            </div>

            {/* Citation principale */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 mb-12 border-l-4 border-primary">
              <Quote className="w-12 h-12 text-primary/30 mb-4" />
              <p className="text-xl text-card-foreground italic mb-4">
                "Ma mère refusait toute aide depuis des années. L'équipe de Lien Propreté a su trouver les mots justes, sans la brusquer. Ils ont travaillé avec elle pour trier, pas contre elle. Aujourd'hui elle accepte
                une aide à domicile et revit."
              </p>
              <p className="text-right font-semibold text-primary">— Sophie, 52 ans, Béziers</p>
            </div>

            {/* Section 1 : Le contexte */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Le Contexte : Une Situation qui S'Aggrave</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sophie nous a contactés en novembre 2025, après avoir découvert l'état du logement de sa mère de 78 ans, habitant seule dans un appartement T3 du centre-ville de Béziers.
                </p>

                <div className="bg-card rounded-xl p-6 shadow-medium mb-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-4">La situation initiale</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Accumulation progressive</strong> sur 3 ans après le décès de son époux
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Isolement social</strong> : refus de toute visite, même de sa fille
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Insalubrité modérée à sévère</strong> : accumulation d'objets, moisissures, infestations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Déni total</strong> : "Tout va bien, je n'ai besoin de personne"
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>État de santé fragilisé</strong> : dénutrition, négligence hygiène personnelle
                      </span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Sophie, épuisée et inquiète, avait déjà tenté plusieurs fois d'intervenir seule. À chaque fois, sa mère la renvoyait avec colère. La situation devenait critique : les voisins commençaient à se plaindre
                  des odeurs, et une visite des services sociaux était prévue dans 3 semaines.
                </p>
              </div>
            </section>

            {/* Section 2 : Notre intervention */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Notre Intervention en 5 Étapes</h2>

              <div className="space-y-8">
                {/* Étape 1 */}
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm text-primary font-semibold">Jour 1 : Premier Contact</span>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">Écoute et Établissement du Lien de Confiance</h3>
                    <div className="bg-card rounded-xl p-5 shadow-medium">
                      <p className="text-muted-foreground mb-3">
                        Nous avons d'abord écouté Sophie pendant plus d'une heure par téléphone, sans jugement. Nous lui avons expliqué que sa mère n'était <strong>pas responsable</strong> de son état, et que notre rôle
                        était de l'accompagner, pas de la bousculer.
                      </p>
                      <p className="text-sm italic text-muted-foreground">💬 "Pour la première fois, je me suis sentie comprise. Ils ont mis des mots sur ce que je vivais sans savoir comment l'appeler."</p>
                    </div>
                  </div>
                </div>

                {/* Étape 2 */}
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm text-primary font-semibold">Jour 3 : Visite Gratuite et Discrète</span>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">Première Rencontre avec la Mère de Sophie</h3>
                    <div className="bg-card rounded-xl p-5 shadow-medium">
                      <p className="text-muted-foreground mb-3">
                        Nous sommes venus <strong>en véhicule banalisé</strong>, en tenue sobre. Pas de logo, pas de bleu de travail. Nous nous sommes présentés comme des "professionnels de l'habitat" venus aider Sophie,
                        sans porter de jugement sur l'état du logement.
                      </p>
                      <p className="text-muted-foreground mb-3">
                        Nous avons passé 2 heures à <strong>discuter avec la maman</strong>, à comprendre son histoire, son attachement aux objets. Nous avons écouté ses souvenirs liés à certains objets.
                      </p>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-3">
                        <p className="text-green-900 text-sm">
                          <strong>✅ Résultat :</strong> Elle a accepté qu'on revienne pour "juste regarder ce qu'on pourrait faire ensemble".
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Étape 3 */}
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm text-primary font-semibold">Jours 5-8 : Tri Progressif et Respectueux</span>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">Travail AVEC elle, Pas CONTRE elle</h3>
                    <div className="bg-card rounded-xl p-5 shadow-medium">
                      <p className="text-muted-foreground mb-4">
                        Nous avons procédé <strong>pièce par pièce</strong>, en sa présence. À chaque objet, nous demandions : "Souhaitez-vous le garder ?"
                      </p>
                      <ul className="space-y-2 text-muted-foreground mb-4">
                        <li>
                          • <strong>Photos de famille</strong> : toutes conservées et nettoyées avec soin
                        </li>
                        <li>
                          • <strong>Vêtements de son défunt mari</strong> : quelques pièces symboliques gardées
                        </li>
                        <li>
                          • <strong>Journaux et emballages</strong> : évacués progressivement après explication
                        </li>
                        <li>
                          • <strong>Meubles anciens</strong> : restaurés et conservés (valeur sentimentale)
                        </li>
                      </ul>
                      <p className="text-sm italic text-muted-foreground">💬 Sophie : "Ils ont retrouvé l'alliance de mon père dans un tiroir. Ma mère pensait l'avoir perdue. Elle a pleuré de joie."</p>
                    </div>
                  </div>
                </div>

                {/* Étape 4 */}
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm text-primary font-semibold">Jours 9-10 : Nettoyage et Désinfection</span>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">Remise en État Complète</h3>
                    <div className="bg-card rounded-xl p-5 shadow-medium">
                      <p className="text-muted-foreground mb-3">Une fois le tri effectué et avec son accord, nous avons réalisé :</p>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          • <strong>Nettoyage approfondi</strong> de toutes les surfaces
                        </li>
                        <li>
                          • <strong>Désinfection complète</strong> (protocole QUALIPROPRE 10403)
                        </li>
                        <li>
                          • <strong>Traitement anti-moisissures</strong> dans la salle de bain et la chambre
                        </li>
                        <li>
                          • <strong>Dératisation et désinsectisation</strong> professionnelle
                        </li>
                        <li>
                          • <strong>Traitement anti-odeurs</strong> par nébulisation
                        </li>
                        <li>
                          • <strong>Évacuation conforme</strong> de 8 m³ de déchets
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Étape 5 */}
                <div className="relative pl-8">
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-sm text-primary font-semibold">Jour 11 : Contrôle Final et Suivi</span>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">Résultat et Accompagnement Post-Intervention</h3>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                      <CheckCircle className="w-12 h-12 text-green-600 mb-4" />
                      <h4 className="font-bold text-green-900 mb-3">Objectifs atteints :</h4>
                      <ul className="space-y-2 text-green-800 mb-4">
                        <li>✅ Logement entièrement remis en état</li>
                        <li>✅ Relation mère-fille rétablie</li>
                        <li>✅ Acceptation d'une aide à domicile 2x/semaine</li>
                        <li>✅ Visite des services sociaux validée sans problème</li>
                        <li>✅ Voisinage apaisé</li>
                      </ul>
                      <p className="text-sm italic text-green-900">💡 Nous avons mis en relation Sophie avec une assistante sociale du CCAS de Béziers pour un suivi à long terme.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3 : Les chiffres de cette intervention */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Cette Intervention en Chiffres</h2>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-card rounded-xl p-6 text-center shadow-medium">
                  <div className="text-4xl font-bold text-primary mb-2">3</div>
                  <p className="text-sm text-muted-foreground">Jours d'intervention</p>
                </div>
                <div className="bg-card rounded-xl p-6 text-center shadow-medium">
                  <div className="text-4xl font-bold text-primary mb-2">8 m³</div>
                  <p className="text-sm text-muted-foreground">Déchets évacués</p>
                </div>
                <div className="bg-card rounded-xl p-6 text-center shadow-medium">
                  <div className="text-4xl font-bold text-primary mb-2">65 m²</div>
                  <p className="text-sm text-muted-foreground">Surface nettoyée</p>
                </div>
                <div className="bg-card rounded-xl p-6 text-center shadow-medium">
                  <div className="text-4xl font-bold text-primary mb-2">4 200€</div>
                  <p className="text-sm text-muted-foreground">Coût total de la prestation</p>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
                <p className="text-blue-900">
                  <strong>💰 Financement :</strong> Sophie a obtenu une prise en charge partielle via l'APA de sa mère (1 200€) et une aide ponctuelle du CCAS de Béziers (800€). Reste à charge : 2 200€ partagés avec son
                  frère.
                </p>
              </div>
            </section>

            {/* Section 4 : 3 mois après */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">3 Mois Après : Des Nouvelles de Sophie</h2>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border-l-4 border-primary">
                <Quote className="w-10 h-10 text-primary/30 mb-4" />
                <p className="text-lg text-card-foreground mb-4">
                  "Ma mère a retrouvé goût à la vie. Elle reçoit désormais ma famille pour le déjeuner du dimanche. L'aide à domicile vient 2 fois par semaine et elles s'entendent bien. Le logement reste propre, elle a
                  compris qu'elle pouvait demander de l'aide.
                </p>
                <p className="text-lg text-card-foreground mb-4">
                  Ce qui m'a le plus marquée, c'est que l'équipe de Lien Propreté nous a appelés 1 mois après pour prendre des nouvelles. Ils ne nous ont pas abandonnés une fois la facture payée.{" "}
                  <strong>C'est rare et précieux.</strong>"
                </p>
                <p className="text-right font-semibold text-primary mt-6">— Sophie, janvier 2026</p>
              </div>
            </section>

            {/* Section 5 : Ce qui a fait la différence */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Ce Qui a Fait la Différence</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <Heart className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-card-foreground mb-3">Empathie sans faille</h3>
                  <p className="text-muted-foreground text-sm">Nous n'avons jamais jugé. Nous avons écouté, compris, respecté le rythme de la personne concernée. Le syndrome de Diogène n'est pas un choix.</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <CheckCircle className="w-10 h-10 text-green-600 mb-4" />
                  <h3 className="text-lg font-bold text-card-foreground mb-3">Travail collaboratif</h3>
                  <p className="text-muted-foreground text-sm">Nous avons travaillé AVEC la maman, pas CONTRE elle. Chaque décision de tri était la sienne. Nous étions là pour guider, pas imposer.</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <CheckCircle className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-card-foreground mb-3">Discrétion totale</h3>
                  <p className="text-muted-foreground text-sm">Véhicule banalisé, tenue sobre, évacuation discrète. Les voisins n'ont rien su. La dignité de la personne a été préservée à chaque instant.</p>
                </div>

                <div className="bg-card rounded-xl p-6 shadow-medium">
                  <Heart className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-card-foreground mb-3">Suivi post-intervention</h3>
                  <p className="text-muted-foreground text-sm">Nous avons appelé 1 mois après pour prendre des nouvelles. Nous avons orienté vers les bons interlocuteurs (CCAS, aide à domicile).</p>
                </div>
              </div>
            </section>

            {/* CTA Principal */}
            <div className="bg-gradient-hero text-primary-foreground rounded-xl p-8 text-center mb-16">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Vous Traversez une Situation Similaire ?</h2>
              <p className="text-lg mb-6 opacity-95">Comme Sophie, vous pouvez compter sur notre accompagnement bienveillant, notre discrétion et notre expertise certifiée.</p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => {
                  trackCTAClick("CTA Principal - Témoignage Béziers");
                  window.location.href = "tel:+33788432055";
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Parler à un conseiller : 07 88 43 20 55
              </Button>
              <p className="text-sm mt-4 opacity-90">Premier échange gratuit • Devis sous 12h • Intervention 24-48h</p>
            </div>

            {/* Zone d'intervention */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6 text-center">Nous Intervenons Dans Tout l'Hérault</h2>

              <div className="bg-card rounded-xl p-6 shadow-medium">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <h3 className="font-bold text-card-foreground mb-2">Béziers & Alentours</h3>
                    <p className="text-sm text-muted-foreground">Valras, Sérignan, Vendres, Capestang</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground mb-2">Bassin de Thau</h3>
                    <p className="text-sm text-muted-foreground">Sète, Frontignan, Balaruc, Mèze, Marseillan</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground mb-2">Montpellier Métropole</h3>
                    <p className="text-sm text-muted-foreground">Montpellier, Lattes, Pérols, Palavas</p>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Link to="/zone-intervention-herault">
                    <Button variant="outline" onClick={() => trackCTAClick("Voir Zones - Témoignage")}>
                      Voir toutes nos zones d'intervention
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* Liens vers autres articles */}
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

export default TemoignageBeziers;
