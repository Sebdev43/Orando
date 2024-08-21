import { body } from "express-validator";
import { hikesDataMappers } from "../dataMappers/index.dataMappers.js";
import { validateRequest } from "../middlewares/validateRequest.js";
/**
 * Middleware pour valider les champs de la requête d'ajout de favori.
 * @module bookmarksValidators
 */
export const bookmarksValidators = [
  body("hikeId")
    .exists()
    .withMessage("Le paramètre hikeId est requis.")
    .isInt()
    .withMessage("Le paramètre hikeId doit être un entier.")
    .custom(async (hikeId) => {
      const hike = await hikesDataMappers.getHikeById(hikeId);
      if (!hike) {
        return Promise.reject("Aucun hike trouvé avec cet ID.");
      }
    }),
  validateRequest,
];
