import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import xss from "xss-clean";
import logger from "./app/middlewares/loggerMiddleware.js";
import { initializeRoutes, initializeSwagger } from "./app/index.app.js";
import { errorHandler } from "./app/errors/errorHandler.js";

const app = express();
const port = process.env.PORT || 4000;

const whitelist = [
  "http://o-rando.com",
  "http://www.o-rando.com",
  "https://o-rando.com",
  "https://www.o-rando.com",
  "http://localhost:5173",
  "https://localhost:5173",
  "http://localhost:4000",
  "https://localhost:4000",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, POST, PATCH, DELETE, OPTIONS",
  allowedHeaders:
    "Authorization, Content-Type, X-Customer-Software, X-My-Custom,Accept, Accept-Language",
  credentials: true,
};

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet({ contentSecurityPolicy: false }));
app.use(limiter);
app.use(xss());
app.use(logger);

initializeSwagger(app);
initializeRoutes(app);

app.set("trust proxy", 1);

//Middleware pour les routes non trouvées
app.use((req, res, next) => {
  const error = new Error("Route non trouvée");
  error.statusCode = 404;
  next(error);
});

// Middleware de gestion des erreurs

app.use(errorHandler);

app.use((req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});


if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
  });
}

export default app;
