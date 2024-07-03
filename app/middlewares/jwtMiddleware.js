import { verifyToken } from "../utils/jwtUtils.js";

export const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        try {
            const user = verifyToken(token);
            req.user = user;
            next();
        } catch (error) {
            res.status(403).json({ error: 'Token invalide' });
        }
    } else {
        res.status(401).json({ error: 'Token manquant' });
    }
};
