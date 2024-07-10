//* Importation des modules
import usersRouter from './routers/userRouter.js';
import hikesRouter from './routers/hikesRouter.js';
import bookmarksRouter from './routers/bookmarksRouter.js';
import authRouter from './routers/authRouter.js';
import { swaggerMiddleware } from './middlewares/swaggerMiddleware.js';


export function initializeSwagger(app) {
    swaggerMiddleware(app);
}


export function initializeRoutes(app) {
   
    app.use('/users', usersRouter);
    app.use('/hikes', hikesRouter);
    app.use('/bookmarks', bookmarksRouter);
    app.use('/accounts', authRouter);
}

