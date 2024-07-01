import * as bookmarksDataMapper from '../dataMappers/bookmarksDataMapper.js';

//Méthode pour ajouter une randonnée dans les favoris d'un utilisateur

export const addBookmark = async (req, res) => {
    try {
        // Récupère les paramètres de la requête
        const { userId, hikeId } = req.body;
        if (!userId || !hikeId) {
            return res.status(400).json({ error: 'Les paramètres userId et hikeId sont requis.' });
        }

        // Appel le dataMapper avec les paramètres de la requête
        const bookmark = await bookmarksDataMapper.addBookmark(userId, hikeId);

        res.status(201).json(bookmark);

    } catch (err) {
        console.error('Erreur lors de l\'ajout de la randonnée dans les favoris', err);
        res.status(500).json({ error: 'Erreur lors de l\'ajout de la randonnée dans les favoris'});
    }
};
