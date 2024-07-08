import express from "express";
import { login } from "../controllers/authController.js";

const router = express.Router();

/**
 * Route pour se connecter et obtenir un token JWT
 * @swagger
 * /auth/jwt:
 *   post:
 *     summary: Se connecter et obtenir un token JWT
 *     tags: [Auth]
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
router.post("/jwt", login);

/**
 * Route pour rafraîchir le token JWT
 * 
 * /auth/refresh-token:
 *   post:
 *     summary: Rafraîchir le token JWT
 *     tags: [Auth]
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
