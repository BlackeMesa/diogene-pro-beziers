# 📸 Plan de placement des images

> **Objectif** : Humaniser le site en intégrant les nouvelles photos de manière cohérente et mobile-friendly.
>
> **Statut** : ✅ IMPLÉMENTÉ (27 janvier 2026)

---

## 🖼️ Inventaire des images

| #   | Fichier                                    | Description                                                                     | Catégorie        |
| --- | ------------------------------------------ | ------------------------------------------------------------------------------- | ---------------- |
| 1   | `chambre_léger_encombrement.jpg`           | Pièce avant/après (split screen) - encombrement léger à gauche, propre à droite | Avant/Après      |
| 2   | `chambre_totalement_nettoyé.jpg`           | Salon propre, lumineux, rideaux blancs, parquet clair                           | Résultat         |
| 3   | `fourgon_blanc_banalisé.png`               | Véhicule utilitaire blanc discret avec gyrophare                                | Véhicule         |
| 4   | `homme_nettoyant_cuisine_sol.jpg`          | Technicien en salopette nettoyant sol cuisine insalubre                         | Action/Humain    |
| 5   | `homme_nettoyant_cuisine.jpg`              | Technicien nettoyant cuisinière/poêle                                           | Action/Humain    |
| 6   | `homme_nettoyant_encadrement_fenetre.jpg`  | Gros plan mains avec nettoyeur vapeur sur mur                                   | Action/Technique |
| 7   | `homme_nettoyant_meuble_cuisine.jpg`       | Technicien nettoyant comptoir dans pièce encombrée                              | Action/Humain    |
| 8   | `homme_nettoyant_parquet.jpg`              | Gros plan aspirateur professionnel sur parquet                                  | Action/Technique |
| 9   | `homme_nettoyant_sol_chambre_encombre.jpg` | Technicien de dos face au désordre avec aspirateur                              | Action/Humain    |
| 10  | `mur_dégradé.png`                          | Mur très abîmé, peinture écaillée, débris                                       | État avant       |

---

## 📍 Plan de placement par page

### 1. Page Accueil (`Index.tsx`)

| Section                         | Image                                                             | Justification                              | Mobile                   |
| ------------------------------- | ----------------------------------------------------------------- | ------------------------------------------ | ------------------------ |
| **Hero**                        | `homme_nettoyant_sol_chambre_encombre.jpg`                        | Image forte montrant l'humain face au défi | Visible, format portrait |
| **Section "Nos services"**      | `homme_nettoyant_cuisine_sol.jpg` + `homme_nettoyant_parquet.jpg` | Illustrer les services                     | Carrousel ou 1 seule     |
| **Section avant/après**         | `chambre_léger_encombrement.jpg`                                  | Preuve visuelle du travail                 | Slider avant/après       |
| **Section véhicule/discrétion** | `fourgon_blanc_banalisé.png`                                      | Illustrer la discrétion promise            | Visible                  |

---

### 2. Page Nettoyage Diogène (`NettoyageDiogene.tsx`)

| Section                     | Image                                      | Justification                     | Mobile           |
| --------------------------- | ------------------------------------------ | --------------------------------- | ---------------- |
| **Hero**                    | `homme_nettoyant_sol_chambre_encombre.jpg` | Photo emblématique du service     | Format adaptatif |
| **Section processus**       | `homme_nettoyant_cuisine.jpg`              | Étape nettoyage                   | Visible          |
| **Section résultat**        | `chambre_totalement_nettoyé.jpg`           | Résultat final propre et lumineux | Visible          |
| **Section "Pourquoi nous"** | `fourgon_blanc_banalisé.png`               | Véhicule discret                  | Optionnel mobile |

---

### 3. Page Débarras Insalubre (`DebarrasInsalubre.tsx`)

| Section                   | Image                                | Justification                                    | Mobile           |
| ------------------------- | ------------------------------------ | ------------------------------------------------ | ---------------- |
| **Hero**                  | `homme_nettoyant_meuble_cuisine.jpg` | Technicien en action dans environnement encombré | Format adaptatif |
| **Section problématique** | `mur_dégradé.png`                    | Illustrer l'état des logements insalubres        | Visible          |
| **Section résultat**      | `chambre_totalement_nettoyé.jpg`     | Avant/après transformation                       | Visible          |

---

### 4. Page Urgence 24h (`NettoyageUrgence24h.tsx`)

| Section                  | Image                             | Justification                    | Mobile  |
| ------------------------ | --------------------------------- | -------------------------------- | ------- |
| **Hero**                 | `fourgon_blanc_banalisé.png`      | Véhicule prêt à intervenir       | Visible |
| **Section intervention** | `homme_nettoyant_cuisine_sol.jpg` | Action rapide et professionnelle | Visible |

---

### 5. Page Prix (`PrixNettoyageDiogene.tsx`)

| Section                 | Image                            | Justification                     | Mobile        |
| ----------------------- | -------------------------------- | --------------------------------- | ------------- |
| **En-tête**             | `homme_nettoyant_parquet.jpg`    | Illustration professionnelle      | Petite taille |
| **Section témoignages** | `chambre_totalement_nettoyé.jpg` | Résultat pour illustrer la valeur | Optionnel     |

---

### 6. Page Contact (`Contact.tsx`)

| Section                  | Image                                      | Justification           | Mobile            |
| ------------------------ | ------------------------------------------ | ----------------------- | ----------------- |
| **Sidebar/Illustration** | `homme_nettoyant_sol_chambre_encombre.jpg` | Humaniser le formulaire | Cachée sur mobile |
| **Section confiance**    | `fourgon_blanc_banalisé.png`               | Crédibilité             | Petite taille     |

---

### 7. Pages Villes (Béziers, Montpellier, Sète, etc.)

| Section              | Image                                                                                                                                | Justification                | Mobile           |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------- |
| **Hero**             | Rotation parmi : `homme_nettoyant_cuisine_sol.jpg`, `homme_nettoyant_meuble_cuisine.jpg`, `homme_nettoyant_sol_chambre_encombre.jpg` | Varier les visuels par ville | Format adaptatif |
| **Section résultat** | `chambre_totalement_nettoyé.jpg`                                                                                                     | Résultat identique partout   | Visible          |

---

### 8. Page Syndrome Diogène Comprendre (`SyndromeDiogeneComprendre.tsx`)

| Section                    | Image                         | Justification                        | Mobile  |
| -------------------------- | ----------------------------- | ------------------------------------ | ------- |
| **Introduction**           | `mur_dégradé.png`             | Illustrer la dégradation du logement | Visible |
| **Section accompagnement** | `homme_nettoyant_cuisine.jpg` | Intervention humaine et respectueuse | Visible |

---

### 9. Page Débarras Après Décès (`DebarrasApresDeces.tsx`)

| Section              | Image                            | Justification                                  | Mobile           |
| -------------------- | -------------------------------- | ---------------------------------------------- | ---------------- |
| **Hero**             | `chambre_léger_encombrement.jpg` | Situation de logement à vider (moins choquant) | Format adaptatif |
| **Section résultat** | `chambre_totalement_nettoyé.jpg` | Un nouveau départ                              | Visible          |

---

### 10. Page Appartement Très Sale (`AppartementTresSale.tsx`)

| Section                   | Image                                | Justification            | Mobile           |
| ------------------------- | ------------------------------------ | ------------------------ | ---------------- |
| **Hero**                  | `homme_nettoyant_meuble_cuisine.jpg` | Technicien en action     | Format adaptatif |
| **Section problématique** | `mur_dégradé.png`                    | État dégradé du logement | Visible          |
| **Section résultat**      | `chambre_totalement_nettoyé.jpg`     | Transformation           | Visible          |

---

## 🔄 Récapitulatif des utilisations par image

| Image                                      | Nombre d'utilisations | Pages principales                                                                                 |
| ------------------------------------------ | --------------------- | ------------------------------------------------------------------------------------------------- |
| `homme_nettoyant_sol_chambre_encombre.jpg` | 4                     | Index (Hero), NettoyageDiogene (Hero), Contact, Villes                                            |
| `chambre_totalement_nettoyé.jpg`           | 7                     | Index, NettoyageDiogene, DebarrasInsalubre, Prix, Villes, DebarrasApresDeces, AppartementTresSale |
| `fourgon_blanc_banalisé.png`               | 4                     | Index, NettoyageDiogene, Urgence24h, Contact                                                      |
| `homme_nettoyant_cuisine_sol.jpg`          | 3                     | Index, Urgence24h, Villes                                                                         |
| `homme_nettoyant_cuisine.jpg`              | 2                     | NettoyageDiogene, SyndromeDiogeneComprendre                                                       |
| `homme_nettoyant_meuble_cuisine.jpg`       | 3                     | DebarrasInsalubre (Hero), Villes, AppartementTresSale                                             |
| `homme_nettoyant_parquet.jpg`              | 2                     | Index, Prix                                                                                       |
| `chambre_léger_encombrement.jpg`           | 2                     | Index (avant/après), DebarrasApresDeces                                                           |
| `mur_dégradé.png`                          | 3                     | DebarrasInsalubre, SyndromeDiogeneComprendre, AppartementTresSale                                 |
| `homme_nettoyant_encadrement_fenetre.jpg`  | 1                     | ProcessSteps (étape désinfection)                                                                 |

---

## 📱 Considérations mobile

### Règles à appliquer :

1. **Hero images** : Utiliser `object-fit: cover` avec `aspect-ratio` pour maintenir les proportions
2. **Images secondaires** : Masquer avec `hidden md:block` sur les plus petits écrans
3. **Carrousels** : Utiliser un carrousel sur mobile pour les galeries multiples
4. **Lazy loading** : Appliquer `loading="lazy"` sur toutes les images hors viewport initial
5. **Alt text SEO** : Textes descriptifs incluant mots-clés et localisation

### Tailles recommandées :

- **Hero desktop** : 1200x600px (landscape)
- **Hero mobile** : 800x600px (portrait ou carré)
- **Vignettes** : 400x300px
- **Icônes/badges** : 200x200px max

---

## ✅ Prochaines étapes

1. [ ] Valider ce plan avec le client
2. [ ] Optimiser les images (compression, WebP)
3. [ ] Implémenter les placements page par page
4. [ ] Tester sur mobile
5. [ ] Ajouter les alt text SEO

---

**Date de création** : 2 février 2026
