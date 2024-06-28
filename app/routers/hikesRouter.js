import express from "express";
const router = express.Router();

import { getAllHikes } from "../controllers/hikesController.js";

/**
 * @swagger
 * tags:
 * name: Hikes
 * description: Gestion des randonnées
 */

/**
 * @swagger
 * /hikes:
 *  get:
 *      summary: Récupérer la liste des randonnées
 *      tags: [Hikes]
 *      responses:
 *      200:
 *          description: La liste des randonnées
 *          content:
 *              application/json:
 *                  schema:
 *                      type: array
 *                      items:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                              title:
 *                                  type: string
 *                              description:
 *                                  type: string
 */

router.get("/", getAllHikes);

export default router;