import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import xss from 'xss-clean';
import cors from 'cors';
import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { initializeRoutes, initializeSwagger } from './app/index.app.js';

// Déterminer le répertoire actuel pour ESM
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const port = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
});

// Créer un flux de write stream (en mode 'append') pour 'access.log'
const accessLogStream = createWriteStream(join(__dirname, 'access.log'), { flags: 'a' });

// Middleware pour parser le JSON

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Middleware de sécurité

app.use(helmet());

app.use(limiter);
app.use(morgan('combined', { stream: accessLogStream }));
app.use(xss());


app.use(cors({
  origin: '*',
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  credentials: true, // Permet à l'appelant d'accéder à l'API avec un cookie de session
}))

// Initialiser Swagger
initializeSwagger(app);

// Initialisation des routes
initializeRoutes(app);

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack); // Log l'erreur dans la console.
    res.status(500).json({ error: 'Erreur interne du serveur' }); // Envoie une réponse avec un statut 500 pour les erreurs internes.
});

if (process.env.NODE_ENV !== 'test') {
  // Démarrage du serveur uniquement si ce n'est pas en mode test
  app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
  });
}

export default app;
