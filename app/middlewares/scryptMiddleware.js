import { hashPassword } from '../utils/passwordUtils.js';

export const hashPasswordMiddleware = async (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400).json({ error: "Besoin d'un mot de passe" });
    }

    try {
        const hashedPassword = await hashPassword(password);
        req.body.hashedPassword = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
};
