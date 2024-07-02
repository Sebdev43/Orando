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
        console.log(email);
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur :", error.stack);
        res.status(500).json({ error : "Erreur interne dans la création de l'utilisateur !"});
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { nickname, localisation, email, password } = req.body;

    try {

        const user = await userDataMappers.updateUser(id, nickname, localisation, email, password);
        res.status(200).json(user);
    } catch (error) {
        console.error("Voici l'erreur :", error.stack);
        res.status(500).json({ error : "Souci dans la modification des information "});
    }
};