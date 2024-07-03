import express from "express";
import { createUser, updateUser, getUserById, deleteUser} from "../controllers/userController.js";
import { hashPasswordMiddleware } from "../middlewares/scryptMiddleware.js";
import { emailValidator, nicknameValidator, passwordValidator} from "../validators/userValidators.js";

import { validateRequest } from "../middlewares/validateReqMiddleware.js";

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
 *   post:
 *     summary: Create a new user
 *     description: Endpoint to create a new user
 *     tags: [Users]
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
router.post("/",[emailValidator, passwordValidator, nicknameValidator],
  validateRequest,
  hashPasswordMiddleware,
  createUser
);
  
  /**
   * @swagger
   * /users/{id}:
   *   get:
   *     summary: Get user by ID
   *     description: Retrieve user details by their ID
   *     tags: [Users]
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
  router.get("/:id", getUserById);

  /**
   * @swagger
   * /users/{id}:
   *   patch:
   *     summary: Update user by ID
   *     description: Update user information by their ID
   *     tags: [Users]
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
  router.patch("/:id",[emailValidator, passwordValidator, nicknameValidator], validateRequest, passwordValidator, updateUser);
  
  /**
   * @swagger
   * /users/{id}:
   *   delete:
   *     summary: Delete user by ID
   *     description: Delete user by their ID
   *     tags: [Users]
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
  router.delete("/:id", deleteUser);
  

export default router;
