import { body } from "express-validator";
import { validateRequest } from "../middlewares/validateRequest.js";
/**
 * Middleware pour valider les champs de la requête de demande de réinitialisation du mot de passe.
 * @module forgotPasswordValidator
 */

export const forgotPasswordValidator = [
  body("email")
    .exists()
    .withMessage("L'email est requis.")
    .isEmail()
    .withMessage("L'email doit être valide."),
  validateRequest,
];
