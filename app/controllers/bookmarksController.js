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
// Méthode pour supprimer une randonnée des favoris d'un utilisateur

export const removeBookmark = async (req, res) => {
    try {
        const { userId, hikeId } = req.body;
        const success = await bookmarksDataMapper.removeBookmark(userId, hikeId);
        if (success) {
            res.status(204).json({ message: 'Randonnée supprimée des favoris' });
        } else {
            res.status(404).json({ error: 'Randonnée non trouvée dans les favoris' });
        }
    } catch (err) {
        console.error('Erreur lors de la suppression de la randonnée des favoris', err);
        res.status(500).json({ error: 'Erreur lors de la suppression de la randonnée des favoris' });
    }
};
