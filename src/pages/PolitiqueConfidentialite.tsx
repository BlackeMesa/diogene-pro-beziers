import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, UserCheck, Database, AlertCircle } from "lucide-react";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Politique de Confidentialité | Lien Propreté 34</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles - Lien Propreté 34" />
        <link rel="canonical" href="https://lienproprete34.fr/politique-confidentialite" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl font-bold text-primary">Politique de Confidentialité</h1>
            </div>

            <div className="bg-accent/10 p-6 rounded-xl border-l-4 border-accent mb-8">
              <p className="text-muted-foreground">
                <strong>Lien Propreté 34</strong> s'engage à protéger votre vie privée et vos données personnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos informations conformément
                au
                <strong> RGPD (Règlement Général sur la Protection des Données)</strong>.
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-primary m-0">1. Données collectées</h2>
                </div>

                <h3 className="text-xl font-semibold text-card-foreground mb-3">1.1 Données que vous nous fournissez</h3>
                <p className="text-muted-foreground mb-4">Lorsque vous utilisez nos services ou remplissez un formulaire sur notre site, nous pouvons collecter :</p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4 space-y-2">
                  <li>
                    <strong>Identité :</strong> Nom, prénom
                  </li>
                  <li>
                    <strong>Contact :</strong> Téléphone, email, adresse postale
                  </li>
                  <li>
                    <strong>Projet :</strong> Type de service, localisation, niveau d'urgence, description de la situation
                  </li>
                  <li>
                    <strong>Photos :</strong> Images du logement (optionnel, uniquement si vous les fournissez)
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-card-foreground mb-3">1.2 Données collectées automatiquement</h3>
                <p className="text-muted-foreground mb-4">Lors de votre navigation sur notre site, nous collectons automatiquement :</p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4 space-y-2">
                  <li>
                    <strong>Données de navigation :</strong> Pages visitées, durée, clics
                  </li>
                  <li>
                    <strong>Données techniques :</strong> Adresse IP (anonymisée), type de navigateur, appareil
                  </li>
                  <li>
                    <strong>Cookies :</strong> Google Analytics (anonymisé)
                  </li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <UserCheck className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-primary m-0">2. Utilisation des données</h2>
                </div>

                <p className="text-muted-foreground mb-4">Nous utilisons vos données personnelles uniquement pour :</p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-card p-4 rounded-xl shadow-soft">
                    <h4 className="font-semibold text-card-foreground mb-2">✅ Traitement de votre demande</h4>
                    <p className="text-sm text-muted-foreground">Établir un devis, planifier une intervention, vous contacter</p>
                  </div>
                  <div className="bg-card p-4 rounded-xl shadow-soft">
                    <h4 className="font-semibold text-card-foreground mb-2">✅ Amélioration du service</h4>
                    <p className="text-sm text-muted-foreground">Analyser l'utilisation du site, améliorer l'expérience utilisateur</p>
                  </div>
                  <div className="bg-card p-4 rounded-xl shadow-soft">
                    <h4 className="font-semibold text-card-foreground mb-2">✅ Communication</h4>
                    <p className="text-sm text-muted-foreground">Vous envoyer votre devis, confirmer un rendez-vous</p>
                  </div>
                  <div className="bg-card p-4 rounded-xl shadow-soft">
                    <h4 className="font-semibold text-card-foreground mb-2">✅ Obligations légales</h4>
                    <p className="text-sm text-muted-foreground">Facturation, comptabilité, conformité réglementaire</p>
                  </div>
                </div>

                <div className="bg-destructive/10 p-4 rounded-xl border-l-4 border-destructive">
                  <p className="text-sm text-muted-foreground flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Nous ne vendons JAMAIS vos données</strong> à des tiers. Nous ne les utilisons pas pour du démarchage commercial non sollicité.
                    </span>
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-primary m-0">3. Protection des données</h2>
                </div>

                <p className="text-muted-foreground mb-4">Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données :</p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4 space-y-2">
                  <li>
                    <strong>Chiffrement HTTPS :</strong> Toutes les communications sont sécurisées
                  </li>
                  <li>
                    <strong>Stockage sécurisé :</strong> Données hébergées sur des serveurs sécurisés (Supabase)
                  </li>
                  <li>
                    <strong>Accès restreint :</strong> Seules les personnes autorisées ont accès à vos données
                  </li>
                  <li>
                    <strong>Anonymisation :</strong> Google Analytics configuré en mode anonyme
                  </li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-primary m-0">4. Vos droits (RGPD)</h2>
                </div>

                <p className="text-muted-foreground mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
                <div className="space-y-3 mb-4">
                  <div className="bg-secondary p-4 rounded-xl">
                    <h4 className="font-semibold text-card-foreground mb-2">🔍 Droit d'accès</h4>
                    <p className="text-sm text-muted-foreground">Vous pouvez demander une copie de toutes les données que nous détenons sur vous</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-xl">
                    <h4 className="font-semibold text-card-foreground mb-2">✏️ Droit de rectification</h4>
                    <p className="text-sm text-muted-foreground">Vous pouvez demander la correction de données inexactes ou incomplètes</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-xl">
                    <h4 className="font-semibold text-card-foreground mb-2">🗑️ Droit à l'effacement</h4>
                    <p className="text-sm text-muted-foreground">Vous pouvez demander la suppression de vos données (sauf obligations légales)</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-xl">
                    <h4 className="font-semibold text-card-foreground mb-2">⛔ Droit d'opposition</h4>
                    <p className="text-sm text-muted-foreground">Vous pouvez vous opposer au traitement de vos données à des fins de prospection</p>
                  </div>
                  <div className="bg-secondary p-4 rounded-xl">
                    <h4 className="font-semibold text-card-foreground mb-2">📦 Droit à la portabilité</h4>
                    <p className="text-sm text-muted-foreground">Vous pouvez récupérer vos données dans un format structuré et lisible</p>
                  </div>
                </div>

                <div className="bg-accent/10 p-6 rounded-xl border-l-4 border-accent">
                  <h4 className="font-semibold text-card-foreground mb-3">Comment exercer vos droits ?</h4>
                  <p className="text-muted-foreground mb-3">Pour exercer l'un de ces droits, contactez-nous :</p>
                  <ul className="list-none text-muted-foreground space-y-2">
                    <li>
                      📧 <strong>Email :</strong>{" "}
                      <a href="mailto:contact@lelienproprete34.fr" className="text-primary hover:underline">
                        contact@lelienproprete34.fr
                      </a>
                    </li>
                    <li>
                      📞 <strong>Téléphone :</strong>{" "}
                      <a href="tel:+33788432055" className="text-primary hover:underline">
                        07 56 87 57 07
                      </a>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-3">
                    Nous vous répondrons sous <strong>30 jours maximum</strong>.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Durée de conservation</h2>
                <p className="text-muted-foreground mb-4">Nous conservons vos données personnelles uniquement le temps nécessaire :</p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4 space-y-2">
                  <li>
                    <strong>Devis non acceptés :</strong> 1 an
                  </li>
                  <li>
                    <strong>Clients :</strong> 10 ans (obligations comptables et fiscales)
                  </li>
                  <li>
                    <strong>Données de navigation :</strong> 25 mois (Google Analytics)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Cookies</h2>
                <p className="text-muted-foreground mb-4">Notre site utilise uniquement des cookies essentiels et analytiques :</p>
                <div className="bg-card p-4 rounded-xl shadow-soft mb-4">
                  <h4 className="font-semibold text-card-foreground mb-2">🍪 Google Analytics (anonymisé)</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Nous utilisons Google Analytics pour comprendre comment les visiteurs utilisent notre site. Les données sont anonymisées (IP masquée) et ne permettent pas de vous identifier.
                  </p>
                  <p className="text-sm text-muted-foreground">Vous pouvez désactiver ces cookies dans les paramètres de votre navigateur.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Partage des données</h2>
                <p className="text-muted-foreground mb-4">Nous ne partageons vos données qu'avec :</p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4 space-y-2">
                  <li>
                    <strong>Prestataires techniques :</strong> Base de données (Supabase)
                  </li>
                  <li>
                    <strong>Obligations légales :</strong> Autorités compétentes si requis par la loi
                  </li>
                </ul>
                <p className="text-muted-foreground">Tous nos prestataires sont conformes au RGPD et situés dans l'Union Européenne ou offrent des garanties équivalentes.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Modifications</h2>
                <p className="text-muted-foreground mb-4">Nous pouvons modifier cette politique de confidentialité à tout moment. La version la plus récente sera toujours disponible sur cette page.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">9. Contact & Réclamation</h2>
                <p className="text-muted-foreground mb-4">Pour toute question concernant cette politique ou vos données personnelles :</p>
                <div className="bg-secondary p-6 rounded-xl mb-4">
                  <p className="mb-2">
                    <strong>Lien Propreté 34</strong>
                  </p>
                  <p className="mb-2">
                    📧 Email :{" "}
                    <a href="mailto:contact@lelienproprete34.fr" className="text-primary hover:underline">
                      contact@lelienproprete34.fr
                    </a>
                  </p>
                  <p className="mb-2">
                    📞 Téléphone :{" "}
                    <a href="tel:+33788432055" className="text-primary hover:underline">
                      07 56 87 57 07
                    </a>
                  </p>
                </div>
                <p className="text-muted-foreground">
                  Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la
                  <strong> CNIL (Commission Nationale de l'Informatique et des Libertés)</strong> :
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    www.cnil.fr
                  </a>
                </p>
              </section>

              <section className="bg-success/10 p-6 rounded-xl border-l-4 border-success">
                <p className="text-sm text-muted-foreground">
                  <strong>Dernière mise à jour :</strong> 4 janvier 2026
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
