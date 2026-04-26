# Consignes d'Évaluation - Superviser et Assurer le Développement

## Vue d'ensemble
**Format**: Présentation orale de 20 min + 15 min d'échange
**Organisation**: Travail individuel
**Rôle**: Lead Developer en charge du développement de l'application

## Mission globale
Définir un processus de développement respectant les exigences de qualité logicielle (ISO 25010)
Développer la version 1 de l'application intégrant:
- Pipeline CI/CD avec tests automatisés
- Gestion du déploiement via orchestrateur ou fournisseur cloud
- Solution de sécurité minimale (HTTPS, authentification/autorisation, scan de vulnérabilités)

⚠️ **Important**: Pas besoin d'implémenter toutes les fonctionnalités, mais AU MINIMUM une fonctionnalité métier

## Les 3 phases de la mission

---

## PHASE 1: Structuration du processus de développement

### 1.1 Indicateurs (Métriques qualité)

**À produire:**
- ✅ Identifier **4 indicateurs/métriques** permettant d'évaluer la conformité aux exigences de qualité
- Chaque indicateur peut couvrir plusieurs exigences ou une seule
- Pas d'obligation de couvrir toutes les exigences de qualité

**Référence:** ISO 25010 (performance, fiabilité, disponibilité, flexibilité, capacité fonctionnelle, etc.)

**Point critique:** Justifier comment le suivi de ces métriques permettra d'**éviter l'accumulation de dette technique**

---

### 1.2 Cycle de vie et sécurité du développement

**À produire:**

#### 1.2.1 Formalisation du cycle de vie
- Intégrer la démarche **DevSecOps**
- Pour chaque étape clé: préciser les **mesures de sécurité** à mettre en place

#### 1.2.2 Schéma détaillé du pipeline CI/CD
- Schématiser de façon détaillée le processus de livraison/déploiement continu
- Intégrer les **tests automatisés**:
  - Types de tests (unitaires, intégration, etc.)
  - Outils utilisés (frameworks de tests, analyse de code, etc.)

**Lien avec métriques:** Mettre en avant comment ces outils permettent de suivre les indicateurs/métriques qualité définis en 1.1

---

### 1.3 Compétences et formation

**À produire:**
- ✅ Cartographier les **compétences nécessaires** au projet
- ✅ Proposer une **action de formation** pour renforcer les compétences de l'équipe

**Contraintes:**
- Pas de contrainte budgétaire ou de limite de membres
- ⚠️ Rester réaliste sur les profils (pas de "moutons à 5 pattes")

---

## PHASE 2: Développement et déploiement - Implémentation du POC

### 2.1 Analyse des exigences et choix techniques

**À produire:**

#### 2.1.1 Reformulation des exigences fonctionnelles
- La fonctionnalité implémentée dans le prototype doit être **clairement décrite** sous forme de:
  - **User story**
  - **Critères d'acceptation** (format backlog)

#### 2.1.2 Schéma d'architecture technique
- Réaliser un schéma intégrant:
  - La sécurité
  - Les solutions techniques retenues:
    - Type de base de données
    - Protocole de communication
    - Framework
    - etc.

---

### 2.2 Expérimentation et documentation

**Objectif:** Tester les technologies/solutions techniques phares AVANT le développement pour assurer leur intégration

#### Démarche:
1. Sélectionner les technologies **pertinentes et critiques**
2. Tester leur mise en œuvre
3. Rédiger une **synthèse du protocole d'expérimentation**

#### Contenu de la synthèse:
- ✅ Environnement de test
- ✅ Étapes clés pour reproduire l'expérimentation
- ✅ Difficultés rencontrées
- ✅ Limites identifiées
- ✅ Présentation des résultats pour justifier l'adoption des technologies

**Note:** L'expérimentation peut aussi servir à rejeter certaines technologies

#### Exemples d'expérimentations VALIDES:
✅ Mise en place plateforme CI/CD intégrant outils de qualité code et frameworks de tests
✅ Mise en place ou exploitation service mesh
✅ Intégration de services d'infrastructure (API gateway, résilience, découverte de services)
✅ Déploiement broker de messages dans environnement Kubernetes avec tests publication/consommation
✅ Déploiement cert-manager pour provisionnement certificats sécurisant un Ingress
✅ Clustering d'un système de gestion de bases de données
✅ Mise en place système d'observabilité
✅ Test technologie Serverless
✅ Implémentation de traitement distribué sur plusieurs nœuds

#### Exemples NON VALIDES:
❌ Tests d'un langage de programmation
❌ Communication (REST, gRPC, WebSocket) entre composant front-end et back-end
❌ Exécution locale de tests unitaires
❌ Implémentation d'un composant avec Framework (MVC, ORM, service REST)

---

### 2.3 Développement de l'application

**Niveau attendu:** Prototypage

#### Fonctionnalité métier:
- ✅ Implémenter **une fonctionnalité métier** respectant le backlog défini en amont
- ✅ Présenter le respect de la fonctionnalité via:
  - Tests d'appels
  - Tests d'acceptation (peuvent faire partie des 2 tests minimum du pipeline CI/CD)

#### Architecture et solutions techniques:
- ✅ S'assurer que les composants/services développés respectent:
  - L'architecture définie
  - Les solutions techniques retenues

#### Sécurité:
L'application doit intégrer une solution de sécurité:
- Communication via HTTPS/TLS
- Gestion authentification et autorisations (ex: serveur d'autorisation comme Keycloak)
- Détection des vulnérabilités

#### Observabilité:
Mettre en place **au moins une** des composantes de l'observabilité:
- Logs centralisés
- Collecte de métriques
- Gestion des traces distribuées

#### Pipeline CI/CD:
- ✅ Intégrer les principales étapes du pipeline CI/CD
- ✅ **Minimum 2 types de tests** permettant d'évaluer les métriques

⚠️ **Note importante:** Pas de pénalité si le flux du pipeline ne peut mettre en œuvre une étape de déploiement en (pré) production

#### Tests de charge:
- ✅ Lors de la présentation: présenter la **montée en charge** de l'application
- ✅ Lancer des tests de charge avec Siege ou JMeter
- Possibilité (non obligatoire) d'intégrer ces tests au pipeline CI/CD

---

## PHASE 3: Plan de remédiation - Analyse sécurité et recommandations

**Contexte:** La v1 est prête, il faut l'auditer pour proposer le renforcement de sa sécurité

### 3.1 Analyse des résultats
- ✅ Analyser les résultats des tests
- ✅ Analyser les métriques collectées

### 3.2 Identification des vulnérabilités
- ✅ À partir des résultats et des connaissances de l'application
- ✅ Identifier les vulnérabilités potentielles
- Possibilité de s'appuyer sur l'analyse des tests de charge

### 3.3 Plan de remédiation
- ✅ Proposer des **préconisations d'actions** pour renforcer la sécurité
- ✅ Adapter au contexte de l'application
- ✅ **Justifier les recommandations**

---

## Compétences évaluées

### Bloc 1: Élaborer le processus d'assurance qualité logicielle
- Évaluer la qualité du développement
- Définir la politique de tests
- Définir la politique de sécurité

### Bloc 2: Piloter le développement et le déploiement d'applications
- Superviser la mise en place d'une chaîne de livraison continue
- Faciliter la montée en compétences des développeurs
- Orchestrer la mise en production pour garantir la disponibilité et la montée en charge

### Bloc 3: Maintenir et développer son expertise en développement d'applications
- Expérimenter des technologies innovantes en bac à sable
- Démontrer la faisabilité par la réalisation d'un POC (proof of concept)
- Développer des applications complexes

---

## Conseils pour la soutenance

### Public cible
- Considérer les décideurs comme **"spécialistes du développement"**
- Évaluation technique, pas de vulgarisation nécessaire
- ⚠️ Vigilance sur la **précision des termes employés**
- ❌ Pas de "je sais faire mais pas expliqué" accepté

### Schémas et supports
- Schémas doivent être **lisibles et complets**
- Pas d'évaluation sur la forme du PowerPoint

### Démonstration pratique
- ✅ Préparer la démo pour une présentation fluide
- ✅ Limiter "l'effet démo" (ça ne marche plus!)
- ✅ **Possibilité d'enregistrer une vidéo de secours** en cas de problème majeur

---

## Livrables attendus

1. **Documentation processus de développement:**
   - 4 indicateurs/métriques qualité avec justifications
   - Cycle de vie DevSecOps formalisé
   - Schéma détaillé pipeline CI/CD
   - Cartographie des compétences
   - Action de formation proposée

2. **Application (prototype):**
   - Au moins 1 fonctionnalité métier implémentée
   - Backlog (user story + critères d'acceptation)
   - Schéma d'architecture technique
   - Pipeline CI/CD avec minimum 2 types de tests
   - Solution de sécurité
   - Au moins 1 composante d'observabilité

3. **Expérimentation:**
   - Synthèse du protocole d'expérimentation
   - Résultats justifiant l'adoption des technologies

4. **Plan de remédiation:**
   - Analyse des tests et métriques
   - Identification des vulnérabilités
   - Préconisations d'actions avec justifications

5. **Présentation orale:**
   - Support de présentation (20 min)
   - Démonstration pratique (ou vidéo de secours)
   - Tests de charge en direct (Siege/JMeter)
