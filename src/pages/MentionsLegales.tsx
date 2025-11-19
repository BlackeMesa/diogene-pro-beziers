import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Mentions Légales | Le Lien Propreté 34</title>
        <meta name="description" content="Mentions légales du site Le Lien Propreté 34 - Nettoyage Diogène et débarras insalubre dans l'Hérault" />
        <link rel="canonical" href="https://lelienproprete34.com/mentions-legales" />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-primary mb-8">Mentions Légales</h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Informations légales</h2>
                <p className="text-muted-foreground mb-4">
                  Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, 
                  il est précisé aux utilisateurs du site <strong>lelienproprete34.com</strong> l'identité des différents intervenants 
                  dans le cadre de sa réalisation et de son suivi.
                </p>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Éditeur du site</h3>
                <div className="bg-secondary p-6 rounded-xl mb-4">
                  <p className="mb-2"><strong>Raison sociale :</strong> Le Lien Propreté 34</p>
                  <p className="mb-2"><strong>Forme juridique :</strong> Auto-entrepreneur / Micro-entreprise</p>
                  <p className="mb-2"><strong>Adresse :</strong> Béziers, Hérault (34), France</p>
                  <p className="mb-2"><strong>Téléphone :</strong> <a href="tel:+33788432055" className="text-primary hover:underline">07 88 43 20 55</a></p>
                  <p className="mb-2"><strong>Email :</strong> <a href="mailto:contact@lelienproprete34.com" className="text-primary hover:underline">contact@lelienproprete34.com</a></p>
                  {/* <p className="mb-2"><strong>Numéro SIRET :</strong> [À compléter]</p> */}
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Directeur de la publication</h3>
                <p className="text-muted-foreground mb-4">
                  Le directeur de la publication du site est le gérant de l'entreprise Le Lien Propreté 34.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Hébergement</h2>
                <div className="bg-secondary p-6 rounded-xl mb-4">
                  <p className="mb-2"><strong>Hébergeur :</strong> IONOS</p>
                  <p className="mb-2"><strong>Site web :</strong> <a href="https://ionos.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">ionos.com</a></p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Propriété intellectuelle</h2>
                <p className="text-muted-foreground mb-4">
                  L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                  Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-muted-foreground mb-4">
                  La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite 
                  sauf autorisation expresse du directeur de la publication.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Données personnelles</h2>
                <p className="text-muted-foreground mb-4">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, 
                  vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="text-muted-foreground mb-4">
                  Pour exercer ces droits, vous pouvez nous contacter :
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-4 ml-4">
                  <li>Par email : <a href="mailto:contact@lelienproprete34.com" className="text-primary hover:underline">contact@lelienproprete34.com</a></li>
                  <li>Par téléphone : <a href="tel:+33788432055" className="text-primary hover:underline">07 88 43 20 55</a></li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-primary hover:underline font-semibold">Politique de Confidentialité</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Ce site utilise Google Analytics pour analyser l'audience du site et améliorer son contenu. 
                  Ces cookies sont anonymisés et ne permettent pas de vous identifier personnellement.
                </p>
                <p className="text-muted-foreground mb-4">
                  Vous pouvez désactiver ces cookies dans les paramètres de votre navigateur.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Responsabilité</h2>
                <p className="text-muted-foreground mb-4">
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, 
                  mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                </p>
                <p className="text-muted-foreground mb-4">
                  Si vous constatez une lacune, erreur ou ce qui paraît être un dysfonctionnement, merci de bien vouloir le signaler 
                  par email à <a href="mailto:contact@lelienproprete34.com" className="text-primary hover:underline">contact@lelienproprete34.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Liens hypertextes</h2>
                <p className="text-muted-foreground mb-4">
                  Le site peut contenir des liens hypertextes vers d'autres sites. Le Lien Propreté 34 n'exerce aucun contrôle 
                  sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">8. Droit applicable</h2>
                <p className="text-muted-foreground mb-4">
                  Le présent site et les présentes mentions légales sont régis par le droit français. 
                  En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </section>

              <section className="bg-accent/10 p-6 rounded-xl border-l-4 border-accent">
                <p className="text-sm text-muted-foreground">
                  <strong>Dernière mise à jour :</strong> 19 novembre 2025
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

export default MentionsLegales;
