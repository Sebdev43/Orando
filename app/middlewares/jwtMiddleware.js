import { verifyToken } from "../utils/jwtUtils.js";
import * as userDataMappers from "../dataMappers/userDataMappers.js";


export const authenticateJWT = async (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        try {
            const decoded = verifyToken(token);
            const userId = decoded.userId;

            const user = await userDataMappers.getUserById(userId);
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé.' });
            }
            if (!user.email_verified) {
                return res.status(403).json({ error: 'Email non vérifié.' });
            }

            req.user = user;
            next();
        } catch (error) {
            res.status(403).json({ error: 'Token invalide ou expiré.' });
        }
    } else {
        res.status(401).json({ error: 'Token manquant' });
    }
};
