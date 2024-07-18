# Projet O-Rando

Ce projet vise à développer un site internet de randonnées, permettant aux utilisateurs de découvrir et de partager des itinéraires de randonnées. La partie backend de ce projet utilise Node.js pour le serveur et PostgreSQL comme base de données. Nous avons mis en place une API RESTful pour gérer les opérations CRUD (Create, Read, Update, Delete) sur les données de randonnées.

## Fonctionnalités

- Consultation des itinéraires disponible.
- Authentification et gestion des utilisateurs.

### Pré-requis

Ce qu'il est requis pour commencer avec notre projet...

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [npm](https://www.npmjs.com/)
- [Postgis](https://postgis.net/)
- [Sqitch](https://sqitch.org/)
- [Docker](https://www.docker.com/)

### Installation

1. Clonez le dépôt Git:

   ```bash
   git clone https://github.com/O-clock-Onigiri/projet-8-o-rando-back.git
   cd projet-8-o-rando-back
   ```

2. Installez les dépendances Node.js:

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement:

   - Créez un fichier `.env` à la racine du projet et ajoutez les informations de connexion à votre base de données PostgreSQL:

   ```bash
   mv .env.example .env
   ```

   ```plaintext


   DB_USER=votre_utilisateur
   DB_HOST=localhost
   DB_NAME=nom_de_votre_base
   DB_PASSWORD=votre_mot_de_passe
   DB_PORT=5432
   ```

   - Créez un fichier `sqitch.conf` à la racine du projet et ajoutez la configuration de sqtich:

   ```bash
    mv sqitch.examples.conf sqitch.conf
   ```

4. Initialisez la base de données dans le terminal:

   ```bash
   createdb orando

   sqitch deploy

   ```

## Démarrage

Pour démarrer le serveur http:

```bash
npm run dev
```

## Documentation de l'API

Ce projet utilise Swagger pour documenter l'API RESTful.
Swagger permet de générer une documentation interactive et facilement navigable, ce qui facilite la compréhension et l'uilisation des différentes endpointss de l'API.

### Accès à la documentation Swagger

Pour accéder à la documentation Swagger, démarrez l'application et rendez-vous à l'URL suivante dans votre navigateur : http://localhost:4000/api-docs/

## Fabriqué avec

Voici les programmes/logiciels/ressources que vous nous avons utilisé pour développer notre projet :

- [Express](https://expressjs.com/)
- [Express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
- [Express-validator](https://www.npmjs.com/package/express-validator)
- [PG](https://www.npmjs.com/package/pg)
- [Dot-env](https://www.npmjs.com/package/dotenv)
- [File-stream-rotator](https://www.npmjs.com/package/file-stream-rotator)
- [Swagger](https://swagger.io/resources/open-api/)
- [Js-Doc](https://jsdoc.app/)
- [Scrypt](https://www.npmjs.com/package/scrypt)
- [Jsonwebtoken](https://jwt.io/)
- [Helmet](https://www.npmjs.com/package/helmet)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Node-cache](https://www.npmjs.com/package/node-cache)
- [Nodemailer](https://www.npmjs.com/package/nodemailer)
- [Cors](https://www.npmjs.com/package/cors)
- [Vs-code](https://code.visualstudio.com/)

### Sécurité de l'Application

Pour une documentation complète sur les aspects de sécurité de cette application, veuillez consulter le fichier [Sécurité de l'application](./doc/La-sécurité-de-l'app.md)

### Plusieurs documentation disponible si besoin

- [Installation de Docker](./doc/docker-install.md)
- [Sauvegarde automatique de PostgreSQL sur Gdrive](./doc/Documentation%20de%20mise%20en%20place%20des%20sauvergardes%20de%20la%20Bdd.md)
- [Vérification de l'Email et Authentification JWT](./doc/Documentation%20pour%20la%20mise%20en%20place%20de%20la%20vérification%20de%20l'email%20et%20l'authentification%20JWT.md)

## Auteurs

Liste des auteurs du projet:

- **O'clock** _alias_ [@Oclock](https://oclock.io/)
- **Robert Sébastien** _alias_ [@sebdev43](https://github.com/Sebdev43)
- **Cannizzaro Kevin** _alias_ [@CannizzaroKevin](https://github.com/CannizzaroKevin)
