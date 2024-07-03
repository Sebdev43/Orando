import { generateToken } from "../utils/jwtUtils.js";
//import * as userDataMapper from "../dataMappers/userDataMapper.js";

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await userDataMapper.getUserByEmail(email);

    if (!user || user.password !== password) { 
        return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }

    const token = generateToken(user);
    res.status(200).json({ token });
};