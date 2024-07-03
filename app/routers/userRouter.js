import express from "express";
const router = express.Router();
import { createUser, updateUser, getUserById } from "../controllers/userController.js";

/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: Créations des données utilisateurs
 */
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     description: Cette endpoint permet de créer un nouvel utilisateur.
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *              nickname:
 *                type: string
 *              localisation:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string 
 *     responses:
 *       '201':
 *         description: Utilisateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID de l'utilisateur
 *                   nickname:
 *                     type: string
 *                     description: Pseudo de l'utilisateur
 *                   localisation:
 *                     type: string
 *                     description: Département de l'utilisateur
 *                   email:
 *                     type: string
 *                     format: email
 *                     description: Email de l'utilisateur
 *                   password:
 *                     type: string
 *                     description: Mot de passe de l'utilisateur
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                     description: Date de création de l'utilisateur
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 *                     description: Date de mise à jour de l'utilisateur
 *       '400':
 *         description: Erreur lors de la création de l'utilisateur
 *       '500':
 *         description: Erreur interne avec le serveur
 *         
 */
router.post("/", createUser);

/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Modifier un utilisateur
 *     description: Cette endpoint permet de modifier un utilisateur.
 *     tags: [Users]
 *     parameters:
 *         -in: path
 *         name: id
 *         schema:
 *          type: integer
 *         required: true
 *         description: Id de l'utilisateur
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *            schema:
 *             type: object
 *             properties:
 *              nickname:
 *                type: string
 *              localisation:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string 
 *     responses:
 *       '201':
 *         description: Les données utilisateur on été modifié avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID de l'utilisateur
 *                   nickname:
 *                     type: string
 *                     description: Pseudo de l'utilisateur
 *                   localisation:
 *                     type: string
 *                     description: Département de l'utilisateur
 *                   email:
 *                     type: string
 *                     format: email
 *                     description: Email de l'utilisateur
 *                   password:
 *                     type: string
 *                     description: Mot de passe de l'utilisateur
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                     description: Date de création de l'utilisateur
 *                   updated_at:
 *                     type: string
 *                     format: date-time
 *                     description: Date de mise à jour de l'utilisateur
 *       '400':
 *         description: Erreur lors de la création de l'utilisateur
 *       '500':
 *         description: Erreur interne avec le serveur
 *         
 */
router.patch("/:id", updateUser);

router.get("/:id", getUserById);

export default router;
