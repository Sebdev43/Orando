import express from "express";
const router = express.Router();
import { getAllHikes, getHikeById, getRandomHikes } from "../controllers/hikesController.js";

/**
 * @swagger
 * tags:
 *   - name: Hikes
 *     description: Gestion des randonnées
 */

/**
 * Route pour récupérer 4 randonnées de manière aléatoire
 * @swagger
 * /hikes/random:
 *   get:
 *     summary: Récupérer 4 randonnées de manière aléatoire
 *     tags: [Hikes]
 *     responses:
 *       200:
 *         description: 4 randonnées aléatoires
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
router.get('/random', getRandomHikes);

/**
 * Route pour récupérer la liste des randonnées avec pagination et tri par date de création
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
router.get("/", getAllHikes);

/**
 * Route pour récupérer une randonnée par son ID
 * @swagger
 * /hikes/{id}:
 *   get:
 *     summary: Récupérer une randonnée par son ID
 *     tags: [Hikes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la randonnée
 *     responses:
 *       200:
 *         description: Détails de la randonnée
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 picture:
 *                   type: array
 *                   items:
 *                     type: string
 *                 difficulty:
 *                   type: string
 *                 time:
 *                   type: integer
 *                 distance:
 *                   type: number
 *                 localisation:
 *                   type: string
 *                 details:
 *                   type: string
 *                 gps_coordinate:
 *                   type: object
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *       404:
 *         description: Randonnée non trouvée
 */
router.get("/:id", getHikeById);

export default router;
