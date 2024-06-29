import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

//* Configuration de Swagger

const swaggerOptions = {
  definition: {  
  openapi: "3.0.0",
    info: {
      title: "API de O'rando",
      version: "1.0.0",
      description:
        "Ce projet vise à développer un site internet de randonnées, permettant aux utilisateurs de découvrir et de partager des itinéraires de randonnées. La partie backend de ce projet utilise Node.js pour le serveur et PostgreSQL comme base de données. Nous avons mis en place une API RESTful pour gérer les opérations CRUD (Create, Read, Update, Delete) sur les données de randonnées.",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
    apis: [
      "./app/routers/*.js",
    ], //chemin vers les fichiers contenant les annotations swagger
  };


  // Initialisation de Swagger-jsdoc

const swaggerDocs = swaggerJSDoc(swaggerOptions);

export const swaggerMiddleware = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};