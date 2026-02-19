---
title: "Construire un MCP Server en Node.js avec Docker"
date: "2026-02-19"
category: "dev"
tags: ["nodejs", "docker", "websocket", "backend", "devops"]
author: "Hugo"
excerpt: "Comment j'ai mis en place un serveur WebSocket multi-clients avec Node.js et Docker — de l'init au conteneur prêt à déployer."
slug: "mcp-server-nodejs-docker"
---

J'avais besoin de faire communiquer plusieurs clients en temps réel sur un projet perso.
J'aurais pu faire simple. J'ai fait simple — mais avec Docker parce que j'en avais marre
de "ça marche sur ma machine". Voilà ce que ça donne.

## Prérequis

- Node.js 20+ installé
- Docker et Docker Compose opérationnels
- Notions de base JavaScript / async

## Pourquoi Node.js

- **Événementiel et non bloquant** : gère des centaines de connexions simultanées sans transpirer
- **WebSocket natif** : librairie `ws` simple et performante
- **Écosystème riche** : express, sessions, bases de données — tout existe

## Pourquoi Docker

- **Isolation totale** : le serveur se comporte identiquement partout
- **Zéro config serveur** : plus de "installe Node en version X sur le VPS"
- **Scalabilité** : lancer plusieurs instances en une commande

Node.js gère la logique temps réel, Docker garantit que ça tourne partout pareil.

## Ce qui change par rapport à un serveur classique

**Avant (sans Docker)**
- Configurer manuellement l'environnement sur chaque machine
- Gérer les versions Node à la main
- "Ça marche en local mais pas en prod"

**Avec Docker**
- Un `Dockerfile` = l'environnement documenté et reproductible
- `docker run` et c'est parti, sur n'importe quelle machine
- Les variables d'env et volumes gérés proprement

## Mise en place

### 1. Initialiser le projet

On part de zéro avec les trois deps essentielles.

```bash
mkdir mcp-server && cd mcp-server
npm init -y
npm install express ws dotenv
```

`express` pour les routes HTTP, `ws` pour le WebSocket, `dotenv` pour les variables d'env.

### 2. Le serveur WebSocket

La logique centrale : accepter des connexions et broadcaster les messages.

```js
// server.js
const express = require('express');
const { WebSocketServer } = require('ws');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;
const wss = new WebSocketServer({ noServer: true });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    // Broadcast à tous les clients connectés
    wss.clients.forEach(client => {
      if (client.readyState === ws.OPEN) client.send(`${message}`);
    });
  });
});

const server = app.listen(port);
server.on('upgrade', (req, socket, head) => {
  wss.handleUpgrade(req, socket, head, (ws) => wss.emit('connection', ws, req));
});
```

Le `upgrade` HTTP vers WebSocket se fait proprement via le même serveur Express —
pas besoin de deux ports séparés.

### 3. Dockerfile

Image légère Alpine, copie des deps, exposition du port.

```dockerfile
FROM node:20-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

L'ordre des `COPY` compte : on copie d'abord `package.json` seul pour que Docker cache
la couche `npm install` si le code change mais pas les dépendances.

### 4. Docker Compose (optionnel mais pratique en dev)

```yaml
version: '3'
services:
  mcp-server:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/usr/src/app
    environment:
      - PORT=3000
```

### 5. Lancer

```bash
docker build -t mcp-server .
docker run -p 3000:3000 mcp-server
```

Ou avec Compose :

```bash
docker-compose up --build
```

Le serveur accepte des connexions WebSocket sur `ws://localhost:3000`.

## Exploitation selon ton niveau

### Débutant
- Tester avec l'outil WebSocket de Postman ou une page HTML basique
- Observer les logs Docker en direct : `docker logs -f [id]`
- Modifier le port dans `.env` et vérifier que ça fonctionne toujours

### Intermédiaire
- Ajouter des rooms pour segmenter les clients (par topic, par projet)
- Implémenter une authentification simple via token dans l'URL
- Brancher une base de données pour persister les messages (MongoDB ou MariaDB)

### Avancé
- Déployer avec Docker Swarm ou Kubernetes pour la scalabilité horizontale
- Ajouter un load balancer (*Nginx*, *Traefik*) devant plusieurs instances
- Mettre en place du monitoring (*Prometheus*, alerting *Grafana*)

## Limites et points de vigilance

- Node.js n'est **pas fait pour les calculs lourds** — déléguer ça à des workers séparés
- Les WebSockets **ne passent pas tous les proxies** sans config spécifique
- Docker simplifie le deploy mais **la persistance des données** demande de bien gérer les volumes
- **Sécurité** : en production, toujours chiffrer (WSS), valider les inputs, gérer l'authentification

## Ce que j'en retiens

Le combo Node.js + Docker m'a appris que simplifier le deploy, c'est aussi simplifier le debug.
Avoir un environnement reproductible change vraiment l'expérience de dev. Si tu fais du
multi-clients, pars directement sur cette base — tu t'éviteras beaucoup de "ça marchait
hier" inexplicables.

## Ressources

- [Documentation ws (WebSocket pour Node.js)](https://github.com/websockets/ws)
- [Docker best practices Node.js](https://nodejs.org/en/docs/guides/nodejs-docker-webapp)
