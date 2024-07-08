import { generateToken } from "../utils/jwtUtils.js";

import * as userDataMappers from "../dataMappers/userDataMappers.js";
import { verifyPassword } from "../utils/passwordUtils.js";


export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await userDataMappers.getUserByEmail(email);

    if (!user) {
        return res.status(401).json({ error: 'Email invalide' });
    }

    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }

    const token = generateToken(user);
    //const refreshToken = generateRefreshToken(user);

    res.status(200).json({ token });
};


/*export const refreshToken = async (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({ error: 'Refresh token manquant' });
    }

    try {
        const user = verifyRefreshToken(refreshToken);
        const newToken = generateToken(user);
        const newRefreshToken = generateRefreshToken(user);
        res.status(200).json({ token: newToken, refreshToken: newRefreshToken });
    } catch (error) {
        res.status(403).json({ error: 'Refresh token invalide' });
    }
};*/

