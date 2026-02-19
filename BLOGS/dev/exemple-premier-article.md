---
title: "Mon premier article"
date: "2026-02-17"
category: "dev"
tags: ["react", "kurdant", "blog"]
author: "Hugo"
excerpt: "Ceci est un article de test pour valider le systeme de blogs local avec Markdown natif."
slug: "exemple-premier-article"
---

# Mon premier article

Bienvenue sur le nouveau systeme de blog **Kurdant.fr** !

## Pourquoi Markdown local ?

Ce systeme utilise des fichiers Markdown locaux au lieu d'une API externe comme WISP. Avantages :

- **Controle total** sur le contenu
- **Performance** maximale (pas de requetes API)
- **Simplicite** de deploiement
- **Offline-first** - fonctionne sans internet

## Fonctionnalites

### Frontmatter YAML

Chaque article possede des metadonnees :

```yaml
---
title: "Titre de l'article"
date: "2026-02-17"
category: "dev"
tags: ["react", "javascript"]
slug: "url-de-l-article"
---
```

### Syntaxe Markdown complete

Vous pouvez utiliser :

- **Gras** et *italique*
- `code inline`
- Listes ordonnees et non-ordonnees
- Blocs de code avec syntax highlighting
- Images, liens, citations

### Exemple de code

```javascript
const useLocalBlog = () => {
  const blogs = useMemo(() => {
    const files = import.meta.glob('/BLOGS/**/*.md', { as: 'raw', eager: true });
    return Object.entries(files).map(([path, content]) => {
      const { data, content: markdown } = matter(content);
      return { ...data, content: markdown };
    });
  }, []);
  
  return { blogs };
};
```

## Categories disponibles

Le blog supporte 4 categories principales :

1. **Dev** - Articles techniques et tutoriels
2. **Jeux Video** - Gaming et game dev
3. **IA** - Intelligence artificielle
4. **Autre** - Contenu varie

## Design blanc

Le design a ete mis a jour :

- Remplacement des couleurs **violet** par **blanc**
- Effets neon blanc au hover
- Contrastes ameliores
- Esthetique cyberpunk maintenue

---

**Le systeme fonctionne parfaitement !**

Si vous voyez cet article, c'est que tout est operationnel.

[Retour au blog](/blog)
