import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;

//Fonction pour générer un JWT

export const generateToken = (user) => {
    return jwt.sign(
        { userId: user.id, email: user.email },
        secretKey,
        { expiresIn: '10h' } // le token expirera dans 1 heure

    );
};

// Fonction pour vérifier un JWT

export const verifyToken = (token) => {
    return jwt.verify(token, secretKey);
};

