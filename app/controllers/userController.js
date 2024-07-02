//import bcrypt from 'bcrypt';


import * as userDataMappers from '../dataMappers/userDataMappers.js';

export const createUser = async (req, res) => {
    try {
        const { nickname, localisation, email, password } = req.body;
        if (!nickname || !localisation || !email || !password) {
            return res.status(400).json({ error : "Il manque des informations pour créer un utilisateur !"});            
        }
        const user = await userDataMappers.createUser(nickname, localisation, email, password);
        res.status(201).json(user);
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur :", error.stack);
        res.status(500).json({ error : "Erreur interne dans la création de l'utilisateur !"});
    }
};

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { nickname, localisation, email, password } = req.body;

        if (!nickname || !localisation || !email || !password) {
            return res.status(400).json({ error : "Il manque des informations pour modifier l'utilisateur !"});
        }

        const user = await userDataMappers.updateUser(id, nickname, localisation, email, password);
        
        return res.status(200).json(user);
    } catch (error) {
        console.error("Erreur lors de la modification de l'utilisateur :", error.stack);
        res.status(500).json({ error : "Problème dans la modification des information "});
    }
};