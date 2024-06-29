//* Importation des modules

import usersRouter from './routers/userRouter.js';
//import hikesRoutes from './routers/hikeRoutes.js';
import { swaggerMiddleware } from './middlewares/swaggerMiddleware.js';


//export function initializeSwagger(app){
    swaggerMiddleware(app);
//}


export function initializeRoutes(app){
    //app.use('/hikes', hikesRoutes);
    app.use('/users', usersRouter);

}


