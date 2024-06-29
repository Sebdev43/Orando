import * as hikesDataMapper from '../dataMappers/hikesDataMapper.js';

// Méthode pour récupérer toutes les randonnées

export const getAllHikes = async (req, res, next) => {
    try {
        const hikes = await hikesDataMapper.getAllHikes();
        // Stocker les randonnées dans res.locals pour que le middleware puisse les transformer
        res.locals.hikes = hikes;
        next();
        
    } catch (err) {
        console.error('Erreur lors de la récupération des randonnées', err);
        res.status(500).json({ error: 'Erreur lors de la récupération des randonnées'});
    }
};


