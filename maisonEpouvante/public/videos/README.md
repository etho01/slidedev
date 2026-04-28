# Dossier Vidéos

Placez vos fichiers vidéo ici pour les utiliser dans les slides.

## Formats supportés
- MP4 (recommandé)
- WebM
- OGG

## Exemple d'utilisation dans slides.md

```markdown
<video controls width="800">
  <source src="/videos/votre-video.mp4" type="video/mp4">
  Votre navigateur ne supporte pas la lecture de vidéos.
</video>
```

## Options utiles

- `controls` : affiche les contrôles de lecture
- `autoplay` : démarre automatiquement (ajoutez `muted` pour éviter les blocages du navigateur)
- `loop` : répète la vidéo en boucle
- `width` / `height` : dimensions de la vidéo

Exemple avec lecture automatique en boucle :
```markdown
<video autoplay loop muted width="800">
  <source src="/videos/votre-video.mp4" type="video/mp4">
</video>
```
