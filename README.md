# O'Rando - Projet d'Apothéose

Bienvenue sur le dépôt O'Rando, le projet final réalisé dans le cadre de la formation de développeur full-stack chez O'clock. Ce projet a pour objectif de permettre aux utilisateurs de découvrir et suivre des randonnées de manière intuitive et interactive.

## Présentation du Projet

O'Rando est une application web complète qui offre une expérience utilisateur riche pour les amateurs de randonnée. Le projet se compose de deux principaux modules :

- Frontend : Développé avec React et Redux, l'interface utilisateur permet de visualiser les itinéraires de randonnée sur une carte interactive (utilisant MapLibre), de gérer les comptes utilisateurs, et bien plus encore. Il est optimisé pour une utilisation sur différents appareils, incluant les mobiles.
- Backend : Propulsé par Node.js et Express, le backend gère les opérations CRUD sur les données, assure l'authentification des utilisateurs via JWT, et intègre une base de données PostgreSQL avec le support de PostGIS pour les données géospatiales.

Vsionnez notre cahier des charges ici :
[Cahier des charges O'Rando](https://silly-practice-5f9.notion.site/Cahier-des-charges-O-Rando-ee581121c0614dcf9f2000b7eac982ac)


## Fonctionnalités Clés

- Gestion des Utilisateurs : Inscription, connexion, récupération de mot de passe et gestion de profil.

- Itinéraires de Randonnée : Création, modification, suppression et visualisation des parcours avec des détails géographiques précis.

- Carte Interactive : Affichage dynamique des itinéraires sur une carte avec zoom et suivi des parcours.
- Sécurité : Authentification sécurisée avec JWT, protection contre les attaques XSS, et validation des données utilisateur.

## Prérequis

- Node.js
- PostgreSQL
- PNPM ou NPM
- Sqitch
- Docker (optionnel, pour le développement)

## Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/Sebdev43/Orando-Full.git
```

2. Installer les dépendances pour le frontend et le backend :

```bash
cd orando-front && pnpm install
cd ../orando-back && pnpm install
```

3. Configurer les variables d'environnement : Créer un fichier .env pour le backend avec les informations de connexion à la base de données, les clés JWT, etc.

4. Démarrer les serveurs :

- Frontend :

```bash
pnpm dev
```

- Backend :

```bash
npm start
```
