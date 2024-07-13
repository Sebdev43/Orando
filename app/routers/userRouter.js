import express from "express";
import { updateUser, getUserById ,deleteUser } from "../controllers/userController.js";

import {
  emailValidator,
  nicknameValidator,
  passwordValidator,
  currentPasswordValidator,
} from "../validators/userValidators.js";

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
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: User not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: Internal server error
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
 *       '400':
 *         description: Invalid request data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: Invalid request data
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       msg:
 *                         type: string
 *                       param:
 *                         type: string
 *                       location:
 *                         type: string
 *       '404':
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: User not found
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: Internal server error
 */
router.patch(
  "/",
  [
    nicknameValidator.optional(),
    emailValidator.optional(), 
    currentPasswordValidator.optional(),
    passwordValidator.optional({ nullable: true }),
    validateRequest,
    authenticateJWT,
  ],
  updateUser
);

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
 *       '404':
 *         description: Utilisateur non trouvé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: User not found
 *       '500':
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: error
 *                 message:
 *                   type: string
 *                   example: Internal server error
 */
router.delete("/", authenticateJWT, deleteUser);

export default router;
