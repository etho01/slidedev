# Contexte du Projet - La Petite Maison de l'Épouvante

**Date**: 06/03/2025  
**Version**: V1

---

## 1. L'Entreprise

### Présentation
**La Petite Maison de l'Épouvante** - *"Le lieu de rêve pour frissonner"*

- **Fondation**: Il y a ~10 ans
- **Fondateurs**: 5 passionnés du genre horrifique
  - 2 anciens IT d'une ESN (administrateur systèmes/réseaux + architecte solution)

### Activité Principale
**Fanzine spécialisé**
- Genre: horreur, fantastique, heroic fantasy
- Format: papier et numérique
- Fréquence: 4 numéros par an
- Distribution: abonnement

### Magasins Physiques
- **France**: 
  - Angoulême
  - Aix-en-Provence
  - Lyon
- **International**: 
  - Londres (*the little house of thrill*)

**Produits vendus**: goodies, films (DVD/Blu-ray), bandes dessinées, jeux de société

**Logistique**:
- Chaque magasin a son propre stock
- Transferts inter-magasins en cas de rupture
- Contrat transporteur avec La Poste

### Site Web Actuel
- **Type**: site vitrine basé sur CMS
- **Fonctionnalités limitées**:
  - Abonnement au fanzine
  - Inscription newsletter
- **Pas de vente en ligne** pour les produits physiques

### Événement Annuel
**Le Petit Festival de l'Épouvante** (depuis 5 ans)
- Projections de films
- Vente de produits dérivés
- Masterclasses
- Tournois de jeux de plateau

---

## 2. Le Collectif Evil Ed

### Mission
Production et édition via **crowdfunding**

### Productions
**Web séries**:
- Objectif: web séries de genre → films petit budget
- **En cours**: "L'Orc" (+ BD dans le même univers)
- **En pré-production**: 2 autres séries

**Édition**:
- Restauration de films "oubliés"
- **En cours**: film d'horreur italien "riflesso di un coltello nella notte" (jamais sorti en France)
- Authoring Blu-ray
- Édition de bandes dessinées

**Gamme de produits**:
- Développement d'une gamme de figurines (exclusivité site web prévue)

### Infrastructure
- **Localisation**: bureau parisien
- **Équipements**: 
  - Stations de montage
  - Stations d'authoring
  - Serveur multimédia grande capacité
  - Redondance sur 2 nœuds
- **Site web**: vitrine propre

---

## 3. Infrastructure IT Actuelle

### Architecture Générale
- **État**: hétérogène, fragmenté (guillemets volontaires)
- **Gestion**: 1 technicien + aide sporadique des 2 fondateurs ex-IT
- **Hébergement**: fournisseur cloud français

### Applications
- Gestion de stock
- Gestion des fournisseurs
- CRM
- Système de caisse (par magasin)

### Outils et Systèmes
- **Échanges de données**: manuels via tableurs CSV
- **Suite bureautique**: LibreOffice
- **Messagerie**: Gmail
- **OS**:
  - PCs/portables: Ubuntu
  - Exception: 1 Mac (magasin Paris) pour création graphique (fanzine + newsletters)

### Infrastructure Réseau et Stockage
**Serveur de fichiers**:
- OS: Ubuntu
- Localisation physique: magasin de Paris
- Accès: VPN
- Sauvegardes: Veeam

**Evil Ed**:
- Infrastructure média séparée
- Stockage local: rushes, fichiers de production
- Serveur multimédia grande capacité redondé (2 nœuds)

---

## 4. Nouvelle Équipe IT

**Recrutements récents**:
- 1 architecte logiciel (ex lead developer)
- 2 développeurs juniors (5 ans d'expérience en alternance)

**Budget**: possibilité de nouvelles embauches pour garantir la réussite du projet

---

## 5. Projet: petitemaisonepouvante.com

### Vision
Créer la version **"blockbuster"** du site actuel → plateforme moderne de vente en ligne et de diffusion

### 5.1 Fonctionnalités de Vente en Ligne

#### Produits Physiques
- Vente des produits disponibles en magasin
  - Figurines
  - Jeux
  - Blu-ray/DVD
  - BD
  - Goodies
- **Exclusivité**: gamme de figurines Evil Ed (uniquement en ligne)

#### Produits Numériques
- Numéros digitalisés du fanzine
- Liseuse intégrée dans l'espace utilisateur authentifié

#### Abonnements
- Abonnement au fanzine (papier et/ou numérique)
- Renouvellement d'abonnement

#### Système de Recommandation
- Basé sur les recherches utilisateur
- Basé sur l'historique d'achats
- Personnalisé par profil

### 5.2 Espace Communautaire

#### Troc et Échange entre Particuliers
**Fonctionnalités utilisateur**:
- Proposer des articles à échanger ou donner
- Lister des articles recherchés
- Recevoir des notifications automatiques:
  - Basées sur les centres d'intérêt déclarés
  - Basées sur le comportement de navigation

**Modération**:
- Fonctionnalités de modération nécessaires

#### Chat
- Discussion entre passionnés
- Accessible aux utilisateurs authentifiés

### 5.3 Espace Utilisateur Authentifié

**Mon Espace**:
- Proposer des articles (échange/don)
- Lister articles recherchés
- Paramétrer notifications et recommandations
- Accès au chat communautaire
- Liseuse pour fanzines numériques

**Gestion des Achats**:
- Suivi des commandes en cours
- Historique des achats
- Gestion de l'abonnement

### 5.4 Contenu Éditorial
- News régulières
- Articles de fond
- Accessibles à tous les internautes (non authentifiés)

### 5.5 Contraintes Techniques

---

## ⚠️ CONTRAINTES MAJEURES DU PROJET

### 🔒 SÉCURITÉ (Priorité Critique)
**Plateforme à visée commerciale - Contrainte forte**

- ✅ **Protection des données de paiement** (conformité PCI-DSS)
- ✅ **Protection des données utilisateurs** (RGPD)
- ✅ **Authentification robuste** et gestion des sessions
- ✅ **Protection contre les attaques** (XSS, CSRF, injection SQL, etc.)
- ✅ **Modération communautaire** (prévention des abus, contenus illicites)
- ✅ **Traçabilité des transactions**
- ✅ **Chiffrement des données sensibles** (en transit et au repos)
- ✅ **Politique de mots de passe sécurisée**
- ✅ **Audit de sécurité** avant mise en production

### ♿ ACCESSIBILITÉ (Obligation Légale)
**Respect des normes RGAA (Référentiel Général d'Amélioration de l'Accessibilité)**

- ✅ **Niveau AA minimum** requis
- ✅ Navigation au clavier complète
- ✅ Compatibilité lecteurs d'écran
- ✅ Contrastes de couleurs conformes
- ✅ Textes alternatifs pour images
- ✅ Structure sémantique HTML
- ✅ Formulaires accessibles
- ✅ Contenus multimédia sous-titrés/transcrits

### 🌍 HÉBERGEMENT ET CONFORMITÉ
**Préférence forte: Hébergement en Europe**

- ✅ **Conformité RGPD** (données en UE)
- ✅ Souveraineté des données
- ✅ Latence optimisée pour le marché européen
- ✅ Support et maintenance en fuseaux horaires compatibles

### 💨 PERFORMANCE ET UX
**Interface fluide et ergonomique**

- ✅ Temps de chargement < 3 secondes
- ✅ Responsive design (mobile, tablette, desktop)
- ✅ Progressive Web App (PWA) envisagée
- ✅ Optimisation SEO
- ✅ Cache et CDN pour ressources statiques
- ✅ Pagination/lazy loading pour listes longues

### 🔄 INTÉGRATION SYSTÈME
**Interfaçage avec l'existant**

- ✅ Synchronisation des stocks (magasins ↔ en ligne)
- ✅ Intégration CRM existant
- ✅ Passerelle avec système de caisse
- ✅ Gestion des échanges CSV (à moderniser progressivement)
- ✅ API La Poste (gestion transporteur)

### 📊 DONNÉES ET RGPD
**Protection des données personnelles**

- ✅ Consentement explicite (cookies, newsletters)
- ✅ Droit à l'oubli et portabilité
- ✅ Politique de confidentialité claire
- ✅ Durée de conservation définie
- ✅ DPO (Délégué à la Protection des Données) à désigner

### 💳 PAIEMENT EN LIGNE
**Sécurité des transactions**

- ✅ Prestataire de paiement certifié (Stripe, PayPal, etc.)
- ✅ 3D Secure obligatoire
- ✅ Gestion des remboursements
- ✅ Facturation automatique
- ✅ Multi-devises (€, £ pour Londres)

---

---

## 6. Roadmap Versions Futures

### Version 2 (envisagée)
- Système d'enchères (type eBay)
- Diffusion des productions Evil Ed
  - Streaming de web séries
  - Contenus exclusifs

### Version 3 (envisagée)
- Diffusion en ligne des films du festival
  - **Mode restreint** pour respecter l'ambiance festival:
    - Nombre de places limité
    - Plages horaires de diffusion fixes
    - Gestion de "sessions" de visionnage

---

## 7. Notes Importantes

### Flexibilité du Projet
- **Sujet fictif** à des fins pédagogiques/d'évaluation
- Les exigences peuvent être ajoutées ou modifiées
- **Condition**: rester cohérent avec le contexte de l'entreprise

### Nouvelles Fonctionnalités
Les nouvelles fonctionnalités sont acceptées si:
- Elles sont en lien avec le domaine métier
- Elles ne contredisent pas les exigences existantes
- Elles enrichissent l'expérience utilisateur ou business

### Périmètre Métier
- Horreur, fantastique, heroic fantasy
- Communauté de passionnés
- Culture geek/pop culture dark
- Événementiel (festival)
- Production audiovisuelle (Evil Ed)

---

## 8. Opportunités d'Extension

### Intégrations Possibles
- Système de wishlist
- Programme de fidélité
- Gamification (badges, niveaux pour la communauté)
- API pour partenaires
- Application mobile
- Réalité augmentée (preview produits)

### Fonctionnalités Communautaires Avancées
- Forums thématiques
- Critiques et notations de produits
- Organisation de rencontres IRL
- Calendrier d'événements

### Business
- Préventes exclusives
- Coffrets collectors
- Ventes privées pour abonnés
- Partenariats avec créateurs indépendants

---

**Document de référence pour le projet collaboratif**  
*CESI - École d'Ingénieurs*  
*Bloc: Superviser et assurer le développement des applications logicielles*
