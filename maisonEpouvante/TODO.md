# TODO - Projet Maison de l'Épouvante

## 🎯 Objectif
Développer et présenter la version 1 de la plateforme petitemaisonepouvante.com
**Rôle:** Lead Developer  
**Soutenance:** 20 min présentation + 15 min échange

---

## 📋 Tâches par phase

### PHASE 1: Processus de développement (Documentation)

#### 1.1 Métriques Qualité
- [ ] Identifier 4 indicateurs/métriques basés sur ISO 25010
  - [ ] Performance
  - [ ] Fiabilité
  - [ ] Sécurité
  - [ ] Maintenabilité
- [ ] Justifier comment chaque métrique évite la dette technique
- [ ] Créer document: `docs/metriques-qualite.md`

#### 1.2 Pipeline DevSecOps
- [ ] Formaliser le cycle de vie du développement
- [ ] Définir mesures de sécurité pour chaque étape
- [ ] Créer schéma détaillé du pipeline CI/CD
  - [ ] Étapes du pipeline
  - [ ] Types de tests (unitaires, intégration, e2e)
  - [ ] Outils (Jest, ESLint, SonarQube, etc.)
  - [ ] Lien avec les métriques qualité
- [ ] Créer: `docs/pipeline-cicd.md` + schéma

#### 1.3 Compétences & Formation
- [ ] Cartographier les compétences nécessaires
  - [ ] Compétences techniques (Vue, Node, DevOps, sécurité)
  - [ ] Compétences méthodologiques (Agile, DevSecOps)
- [ ] Proposer action de formation (ex: formation Kubernetes, sécurité OWASP)
- [ ] Créer: `docs/competences-formation.md`

---

### PHASE 2: Développement POC

#### 2.1 Backlog & Architecture
- [ ] Sélectionner la fonctionnalité métier à implémenter (ex: authentification + catalogue produits)
- [ ] Créer User Story avec critères d'acceptation
- [ ] Créer schéma architecture technique
  - [ ] Base de données (PostgreSQL/MongoDB?)
  - [ ] Backend (Node.js + Express?)
  - [ ] Frontend (Vue.js)
  - [ ] Protocoles (REST/GraphQL, HTTPS)
  - [ ] Solutions sécurité (JWT, Keycloak?)
- [ ] Créer: `docs/backlog.md` + `docs/architecture.md`

#### 2.2 Expérimentation Bac à Sable
- [ ] Sélectionner technologie critique à expérimenter (exemples):
  - [ ] Option 1: Déploiement Kubernetes + Ingress + cert-manager
  - [ ] Option 2: Pipeline CI/CD avec GitHub Actions + Docker
  - [ ] Option 3: Système observabilité (Prometheus + Grafana)
  - [ ] Option 4: Service mesh (Istio)
- [ ] Tester la mise en œuvre
- [ ] Documenter le protocole d'expérimentation:
  - [ ] Environnement de test
  - [ ] Étapes de reproduction
  - [ ] Difficultés rencontrées
  - [ ] Limites identifiées
  - [ ] Résultats et justification
- [ ] Créer: `docs/experimentation.md`

#### 2.3 Développement Application
- [ ] Setup projet
  - [ ] Initialiser repo Git
  - [ ] Structure du projet (frontend/backend)
  - [ ] Fichiers de configuration
- [ ] Développer la fonctionnalité métier
  - [ ] Backend: API (minimum 1 endpoint fonctionnel)
  - [ ] Frontend: Interface utilisateur
  - [ ] Base de données: Schéma et connexion
- [ ] Implémenter sécurité
  - [ ] HTTPS/TLS
  - [ ] Authentification (JWT ou OAuth2)
  - [ ] Scan vulnérabilités (npm audit, Snyk)
- [ ] Implémenter observabilité (choisir 1):
  - [ ] Logs centralisés (Winston + ELK?)
  - [ ] Métriques (Prometheus)
  - [ ] Traces distribuées (Jaeger)

#### 2.4 Tests & CI/CD
- [ ] Créer minimum 2 types de tests:
  - [ ] Tests unitaires (Jest/Vitest)
  - [ ] Tests d'intégration ou e2e (Cypress/Playwright)
- [ ] Configurer pipeline CI/CD
  - [ ] GitHub Actions ou GitLab CI
  - [ ] Build automatique
  - [ ] Exécution des tests
  - [ ] Analyse qualité code (SonarQube/ESLint)
  - [ ] (Optionnel) Déploiement automatique
- [ ] Lier tests aux métriques qualité

#### 2.5 Tests de Charge
- [ ] Installer outil (Siege ou JMeter)
- [ ] Créer scénarios de tests de charge
- [ ] Préparer démonstration pour soutenance
- [ ] (Optionnel) Intégrer au pipeline CI/CD

---

### PHASE 3: Plan de Remédiation

#### 3.1 Analyse Sécurité
- [ ] Analyser résultats des tests automatisés
- [ ] Analyser métriques collectées
- [ ] Exécuter tests de charge et analyser résultats
- [ ] Identifier vulnérabilités potentielles:
  - [ ] OWASP Top 10
  - [ ] Dépendances obsolètes
  - [ ] Configurations non sécurisées
  - [ ] Problèmes de performance

#### 3.2 Recommandations
- [ ] Proposer plan de remédiation:
  - [ ] Actions correctives par vulnérabilité
  - [ ] Priorisation (critique/haute/moyenne/faible)
  - [ ] Justification de chaque recommandation
  - [ ] Estimation effort/impact
- [ ] Créer: `docs/plan-remediation.md`

---

### SOUTENANCE

#### Support Présentation
- [ ] Créer PowerPoint/slides
  - [ ] Introduction projet
  - [ ] Phase 1: Processus et métriques
  - [ ] Phase 2: Architecture et développement
  - [ ] Phase 3: Sécurité et remédiation
  - [ ] Conclusion
- [ ] Intégrer schémas lisibles:
  - [ ] Architecture technique
  - [ ] Pipeline CI/CD
  - [ ] Cartographie compétences

#### Démonstration
- [ ] Préparer démo application fonctionnelle
- [ ] Tester la démo (éviter effet démo!)
- [ ] Enregistrer vidéo de secours
- [ ] Préparer démonstration tests de charge en direct

#### Documents finaux
- [ ] Vérifier tous les docs sont complets
- [ ] Vérifier terminologie technique précise
- [ ] Relire justifications et recommandations

---

## 📁 Structure Documentation à créer

```
docs/
├── metriques-qualite.md
├── pipeline-cicd.md
├── competences-formation.md
├── backlog.md
├── architecture.md
├── experimentation.md
└── plan-remediation.md

schemas/
├── architecture-technique.png/svg
├── pipeline-cicd.png/svg
└── competences.png/svg
```

---

## ⏰ Planning suggéré

- **Semaine 1-2:** Phase 1 (Documentation processus)
- **Semaine 3-5:** Phase 2 (Développement POC)
- **Semaine 6:** Phase 3 (Analyse sécurité)
- **Semaine 7:** Préparation soutenance + répétitions

---

## 🔗 Ressources utiles

- ISO 25010: https://iso25000.com/index.php/en/iso-25000-standards/iso-25010
- OWASP Top 10: https://owasp.org/www-project-top-ten/
- DevSecOps: https://www.devsecops.org/
- Pipeline CI/CD best practices
- Documentation Kubernetes, Docker, GitHub Actions
