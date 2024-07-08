import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;
const refreshSecretKey = process.env.JWT_REFRESH_SECRET;

// Fonction pour générer un JWT
export const generateToken = (user) => {
    return jwt.sign(
        { userId: user.id, email: user.email },
        secretKey,
        { expiresIn: '1h' } // le token expirera dans 1 heure
    );
};

// Fonction pour générer un refresh token
export const generateRefreshToken = (user) => {
    return jwt.sign(
        { userId: user.id, email: user.email },
        refreshSecretKey,
        { expiresIn: '7d' } // le refresh token expirera dans 7 jours
    );
};

// Fonction pour vérifier un JWT
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        throw new Error('Token invalide');
    }
};

// Fonction pour vérifier un refresh token
export const verifyRefreshToken = (token) => {
    try {
        return jwt.verify(token, refreshSecretKey);
    } catch (error) {
        throw new Error('Refresh token invalide');
    }
};
