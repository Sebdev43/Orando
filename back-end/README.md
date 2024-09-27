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

![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) ![Express-rate-limit](https://img.shields.io/badge/Express--Rate--Limit-000000?style=for-the-badge&logo=express&logoColor=white) ![Express-validator](https://img.shields.io/badge/Express--Validator-000000?style=for-the-badge&logo=express&logoColor=white) ![PG](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white) ![Dotenv](https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black) ![File-stream-rotator](https://img.shields.io/badge/File--Stream--Rotator-000000?style=for-the-badge) ![Morgan](https://img.shields.io/badge/Morgan-000000?style=for-the-badge&logo=morgan&logoColor=white) ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black) ![Js-Doc](https://img.shields.io/badge/Js--Doc-000000?style=for-the-badge&logo=jsdoc&logoColor=white) ![Scrypt](https://img.shields.io/badge/Scrypt-000000?style=for-the-badge&logo=scrypt&logoColor=white) ![Jsonwebtoken](https://img.shields.io/badge/JsonWebToken-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white) ![Helmet](https://img.shields.io/badge/Helmet-000000?style=for-the-badge&logo=helmet&logoColor=white) ![Node-cache](https://img.shields.io/badge/Node--Cache-000000?style=for-the-badge) ![Nodemailer](https://img.shields.io/badge/Nodemailer-000000?style=for-the-badge&logo=nodemailer&logoColor=white) ![CORS](https://img.shields.io/badge/CORS-000000?style=for-the-badge&logo=cors&logoColor=white) ![VS Code](https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

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

- **Sébastien Robert** => [@sebdev43](https://github.com/Sebdev43)
- **Kevin Cannizzaro** => [@CannizzaroKevin](https://github.com/CannizzaroKevin)
- **Matthias Hibon** => [@Heike13](https://github.com/Heike13)
- **Jérôme de Lucia** => [@Je2222](https://github.com/Je2222)
- **O'clock** _alias_ [@Oclock](https://oclock.io/)
