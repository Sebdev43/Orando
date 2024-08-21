import { body } from "express-validator";
import { validateRequest } from "../middlewares/validateRequest.js";
/**
 * Middleware pour valider les champs de la requête de connexion.
 * @module loginValidator
 */
export const loginValidator = [
  body("email")
    .exists()
    .withMessage("L'email est requis.")
    .isEmail()
    .withMessage("L'email doit être valide."),
  body("password")
    .exists()
    .withMessage("Le mot de passe est requis.")
    .isString()
    .withMessage("Le mot de passe doit être une chaîne de caractères."),
  validateRequest,
];
