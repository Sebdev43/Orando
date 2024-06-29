import express from "express";
const router = express.Router();

import { getAllHikes } from "../controllers/hikesController.js";
import { gpsCoordinate } from "../middlewares/wkxMiddleware.js";

/**
 * @swagger
 * tags:
 * name: Hikes
 * description: Gestion des randonnées
 */

/**
 * Route pour récupérer la liste des randonnées avec pagination, tri et ordre
 * @swagger
 * /hikes:
 *   get:
 *     summary: Récupérer la liste des randonnées
 *     tags: [Hikes]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Le numéro de la page
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: asc
 *         description: L'ordre de tri (ascendant ou descendant)
 *       - in: query
 *         name: orderBy
 *         schema:
 *           type: string
 *           enum: [id, title, distance, difficulty, time, localisation, created_at]
 *           default: id
 *         description: Le champ par lequel trier les résultats
 *     responses:
 *       200:
 *         description: La liste des randonnées
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   picture:
 *                     type: array
 *                     items:
 *                       type: string
 *                   difficulty:
 *                     type: string
 *                   time:
 *                     type: integer
 *                   distance:
 *                     type: number
 *                   localisation:
 *                     type: string
 *                   details:
 *                     type: string
 *                   gps_coordinate:
 *                     type: object
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 */

//Ici on peut ajouter le middelware gpsCoordinate si on veut tranfomer le geojson en json mais il vaut mieux ne pas s'en servir car le temp de réponse est fortement allongé.
router.get("/", getAllHikes, (req, res) => {
    res.status(200).json(res.locals.hikes);
});

export default router;