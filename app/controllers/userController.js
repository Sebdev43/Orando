import * as userDataMappers from '../dataMappers/userDataMappers.js';
import { generateToken } from '../utils/jwtUtils.js';


export const updateUser = async (req, res) => {
    try {
        const userId = req.user.id;
        const { nickname, localisation, email, password } = req.body;

        if (!nickname || !localisation || !email || !password) {
            return res.status(400).json({ error : "Il manque des informations pour modifier l'utilisateur !"});
        }

        const user = await userDataMappers.updateUser(userId, nickname, localisation, email, password);
        
        res.status(200).json({ message: 'Utilisateur mis à jour avec succès', user: updateUser });
    } catch (error) {
        console.error("Erreur lors de la modification de l'utilisateur :", error.stack);
        res.status(500).json({ error : "Problème dans la modification des information "});
    }
};

export const getUserById = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await userDataMappers.getUserById(userId);

        if(!user){
            return res.status(404).json({ error: "Utilisateur non trouvé"});
        } else {
            return res.status(200).json(user);
        }
    } catch (error) {
        console.error("Erreur lors de la récupération de l'utilisateur :", error.stack);
        res.status(500).json({ error: "Problème lors de la récupération de l'utilisateur"});
    }
};

export const deleteUser = async (req,res) => {
    const userId =req.user.id;

    try {
        const success = await userDataMappers.deleteUser(userId);
        if (success) {
            res.status(200).json({ message: "L'utilisateur à été supprimé avec succès"});
        } else {
            res.status(400).json({ message: "L'utilisateur n'a pas été supprimé"});
        }
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur"});
    }
};