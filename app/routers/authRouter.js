import express from "express";
import { login } from "../controllers/authController.js";
import { validateRequest } from "../middlewares/validateReqMiddleware.js";
import { createUser, deleteUser } from "../controllers/userController.js";
import { hashPasswordMiddleware } from "../middlewares/scryptMiddleware.js";
import { emailValidator, nicknameValidator, passwordValidator} from "../validators/userValidators.js";
import { authenticateJWT } from "../middlewares/jwtMiddleware.js";

const router = express.Router();

/**
 * Route pour se connecter et obtenir un token JWT
 * @swagger
 * /accounts/login:
 *   post:
 *     summary: Se connecter et obtenir un token JWT
 *     tags: [Accounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Connexion réussie et token JWT renvoyé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 *       401:
 *         description: Email ou mot de passe incorrect
 */
router.post("/login", login);

/**
 * @swagger
 * /accounts/signup:
 *   post:
 *     summary: Création d'un nouvel utilisateur
 *     description: Endpoint to create a new user
 *     tags: [Accounts]
 *     security :
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
 *               localisation:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: User created successfully
 *       '400':
 *         description: Error creating user
 *       '500':
 *         description: Internal server error
 */
router.post("/signup",[emailValidator, passwordValidator, nicknameValidator],
  validateRequest,
  hashPasswordMiddleware,
  createUser
);

 /**
   * @swagger
   * /accounts/delete:
   *   delete:
   *     summary: Supprimer un utilisateur par son ID
   *     description: Delete user by their ID
   *     tags: [Accounts]
   *     security:
   *      - bearerAuth: []
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: ID of the user to delete
   *         schema:
   *           type: integer
   *     responses:
   *       '200':
   *         description: User deleted successfully
   *       '404':
   *         description: User not found
   *       '500':
   *         description: Internal server error
   */
 router.delete("/:id", authenticateJWT, deleteUser);

/**
 * Route pour rafraîchir le token JWT
 * 
 * /auth/refresh-token:
 *   post:
 *     summary: Rafraîchir le token JWT
 *     tags: [Accounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token rafraîchi avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 refreshToken:
 *                   type: string
 *       401:
 *         description: Refresh token manquant
 *       403:
 *         description: Refresh token invalide
 */
//router.post("/refresh-token", refreshToken);


export default router;
