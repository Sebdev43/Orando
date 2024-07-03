/* Point d'entrée de l'appliaction*/

//* Importation des modules
import 'dotenv/config'

import express from "express";
import { initializeRoutes, initializeSwagger } from "./app/index.app.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware pour parser le JSON

app.use(express.json());

//Initialiser Swagger

initializeSwagger(app);

// Initialisation des routes

initializeRoutes(app);

if (process.env.NODE_ENV !== 'test') {
  // Démarrage du serveur uniquement si ce n'est pas en mode test
  app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
  });
}

export default app;