import * as hikesDataMapper from '../dataMappers/hikesDataMapper.js';

// Méthode pour récupérer toutes les randonnées

export const getAllHikes = async (req, res) => {
    try {
        const hikes = await hikesDataMapper.getAllHikes();
        res.status(200).json(hikes);
        console.log(hikes);
    } catch (err) {
        console.error('Erreur lors de la récupération des randonnées', err);
        res.status(500).json({ error: 'Erreur lors de la récupération des randonnées'});
    }
};


