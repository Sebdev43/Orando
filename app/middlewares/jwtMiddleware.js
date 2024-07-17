import { verifyToken, verifyRefreshToken, generateToken, generateRefreshToken } from '../utils/jwtUtils.js';
import { usersDataMappers } from '../dataMappers/index.dataMappers.js';
import { isTokenRevoked, revokeToken } from '../utils/node-Cache.js';

export const authenticateJWT = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const refreshToken = req.cookies.refreshToken;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token manquant' });
    }

    const token = authHeader.split(' ')[1];

    try {
        if (await isTokenRevoked(token)) {
            return res.status(403).json({ error: 'Token révoqué' });
        }

        const decoded = verifyToken(token);
        req.user = { id: decoded.userId }; // Assurez-vous que `decoded` contient `userId`
        next();
    } catch (err) {
        // Le JWT est expiré ou invalide
        if (!refreshToken) {
            return res.status(403).json({ error: 'Token invalide ou expiré et refresh token manquant' });
        }

        try {
            const decodedRefreshToken = verifyRefreshToken(refreshToken);
            const user = await usersDataMappers.findById(decodedRefreshToken.userId);

            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé.' });
            }

            const ip = req.ip;
            const userAgent = req.headers['user-agent'];
            const newToken = generateToken(user, ip, userAgent);
            const newRefreshToken = generateRefreshToken(user);

            // Mettre à jour le refresh token dans le cookie
            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'Strict',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 jours
            });

            // Envoyer le nouveau token d'accès
            res.setHeader('Authorization', `Bearer ${newToken}`);
            req.user = { id: user.id };
            next();
        } catch (refreshErr) {
            return res.status(403).json({ error: 'Refresh token invalide' });
        }
    }
};
