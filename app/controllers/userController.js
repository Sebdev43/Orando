const bcrypt = require('bcrypt');

import { createUser as createUserDatamapper } from '../datamappers/userDatamappers';

export const createUser = async (req, res) => {
    const { nickname, localisation, email, password } = req.body;

    try {
        const user = await createUserDatamapper(nickname, localisation, email, password);
        res.status(201).json(user)
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur :", err.stack);
        res.status(500).json({ error : "Erreur interne dans la création de l'utilisateur !"});
    }
};