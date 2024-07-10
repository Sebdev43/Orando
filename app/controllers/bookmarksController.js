import * as bookmarksDataMapper from "../dataMappers/bookmarksDataMapper.js";

//Méthode pour ajouter une randonnée dans les favoris d'un utilisateur

export const addBookmark = async (req, res) => {
  try {
    const userId = req.user.id;
    const { hikeId } = req.body;
    if (!hikeId) {
      const error = new Error("Les paramètre hikeId est requis.");
      error.statusCode = 404;
      throw error;
    }

    // Appel le dataMapper avec les paramètres de la requête
    const bookmark = await bookmarksDataMapper.addBookmark(userId, hikeId);

    res.status(201).json({ message: "Randonnée ajoutée dans les favoris" });
  } catch (error) {
    next(error);
  }
};
// Méthode pour supprimer une randonnée des favoris d'un utilisateur

export const removeBookmark = async (req, res) => {
  try {
    const userId = req.user.id;
    const { hikeId } = req.body;
    const success = await bookmarksDataMapper.removeBookmark(userId, hikeId);
    if (success) {
      res.status(204).json({ message: "Randonnée supprimée des favoris" });
    } else {
      const error = new Error("Randonnée non trouvée dans les favoris");
      error.statusCode = 404;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

export const getBookmark = async (req, res) => {
  try {
    const userId = req.user.id;
    const bookmarks = await bookmarksDataMapper.getBookmark(userId);

    res.status(200).json(bookmarks);
  } catch (error) {
    next(error);
  }
};
