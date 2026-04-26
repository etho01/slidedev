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
layout: image-right
image: https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80
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
layout: image-right
image: https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80
---

# Cycle de vie DevSecOps & Pipeline CI/CD

<!-- À compléter -->

---
layout: image-right
image: https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80
---

# Compétences et formation

<!-- À compléter -->

---
layout: center
background: '#ffffff'
---

<div class="text-sm opacity-40 mb-3 tracking-widest uppercase">Partie 3</div>

# Implémentation technique

---
layout: image-right
image: https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80
---

# User Story & critères d'acceptation

<!-- À compléter -->

---
layout: image-right
image: https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80
---

# Architecture technique

<!-- À compléter -->

---
layout: image-right
image: https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80
---

# Expérimentation (bac à sable)

<!-- À compléter -->

---
layout: image-right
image: https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80
---

# Développement de la fonctionnalité

<!-- À compléter -->

---
layout: image-right
image: https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80
---

# Sécurité & observabilité

<!-- À compléter -->

---
layout: image-right
image: https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80
---

# Tests de charge

<!-- À compléter -->

---
layout: center
background: '#ffffff'
---

<div class="text-sm opacity-40 mb-3 tracking-widest uppercase">Partie 4</div>

# Plan de remédiation

---
layout: image-right
image: https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80
---

# Analyse des résultats et métriques

<!-- À compléter -->

---
layout: image-right
image: https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&q=80
---

# Vulnérabilités identifiées

<!-- À compléter -->

---
layout: image-right
image: https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80
---

# Recommandations priorisées

<!-- À compléter -->

---
layout: center
background: '#ffffff'
---

<div class="text-sm opacity-40 mb-3 tracking-widest uppercase">Partie 5</div>

# Conclusion

---

# Conclusion

<!-- À compléter -->

---
layout: center
---

# Questions ?

<br>

Merci

---
layout: center
---
