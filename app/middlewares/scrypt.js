import crypto from 'crypto';

export const hashPasswordMiddleware = async (req, res, next) => {
    const { password } = req.body;
    // Vérifie si le mot de passe est renseigné
    if (!password) {
        return res.status(400).json({ error : 'Password is required'});
    }

    try {
        //randomByte génère un sel (salt) aléatoire de 16 octets, puis le convertit en une chaîne hexadécimale (hex)
        const salt = crypto.randomBytes(16).toString('hex'); 
        
        // Paramètres du scrypt de hachage (difficulté du calcul)
        const N = 16384; //cout du CPU
        const r = 8; // facteur de blocage
        const p = 1; // Parallélisme : sert à ajuster le nombre de processus simultanées à exécuter
        const keylen = 32; // longueur de la clé dérivée en octets

        // hachage du mot de passe
        const hashedPassword = await new Promise((resolve, reject) => {
            crypto.scrypt(password, salt, keylen, { N, r, p},(err, derivedKey) => {
                if (err) reject(err);
                // Renvoie le sel et la clé dérivée sous forme de chaîne hexadécimale
                resolve(`${salt}:${derivedKey.toString('hex')}`);
            });
        });
        // Renvoie le mot de passe haché à l'objet req.body pour l'envoyer à la base de données
        req.body.hashedPassword = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
};