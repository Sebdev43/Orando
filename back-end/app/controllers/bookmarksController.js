import { bookmarksDataMappers } from "../dataMappers/index.dataMappers.js";
import { validationResult } from "express-validator";

/**
 * Ajoute une randonnée aux favoris de l'utilisateur
 * @param {Request} req - La requête HTTP
 * @param {Response} res - La réponse HTTP
 * @param {Function} next - Fonction pour passer au middleware suivant
 */

export const addBookmark = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: "error",
        message: "Données de requête invalides",
        errors: errors.array(),
      });
    }

    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ error: 'Utilisateur non authentifié.' });
    }

    const { hikeId } = req.body;
    if (!hikeId) {
      return res.status(400).json({ error: "Le paramètre hikeId est requis." });
    }

    // Appel le dataMapper avec les paramètres de la requête
    const bookmark = await bookmarksDataMappers.addBookmark(userId, hikeId);

    if (!bookmark) {
      return res.status(409).json({ error: "Randonnée déjà ajoutée dans les favoris" });
    }

    return res.status(201).json({ message: "Randonnée ajoutée dans les favoris", hike: bookmark });
  } catch (error) {
    next(error);
  }
};

/**
 * Supprime une randonnée des favoris de l'utilisateur
 * @param {Request} req - La requête HTTP
 * @param {Response} res - La réponse HTTP
 * @param {Function} next - Fonction pour passer au middleware suivant
 */

export const removeBookmark = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: "error",
        message: "Données de requête invalides",
        errors: errors.array(),
      });
    }

    const userId = req.user.id;
    const { hikeId } = req.body;
    const success = await bookmarksDataMappers.removeBookmark(userId, hikeId);
    if (success) {
      return res.status(200).json({ hikeId, message: "Randonnée supprimée des favoris" });
    } else {
      const error = new Error("Randonnée non trouvée dans les favoris");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

/**
 * Récupère les randonnées favorites de l'utilisateur
 * @param {Request} req - La requête HTTP
 * @param {Response} res - La réponse HTTP
 * @param {Function} next - Fonction pour passer au middleware suivant
 */

export const getBookmark = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const bookmarks = await bookmarksDataMappers.getBookmark(userId);

    return res.status(200).json(bookmarks);
  } catch (error) {
    next(error);
  }
};
