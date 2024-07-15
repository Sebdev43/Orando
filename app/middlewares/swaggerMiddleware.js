import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import express from 'express';

// Configuration de Swagger
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de O'rando",
      version: "1.0.0",
      description: "Ce projet vise à développer un site internet de randonnées, permettant aux utilisateurs de découvrir et de partager des itinéraires de randonnées. La partie backend de ce projet utilise Node.js pour gérer les requêtes et fournir les données nécessaires.",
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Serveur de développement local",
      },
      {
        url: "https://o-rando.com",
        description: "Serveur de production",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },

  },
  apis: [
    "./app/routers/*.js",
  ], // Chemin vers les fichiers contenant les annotations swagger
};

// Initialisation de Swagger-jsdoc
const swaggerDocs = swaggerJSDoc(swaggerOptions);

export const swaggerMiddleware = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
    customCssUrl: '/swaggerCustom.css', 
    customSiteTitle: "O'Rando API Documentation",
    customfavIcon: "/logo-fond-noir.jpg",
  }));

  app.use('/swaggerCustom.css', express.static('public/swaggerCustom.css'));
  app.use('/logo.jpg', express.static('public/logo.jpg'));  
  app.use('/Favicon-blanc.jpg', express.static('public/Favicon-blanc.jpg'));
};
