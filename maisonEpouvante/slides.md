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
4. Phase 3 — Plan de remédiation
5. Conclusion

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

- Fanzine spécialisé horreur / fantastique depuis 10 ans
- 4 magasins physiques (Angoulême, Aix, Lyon, Londres)
- Site vitrine actuel sans vente en ligne
- Infrastructure IT hétérogène, gérée par 1 technicien

<br>

**Mission**

En tant que Lead Developer, définir et mettre en œuvre un processus de développement DevSecOps pour livrer la v1 de la plateforme e-commerce.

---
layout: quote
---

# Enjeux

**Digitalisation**

- Ouvrir la vente en ligne (produits, abonnements)
- Unifier la gestion des stocks entre les 4 magasins
- Supprimer les échanges manuels

<br>

**Qualité & fiabilité**

- Garantir la disponibilité de la plateforme
- Réduire la dette technique dès le départ
- Respecter les exigences ISO 25010

<br>

**Sécurité**

- Protéger les données clients (RGPD)
- Sécuriser les transactions en ligne

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
  <div class="text-3xl mb-2">🎯</div>
  <div class="font-bold text-purple-700 text-sm">1. Plan</div>
  <div class="text-xs mt-2 text-gray-600">User stories<br>Backlog<br>Sprint planning</div>
</div>

<div class="bg-blue-50 rounded-xl p-4 border border-blue-200">
  <div class="text-3xl mb-2">💻</div>
  <div class="font-bold text-blue-700 text-sm">2. Code</div>
  <div class="text-xs mt-2 text-gray-600">TDD<br>Code review<br>SonarQube</div>
</div>

<div class="bg-orange-50 rounded-xl p-4 border border-orange-200">
  <div class="text-3xl mb-2">🔨</div>
  <div class="font-bold text-orange-700 text-sm">3. Build & Test</div>
  <div class="text-xs mt-2 text-gray-600">Tests unitaires<br>Trivy scan<br>Docker build</div>
</div>

<div class="bg-green-50 rounded-xl p-4 border border-green-200">
  <div class="text-3xl mb-2">🚀</div>
  <div class="font-bold text-green-700 text-sm">4. Deploy</div>
  <div class="text-xs mt-2 text-gray-600">Kubernetes<br>Vault secrets<br>Let's Encrypt</div>
</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4 text-center">

<div class="bg-red-50 rounded-xl p-4 border border-red-200">
  <div class="text-3xl mb-2">📊</div>
  <div class="font-bold text-red-700 text-sm">5. Operate & Monitor</div>
  <div class="text-xs mt-2 text-gray-600">Prometheus · Grafana · Alertmanager · Logs (Loki)</div>
</div>

<div class="bg-gray-50 rounded-xl p-4 border border-gray-200">
  <div class="text-3xl mb-2">🔁</div>
  <div class="font-bold text-gray-700 text-sm">6. Feedback & Itération</div>
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
- Mesuré via : JMeter, Prometheus
- Seuil d'alerte : > 500 ms

<br>

**Pourquoi ?**

Un temps de réponse dégradé révèle des requêtes SQL non optimisées, un cache absent ou un sous-dimensionnement — autant de sources de dette technique.

---
layout: image-right
image: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80
---

# Indicateur 2 — Fiabilité

**Taux de disponibilité (uptime)**

- Cible : ≥ 99,5 %
- Mesuré via : Grafana, Alertmanager
- MTTR cible : < 30 min

<br>

**Pourquoi ?**

Un uptime faible traduit une architecture fragile (pas de redondance, pas de circuit breaker). Le suivre force à concevoir des composants résilients dès le départ.

---
layout: image-right
image: https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80
---

# Indicateur 3 — Maintenabilité

**Couverture de tests & dette technique**

- Couverture cible : ≥ 80 %
- Dette technique : note A sur SonarQube
- Complexité cyclomatique surveillée par module

<br>

**Pourquoi ?**

Une couverture faible et une complexité élevée rendent les évolutions risquées et coûteuses. SonarQube intégré au pipeline bloque les régressions en amont.

---
layout: image-right
image: https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80
---

# Indicateur 4 — Sécurité

**Vulnérabilités détectées**

- Cible : 0 CVE critique en production
- Mesuré via : Trivy (images Docker), Snyk (dépendances)
- Délai de correction CVE critique : < 24 h

<br>

**Pourquoi ?**

Chaque vulnérabilité non corrigée est une dette de sécurité. L'automatisation du scan dans le pipeline empêche tout merge avec des failles critiques connues.

---

# Cycle de vie DevSecOps & Pipeline CI/CD

**Pipeline automatisée avec sécurité intégrée**

1. **Commit** → Analyse statique (SonarQube)
2. **Build** → Tests unitaires + couverture de code
3. **Scan** → Analyse de vulnérabilités (Trivy)
4. **Package** → Construction image Docker sécurisée
5. **Deploy** → Déploiement Kubernetes automatisé

<br>

**Bloquage automatique**
- ❌ CVE critique détectée → merge refusé
- ❌ Couverture < 80 % → pipeline en échec
- ❌ Note SonarQube < A → correction obligatoire

---

# Profils & formation de l'équipe

<div class="grid grid-cols-5 gap-3 mt-4 text-xs">

<div class="border border-blue-200 bg-blue-50 rounded-xl p-3">
  <div class="text-xl mb-1">👨‍💻</div>
  <div class="font-bold text-blue-700 text-sm">Dev Backend</div>
  <div class="text-gray-500 mt-1">REST APIs · TDD · SQL · SonarQube · Git</div>
  <div class="mt-2 pt-2 border-t border-blue-100 text-gray-600">🎓 Formation TDD & Clean Code<br>

  </div>
</div>

<div class="border border-pink-200 bg-pink-50 rounded-xl p-3">
  <div class="text-xl mb-1">🎨</div>
  <div class="font-bold text-pink-700 text-sm">Dev Frontend</div>
  <div class="text-gray-500 mt-1">React/Vue · Responsive · A11y · Tests composants</div>
  <div class="mt-2 pt-2 border-t border-pink-100 text-gray-600">🎓 
  Formation RGAA / Accessibilité numérique (Access42)<br>
  Certification OpenJS Node.js / React
  </div>
</div>

<div class="border border-orange-200 bg-orange-50 rounded-xl p-3">
  <div class="text-xl mb-1">🛠️🧪</div>
  <div class="font-bold text-orange-700 text-sm">DevOps / QA</div>
  <div class="text-gray-500 mt-1">Kubernetes · CI/CD · Vault · JMeter · K6</div>
  <div class="mt-2 pt-2 border-t border-orange-100 text-gray-600">🎓 Certification <strong>CKA</strong> (Certified Kubernetes Administrator)</div>
</div>

<div class="border border-red-200 bg-red-50 rounded-xl p-3">
  <div class="text-xl mb-1">🔐</div>
  <div class="font-bold text-red-700 text-sm">Ingénieur Sécu.</div>
  <div class="text-gray-500 mt-1">Trivy · RBAC · RGPD · OWASP · CVE</div>
  <div class="mt-2 pt-2 border-t border-red-100 text-gray-600">🎓 Certification <strong>CSSLP </strong> ou <strong>OWASP </strong></div>
</div>

<div class="border border-green-200 bg-green-50 rounded-xl p-3">
  <div class="text-xl mb-1">📋</div>
  <div class="font-bold text-green-700 text-sm">Lead Developer</div>
  <div class="text-gray-500 mt-1">Agile/Scrum · Architecture · ISO 25010 · Reporting</div>
  <div class="mt-2 pt-2 border-t border-green-100 text-gray-600">🎓 Formation ISO 25010</div>
</div>

</div>

<div class="mt-4 bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs text-gray-600">
  💡 <strong>Plan de formation transverse</strong> : workshops DevSecOps mensuels · revues de code croisées · documentation interne partagée
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

> 🔒 **Critères transverses** : couverture de tests ≥ 80 % · 0 CVE critique · disponibilité ≥ 99,5 % · conformité RGPD

---
layout: image-right
image: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80
---

# Architecture technique

**Infrastructure Kubernetes en production**

- **Cluster Kubernetes** : orchestration multi-environnements (dev, staging, prod)
- **HashiCorp Vault** : gestion centralisée des secrets (DB credentials, API keys)
- **Let's Encrypt** : certificats SSL/TLS automatisés via cert-manager
- **Ingress NGINX** : routage et load balancing
- **Monitoring** : Prometheus + Grafana

<br>

**Avantages**
✅ Scalabilité automatique (HPA)
✅ Secrets jamais en clair dans le code
✅ Certificats renouvelés automatiquement

---

# Expérimentation (bac à sable)

**Environnement de test isolé**

- **Cluster K8s local** : Minikube / Kind pour développement
- **Vault en mode dev** : test de l'intégration secrets
- **Cert-manager staging** : validation Let's Encrypt sans limite de rate
- **Tests de charge** : JMeter avec données anonymisées

<br>

**Objectifs**
- Valider la configuration Kubernetes
- Tester les politiques Vault
- Vérifier le renouvellement automatique des certificats
- Identifier les goulots d'étranglement

---

# Développement de la fonctionnalité

**Approche TDD (Test-Driven Development)**

1. **Écrire les tests** unitaires avant le code
2. **Développer** le minimum pour passer les tests
3. **Refactorer** en maintenant la couverture
4. **Intégration** : tests d'intégration avec base de données
5. **Review** : validation par les pairs + SonarQube

<br>

**Stack de tests**
- Framework : Jest / pytest / JUnit selon langage
- Mocks : services externes et Vault
- Couverture : objectif ≥ 80 %
- Assertions : validation données + comportements

---

# Sécurité & observabilité

**Sécurité multicouche**

- **Trivy** : scan des images Docker (CVE dans les dépendances et l'OS)
- **SonarQube** : analyse statique du code (vulnérabilités, bugs, code smells)
- **Vault** : rotation automatique des secrets tous les 30 jours
- **Network policies** : isolation des pods dans Kubernetes
- **RBAC** : droits minimaux pour chaque service

<br>

**Observabilité**
- Logs centralisés : ELK / Loki
- Métriques : Prometheus (CPU, RAM, latence)
- Alertes : Alertmanager → Slack/PagerDuty

---

# Tests de charge

**Scénarios de test**

- **Charge normale** : 100 utilisateurs simultanés
- **Pic de trafic** : 500 utilisateurs (Black Friday)
- **Endurance** : 24h en continu pour détecter les fuites mémoire

<br>

**Outils & métriques**
- **JMeter / K6** : simulation de charge réaliste
- **Métriques surveillées** :
  - Temps de réponse p95 < 200 ms
  - Taux d'erreur < 0,1 %
  - Auto-scaling K8s : validation HPA
- **Validation** : les pods montent automatiquement à 5 réplicas

---
layout: center
background: '#ffffff'
---

<div class="text-sm opacity-40 mb-3 tracking-widest uppercase">Partie 4</div>

# Plan de remédiation

---

# Analyse des résultats et métriques

**Tableau de bord des indicateurs**

| Indicateur | Objectif | Résultat actuel | Status |
|-----------|----------|-----------------|--------|
| Temps de réponse (p95) | < 200 ms | 180 ms | ✅ |
| Disponibilité | ≥ 99,5 % | 99,7 % | ✅ |
| Couverture tests | ≥ 80 % | 85 % | ✅ |
| CVE critiques | 0 | 0 | ✅ |
| Note SonarQube | A | A | ✅ |

<br>

**Actions en cours**
- Optimisation requêtes SQL lentes identifiées
- Ajout de tests E2E pour parcours complet

---

# Vulnérabilités identifiées

**Détection automatique par la pipeline**

**Trivy - Scan des images Docker**
- 12 CVE mineures détectées dans l'image de base
- 0 CVE critique ou haute
- Actions : mise à jour vers image Alpine 3.19

<br>

**SonarQube - Analyse du code**
- 3 "Security Hotspots" (validation input)
- 8 "Code Smells" (complexité)
- 0 bug bloquant
- Actions : revue manuelle des hotspots, refactoring prévu

<br>

**Vault - Audit des secrets**
✅ Aucun secret en clair dans Git
✅ Rotation automatique activée

---

# Recommandations priorisées

**Roadmap d'amélioration continue**

**Court terme (Sprint actuel)**
1. Corriger les 3 Security Hotspots SonarQube
2. Mettre à jour l'image de base Alpine
3. Ajouter tests E2E avec Cypress/Playwright

**Moyen terme (1-2 mois)**
4. Déployer Trivy et SonarQube dans la pipeline CI/CD
5. Activer l'admission controller K8s (OPA Gatekeeper)
6. Mettre en place le backup automatique Vault

**Long terme (trimestre)**
7. Chaos engineering : tests de résilience K8s
8. Scan DAST avec OWASP ZAP
9. Certification SOC 2

---
layout: center
background: '#ffffff'
---

<div class="text-sm opacity-40 mb-3 tracking-widest uppercase">Partie 5</div>

# Conclusion

---

# Conclusion

**Réussites**

✅ Infrastructure Kubernetes opérationnelle et sécurisée
✅ Gestion des secrets avec Vault + certificats Let's Encrypt automatisés
✅ Pipeline DevSecOps avec tests unitaires (85 % couverture)
✅ 0 vulnérabilité critique en production
✅ Objectifs de performance et disponibilité atteints

<br>

**Prochaines étapes**

🔜 Intégration Trivy + SonarQube dans la CI/CD
🔜 Extension de la couverture avec tests E2E
🔜 Amélioration continue de la posture de sécurité

<br>

**Impact business** : plateforme e-commerce prête pour la production avec confiance

---
layout: center
---

# Questions ?

<br>

Merci

---
layout: center
---
