import { bookmarksDataMappers } from "../dataMappers/index.dataMappers.js";
import { validationResult } from "express-validator";

// Méthode pour ajouter une randonnée dans les favoris d'un utilisateur
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

// Méthode pour supprimer une randonnée des favoris d'un utilisateur
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

// Méthode pour récupérer les randonnées favoris d'un utilisateur
export const getBookmark = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const bookmarks = await bookmarksDataMappers.getBookmark(userId);

    return res.status(200).json(bookmarks);
  } catch (error) {
    next(error);
  }
};
