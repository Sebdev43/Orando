import crypto from 'crypto';

export const hashPasswordMiddleware = async (req, res, next) => {
    const { password } = req.body;
    if (!password) {
        return res.status(400).json({ error : 'Password is required'});
    }

    try {
        const salt = crypto.randomBytes(16).toString('hex'); //randomByte génère un tampon de 16 bytes de données aléatoires, puis le convertit en une chaîne hexadécimale (hex)
        const N = 16384;
        const r = 8;
        const p = 1;
        const keylen = 32;

        const hashedPassword = await new Promise((resolve, reject) => {
            crypto.scrypt(password, salt, keylen, { N, r, p},(err, derivedKey) => {
                if (err) reject(err);
                resolve(`${salt}:${derivedKey.toString('hex')}`);
            });
        });

        req.body.hashedPassword = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
};