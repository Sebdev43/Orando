import express from "express";
const router = express.Router();
import {
  addBookmark,
  removeBookmark,
  getBookmark,
} from "../controllers/bookmarksController.js";
import { authenticateJWT } from "../middlewares/jwtMiddleware.js";
import { bookmarksValidators } from "../validators/bookmarksValidators.js";
import { validateRequest } from "../middlewares/validateReqMiddleware.js";

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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Randonnée ajoutée dans les favoris
 *       400:
 *         $ref: '#/components/responses/BadRequestError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         description: Hike not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Randonnée non trouvée"
 */
router.post(
  "/",
  authenticateJWT,
  bookmarksValidators,
  addBookmark
);

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
 *       400:
 *         $ref: '#/components/responses/BadRequestError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         description: Bookmark not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "error"
 *                 message:
 *                   type: string
 *                   example: "Favori non trouvé"
 */

router.delete(
  "/",
  authenticateJWT,
  bookmarksValidators,
  removeBookmark
);

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
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 */

router.get("/", authenticateJWT, getBookmark);

export default router;
