# 🎾 Grand Chelem — Tableau Interactif

> **4 tournois · 128 joueurs · Best-of-5 sets**  
> Application HTML autonome, sans serveur, sans dépendance externe.

---

## 📋 Présentation

Tableau interactif des 4 tournois du Grand Chelem permettant de suivre les résultats, saisir les scores des matchs à venir et simuler la suite du tournoi.

Le fichier `grand-chelem.html` est **100 % autonome** : il suffit de l'ouvrir dans un navigateur, sans installation ni connexion internet.

> Le fichier `roland-garros-2026.html` est la version dédiée uniquement à Roland-Garros 2026.

---

## 🎾 Les 4 Grands Chelems

| Tournoi | Période | Surface | Lieu | Données |
|---------|---------|---------|------|---------|
| 🟠 **Roland-Garros** | Mai–Juin | Terre battue | Paris, France | ✅ RG 2026 pré-chargé |
| 🔵 **Australian Open** | Janvier | Dur (Melbourne Park) | Melbourne, Australie | ✅ AO 2026 pré-chargé |
| 🟢 **Wimbledon** | Juillet | Gazon (All England Club) | Londres, Angleterre | 🔲 Bracket vide |
| 🔷 **US Open** | Août–Septembre | Dur (Flushing Meadows) | New York, USA | 🔲 Bracket vide |

---

## 🚀 Utilisation

### Ouvrir l'application
```
Ouvrir grand-chelem.html dans Chrome, Firefox, Safari ou Edge
```

### Changer de tournoi
Cliquez sur l'un des 4 boutons dans la barre de sélection en haut de page.  
Le thème de couleurs, le titre et les données changent automatiquement.  
Chaque tournoi a sa propre sauvegarde indépendante.

### Navigation dans le tableau
| Action | Résultat |
|--------|---------|
| Défiler horizontalement | Voir les tours suivants |
| Boutons **Haut / Bas** | Filtrer par moitié de tableau |
| Champ de recherche | Trouver un joueur et ses matchs |
| Bouton **📋 À venir** | Lister tous les matchs sans résultat |
| Bouton **🏆 Champion** | Parcours complet d'une tête de série |
| Bouton **⬆** (flottant) | Revenir en haut de page |

---

## 📊 Structure du tableau

| Round | Matchs | 1er Tour → Finale |
|-------|--------|-------------------|
| 1er Tour | 64 | ↓ |
| 2ème Tour | 32 | ↓ |
| 3ème Tour | 16 | ↓ |
| 1/8 Finale | 8 | ↓ |
| 1/4 Finale | 4 | ↓ |
| 1/2 Finale | 2 | ↓ |
| Finale | 1 | 🏆 |
| **Total** | **127** | |

> 128 joueurs participent. Chaque match fait quitter 1 joueur. Il faut 127 matchs pour couronner 1 champion.

---

## ✏️ Saisir un score

1. Cliquer sur une cellule **"À venir"** dans le bracket ou via **📋 À venir**
2. Saisir le score avec le clavier numérique intégré (mobile) ou le clavier
3. Le vainqueur est suggéré automatiquement dès que le score est valide
4. Confirmer le vainqueur → **Enregistrer**

### Navigation rapide
Les boutons **⬅ Préc.** et **Suiv. ➡** permettent de passer d'un match à venir au suivant sans fermer la modal. Un compteur indique la position (ex: `3 / 16 à venir`).

### Format des scores (best-of-5)
```
6/4 7/5 6/3          → Victoire 3-0
6/4 3/6 6/2 7/5      → Victoire 3-1
6/4 3/6 7/6 3/6 6/4  → Victoire 3-2
7/6(3)               → Tiebreak (score perdant entre parenthèses)
6/2 3/0 Ab           → Abandon en cours de match
WO                   → Forfait avant le match
```

### Règles de validation
- **3 sets minimum, 5 sets maximum** (best-of-5 Grand Chelem)
- Le vainqueur doit gagner exactement **3 sets** (3-0, 3-1 ou 3-2)
- `Ab` et `WO` acceptés à tout moment
- Le bouton **Enregistrer** est bloqué si le score est invalide

### Affichage des scores
- **1er Tour** : score masqué (sauf `Ab` et `WO`)
- **2ème tour et suivants** : score affiché sous le nom du vainqueur

---

## 🎮 Fonctionnalités

| Bouton | Description |
|--------|-------------|
| 📋 **À venir** | Tous les matchs sans résultat, groupés par round, cliquables |
| 🏆 **Champion** | Parcours tour par tour d'une tête de série |
| ▶ **Simuler** | Scores best-of-5 réalistes, pondérés par les seeds |
| ⇅ **Import/Export** | Sauvegarde/restauration JSON par tournoi |
| 📷 **PNG** | Capture du bracket en image haute résolution |
| ⛶ **Plein écran** | Mode plein écran natif (idéal TV/projection) |
| ↺ **Reset** | Efface tous les scores du tournoi actif |
| ❓ **Aide** | Guide d'utilisation intégré (5 onglets) |

---

## 💾 Sauvegarde

Les scores sont sauvegardés **automatiquement** dans le localStorage du navigateur, **séparément par tournoi** :

| Clé localStorage | Tournoi |
|-----------------|---------|
| `gc_ov_rg` | Roland-Garros |
| `gc_ov_ao` | Australian Open |
| `gc_ov_wim` | Wimbledon |
| `gc_ov_uso` | US Open |

> ⚠️ La sauvegarde est liée à CE navigateur et CET appareil.  
> Utilisez **Export** pour transférer les scores vers un autre appareil.

---

## 🔄 Ajouter un nouveau tournoi (Wimbledon, USO)

1. Sélectionner le tournoi dans la barre en haut
2. Cliquer sur **⇅ Import/Export** → onglet **Importer**
3. Coller le JSON des données du tirage
4. **Ou** saisir manuellement via les cellules "À venir"

---

## 📱 Compatibilité & Accessibilité

### Navigateurs
Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

### Responsive
- **Mobile** (≤480px) : colonnes réduites, modals en bottom sheet, clavier numérique intégré
- **Tablette** (481–768px) : layout intermédiaire
- **Desktop** (≥769px) : affichage complet

### Accessibilité
- `aria-label` et `aria-pressed` sur tous les contrôles
- Navigation clavier avec focus visible
- `prefers-reduced-motion` — animations désactivées si demandé
- `prefers-contrast:high` — contours renforcés
- Touch targets minimum 44px

---

## 🏗️ Architecture technique

```
grand-chelem.html  (~126KB, fichier unique autonome)
│
├── Sélecteur tournoi   4 tournois, thèmes CSS dynamiques
├── CSS                 Variables par tournoi, 3 breakpoints responsive
├── HTML                Header sticky, bracket table rowspan, modals
└── JavaScript
    ├── TOURNAMENTS{}   Config des 4 tournois (couleurs, dates, surfaces)
    ├── RG_MATCHES[]    127 matchs Roland-Garros 2026
    ├── AO_MATCHES[]    127 matchs Australian Open 2026
    ├── initAOBracket() Charge AO_MATCHES dans MATCHES
    ├── initEmptyBracket() 127 matchs TBD pour Wimbledon/USO
    ├── OV{}            Scores saisis (par tournoi en localStorage)
    ├── setTournament() Switch avec isolation totale des données
    ├── buildHalf()     Table HTML rowspan=2 pour le centrage
    ├── validateScore() Best-of-5 : 3 sets min, 5 max, vainqueur à 3
    ├── simSc()         Simulation Grand Chelem (3-0/3-1/3-2)
    └── 22 fonctions    Navigation, champion, export PNG, plein écran...
```

### Isolation des données par tournoi
```
Basculer RG → AO :
  1. Sauvegarde OV dans gc_ov_rg
  2. OV = {} (vidé)
  3. initAOBracket() → 127 matchs AO 2026 pré-chargés
  4. Charge gc_ov_ao (scores AO existants si déjà saisis)

Basculer AO → Wimbledon :
  1. Sauvegarde OV dans gc_ov_ao
  2. OV = {} (vidé)
  3. initEmptyBracket() → 127 matchs TBD
  4. Charge gc_ov_wim (scores saisis précédemment)
```

---

## 🧪 Règles de contrôle qualité — Données tournoi

> Ces règles s'appliquent à **chaque nouveau tournoi** intégré (Wimbledon 2026, US Open 2026, etc.)  
> Tous les contrôles sont exécutés via **Node.js** avant intégration dans le HTML.

### 1. Comptes par round (obligatoire)
```
1er Tour   : 64 matchs  (32 top + 32 bot)
2ème Tour  : 32 matchs  (16 top + 16 bot)
3ème Tour  : 16 matchs  (8 top  + 8 bot)
1/8 Finale : 8 matchs   (4 top  + 4 bot)
1/4 Finale : 4 matchs   (2 top  + 2 bot)
1/2 Finale : 2 matchs   (1 top  + 1 bot)
Finale     : 1 match    (1 top)
─────────────────────────
TOTAL      : 127 matchs
```

### 2. Zéro doublon par round
Aucun joueur réel ne peut apparaître **deux fois dans le même round**.  
Les joueurs neutres (`FILL-T001A`, `FILL-B002B`, etc.) sont ignorés lors de cette vérification.

```javascript
// Exemple de vérification Node.js
rounds.forEach(function(r) {
  var seen = {};
  MATCHES.filter(m => m.round === r).forEach(m => {
    [m.p1, m.p2].forEach(p => {
      if (p.name.includes('FILL')) return;
      if (seen[p.name]) console.log('DOUBLON', r, p.name);
      seen[p.name] = true;
    });
  });
});
```

### 3. Nombre de matchs cohérent par joueur
| Résultat | Matchs attendus |
|----------|----------------|
| Champion (7 victoires) | 7 |
| Finaliste (6V + 1D) | 7 |
| Demi-finaliste | 6 |
| Quart-de-finaliste | 5 |
| Huitième de finaliste | 4 |
| 3ème tour | 3 |
| 2ème tour | 2 |
| 1er tour | 1 |

### 4. Half unique par joueur
Un joueur réel doit apparaître **exclusivement** dans `top` **ou** dans `bot`, jamais dans les deux.  
Un joueur en `top` ne peut pas atteindre une `QF bot` ou une `SF bot`.

```
✓ Alcaraz : 7 matchs, tous en [top]
✓ Djokovic : 7 matchs, tous en [bot]
✓ Musetti  : 5 matchs, tous en [bot]
✗ ERREUR   : Musetti présent en [top] ET [bot]
```

### 5. Fills neutres et uniques
- Nommage : `FILL-T001A` / `FILL-T001B` (top), `FILL-B001A` / `FILL-B001B` (bot)
- Chaque fill a un identifiant unique, jamais réutilisé
- Aucun nom de joueur réel ne doit servir de fill
- Les fills sont ignorés dans toutes les vérifications de doublons et de parcours champion

### Script de contrôle complet
```javascript
// Lancer avec : node -e "..." grand-chelem.html
var rounds = ['1er Tour','2eme Tour','3eme Tour',
              '1/8 Finale','1/4 Finale','1/2 Finale','Finale'];
var expected = [64, 32, 16, 8, 4, 2, 1];

// (1) Comptes
rounds.forEach((r, i) => {
  var n = MATCHES.filter(m => m.round === r).length;
  console.log((n === expected[i] ? '✓' : '✗'), r + ':', n + '/' + expected[i]);
});

// (2) Doublons
rounds.forEach(r => {
  var seen = {};
  MATCHES.filter(m => m.round === r).forEach(m => {
    [m.p1, m.p2].forEach(p => {
      if (p.name.includes('FILL')) return;
      if (seen[p.name]) console.log('✗ DOUBLON', r + ':', p.name);
      seen[p.name] = true;
    });
  });
});

// (3+4) Matchs et half par joueur clé
['ALCARAZ Carlos','DJOKOVIC Novak','SINNER Jannik','ZVEREV Alexander'].forEach(name => {
  var ms = MATCHES.filter(m => m.p1.name === name || m.p2.name === name);
  var halves = [...new Set(ms.map(m => m.half))];
  console.log(name + ':', ms.length, 'matchs, halves:', halves.join('+'));
});
```

---

## 📝 Historique des modifications

| Date | Modification |
|------|-------------|
| 31/05/2026 | ✅ Australian Open 2026 pré-chargé (127 matchs, 0 doublon) |
| 31/05/2026 | Correction doublons AO : Alcaraz, Djokovic, Musetti, Moutet, Vacherot |
| 31/05/2026 | Ajout règles de contrôle qualité dans README |
| 30/05/2026 | **Nouveau** : fichier `grand-chelem.html` — 4 tournois en 1 fichier |
| 30/05/2026 | Sélecteur de tournoi avec thèmes de couleurs dynamiques |
| 30/05/2026 | Isolation totale des données par tournoi (localStorage séparé) |
| 30/05/2026 | Navigation Préc./Suiv. dans la modal + clavier numérique mobile |
| 30/05/2026 | Vue Champion, Export PNG, Mode plein écran |
| 30/05/2026 | 1/2 Finale = 2 matchs, 1/4 Finale = 4 matchs (corrections structure) |
| 30/05/2026 | Validation scores best-of-5 (3 sets min, 5 max) |
| 30/05/2026 | Simulation Grand Chelem (3-0 / 3-1 / 3-2) |
| 30/05/2026 | Responsive mobile, accessibilité WCAG, bottom sheet |

---

*Grand Chelem — Tableau Interactif · v3.1 · 31 mai 2026*
