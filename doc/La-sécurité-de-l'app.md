# Meusures de Sécurité de l'application

Notre Api utilise plusieurs meusures de sécurité pour protéger les données les données des utilisateurs et garantir le bon fonctionnement du système. Voici une description des principales mesures de sécurité mises en place.

## 1. Utilisation de `helmet` pour la Sécurité des En-têtes HTTP

[Helmet](https://github.com/helmetjs/helmet) est utilisé pour configurer les en-têtes HTTP de manière sécurisée. Cela aide à protéger l'application contre diverses vulnérabilités bien connues du web en paramétrant correctement les en-têtes HTTP. Par exemple, `helmet` aide à prévenir les attaques de type cross-site scripting (XSS), clickjacking, et autres.

```javascript
app.use(helmet({ contentSecurityPolicy: false }));
```

## 2. Protection contre les Attaques XSS avec `xss-clean`

[XSS Clean](https://github.com/jsonmaur/xss-clean) est utilisé pour prévenir les attaques de type cross-site scripting (XSS). Cette bibliothèque nettoie les entrées utilisateur pour éliminer les scripts malveillants.

```javascript
app.use(xss());
```

## 3. Limitation du Taux de Requête avec `express-rate-limit`

[express-rate-limit](https://github.com/express-rate-limit/express-rate-limit) est utilisé pour limiter le nombre de requêtes que chaque IP peut faire à l'application. Cela aide à prévenir les attaques par déni de service (DDoS) et le bruteforcing.

```javascript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limite chaque IP à 100 requêtes par fenêtre de 15 minutes
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);
```

## 4. Configuration CORS Sécurisée

Le [CORS(Cross-Origin Resource Sharing)](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS) est configuré de manière à n'autoriser que certaines origines de confiance. Cela empêche les requêtes non autorisées depuis des domaines externes.

```javascript
const whitelist = [
  "http://o-rando.com",
  "http://www.o-rando.com",
  "https://o-rando.com",
  "https://www.o-rando.com",
  "http://localhost:5173",
  "https://localhost:5173",
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
    "Authorization, Content-Type, X-Customer-Software, X-My-Custom, Accept, Accept-Language",
  credentials: true,
};

app.use(cors(corsOptions));
```

## 5. Redirection HTTP vers HTTPS

Pour garantir que toutes les communications avec l'application sont sécurisées, les requêtes HTTP sont redirigées vers HTTPS.

```javascript
app.use((req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});
```

## 6. Trust Proxy Configuration

L'application est configurée pour faire confiance aux proxys inverses, ce qui est essentiel pour l'utilisation des configurations Nginx.

```javascript
app.set("trust proxy", 1);
```

## 7. Journalisation des Requêtes avec `morgan`

[Morgan](https://github.com/expressjs/morgan) est utilisé pour journaliser les requêtes HTTP. Cela permet de surveiller et d'analyser les requêtes entrantes pour détecter des comportements suspects ou malveillants.

```javascript
import { createWriteStream } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const accessLogStream = createWriteStream(join(__dirname, "access.log"), {
  flags: "a",
});

app.use(morgan("combined", { stream: accessLogStream }));
```

## 8. Gestion des Erreurs

Une gestion des erreurs centralisée est mise en place pour capturer les erreurs non gérées et retourner une réponse JSON avec un message d'erreur générique.

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Erreur interne du serveur" });
});
```
