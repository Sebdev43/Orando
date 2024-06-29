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


