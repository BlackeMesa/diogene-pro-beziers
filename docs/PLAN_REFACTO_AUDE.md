# 🗺️ Plan de Refacto : Ajout de l'Aude (11) comme Zone d'Intervention

> **Date de création** : 26 janvier 2026  
> **Statut** : 📋 En attente d'implémentation  
> **Priorité** : Haute

---

## 📋 Résumé du Projet

Étendre la zone d'intervention de **Lien Propreté 34** au département de l'**Aude (11)**, tout en conservant le nom de l'entreprise inchangé. Cette extension permettra de couvrir les villes de Narbonne, Carcassonne, et leurs alentours.

### Décisions Clés

- ✅ **Nom de l'entreprise** : Inchangé ("Lien Propreté 34")
- ✅ **Nombre de villes Aude** : 6-8 villes avec pages SEO dédiées
- ✅ **Délais d'intervention** : Différenciés selon la distance (24h/48h)
- ✅ **Architecture menu** : Réorganisation avec sous-menus par département

---

## 📁 Structure des Fichiers

### Fichiers à MODIFIER

| Fichier                            | Description                                         | Priorité   |
| ---------------------------------- | --------------------------------------------------- | ---------- |
| `src/types/estimator.ts`           | Ajouter les nouvelles LocationOption                | 🔴 Haute   |
| `src/lib/simulatorFormatters.ts`   | Ajouter les labels des nouvelles villes             | 🔴 Haute   |
| `src/components/CostEstimator.tsx` | Ajouter les options dans le select                  | 🔴 Haute   |
| `src/components/Navigation.tsx`    | Réorganiser le menu avec sous-menus par département | 🔴 Haute   |
| `src/components/Footer.tsx`        | Ajouter section Aude + mettre à jour description    | 🟠 Moyenne |
| `src/components/CityList.tsx`      | Ajouter les zones de l'Aude                         | 🟠 Moyenne |
| `src/App.tsx`                      | Ajouter les nouvelles routes                        | 🔴 Haute   |
| `public/sitemap.xml`               | Ajouter toutes les nouvelles URLs                   | 🟠 Moyenne |
| `.github/copilot-instructions.md`  | Mettre à jour la documentation                      | 🟢 Basse   |

### Fichiers à CRÉER

| Fichier                                        | Description                   | Template                    |
| ---------------------------------------------- | ----------------------------- | --------------------------- |
| `src/pages/ZoneInterventionAude.tsx`           | Page zone Aude                | ZoneInterventionHerault.tsx |
| `src/pages/NettoyageDiogeneNarbonne.tsx`       | Page ville Narbonne           | NettoyageDiogeneBeziers.tsx |
| `src/pages/NettoyageDiogeneCarcassonne.tsx`    | Page ville Carcassonne        | NettoyageDiogeneBeziers.tsx |
| `src/pages/NettoyageDiogeneLezignan.tsx`       | Page ville Lézignan-Corbières | NettoyageDiogeneBeziers.tsx |
| `src/pages/NettoyageDiogeneLimoux.tsx`         | Page ville Limoux             | NettoyageDiogeneBeziers.tsx |
| `src/pages/NettoyageDiogeneCastelnaudary.tsx`  | Page ville Castelnaudary      | NettoyageDiogeneBeziers.tsx |
| `src/pages/NettoyageDiogenePortLaNouvelle.tsx` | Page ville Port-la-Nouvelle   | NettoyageDiogeneBeziers.tsx |

---

## 🏙️ Villes de l'Aude à Intégrer

### Pages SEO Dédiées (6 villes)

| Ville                  | Population | Code Postal | Distance Béziers | Délai Intervention |
| ---------------------- | ---------- | ----------- | ---------------- | ------------------ |
| **Narbonne**           | 55 000     | 11100       | 30 km            | 24h                |
| **Carcassonne**        | 47 000     | 11000       | 90 km            | 48h                |
| **Lézignan-Corbières** | 11 000     | 11200       | 45 km            | 24-48h             |
| **Limoux**             | 10 000     | 11300       | 100 km           | 48h                |
| **Castelnaudary**      | 12 000     | 11400       | 85 km            | 48h                |
| **Port-la-Nouvelle**   | 6 000      | 11210       | 50 km            | 24-48h             |

### Villes Mentionnées (sans page dédiée)

| Zone                   | Villes                                             |
| ---------------------- | -------------------------------------------------- |
| Narbonnais             | Coursan, Sigean, Gruissan, Fleury-d'Aude           |
| Carcassonnais          | Trèbes, Pennautier, Capendu, Conques-sur-Orbiel    |
| Corbières              | Fabrezan, Ferrals-les-Corbières, Bizanet, Lézignan |
| Haute Vallée de l'Aude | Quillan, Espéraza, Couiza, Alet-les-Bains          |
| Lauragais Audois       | Bram, Villefranche-de-Lauragais                    |

---

## 🧭 Nouvelle Architecture du Menu

### Menu Desktop (Navigation.tsx)

```
Accueil
Services ▼
  ├── Nettoyage Diogène
  ├── Débarras Insalubre
  └── 🚨 Urgence 24h

Hérault (34) ▼
  ├── Béziers
  ├── Montpellier
  ├── Sète
  ├── Agde
  └── → Toutes les villes (34)

Aude (11) ▼
  ├── Narbonne
  ├── Carcassonne
  ├── Lézignan-Corbières
  └── → Toutes les villes (11)

Tarifs
Blog
FAQ
Contact
```

### Menu Mobile (Accordéon)

```
Accueil
─────────────────
Services
  • Nettoyage Diogène
  • Débarras Insalubre
  • 🚨 Urgence 24h
─────────────────
Hérault (34)
  • Béziers (24h)
  • Montpellier (24h)
  • Sète (24h)
  • Agde (24h)
  • → Toutes les villes
─────────────────
Aude (11)
  • Narbonne (24h)
  • Carcassonne (48h)
  • Lézignan-Corbières (24-48h)
  • → Toutes les villes
─────────────────
Tarifs
Blog
FAQ
Contact
```

---

## 🧮 Modifications du Simulateur

### 1. Types (estimator.ts)

```typescript
// AVANT
export type LocationOption = "beziers" | "agde" | "pezenas" | "other";

// APRÈS
export type LocationOption =
  // Hérault (34)
  | "beziers"
  | "montpellier"
  | "sete"
  | "agde"
  | "pezenas"
  | "other_herault"
  // Aude (11)
  | "narbonne"
  | "carcassonne"
  | "lezignan"
  | "limoux"
  | "castelnaudary"
  | "port_la_nouvelle"
  | "other_aude";
```

### 2. Formatters (simulatorFormatters.ts)

```typescript
export function formatLocation(location: LocationOption): string {
  const locations: Record<LocationOption, string> = {
    // Hérault (34)
    beziers: "Béziers (34)",
    montpellier: "Montpellier (34)",
    sete: "Sète (34)",
    agde: "Agde (34)",
    pezenas: "Pézenas (34)",
    other_herault: "Autre ville Hérault (34)",
    // Aude (11)
    narbonne: "Narbonne (11)",
    carcassonne: "Carcassonne (11)",
    lezignan: "Lézignan-Corbières (11)",
    limoux: "Limoux (11)",
    castelnaudary: "Castelnaudary (11)",
    port_la_nouvelle: "Port-la-Nouvelle (11)",
    other_aude: "Autre ville Aude (11)",
  };
  return locations[location];
}
```

### 3. Interface Select (CostEstimator.tsx)

```tsx
<Select onValueChange={(value) => handleAnswer("location", value as LocationOption)} value={answers.location}>
  <SelectTrigger>
    <SelectValue placeholder="Sélectionnez votre ville" />
  </SelectTrigger>
  <SelectContent>
    {/* Hérault (34) */}
    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted">Hérault (34) - Intervention 24h</div>
    <SelectItem value="beziers">Béziers (34500)</SelectItem>
    <SelectItem value="montpellier">Montpellier (34000)</SelectItem>
    <SelectItem value="sete">Sète (34200)</SelectItem>
    <SelectItem value="agde">Agde (34300)</SelectItem>
    <SelectItem value="pezenas">Pézenas (34120)</SelectItem>
    <SelectItem value="other_herault">Autre ville Hérault (34)</SelectItem>

    {/* Aude (11) */}
    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground bg-muted mt-2">Aude (11) - Intervention 24-48h</div>
    <SelectItem value="narbonne">Narbonne (11100) - 24h</SelectItem>
    <SelectItem value="carcassonne">Carcassonne (11000) - 48h</SelectItem>
    <SelectItem value="lezignan">Lézignan-Corbières (11200)</SelectItem>
    <SelectItem value="limoux">Limoux (11300) - 48h</SelectItem>
    <SelectItem value="castelnaudary">Castelnaudary (11400) - 48h</SelectItem>
    <SelectItem value="port_la_nouvelle">Port-la-Nouvelle (11210)</SelectItem>
    <SelectItem value="other_aude">Autre ville Aude (11)</SelectItem>
  </SelectContent>
</Select>
```

---

## 🗺️ Nouvelles URLs (sitemap.xml)

```xml
<!-- Zone Aude -->
<url>
  <loc>https://lienproprete34.fr/zone-intervention-aude</loc>
  <lastmod>2026-01-26</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>

<!-- Villes Aude -->
<url>
  <loc>https://lienproprete34.fr/nettoyage-diogene-narbonne</loc>
  <lastmod>2026-01-26</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
<url>
  <loc>https://lienproprete34.fr/nettoyage-diogene-carcassonne</loc>
  <lastmod>2026-01-26</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
<url>
  <loc>https://lienproprete34.fr/nettoyage-diogene-lezignan-corbieres</loc>
  <lastmod>2026-01-26</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://lienproprete34.fr/nettoyage-diogene-limoux</loc>
  <lastmod>2026-01-26</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://lienproprete34.fr/nettoyage-diogene-castelnaudary</loc>
  <lastmod>2026-01-26</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
<url>
  <loc>https://lienproprete34.fr/nettoyage-diogene-port-la-nouvelle</loc>
  <lastmod>2026-01-26</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## 📊 SEO : Structure des Pages Villes Aude

Chaque page ville Aude doit contenir :

### Meta Tags

```html
<title>Nettoyage Diogène Narbonne 7j/7 | Intervention 24h | Lien Propreté 34</title>
<meta name="description" content="Nettoyage syndrome de Diogène à Narbonne (11). Intervention rapide sous 24h, discrétion absolue, devis gratuit. ☎️ 07 88 43 20 55" />
<link rel="canonical" href="https://lienproprete34.fr/nettoyage-diogene-narbonne" />
```

### Schema.org LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Lien Propreté 34 - Narbonne",
  "description": "Nettoyage syndrome de Diogène à Narbonne et dans l'Aude",
  "areaServed": {
    "@type": "City",
    "name": "Narbonne",
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": "Aude"
    }
  },
  "telephone": "+33788432055",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Béziers",
    "addressRegion": "Occitanie",
    "postalCode": "34500",
    "addressCountry": "FR"
  }
}
```

### Contenu Spécifique par Ville

| Section              | Contenu à personnaliser                                  |
| -------------------- | -------------------------------------------------------- |
| **Hero**             | "Nettoyage Diogène à Narbonne" + "Intervention sous 24h" |
| **Distance**         | "À seulement 30 km de notre siège de Béziers"            |
| **Délai**            | "Intervention garantie sous 24h" (ou 48h selon ville)    |
| **Zones couvertes**  | Villes alentours (ex: Coursan, Sigean, Gruissan)         |
| **Témoignage local** | Si possible, témoignage d'un client de la ville          |

---

## 🔧 Modifications du Footer

### Nouvelle Structure (Footer.tsx)

```tsx
{/* Zones d'Intervention */}
<div>
  <h3 className="text-base font-bold mb-4">Hérault (34)</h3>
  <ul className="space-y-2 text-sm">
    <li><Link to="/nettoyage-diogene-beziers">Béziers</Link></li>
    <li><Link to="/nettoyage-diogene-montpellier">Montpellier</Link></li>
    <li><Link to="/nettoyage-diogene-sete">Sète</Link></li>
    <li><Link to="/nettoyage-diogene-agde">Agde</Link></li>
    <li><Link to="/zone-intervention-herault" className="font-semibold">→ Toutes les villes (34)</Link></li>
  </ul>
</div>

<div>
  <h3 className="text-base font-bold mb-4">Aude (11)</h3>
  <ul className="space-y-2 text-sm">
    <li><Link to="/nettoyage-diogene-narbonne">Narbonne</Link></li>
    <li><Link to="/nettoyage-diogene-carcassonne">Carcassonne</Link></li>
    <li><Link to="/nettoyage-diogene-lezignan-corbieres">Lézignan-Corbières</Link></li>
    <li><Link to="/zone-intervention-aude" className="font-semibold">→ Toutes les villes (11)</Link></li>
  </ul>
</div>
```

### Description mise à jour

```tsx
<p className="text-sm opacity-90 leading-relaxed">Spécialiste du nettoyage Diogène et débarras insalubre dans l'Hérault (34) et l'Aude (11). Intervention rapide et discrète 7J/7.</p>
```

---

## 📅 Planning d'Implémentation

### Phase 1 : Configuration (Jour 1) ✅

- [ ] Modifier `types/estimator.ts`
- [ ] Modifier `lib/simulatorFormatters.ts`
- [ ] Modifier `components/CostEstimator.tsx`

### Phase 2 : Navigation et Footer (Jour 1-2)

- [ ] Réorganiser `components/Navigation.tsx`
- [ ] Mettre à jour `components/Footer.tsx`
- [ ] Mettre à jour `components/CityList.tsx`

### Phase 3 : Pages Villes Aude (Jour 2-3)

- [ ] Créer `ZoneInterventionAude.tsx`
- [ ] Créer `NettoyageDiogeneNarbonne.tsx`
- [ ] Créer `NettoyageDiogeneCarcassonne.tsx`
- [ ] Créer `NettoyageDiogeneLezignan.tsx`
- [ ] Créer `NettoyageDiogeneLimoux.tsx`
- [ ] Créer `NettoyageDiogeneCastelnaudary.tsx`
- [ ] Créer `NettoyageDiogenePortLaNouvelle.tsx`

### Phase 4 : Routes et SEO (Jour 3)

- [ ] Ajouter les routes dans `App.tsx`
- [ ] Mettre à jour `sitemap.xml`
- [ ] Vérifier les liens internes

### Phase 5 : Documentation (Jour 4)

- [ ] Mettre à jour `.github/copilot-instructions.md`
- [ ] Tester toutes les pages
- [ ] Valider le simulateur

---

## ✅ Checklist de Validation Finale

- [ ] Toutes les pages Aude sont accessibles
- [ ] Le simulateur affiche les villes Aude correctement
- [ ] Les délais d'intervention sont mentionnés (24h/48h)
- [ ] Le menu desktop fonctionne avec les sous-menus
- [ ] Le menu mobile est cohérent
- [ ] Le footer affiche les deux départements
- [ ] Le sitemap contient toutes les nouvelles URLs
- [ ] Schema.org LocalBusiness est correct sur chaque page
- [ ] Les liens internes croisés (Hérault ↔ Aude) fonctionnent
- [ ] copilot-instructions.md est à jour

---

## 📝 Notes Importantes

1. **SEO Local** : Chaque page ville doit cibler "[service] + [ville]" comme mot-clé principal
2. **Délais différenciés** : Bien mentionner 24h pour Narbonne, 48h pour Carcassonne/Limoux
3. **Liens croisés** : Les pages Hérault mentionnent "Nous intervenons aussi dans l'Aude"
4. **Description entreprise** : "Hérault (34) et Aude (11)" doit apparaître partout
5. **Téléphone unique** : Garder le même numéro pour les deux départements

---

**Dernière mise à jour** : 26 janvier 2026
