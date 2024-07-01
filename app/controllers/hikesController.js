import * as hikesDataMapper from '../dataMappers/hikesDataMapper.js';

// Méthode pour récupérer toutes les randonnées avec pagination, tri et odre

export const getAllHikes = async (req, res, next) => {
    try {
        // Récupere les paramètres de la requête
        const { page=1, order = 'asc', orderBy = 'id' } = req.query;

        // Appel le dataMapper avec les paramètres de pagination, tri et ordre
        const hikes = await hikesDataMapper.getAllHikes(page, order, orderBy);

        // Stocker les randonnées dans res.locals pour que le middleware puisse les transformer si on l'utilise
        res.locals.hikes = hikes;

        //Appel le middleware si on l'utilise
        next();
        
    } catch (err) {
        console.error('Erreur lors de la récupération des randonnées', err);
        res.status(500).json({ error: 'Erreur lors de la récupération des randonnées'});
    }
};

// Méthode pour récupérer une randonnée par son id

export const getHikeById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const hike = await hikesDataMapper.getHikeById(id);
        if (!hike) {
            return res.status(404).json({ error: 'Randonnée non trouvée'});
        }
        res.locals.hike = hike;
        next();

    } catch (err) {
        console.error('Erreur lors de la récupération de la randonnée', err);
        res.status(500).json({ error: 'Erreur lors de la récupération de la randonnée'});
    }
};

// Méthode pour récupérer 3 randonnées de mainère aléatoire

export const getRandomHikes = async (req, res, next) => {
    try {
        const hikes = await hikesDataMapper.getRandomHikes();
        res.locals.hikes = hikes;
        next();
    } catch (err) {
        console.error('Erreur lors de la récupération des randonnées aléatoires', err);
        res.status(500).json({ error: 'Erreur lors de la récupération des randonnées aléatoires'});
    }
};

