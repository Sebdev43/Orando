//* Importation des modules

//import usersRoutes from './routers/userRoutes.js';
import hikesRouter from './routers/hikesRouter.js';
import { swaggerMiddleware } from './middlewares/swaggerMiddleware.js';

export function initializeSwagger(app){
    swaggerMiddleware(app);
}


export function initializeRoutes(app){
    app.use('/hikes', hikesRouter);
    //app.use('/users', usersRoutes);

}

