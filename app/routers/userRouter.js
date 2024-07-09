import express from "express";
import { updateUser, getUserById, deleteUser} from "../controllers/userController.js";
import { hashPasswordMiddleware } from "../middlewares/scryptMiddleware.js";
import { emailValidator, nicknameValidator, passwordValidator} from "../validators/userValidators.js";

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
   * /users/{id}:
   *   get:
   *     summary: Retrouver un utilisateur par son ID
   *     description: Retrieve user details by their ID
   *     tags: [Users]
   *     security:
   *      - bearerAuth: []
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: ID of the user to retrieve
   *         schema:
   *           type: integer
   *     responses:
   *       '200':
   *         description: User found
   *       '404':
   *         description: User not found
   *       '500':
   *         description: Internal server error
   */
  router.get("/:id", authenticateJWT, getUserById);

  /**
   * @swagger
   * /users/{id}:
   *   patch:
   *     summary: Mis à jour des informations d'un utilisateur
   *     description: Update user information by their ID
   *     tags: [Users]
   *     security:
   *     - bearerAuth: []
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: ID of the user to update
   *         schema:
   *           type: integer
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
  router.patch("/:id",[emailValidator, passwordValidator, nicknameValidator, authenticateJWT, validateRequest, passwordValidator], updateUser);
  
 
  

export default router;
