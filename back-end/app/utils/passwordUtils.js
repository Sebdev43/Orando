import crypto from 'crypto';

const N = 16384; // Coût du CPU
const r = 8; // Facteur de blocage
const p = 1; // Parallélisme
const keylen = 32; // Longueur de la clé dérivée en octets

/**
 * Fonction pour hacher un mot de passe
 * @param {string} password - Le mot de passe à hacher
 * @returns {Promise<string>} - Le mot de passe haché
 */

export const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        const salt = crypto.randomBytes(16).toString('hex');
        crypto.scrypt(password, salt, keylen, { N, r, p }, (err, derivedKey) => {
            if (err) reject(err);
            resolve(`${salt}:${derivedKey.toString('hex')}`);
        });
    });
};

/**
 * Fonction pour vérifier un mot de passe
 * @param {string} password - Le mot de passe à vérifier
 * @param {string} hashedPassword - Le mot de passe haché pour comparaison
 * @returns {Promise<boolean>} - Vrai si le mot de passe est valide, faux sinon
 */

export const verifyPassword = (password, hashedPassword) => {
    return new Promise((resolve, reject) => {
        const [salt, key] = hashedPassword.split(':');
        crypto.scrypt(password, salt, keylen, { N, r, p }, (err, derivedKey) => {
            if (err) reject(err);
            resolve(derivedKey.toString('hex') === key);
        });
    });
};
