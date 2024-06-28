/* Point d'entrée de l'appliaction*/

//* Importation des modules
import express from 'express';
//import swaggerJSDoc from 'swagger-jsdoc';
//import swaggerUi from 'swagger-ui-express';
import {initializeRoutes} from './app/index.js';

const app = express();
const port = process.env.PORT || 3000;

//* Configuration de Swagger

const swaggerOptions = {
    openapi:'3.0.0',
    info: {
        title: 'API de O\'rando',
        version: '1.0.0',
        description: 'Ce projet vise à développer un site internet de randonnées, permettant aux utilisateurs de découvrir et de partager des itinéraires de randonnées. La partie backend de ce projet utilise Node.js pour le serveur et PostgreSQL comme base de données. Nous avons mis en place une API RESTful pour gérer les opérations CRUD (Create, Read, Update, Delete) sur les données de randonnées.',
    
    },
    servers: [
        {
            url: 'http://localhost:3000'
        }
    ],
    apis: ['./app/routes/*.js', './app/controllers/*.js','.app/datamappers/*.js'],//chemin vers les fichiers contenant les annotations swagger
};

// Initialisation de Swagger-jsdoc

//const swaggerDocs = swaggerJSDoc(swaggerOptions);
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middleware pour parser le JSON

app.use(express.json());

// Initialisation des routes

initializeRoutes(app);

// Démarrage du serveur

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});