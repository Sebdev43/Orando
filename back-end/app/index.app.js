// Importation des modules
import usersRouter from "./routers/userRouter.js";
import hikesRouter from "./routers/hikesRouter.js";
import bookmarksRouter from "./routers/bookmarksRouter.js";
import authRouter from "./routers/authRouter.js";

/**
 * Initialise Swagger pour la documentation des API.
 * @param {import('express').Application} app -L'application Express.
 */
import { swaggerMiddleware } from "./middlewares/swaggerMiddleware.js";

export function initializeSwagger(app) {
  swaggerMiddleware(app);
}

/**
 * Initialise les routes de l'application.
 * @param {import('express').Application} app - L'application Express.
 */
export function initializeRoutes(app) {
  app.use("/users", usersRouter);
  app.use("/hikes", hikesRouter);
  app.use("/bookmarks", bookmarksRouter);
  app.use("/accounts", authRouter);
}

