import express from "express";
import {
  updateUser,
  getUserById,
  deleteUser,
} from "../controllers/userController.js";

import { userValidators, validateUpdateUser } from "../validators/usersValidators.js";
import { validateRequest } from "../middlewares/validateReqMiddleware.js";
import { authenticateJWT } from "../middlewares/jwtMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Operations related to users
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Récupérer le profil de l'utilisateur authentifié
 *     description: Retrieve user details by their token
 *     tags: [Users]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       '200':
 *         description: User found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 nickname:
 *                   type: string
 *                 localisation:
 *                   type: string
 *                 email:
 *                   type: string
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 */
router.get("/", authenticateJWT, getUserById);

/**
 * @swagger
 * /users:
 *   patch:
 *     summary: Mettre à jour les informations de l'utilisateur authentifié
 *     description: Permet de mettre à jour une seule information de l'utilisateur à la fois. Fournissez uniquement le champ que vous souhaitez mettre à jour.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *                 description: Le nouveau pseudo de l'utilisateur
 *               localisation:
 *                 type: string
 *                 description: La nouvelle localisation de l'utilisateur
 *               email:
 *                 type: string
 *                 description: Le nouvel email de l'utilisateur
 *               currentPassword:
 *                 type: string
 *                 description: Le mot de passe actuel de l'utilisateur, requis pour changer le mot de passe
 *               newPassword:
 *                 type: string
 *                 description: Le nouveau mot de passe de l'utilisateur
 *     responses:
 *       '200':
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User updated successfully
 *                 filteredUser:
 *                   type: object
 *                   properties:
 *                     nickname:
 *                       type: string
 *                     localisation:
 *                       type: string
 *                     email:
 *                       type: string
 *       400:
 *         $ref: '#/components/responses/BadRequestError'
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         description: User not found
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
 *                   example: "Utilisateur non trouvé"
 */
router.patch("/", authenticateJWT, validateUpdateUser, userValidators,  validateRequest, updateUser);

/**
 * @swagger
 * /users:
 *   delete:
 *     summary: Supprimer un utilisateur authentifié
 *     description: Supprime un utilisateur par leur token
 *     tags: [Users]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Utilisateur supprimé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User deleted successfully
 *       401:
 *         $ref: '#/components/responses/UnauthorizedError'
 *       404:
 *         description: User not found
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
 *                   example: "Utilisateur non trouvé"
 */
router.delete("/", authenticateJWT, deleteUser);

export default router;
