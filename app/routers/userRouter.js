import express from "express";
import { updateUser, getUserById } from "../controllers/userController.js";

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
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
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
 *       '400':
 *         description: Error updating user
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Internal server error
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

export default router;
