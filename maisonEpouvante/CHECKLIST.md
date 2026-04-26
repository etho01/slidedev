# Checklist Évaluation - Lead Developer

## ✅ PHASE 1: Processus de développement

### Indicateurs qualité
- [ ] Identifier 4 indicateurs/métriques de qualité (ISO 25010)
- [ ] Justifier comment ils évitent la dette technique

### Cycle de vie DevSecOps
- [ ] Formaliser le cycle de vie avec démarche DevSecOps
- [ ] Préciser mesures de sécurité pour chaque étape clé
- [ ] Schématiser en détail le pipeline CI/CD
- [ ] Définir types de tests (unitaires, intégration, etc.)
- [ ] Définir outils (frameworks tests, analyse code)
- [ ] Montrer le lien outils ↔ métriques qualité

### Compétences et formation
- [ ] Cartographier les compétences nécessaires au projet
- [ ] Proposer une action de formation
- [ ] S'assurer des profils réalistes

---

## ✅ PHASE 2: Développement et déploiement

### Analyse des exigences
- [ ] Reformuler exigences fonctionnelles
- [ ] Créer backlog avec User Story
- [ ] Définir critères d'acceptation
- [ ] Réaliser schéma d'architecture technique (BDD, protocoles, frameworks)

### Expérimentation (Bac à sable)
- [ ] Sélectionner technologies critiques à tester
- [ ] Tester leur mise en œuvre
- [ ] Rédiger synthèse du protocole d'expérimentation:
  - [ ] Environnement de test
  - [ ] Étapes de reproduction
  - [ ] Difficultés rencontrées
  - [ ] Limites identifiées
  - [ ] Résultats et justification adoption/rejet

### Développement application
- [ ] Implémenter AU MINIMUM 1 fonctionnalité métier
- [ ] Respecter le backlog défini
- [ ] Créer tests d'appels ou tests d'acceptation
- [ ] Respecter l'architecture définie
- [ ] Respecter les solutions techniques retenues

### Sécurité
- [ ] Communication HTTPS/TLS
- [ ] Authentification et autorisations (ex: Keycloak)
- [ ] Détection des vulnérabilités

### Observabilité (minimum 1)
- [ ] Logs centralisés OU
- [ ] Collecte de métriques OU
- [ ] Gestion des traces distribuées

### Pipeline CI/CD
- [ ] Intégrer les principales étapes
- [ ] MINIMUM 2 types de tests évaluant les métriques
- [ ] (Optionnel) Étape de déploiement en (pré) production

### Tests de charge
- [ ] Préparer tests de charge (Siege ou JMeter)
- [ ] Démonstration montée en charge lors présentation
- [ ] (Optionnel) Intégrer au pipeline CI/CD

---

## ✅ PHASE 3: Plan de remédiation

### Analyse
- [ ] Analyser résultats des tests
- [ ] Analyser métriques collectées
- [ ] Identifier vulnérabilités potentielles
- [ ] Utiliser analyse des tests de charge

### Recommandations
- [ ] Proposer préconisations d'actions sécurité
- [ ] Adapter au contexte de l'application
- [ ] Justifier chaque recommandation

---

## ✅ SOUTENANCE (20 min + 15 min échange)

### Support de présentation
- [ ] Créer support PowerPoint (forme non évaluée)
- [ ] Schémas lisibles et complets
- [ ] Utiliser terminologie précise (public = spécialistes)
- [ ] Couvrir les 3 phases

### Démonstration
- [ ] Préparer démo fluide de l'application
- [ ] Tester la démo avant présentation
- [ ] Préparer tests de charge en direct
- [ ] ⚠️ CRÉER VIDÉO DE SECOURS en cas de problème

### Contenus à présenter
- [ ] Processus de développement et métriques
- [ ] Schéma pipeline CI/CD
- [ ] Architecture technique
- [ ] Expérimentation des technologies
- [ ] Fonctionnalité métier implémentée
- [ ] Solutions de sécurité et observabilité
- [ ] Démonstration tests de charge
- [ ] Plan de remédiation sécurité

---

## 📊 Métriques de succès

**Phase 1:**
- 4 indicateurs qualité définis et justifiés ✓
- Cycle DevSecOps complet ✓
- Pipeline CI/CD détaillé ✓
- Cartographie compétences + formation ✓

**Phase 2:**
- Minimum 1 fonctionnalité métier ✓
- Minimum 2 types de tests CI/CD ✓
- Sécurité implémentée ✓
- 1 composante observabilité ✓
- Expérimentation documentée ✓

**Phase 3:**
- Analyse complète ✓
- Vulnérabilités identifiées ✓
- Plan de remédiation justifié ✓

---

## ⚠️ Points d'attention critiques

1. **Expérimentation:** Bien choisir une technologie "critique" (pas juste REST ou tests unitaires)
2. **Tests:** Minimum 2 types de tests dans le pipeline
3. **Justifications:** Toujours justifier les choix et recommandations
4. **Terminologie:** Précision technique requise (pas de "je sais faire mais pas expliqué")
5. **Vidéo de secours:** À préparer absolument pour éviter "l'effet démo"
6. **Métriques ↔ Outils:** Bien montrer le lien entre outils et suivi des métriques
7. **Dette technique:** Expliquer comment les métriques l'évitent
