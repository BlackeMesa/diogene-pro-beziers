# 📊 Guide de Configuration Google Analytics 4

## ✅ État Actuel du Tracking

Votre site dispose déjà d'un tracking complet :

### Événements Trackés Automatiquement
- ✅ **Pages vues** (`page_view`) - Toutes les pages
- ✅ **Temps sur page** (`time_on_page`) - Au-delà de 5 secondes
- ✅ **Profondeur de scroll** (`scroll_depth`) - 25%, 50%, 75%, 100%
- ✅ **Clics téléphone** (`phone_click_*`) - Header, mobile, CTA flottant, urgence, contact
- ✅ **Navigation** (`navigation_click`) - Tous les liens du menu
- ✅ **CTAs** (`cta_*_click`) - Boutons devis, urgence, etc.
- ✅ **Formulaire contact** (`contact_form_*`) - Started, field_completed, submitted, success
- ✅ **Simulateur** (`simulator_*`) - Toutes les étapes + résultats + soumission
- ✅ **Vidéos** (`video_play`, `video_complete`) - Vidéo hero
- ✅ **Erreurs** (`*_error`) - Erreurs de formulaires

---

## 🎯 Configuration Google Analytics 4

### 1. Vérifier que les Événements Arrivent

**Étape 1 : Accéder aux rapports en temps réel**
1. Allez sur [Google Analytics](https://analytics.google.com/)
2. Sélectionnez votre propriété (G-65GLC7TYXT)
3. Menu gauche : **Rapports** > **Temps réel**
4. Naviguez sur votre site pendant ce temps
5. Vous devriez voir les événements apparaître en temps réel

**Étape 2 : Vérifier tous les événements**
1. Menu gauche : **Rapports** > **Engagement** > **Événements**
2. Vous devriez voir tous ces événements :
   - `page_view`
   - `phone_click_header`
   - `phone_click_mobile_menu`
   - `phone_click_floating_cta_mobile`
   - `phone_click_urgency_banner`
   - `phone_click_contact_page`
   - `navigation_click`
   - `cta_devis_12h_click`
   - `cta_scroll_to_simulator_click`
   - `simulator_step_completed`
   - `simulator_result_displayed`
   - `simulator_form_submitted`
   - `contact_form_started`
   - `contact_form_submitted`
   - `scroll_depth`
   - `time_on_page`
   - `video_play`
   - `video_complete`

---

## 💰 Configurer les Événements Clés (CRUCIAL)

Les événements existent mais ne sont **pas encore marqués comme événements clés**. C'est pourquoi vous ne voyez pas de résultats dans les rapports de conversion.

> **Note importante :** Google a renommé "conversions" en "événements clés" (key events). C'est la même chose ! L'option **"Marquer comme clé"** est exactement ce qu'il faut activer.

### Événements Clés Principaux à Configurer

**Étape 1 : Accéder aux événements**
1. Menu gauche : **Administrateur** (roue dentée en bas)
2. Colonne **Propriété** : **Événements**
3. Activez le bouton **"Marquer comme clé"** pour ces événements :

#### Événements Critiques (à activer immédiatement)
- ✅ `simulator_form_submitted` - Lead qualifié du simulateur
- ✅ `contact_form_submitted` - Lead du formulaire contact
- ✅ `phone_click_header` - Appel téléphonique header
- ✅ `phone_click_floating_cta_mobile` - Appel CTA mobile
- ✅ `phone_click_urgency_banner` - Appel bannière urgence

#### Événements Secondaires (micro-conversions)
- ✅ `simulator_result_displayed` - Utilisateur engagé
- ✅ `scroll_depth` (si vous voulez tracker l'engagement)
- ✅ `video_complete` - Engagement vidéo

**Étape 2 : Assigner une valeur aux événements clés**
1. Cliquez sur un événement dans la liste
2. Activez **"Marquer comme clé"**
3. Ajoutez une **valeur par défaut** (optionnel mais recommandé) :
   - `simulator_form_submitted` : **500€** (lead chaud)
   - `contact_form_submitted` : **300€** (lead qualifié)
   - `phone_click_*` : **200€** (lead très chaud - appel direct)
   - `simulator_result_displayed` : **50€** (utilisateur engagé)

---

## 👥 Créer des Audiences (pour le retargeting)

**Étape 1 : Accéder aux audiences**
1. Menu gauche : **Administrateur**
2. Colonne **Propriété** : **Audiences**
3. Cliquez sur **Nouvelle audience**

### Audiences Recommandées

#### Audience 1 : Visiteurs Engagés (pas encore convertis)
```
Nom : Visiteurs Engagés Non Convertis
Conditions :
  ✅ simulator_result_displayed (au moins 1 fois)
  ❌ simulator_form_submitted (0 fois)
  ❌ contact_form_submitted (0 fois)
Durée : 30 jours
```
**Usage :** Retargeting Facebook/Google Ads avec promotion spéciale

#### Audience 2 : Leads Chauds (ont rempli un formulaire)
```
Nom : Leads Formulaire
Conditions :
  ✅ simulator_form_submitted OU contact_form_submitted (au moins 1 fois)
Durée : 90 jours
```
**Usage :** Relance par email, séquence de nurturing

#### Audience 3 : Appelants (ont cliqué sur le téléphone)
```
Nom : Appelants Directs
Conditions :
  ✅ phone_click_header OU phone_click_* (au moins 1 fois)
Durée : 180 jours
```
**Usage :** Audience très chaude, à relancer si pas de contact effectif

#### Audience 4 : Visiteurs Béziers (local ciblé)
```
Nom : Visiteurs Zone Béziers
Conditions :
  ✅ page_view (page_path contient "beziers")
Durée : 60 jours
```
**Usage :** Campagne locale Béziers

---

## 📈 Rapports Personnalisés à Créer

### Rapport 1 : Tunnel de Conversion Simulateur

**Étape 1 : Créer une exploration**
1. Menu gauche : **Explorer**
2. Cliquez sur **Exploration en entonnoir**
3. Configurez l'entonnoir :
   - Étape 1 : `page_view` (page_path = "/")
   - Étape 2 : `cta_scroll_to_simulator_click`
   - Étape 3 : `simulator_step_completed`
   - Étape 4 : `simulator_result_displayed`
   - Étape 5 : `simulator_form_submitted`

**Résultat :** Vous verrez où les utilisateurs abandonnent dans le simulateur

### Rapport 2 : Sources des Événements Clés

**Étape 1 : Créer un rapport personnalisé**
1. Menu gauche : **Rapports** > **Bibliothèque**
2. Créez un rapport avec :
   - **Dimensions :** Source/Support, Campagne, Page de destination
   - **Métriques :** Événements clés, Valeur des événements clés, Taux de conversion

---

## 🔥 Optimisations Avancées

### 1. Google Search Console (GSC)

**Lier GSC à GA4 :**
1. Menu gauche : **Administrateur**
2. Colonne **Propriété** : **Liens Search Console**
3. Cliquez sur **Associer** et suivez les instructions

**Bénéfices :**
- Voir les requêtes de recherche dans GA4
- Analyser les performances SEO par page
- Corréler le trafic organique avec les conversions

### 2. Suivi des Liens Sortants (optionnel)

Si vous voulez tracker les clics sur les liens externes (Facebook, etc.) :
```javascript
// Déjà préparé dans votre analytics.ts
trackEvent('outbound_click', {
  destination_url: 'https://facebook.com/...',
  link_text: 'Suivez-nous sur Facebook'
});
```

### 3. Alertes Intelligentes

**Créer des alertes :**
1. Menu gauche : **Administrateur**
2. Colonne **Propriété** : **Alertes personnalisées**
3. Exemples d'alertes utiles :
   - 🚨 **Baisse soudaine de trafic** : page_view baisse de 50% vs semaine précédente
   - 📞 **Pic d'appels téléphoniques** : phone_click_* augmente de 100%
   - 📋 **Formulaires qui ne fonctionnent plus** : contact_form_started augmente MAIS contact_form_submitted baisse

---

## 📱 Configuration Google Tag Manager (optionnel)

Pour une gestion plus avancée, vous pouvez migrer vers GTM :

**Avantages :**
- Gestion centralisée des tags sans toucher au code
- Déploiement de tracking sans redéploiement du site
- Tests A/B plus faciles

**Inconvénient :**
- Complexité supplémentaire
- Pas nécessaire pour votre cas actuel

---

## 🎯 Checklist de Configuration (À faire maintenant)

### Immédiat (aujourd'hui)
- [ ] Vérifier que les événements arrivent en temps réel (Rapports > Temps réel)
- [ ] Marquer `simulator_form_submitted` comme **événement clé**
- [ ] Marquer `contact_form_submitted` comme **événement clé**
- [ ] Marquer `phone_click_header` comme **événement clé**
- [ ] Assigner des valeurs monétaires aux événements clés

### Cette semaine
- [ ] Créer les 4 audiences recommandées
- [ ] Créer le rapport tunnel de conversion simulateur
- [ ] Lier Google Search Console à GA4
- [ ] Configurer 2-3 alertes intelligentes

### Ce mois-ci
- [ ] Analyser les données pendant 2-3 semaines
- [ ] Identifier les pages avec le meilleur taux de conversion
- [ ] Optimiser les pages avec abandon élevé
- [ ] Tester des variations de CTA basées sur les données

---

## 📊 Métriques Clés à Surveiller

### Chaque Semaine
1. **Taux de conversion global** : (événements clés / sessions) x 100
   - Objectif : 3-5% pour un site B2B local
2. **Taux de complétion du simulateur** : (simulator_form_submitted / simulator_result_displayed) x 100
   - Objectif : 30-40%
3. **Taux d'appel téléphonique** : (phone_click_* / sessions) x 100
   - Objectif : 5-10% (très bon pour services d'urgence)

### Chaque Mois
1. **Coût par acquisition (CPA)** : Budget marketing / Événements clés
2. **Pages les plus performantes** : Taux de conversion par page
3. **Sources de trafic** : Organic, Direct, Referral - quelle source convertit le mieux ?

---

## 🚀 Prochaines Étapes

### Semaine 1-2 : Validation
- Vérifier que les conversions sont bien trackées
- Accumuler des données (minimum 50-100 conversions)

### Semaine 3-4 : Analyse
- Identifier les pages avec le meilleur ROI
- Trouver les points de friction dans le tunnel

### Mois 2 : Optimisation
- Tester des variantes de CTA sur les pages à fort abandon
- Améliorer le texte des pages qui ne convertissent pas
- Ajuster les enchères Google Ads selon les données de conversion

---

## 💡 Conseils Pro

### 1. Données vs Vanity Metrics
- ❌ **Mauvais** : "J'ai eu 500 visiteurs ce mois-ci !"
- ✅ **Bon** : "J'ai eu 15 leads qualifiés (3% de conversion) dont 8 sont devenus clients"

### 2. Segmentation Intelligente
- Comparez **nouveaux visiteurs** vs **visiteurs récurrents**
- Analysez **mobile** vs **desktop** (votre site est orienté urgence = mobile important)
- Étudiez **jour de la semaine** : les urgences arrivent plutôt le week-end ?

### 3. Corrélation GA4 ↔ CRM
- Notez dans un Google Sheet les leads reçus
- Comparez avec les conversions GA4
- Écart > 20% ? Il y a un problème de tracking

---

## 🆘 Besoin d'Aide ?

### Ressources Officielles
- [Documentation GA4](https://support.google.com/analytics/answer/10089681)
- [Certification Google Analytics](https://skillshop.exceedlms.com/student/catalog/list?category_ids=6431-google-analytics-4)

### Vérification Manuelle
Pour tester si un événement fonctionne :
1. Ouvrez votre site
2. Ouvrez la Console du Navigateur (F12)
3. Faites l'action (ex: clic téléphone)
4. Cherchez dans la console : `📊 Analytics Event: phone_click_header`
5. Si vous voyez le log, l'événement est bien envoyé ✅

---

## 📝 Notes Finales

Votre tracking est **professionnel et complet**. Le "problème" que vous avez identifié (pas d'événements visibles) vient simplement du fait que :

1. ✅ Les événements **sont bien envoyés** (le code est là)
2. ❌ Mais ils ne sont **pas encore configurés comme événements clés** dans GA4
3. ❌ Vous n'avez **pas encore créé d'audiences ni de rapports personnalisés**

> **IMPORTANT :** "Marquer comme clé" = c'est exactement ce qu'il faut faire ! Google a renommé les "conversions" en "événements clés".

**Temps estimé pour tout configurer :** 1-2 heures

**ROI de cette configuration :** Énorme - vous pourrez :
- Suivre précisément vos leads
- Optimiser vos campagnes publicitaires
- Identifier les pages qui convertissent le mieux
- Retargeter les visiteurs engagés
- Justifier votre budget marketing avec des données concrètes

---

**Dernière recommandation :** Commencez par la checklist "Immédiat" aujourd'hui. Dès demain, vous commencerez à voir des données exploitables dans vos rapports de conversion ! 🚀
