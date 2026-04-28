---
theme: default
background: '#ffffff'
colorSchema: light
title: Superviser et Assurer le Développement
class: text-center
drawings:
  persist: false
transition: fade
duration: 20min
lineNumbers: false
---

# Superviser et Assurer le Développement

<div class="opacity-60 mt-2">La Petite Maison de l'Épouvante — Lead Developer — Avril 2026</div>

---
layout: image-right
image: https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80
---

# Sommaire

<br>

1. Introduction
2. Phase 1 — Processus de développement
3. Phase 2 — Implémentation technique
4. Phase 3 — Résultats du développement
5. Phase 4 — Plan de remédiation
6. Conclusion

---
layout: center
background: '#ffffff'
---

<div class="text-sm opacity-40 mb-3 tracking-widest uppercase">Partie 1</div>

# Introduction

---
layout: image-right
image: https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80
---

# Contexte

**La Petite Maison de l'Épouvante**

- Fanzine horreur fondé il y a 10 ans · 4 magasins (France + Londres)
- Festival annuel & collectif de production **Evil Ed**

<br>

**Legacy IT**

- Site vitrine sans e-commerce · échanges CSV · 1 technicien

<br>

**Mission**

Livrer la v1 de la plateforme **Blockbuster** via un processus DevSecOps.

---

# Enjeux

**La plateforme Blockbuster — Ce qu'il faut construire**

<br>

<div class="grid grid-cols-4 gap-3 mt-4 text-sm">

<div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
  <div class="text-center mb-3">
    <div class="font-bold text-blue-700">E-commerce</div>
  </div>
  <div class="text-xs text-gray-700 space-y-2">
    <div>✓ Produits physiques</div>
    <div>✓ Produits numériques</div>
    <div>✓ Liseuse intégrée</div>
  </div>
</div>

<div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
  <div class="text-center mb-3">
    <div class="font-bold text-purple-700">Communauté</div>
  </div>
  <div class="text-xs text-gray-700 space-y-2">
    <div>✓ Espace d'échange & troc</div>
    <div>✓ Chat passionnés</div>
    <div>✓ Notifications perso.</div>
  </div>
</div>

<div class="bg-green-50 border border-green-200 rounded-xl p-4">
  <div class="text-center mb-3">
    <div class="font-bold text-green-700">Intelligence</div>
  </div>
  <div class="text-xs text-gray-700 space-y-2">
    <div>✓ Recommandations</div>
    <div>✓ Comportement utilisateur</div>
  </div>
</div>

<div class="bg-red-50 border border-red-200 rounded-xl p-4">
  <div class="text-center mb-3">
    <div class="font-bold text-red-700">Contraintes</div>
  </div>
  <div class="text-xs text-gray-700 space-y-2">
    <div>✓ Sécurité prioritaire</div>
    <div>✓ Hébergement Europe</div>
    <div>✓ Conformité RGAA</div>
  </div>
</div>

</div>

---
layout: center
background: '#ffffff'
---

<div class="text-sm opacity-40 mb-3 tracking-widest uppercase">Partie 2</div>

# Processus de développement

---

# Cycle de vie du développement

<div class="grid grid-cols-4 gap-4 mt-6 text-center">

<div class="bg-purple-50 rounded-xl p-4 border border-purple-200">
  <div class="font-bold text-purple-700 text-sm">1. Planifier</div>
  <div class="text-xs mt-2 text-gray-600">User stories<br>Backlog<br>Sprint planning</div>
</div>

<div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
  <div class="font-bold text-blue-700 text-sm">2. Code</div>
  <div class="text-xs mt-2 text-gray-600">TDD<br>Code review<br>PHPStan/ESLint</div>
</div>

<div class="bg-orange-50 rounded-xl p-4 border border-orange-200">
  <div class="font-bold text-orange-700 text-sm">3. Build & Test</div>
  <div class="text-xs mt-2 text-gray-600">Tests unitaires<br>Trivy scan<br>Docker build<br>Analyse de la complexité cyclomatique</div>
</div>

<div class="bg-green-50 rounded-xl p-4 border border-green-200">
  <div class="font-bold text-green-700 text-sm">4. Deployer</div>
  <div class="text-xs mt-2 text-gray-600">Kubernetes<br>Vault secrets<br>Let's Encrypt</div>
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-center">

<div class="bg-red-50 rounded-xl p-4 border border-red-200">
  <div class="font-bold text-red-700 text-sm">5. Opérer et Monitorer</div>
  <div class="text-xs mt-2 text-gray-600">Prometheus · Grafana · Alertmanager · Logs (Loki)</div>
</div>

<div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
  <div class="font-bold text-gray-700 text-sm">6. Retours & Itération</div>
  <div class="text-xs mt-2 text-gray-600">Métriques ISO 25010 · Rétrospective · Remédiation</div>
</div>

</div>

---

# Indicateurs qualité — ISO 25010

**4 métriques pour piloter la qualité et éviter la dette technique**

<br>

| # | Indicateur | Caractéristique ISO 25010 |
|---|-----------|--------------------------|
| 1 | Temps de réponse | Performance |
| 2 | Taux de disponibilité | Fiabilité |
| 3 | Couverture de tests | Maintenabilité |
| 4 | Vulnérabilités détectées | Sécurité |


---
layout: image-right
image: https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80
---

# Indicateur 1 — Performance

**Temps de réponse des API**

- Cible : < 200 ms (p95) en conditions normales
- Mesuré via : Siege, Prometheus
- Seuil d'alerte : > 500 ms

<br>

**Lien dette technique**

Sans ce suivi : dégradation progressive → refactorisation totale (coût x10)

Avec ce suivi : optimisations incrémentales → coût maîtrisé

---
layout: image-right
image: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80
---

# Indicateur 2 — Fiabilité

**Taux de disponibilité (uptime)**

- Cible : ≥ 99,5 %
- Mesuré via : Grafana, Alertmanager
- MTTR cible : < 1 h

<br>

**Lien dette technique**

Sans ce suivi : incidents récurrents → correctifs d'urgence non documentés

Avec ce suivi : stabilité prouvée → confiance dans l'architecture


---
layout: image-right
image: https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80
---

# Indicateur 3 — Maintenabilité

**Couverture de tests & dette technique**

- Couverture cible : ≥ 80 %
- Dette technique : niveau maximal PHPStan + 0 erreur ESLint
- Complexité cyclomatique surveillée par sonarcube avec la note de A

<br>

**Lien dette technique**

Sans ce suivi : code non testé = code intouchable → paralysie évolutive

Avec ce suivi : code confiant → refactoring sans risque


---
layout: image-right
image: https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80
---

# Indicateur 4 — Sécurité

**Vulnérabilités détectées**

- Cible : 0 CVE critique en production
- Mesuré via : Trivy (images Docker), Composer et Trivy (dépendances)
- Délai de correction CVE critique : < 24 h

<br>

**Lien dette technique**

Sans ce suivi : dépendances obsolètes → migration forcée coûteuse

Avec ce suivi : mises à jour régulières → coût de migration nul


---

# Pipeline CI/CD — 2 workflows

**Stratégie de déploiement automatisé**

<br>

<div class="grid grid-cols-2 gap-6 mt-4">

<div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
  <div class="text-center mb-3">
    <div class="font-bold text-blue-700">Workflow 1</div>
    <div class="text-xs text-blue-600">Push & Pull Requests</div>
  </div>
  <div class="text-xs text-gray-700 space-y-1">
    <div>✓ Qualité du code</div>
    <div>✓ Scan des dépendances</div>
    <div>✓ Tests unitaires</div>
  </div>
  <div class="mt-3 text-xs text-center text-blue-600">
    → Validation avant merge
  </div>
</div>

<div class="bg-green-50 border-2 border-green-300 rounded-xl p-4">
  <div class="text-center mb-3">
    <div class="font-bold text-green-700">Workflow 2</div>
    <div class="text-xs text-green-600">Mise en production</div>
  </div>
  <div class="text-xs text-gray-700 space-y-1">
    <div>✓ Qualité + Dépendances + Tests</div>
    <div>✓ Build image Docker</div>
    <div>✓ Scan image (Trivy)</div>
    <div>✓ Deploy Kubernetes</div>
  </div>
  <div class="mt-3 text-xs text-center text-green-600">
    → Déploiement automatisé
  </div>
</div>

</div>

---

# Workflow 1 — Push & Pull Requests

**Pipeline de validation du code**

<br>

<div class="flex items-center justify-center gap-3 mt-6">

<div class="bg-purple-100 border-2 border-purple-400 rounded-lg px-4 py-3 text-center">
  <div class="font-bold text-purple-800 text-sm">Push / PR</div>
</div>

<div class="text-2xl text-gray-400">→</div>

<div class="bg-blue-100 border-2 border-blue-400 rounded-lg px-4 py-3 text-center">
  <div class="font-bold text-blue-800 text-sm">Qualité Code</div>
  <div class="text-xs text-gray-600 mt-1">PHPStan<br>ESLint</div>
</div>

<div class="text-2xl text-gray-400">→</div>

<div class="bg-orange-100 border-2 border-orange-400 rounded-lg px-4 py-3 text-center">
  <div class="font-bold text-orange-800 text-sm">Dépendances</div>
  <div class="text-xs text-gray-600 mt-1">Composer<br>Trivy</div>
</div>

<div class="text-2xl text-gray-400">→</div>

<div class="bg-green-100 border-2 border-green-400 rounded-lg px-4 py-3 text-center">
  <div class="font-bold text-green-800 text-sm">Tests</div>
  <div class="text-xs text-gray-600 mt-1">Unitaires<br>Couverture</div>
</div>

<div class="text-2xl text-gray-400">→</div>

<div class="bg-emerald-100 border-2 border-emerald-400 rounded-lg px-4 py-3 text-center">
  <div class="font-bold text-emerald-800 text-sm">Merge OK</div>
</div>

</div>

<br>
<br>

**Objectif** : garantir la qualité du code avant toute intégration dans la branche principale

**Durée moyenne** : 1 minute

---

# Workflow 2 — Mise en production

**Pipeline de déploiement complet**

<br>

<div class="grid grid-cols-3 gap-3 mt-4 text-xs">

<div class="col-span-3 flex items-center justify-center gap-2">
  <div class="bg-purple-100 border-2 border-purple-400 rounded-lg px-3 py-2 text-center">
    <div class="font-bold text-purple-800">Push sur main</div>
  </div>
  <div class="text-xl text-gray-400">→</div>
  <div class="bg-blue-100 border-2 border-blue-400 rounded-lg px-3 py-2 text-center">
    <div class="font-bold text-blue-800">Qualité</div>
    <div class="text-gray-600">PHPStan + ESLint</div>
  </div>
  <div class="text-xl text-gray-400">→</div>
  <div class="bg-orange-100 border-2 border-orange-400 rounded-lg px-3 py-2 text-center">
    <div class="font-bold text-orange-800">Dépendances</div>
    <div class="text-gray-600">Composer + Trivy</div>
  </div>
</div>

<div class="col-span-3 flex items-center justify-center gap-2 mt-2">
  <div class="bg-green-100 border-2 border-green-400 rounded-lg px-3 py-2 text-center">
    <div class="font-bold text-green-800">Tests</div>
    <div class="text-gray-600">Unitaires + Couverture</div>
  </div>
  <div class="text-xl text-gray-400">→</div>
  <div class="bg-indigo-100 border-2 border-indigo-400 rounded-lg px-3 py-2 text-center">
    <div class="font-bold text-indigo-800">Build</div>
    <div class="text-gray-600">Image Docker</div>
  </div>
  <div class="text-xl text-gray-400">→</div>
  <div class="bg-red-100 border-2 border-red-400 rounded-lg px-3 py-2 text-center">
    <div class="font-bold text-red-800">Scan Image</div>
    <div class="text-gray-600">Trivy</div>
  </div>
  <div class="text-xl text-gray-400">→</div>
  <div class="bg-emerald-100 border-2 border-emerald-400 rounded-lg px-3 py-2 text-center">
    <div class="font-bold text-emerald-800">Deploy</div>
    <div class="text-gray-600">Kubernetes</div>
  </div>
</div>

</div>

<br>

**Objectif** : déploiement sécurisé et automatisé en production

**Durée moyenne** : 6-8 minutes

---

# Blocages automatiques dans les pipelines

**Mécanismes de protection qualité & sécurité**

<br>

<div class="grid grid-cols-3 gap-4 mt-6 text-sm">

<div class="bg-red-50 border-2 border-red-300 rounded-xl p-4">
  <div class="text-center mb-3">
    <div class="font-bold text-red-700">Qualité du code</div>
  </div>
  <div class="text-xs text-gray-700">
    <div class="mb-2"><strong>Erreur PHPStan</strong></div>
    <div class="mb-2"><strong>Erreur ESLint</strong></div>
    <div class="mb-2"><strong>Analyse cyclomatique</strong></div>
  </div>
</div>

<div class="bg-orange-50 border-2 border-orange-300 rounded-xl p-4">
  <div class="text-center mb-3">
    <div class="font-bold text-orange-700">Sécurité</div>
  </div>
  <div class="text-xs text-gray-700">
    <div class="mb-2"><strong>CVE critique</strong></div>
    <div class="mb-2"><strong>CVE haute</strong></div>
  </div>
</div>

<div class="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-4">
  <div class="text-center mb-3">
    <div class="font-bold text-yellow-700">Tests</div>
  </div>
  <div class="text-xs text-gray-700">
    <div class="mb-2"><strong>Couverture < 80%</strong></div>
    <div class="mb-2"><strong>Tests en échec</strong></div>
  </div>
</div>

</div>

<br>

<div class="bg-green-50 border border-green-300 rounded-lg p-3 text-center text-sm">
  <strong>✅ Tous les critères respectés</strong> → Le code peut être mergé / déployé
</div>

<div class="mt-3 bg-purple-50 border border-purple-300 rounded-lg p-3 text-center text-xs">
  <strong>💡 Prévention dette technique</strong> : Chaque blocage empêche l'introduction de code qui nécessiterait une correction future coûteuse
</div>

---

# Profils & formation de l'équipe

<div class="grid grid-cols-5 gap-3 mt-4 text-xs">

<div class="border border-blue-200 bg-blue-50 rounded-xl p-3">
  <div class="font-bold text-blue-700 text-sm">Dev Backend</div>
  <div class="text-gray-500 mt-1">REST APIs · TDD · SQL · PHPStan · Test · Git</div>
  <div class="mt-2 pt-2 border-t border-blue-100 text-gray-600">
    <ul>
      <li>Formation TDD & Clean Code<br></li>
    </ul>
  </div>
</div>

<div class="border border-pink-200 bg-pink-50 rounded-xl p-3">
  <div class="font-bold text-pink-700 text-sm">Dev Frontend</div>
  <div class="text-gray-500 mt-1">React/Vue · Responsive · A11y · Test · Tests composants · Git</div>
  <div class="mt-2 pt-2 border-t border-pink-100 text-gray-600">
  <ul>
    <li>
      Formation RGAA / Accessibilité numérique (Access42)<br></li>
    <li>
      Certification OpenJS Node.js / React
    </li>
  </ul>
  </div>
</div>

<div class="border border-orange-200 bg-orange-50 rounded-xl p-3">
  <div class="font-bold text-orange-700 text-sm">DevOps / QA</div>
  <div class="text-gray-500 mt-1">Kubernetes · CI/CD · Vault · Siege</div>
  <div class="mt-2 pt-2 border-t border-orange-100 text-gray-600">
  <ul>
    <li>
      Certification <strong>CKA</strong> (Certified Kubernetes Administrator)
    </li>
  </ul>
  </div>
</div>

<div class="border border-red-200 bg-red-50 rounded-xl p-3">
  <div class="font-bold text-red-700 text-sm">Ingénieur Sécu.</div>
  <div class="text-gray-500 mt-1">Trivy · RGPD · OWASP · CVE</div>
  <div class="mt-2 pt-2 border-t border-red-100 text-gray-600">
    <ul>
      <li>
        Certification <strong>OWASP </strong>
      </li>
    </ul>
  </div>
</div>

<div class="border border-green-200 bg-green-50 rounded-xl p-3">
  <div class="font-bold text-green-700 text-sm">Lead Developer</div>
  <div class="text-gray-500 mt-1">Agile/Scrum · Architecture · ISO 25010 · Reporting</div>
  <div class="mt-2 pt-2 border-t border-green-100 text-gray-600">
    <ul>
      <li>
        Formation ISO 25010 & métriques qualité logicielle<br>
      </li>
    </ul>
  </div>
</div>

</div>

<div class="mt-4 bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-600">
  <strong>Plan de formation transverse</strong> : workshops DevSecOps mensuels · revues de code croisées · documentation interne partagée
</div>

---
layout: center
background: '#ffffff'
---

<div class="text-sm opacity-40 mb-3 tracking-widest uppercase">Partie 3</div>

# Implémentation technique

---

# User Stories — Backlog fonctionnel

| # | En tant que… | Je veux… | Critères d'acceptation |
|---|-------------|----------|------------------------|
| US-01 | Client | Consulter le catalogue avec filtres | Filtres catégorie/prix/stock · Réponse < 200 ms · Responsive |
| US-02 | Client | Voir la fiche détaillée d'un article | Description, prix · Réponse < 200 ms |
| US-03 | Client | Ajouter des articles au panier et passer commande | Panier persistant · Paiement HTTPS · Confirmation e-mail |
| US-04 | Gestionnaire | Créer et modifier des articles dans le catalogue | Formulaire titre/description/prix/stock · Validation obligatoire · Historique des modifications |

<br>

> **Critères transverses** : couverture de tests ≥ 80 % · 0 CVE critique · disponibilité ≥ 99,5 % · conformité RGPD

---
layout: image-right
image: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80
---

# Architecture technique


- **Cluster Kubernetes** : orchestration en production
- **HashiCorp Vault** : gestion centralisée des secrets (DB credentials, API keys)
- **Let's Encrypt** : certificats SSL/TLS automatisés via cert-manager
- **Ingress NGINX** : routage et load balancing
- **Prometheus + Grafana** : Monitoring
- **Sonacube** : Analyse qualité du code

**Avantages**
- **Scalabilité automatique**
- **Secrets jamais en clair dans le code**
- **Certificats renouvelés automatiquement**

---

# Schéma — Architecture technique

```mermaid {scale: 0.6}
graph LR
  DEV["Dev\nGit Push"] --> CICD[" GitHub Actions\nCI/CD Pipeline"]
  CICD --> IMG[" Image Docker"]
  IMG --> K8S

  subgraph SRV[" Serveur principal"]
    subgraph K8S[" Cluster Kubernetes"]
      ING[" Ingress NGINX\n+ SSL Let's Encrypt"]
      ING --> FE[" Next.js\nFrontend"]
      ING --> BE[" Symfony\nAPI REST"]
      VAULT[" Vault\nSecrets"] --> FE & BE
    end
    DB[" MySql"]
    MON[" Prometheus + Grafana"]
    BE --> DB
  end

  subgraph SRV2[" Serveur qualité"]
    SONAR[" SonarQube"]
  end

  CICD --> SONAR
  USERS[" Utilisateurs"] --> ING
```

---

# Stack technique — Next.js

**Framework frontend pour l'interface e-commerce**

- **Next.js** : React framework avec SSR (Server-Side Rendering)
- **Node.js** : runtime pour le serveur Next.js
- **Déploiement** : containerisé dans Kubernetes

<br>

**Difficultés & solutions**

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
  <div class="font-bold text-orange-700 mb-2"> Configuration serveur Node</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">Next.js nécessite un serveur Node actif sur le port 3000</div>
    <div class="bg-gray-100 p-2 rounded font-mono text-xs">
      node server.js
    </div>
  </div>
</div>

<div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
  <div class="font-bold text-blue-700 mb-2"> Variables d'environnement</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">Les env vars du container doivent être déclarées dans :</div>
    <div class="bg-gray-100 p-2 rounded font-mono text-xs">
      next.config.js
    </div>
    <div class="mt-2 text-blue-600">→ Nécessaire pour le runtime</div>
  </div>
</div>

</div>

---

# Stack technique — Symfony

**Framework backend pour l'API e-commerce**

- **Symfony** : PHP framework pour les API REST
- **Apache** : serveur web pour exécuter l'application
- **Déploiement** : containerisé dans Kubernetes

<br>

**Difficultés & solutions**

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="bg-purple-50 border border-purple-200 rounded-xl p-4">
  <div class="font-bold text-purple-700 mb-2">Fichier .env obligatoire</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">Malgré l'usage de variables d'environnement du container, Symfony nécessite un fichier .env</div>
    <div class="bg-gray-100 p-2 rounded font-mono text-xs">
      .env
    </div>
    <div class="mt-2 text-purple-600">→ Configuration requise par le framework</div>
  </div>
</div>

<div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
  <div class="font-bold text-orange-700 mb-2"> Variables Apache</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">Apache doit être configuré pour passer les variables d'environnement à PHP</div>
    <div class="bg-gray-100 p-2 rounded font-mono text-xs">
      SetEnv VAR_NAME value
    </div>
    <div class="mt-2 text-orange-600">→ Configuration dans httpd.conf ou .htaccess</div>
  </div>
</div>

</div>

---

# Infrastructure — Kubernetes (K8s)

**Orchestration des conteneurs**

- **Kubernetes (K8s)** : orchestration complète des conteneurs
- **Installation locale** : Minikube pour le développement
- **Choix stratégique** : K8s plutôt que K3s

<br>

**Expérience d'implémentation**

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="bg-green-50 border border-green-200 rounded-xl p-4">
  <div class="font-bold text-green-700 mb-2">Installation facilitée</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">Difficultés assez faibles lors de la mise en place</div>
    <div class="mb-2">Configuration relativement simple avec Minikube</div>
    <div class="mt-2 text-green-600">→ Prise en main rapide</div>
  </div>
</div>

<div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
  <div class="font-bold text-blue-700 mb-2">Choix K8s vs K3s</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">Préférence pour Kubernetes complet</div>
    <div class="mb-2">Tester les composants dans des conditions proches du réel</div>
    <div class="mt-2 text-blue-600">→ Environnement de production réaliste</div>
  </div>
</div>

</div>

---

# Infrastructure — HashiCorp Vault

**Gestion des secrets et credentials**

- **HashiCorp Vault** : stockage sécurisé des secrets
- **Intégration K8s** : injection de secrets dans les pods
- **Déploiement** : installé sur le cluster Kubernetes

<br>

**Expérience d'implémentation**

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="bg-green-50 border border-green-200 rounded-xl p-4">
  <div class="font-bold text-green-700 mb-2">Installation simple</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">Installation de Vault elle-même sans difficulté majeure</div>
    <div class="mb-2">Déploiement via Helm chart standard</div>
    <div class="mt-2 text-green-600">→ Mise en place rapide</div>
  </div>
</div>

<div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
  <div class="font-bold text-orange-700 mb-2">Authentification K8s → Vault</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">Véritable défi : authentifier les services K8s à Vault</div>
    <div class="mb-2">Configuration des policies et des rôles pour chaque service</div>
    <div class="mt-2 text-orange-600">→ Gestion de l'accès aux secrets complexe</div>
  </div>
</div>

</div>

---

# Infrastructure — Let's Encrypt

**Gestion automatique des certificats SSL/TLS**

- **Let's Encrypt** : certificats SSL/TLS gratuits et automatisés
- **Cert-manager** : opérateur Kubernetes pour la gestion des certificats
- **Intégration Ingress** : injection automatique dans NGINX Ingress

<br>

**Expérience d'implémentation**

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="bg-green-50 border border-green-200 rounded-xl p-4">
  <div class="font-bold text-green-700 mb-2">Configuration simple</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">Installation de cert-manager sans difficulté</div>
    <div class="mb-2">Configuration des Issuers Let's Encrypt aisée</div>
    <div class="mt-2 text-green-600">→ Mise en place rapide et efficace</div>
  </div>
</div>

<div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
  <div class="font-bold text-blue-700 mb-2">Injection dans Ingress</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">Intégration transparente avec NGINX Ingress</div>
    <div class="mb-2">Renouvellement automatique des certificats</div>
    <div class="mt-2 text-blue-600">→ Configuration simplifiée via annotations</div>
  </div>
</div>

</div>

---

# Qualité du code — SonarQube

**Analyse statique et détection de bugs**

- **SonarQube** : plateforme d'analyse de qualité du code
- **Scan automatique** : intégration dans la pipeline CI/CD
- **Métriques** : bugs, vulnérabilités, code smells, couverture

<br>

**Expérience d'implémentation**

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
  <div class="font-bold text-orange-700 mb-2">Consommation de ressources</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">SonarQube consomme beaucoup de ressources (CPU, RAM)</div>
    <div class="mb-2">Installation nécessaire sur un VPS dédié</div>
    <div class="mt-2 text-orange-600">→ Infrastructure supplémentaire requise</div>
  </div>
</div>

<div class="bg-red-50 border border-red-200 rounded-xl p-4">
  <div class="font-bold text-red-700 mb-2">Retour des résultats</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">Difficulté à retourner les résultats à la pipeline</div>
    <div class="mb-2">Configuration complexe pour arrêter la pipeline en cas d'échec</div>
    <div class="mt-2 text-red-600">→ Intégration CI/CD délicate</div>
  </div>
</div>

</div>

---

# Monitoring — Prometheus & Grafana

**Observabilité et métriques en temps réel**

- **Prometheus** : collecte et stockage des métriques (CPU, RAM, latence)
- **Grafana** : tableaux de bord et visualisation des métriques

<br>

**Expérience d'implémentation**

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="bg-green-50 border border-green-200 rounded-xl p-4">
  <div class="font-bold text-green-700 mb-2">Installation facilitée</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">Installation de Prometheus et Grafana sans difficulté majeure</div>
    <div class="mb-2">Configuration des dashboards et alertes rapide</div>
    <div class="mt-2 text-green-600">→ Mise en place simple et efficace</div>
  </div>
</div>

<div class="bg-blue-50 border border-blue-200 rounded-xl p-4">
  <div class="font-bold text-blue-700 mb-2">Déploiement externe</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">Prometheus et Grafana ne sont pas déployés dans Kubernetes</div>
    <div class="mb-2">Installation sur infrastructure séparée</div>
    <div class="mt-2 text-blue-600">→ Architecture monitoring indépendante</div>
  </div>
</div>

</div>

---

# Tests — PHPUnit & Jest

**Frameworks de tests unitaires**

- **PHPUnit** : framework de tests pour le backend Symfony (PHP)
- **Jest** : framework de tests pour le frontend Next.js (JavaScript)
- **Intégration CI/CD** : exécution automatique dans les workflows

<br>

**Expérience d'implémentation**

<div class="grid grid-cols-2 gap-4 mt-4 text-sm">

<div class="bg-red-50 border border-orange-red rounded-xl p-4">
  <div class="font-bold text-red-700 mb-2">Configuration spécifique requise</div>
  <div class="text-xs text-gray-700">
    <div class="mb-2">Configuration spécifique nécessaire pour PHPUnit et Jest</div>
    <div class="mb-2">Particulièrement complexe sur Symfony avec PHPUnit</div>
    <div class="mt-2 text-red-600">→ Point bloquant lors de la mise en place</div>
  </div>
</div>
</div>

---

# Tests de charge

**Scénarios de test**

- **Charge normale** : 100 utilisateurs simultanés
- **Pic de trafic** : 500 utilisateurs (Black Friday)

<br>

**Outils & métriques**
- **Siege** : simulation de charge réaliste
- **Métriques surveillées** :
  - Temps de réponse p95 < 200 ms
  - Taux d'erreur < 0,1 %
  - Auto-scaling K8s : validation HPA

---
layout: center
background: '#ffffff'
---

<div class="text-sm opacity-40 mb-3 tracking-widest uppercase">Partie 4</div>

# Résultats du développement

---
layout: center
---

# Démonstration

<div class="flex items-center justify-center">
  <video controls width="800" class="rounded-lg shadow-lg">
    <source src="/videos/demo.mp4" type="video/mp4">
    Votre navigateur ne supporte pas la lecture de vidéos.
  </video>
</div>

---
layout: center
---

# Résultat

<div class="flex items-center justify-center">
  <img src="/images/image.png" alt="Résultat" width="800" class="rounded-lg shadow-lg">
</div>

---



# Synthèse complète des résultats


<br>

| Domaine | Métrique | Objectif | Résultat | Status |
|---------|----------|----------|----------|--------|
| **Performance** | Disponibilité | ≥ 99,5% | 99,7% | ✅ |
| **Tests** | Couverture de code | ≥ 80% | 30% (183 tests) | ⚠️ |
| **Qualité** | PHPStan / ESLint | 0 erreur | 0 erreur | ✅ |
| **Sécurité** | CVE critiques | 0 | 0 | ✅ |
| **Infrastructure** | Kubernetes | A | A | ✅ |
| **Dépendances** | Paquets à jour | 100% | Certains obsolètes | ⚠️ |


---

# Résultats de performance détaillés

**Tests de charge et disponibilité**

<br>

| Composant | Temps de réponse | Disponibilité | Status |
|-----------|------------------|---------------|--------|
| **Frontend** | 0.03 secs | 100.00 % | ✅ |
| **API** | 0.05 secs | 100.00 % | ✅ |

<br>

<div class="text-center text-sm text-gray-600">
  <strong>Objectifs atteints</strong> : temps de réponse < 200 ms ✅ · disponibilité ≥ 99,5% ✅
</div>

---
layout: center
background: '#ffffff'
---

<div class="text-sm opacity-40 mb-3 tracking-widest uppercase">Partie 5</div>

# Plan de remédiation

---

# Vulnérabilités et points d'amélioration

**Analyse détaillée**

<div class="grid  gap-6 mt-4">

<div>
  <div class="mb-5">
    <div class="font-bold mb-2">Sécurité — CVE et dépendances</div>
    <div class="text-sm">
      <div class="mb-1">• Quelques CVE mineures détectées (non bloquantes)</div>
      <div class="mb-1">• Certains paquets nécessitent une mise à jour</div>
      <div class="text-blue-600 mt-2">→ Actions : mise à jour des images et des packets</div>
    </div>
  </div>

  <div class="mb-5">
    <div class="font-bold mb-2">Tests — Couverture insuffisante</div>
    <div class="text-sm">
      <div class="mb-1">• Couverture actuelle : 30% (objectif : ≥ 80%)</div>
      <div class="mb-1">• 183 tests unitaires fonctionnels</div>
      <div class="text-blue-600 mt-2">→ Actions : augmenter la couverture</div>
    </div>
  </div>

  <div>
    <div class="font-bold mb-2">Observabilité — Architecture à consolider</div>
    <div class="text-sm">
      <div class="mb-1">• Prometheus et Grafana déployés hors Kubernetes</div>
      <div class="mb-1">• Absence de centralisation des logs (Loki manquant)</div>
      <div class="text-blue-600 mt-2">→ Actions : migrer vers K8s, implémenter Loki</div>
    </div>
  </div>
</div>

</div>

---

# Recommandations priorisées

**Roadmap d'amélioration continue**

<div class="grid grid-cols-3 gap-4 mt-6 text-xs">

<div class="bg-red-50 border-2 border-red-300 rounded-xl p-4">
  <div class="text-center mb-3">
    <div class="font-bold text-red-700 text-sm">Court terme</div>
    <div class="text-gray-500 text-xs">(Sprint actuel)</div>
  </div>
  <div class="text-gray-700 space-y-2">
    <div class="flex items-start">
      <div class="text-red-600 mr-1">1.</div>
      <div>Augmenter couverture tests (30% → 80%)</div>
    </div>
    <div class="flex items-start">
      <div class="text-red-600 mr-1">2.</div>
      <div>Mettre à jour image les images dockers</div>
    </div>
    <div class="flex items-start">
      <div class="text-red-600 mr-1">3.</div>
      <div>Mettre à jour les paquets obsolètes</div>
    </div>
  </div>
</div>

<div class="bg-orange-50 border-2 border-orange-300 rounded-xl p-4">
  <div class="text-center mb-3">
    <div class="font-bold text-orange-700 text-sm">Moyen terme</div>
    <div class="text-gray-500 text-xs">(1-2 mois)</div>
  </div>
  <div class="text-gray-700 space-y-2">
    <div class="flex items-start">
      <div class="text-orange-600 mr-1">4.</div>
      <div>Implémenter Loki (centralisation logs)</div>
    </div>
    <div class="flex items-start">
      <div class="text-orange-600 mr-1">5.</div>
      <div>Migrer Prometheus/Grafana dans K8s</div>
    </div>
  </div>
</div>

<div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
  <div class="text-center mb-3">
    <div class="font-bold text-blue-700 text-sm">Long terme</div>
    <div class="text-gray-500 text-xs">(Trimestre)</div>
  </div>
  <div class="text-gray-700 space-y-2">
    <div class="flex items-start">
      <div class="text-blue-600 mr-1">6.</div>
      <div>Scan DAST avec OWASP ZAP</div>
    </div>
  </div>
</div>

</div>

---
layout: center
background: '#ffffff'
---

<div class="text-sm opacity-40 mb-3 tracking-widest uppercase">Partie 6</div>

# Conclusion

---

# Conclusion

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="bg-green-50 border-2 border-green-300 rounded-xl p-6">
  <div class="font-bold text-green-700 text-lg mb-4">Réussites</div>
  <div class="text-sm text-gray-700 space-y-2">
    <div>• Infrastructure Kubernetes opérationnelle et sécurisée</div>
    <div>• Gestion des secrets avec Vault + certificats Let's Encrypt automatisés</div>
    <div>• 2 workflows CI/CD automatisés (Push/PR + Production)</div>
    <div>• Analyse de qualité du code (PHPStan + ESLint) et sécurité (Trivy)</div>
    <div>• 0 vulnérabilité critique en production</div>
    <div>• Objectifs de performance et disponibilité atteints</div>
  </div>
</div>

<div class="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
  <div class="font-bold text-blue-700 text-lg mb-4">Prochaines étapes</div>
  <div class="text-sm text-gray-700 space-y-2">
    <div>• Extension de la couverture avec tests E2E</div>
    <div>• Amélioration continue de la posture de sécurité</div>
    <div>• Mise en place du chaos engineering</div>
  </div>
</div>

</div>

<div class="mt-8 bg-purple-50 border-2 border-purple-300 rounded-xl p-4 text-center">
  <div class="font-bold text-purple-700 text-lg mb-2">Impact business</div>
  <div class="text-gray-700">Plateforme e-commerce prête pour la production avec confiance</div>
</div>

---
layout: center
---

# Questions ?

<br>

Merci

---
layout: center
---
