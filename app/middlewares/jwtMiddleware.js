import { verifyToken } from "../utils/jwtUtils.js";

export const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        try {
            const user = verifyToken(token);
            req.user = decoded;
            next();
        } catch (error) {
            res.status(403).send("Invalid token");
        }
    } else {
        res.status(401).json({ error: 'Token manquant'});
    }
};


