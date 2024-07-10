import * as hikesDataMapper from "../dataMappers/hikesDataMapper.js";

export const getAllHikes = async (req, res) => {
  try {
    const hikes = await hikesDataMapper.getAllHikes();

    res.status(200).json(hikes);
  } catch (error) {
    next(error);
  }
};
// Méthode pour récupérer toutes les randonnées avec pagination, tri et odre

export const getAllHikesPages = async (req, res) => {
  try {
    // Récupere les paramètres de la requête
    const { page = 1 } = req.query;

    // Appel le dataMapper avec les paramètres de pagination, tri et ordre
    const hikes = await hikesDataMapper.getAllHikesPages(page);

    res.status(200).json(hikes);
  } catch (error) {
    next(error);
  }
};

// Méthode pour récupérer une randonnée par son id

export const getHikeById = async (req, res) => {
  try {
    const { id } = req.params;

    const hike = await hikesDataMapper.getHikeById(id);
    if (!hike) {
      const error = new Error("Randonnée non trouvée");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json(hike);
  } catch (error) {
    next(error);
  }
};

// Méthode pour récupérer 3 randonnées de mainère aléatoire

export const getRandomHikes = async (req, res) => {
  try {
    const hikes = await hikesDataMapper.getRandomHikes();
    res.status(200).json(hikes);
  } catch (error) {
    next(error);
  }
};
