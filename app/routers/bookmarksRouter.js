import express from "express";
const router = express.Router();
import { addBookmark } from "../controllers/bookmarksController.js";

/**
 * @swagger
 * tags:
 *   - name: Bookmarks
 *     description: Gestion des favoris
 */

/**
 * Route pour ajouter une randonnée dans les favoris d'un utilisateur
 * @swagger
 * /bookmarks:
 *   post:
 *     summary: Ajouter une randonnée dans les favoris d'un utilisateur
 *     tags: [Bookmarks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               hikeId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Randonnée ajoutée dans les favoris
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 user_id:
 *                   type: integer
 *                 hike_id:
 *                   type: integer
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Erreur dans les paramètres de la requête
 *       500:
 *         description: Erreur lors de l'ajout de la randonnée dans les favoris
 */
router.post("/", addBookmark);

export default router;
