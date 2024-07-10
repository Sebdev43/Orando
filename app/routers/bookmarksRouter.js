import express from "express";
const router = express.Router();
import {
  addBookmark,
  removeBookmark,
  getBookmark
} from "../controllers/bookmarksController.js";

import { authenticateJWT } from "../middlewares/jwtMiddleware.js";

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
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hikeId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Randonnée ajoutée dans les favoris
 *       400:
 *         description: Erreur dans les paramètres de la requête
 *       500:
 *         description: Erreur lors de l'ajout de la randonnée dans les favoris
 */
router.post("/", authenticateJWT, addBookmark);

/**
 * Route pour supprimer une randonnée des favoris d'un utilisateur
 * @swagger
 * /bookmarks:
 *   delete:
 *     summary: Supprimer une randonnée des favoris d'un utilisateur
 *     tags: [Bookmarks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               hikeId:
 *                 type: integer
 *     responses:
 *       204:
 *         description: Randonnée supprimée des favoris
 *       404:
 *         description: Randonnée non trouvée dans les favoris
 *       500:
 *         description: Erreur lors de la suppression de la randonnée des favoris
 */
router.delete("/", authenticateJWT, removeBookmark);

/**
 * Route pour récupérer la liste des randonnées favorites d'un utilisateur
 * @swagger
 * /bookmarks:
 *   get:
 *     summary: Récupérer la liste des randonnées favorites
 *     tags: [Bookmarks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: La liste des randonnées favorites
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   slug:
 *                     type: string
 *                   title:
 *                     type: string
 *                   description:
 *                     type: string
 *                   pictures:
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
 *       500:
 *         description: Erreur lors de la récupération des randonnées favorites
 */
router.get("/", authenticateJWT, getBookmark);

export default router;
