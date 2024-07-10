import express from "express";
import { updateUser, getUserById } from "../controllers/userController.js";

import {
  emailValidator,
  nicknameValidator,
  passwordValidator,
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
 *     description: Update user information by their ID
 *     tags: [Users]
 *     security:
 *     - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *               localisation:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
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
    emailValidator,
    passwordValidator,
    nicknameValidator,
    authenticateJWT,
    validateRequest,
    passwordValidator,
  ],
  updateUser
);

export default router;
