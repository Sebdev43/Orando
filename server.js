/* Point d'entrée de l'appliaction*/

//* Importation des modules
import 'dotenv/config'
import express from "express";
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { initializeRoutes, initializeSwagger } from "./app/index.app.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
});
// Middleware pour parser le JSON

app.use(express.json());

// Middleware pour limiter le taux de requêtes

app.use(limiter);

// Créer un flux de write stream (en mode 'append') pour 'access.log'
const accessLogStream = createWriteStream(join(__dirname, 'access.log'), { flags: 'a' });

// Configurer morgan pour utiliser le stream de log
app.use(morgan('combined', { stream: accessLogStream }));

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