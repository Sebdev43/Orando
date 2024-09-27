import { body } from "express-validator";
import { usersDataMappers } from "../dataMappers/index.dataMappers.js";
import { verifyPassword } from "../utils/passwordUtils.js";
import { validateRequest } from "../middlewares/validateRequest.js";
/**
 * Middleware pour valider les champs de la requête de mise à jour d'utilisateur.
 * @module userValidators
 */

export const passwordValidator = body("newPassword")
  .optional()
  .isLength({ min: 8 })
  .withMessage("Le mot de passe doit contenir au moins 8 caractères")
  .matches(/[A-Z]/)
  .withMessage("Le mot de passe doit contenir au moins une lettre majuscule")
  .matches(/[a-z]/)
  .withMessage("Le mot de passe doit contenir au moins une lettre minuscule")
  .matches(/[0-9]/)
  .withMessage("Le mot de passe doit contenir au moins un chiffre")
  .matches(/[^A-Za-z0-9]/)
  .withMessage("Le mot de passe doit contenir au moins un caractère spécial");

export const emailValidator = body("email")
  .optional()
  .isEmail()
  .withMessage("Adresse email invalide")
  .custom(async (email) => {
    const user = await usersDataMappers.getUserByEmail(email);
    if (user) {
      return Promise.reject("Adresse email déjà utilisée");
    }
  });

export const nicknameValidator = body("nickname")
  .optional()
  .not()
  .isEmpty()
  .withMessage("Le pseudo est obligatoire")
  .custom(async (nickname) => {
    const user = await usersDataMappers.getUserByNickname(nickname);
    if (user) {
      return Promise.reject("Pseudo déjà utilisé");
    }
  });

export const currentPasswordValidator = body("currentPassword")
  .optional()
  .not()
  .isEmpty()
  .withMessage("Le mot de passe actuel est requis")
  .custom(async (currentPassword, { req }) => {
    const user = await usersDataMappers.findById(req.user.id);
    if (!user) {
      throw new Error("Utilisateur introuvable");
    }
    const isPasswordValid = await verifyPassword(
      currentPassword,
      user.password
    );
    if (!isPasswordValid) {
      throw new Error("Mot de passe incorrect");
    }
  });

// Combinaison des validators
export const userValidators = [
  body("nickname")
    .optional()
    .isString()
    .withMessage("Le pseudo doit être une chaîne de caractères"),
  body("localisation")
    .optional()
    .isString()
    .withMessage("La localisation doit être une chaîne de caractères"),
  body("email").optional().isEmail().withMessage("Adresse email invalide"),
  body("currentPassword")
    .optional()
    .isString()
    .withMessage("Le mot de passe actuel doit être une chaîne de caractères"),
  body("newPassword")
    .optional()
    .isString()
    .withMessage("Le nouveau mot de passe doit être une chaîne de caractères"),
  currentPasswordValidator,
  passwordValidator,
  nicknameValidator,
  emailValidator,
  validateRequest,
];
