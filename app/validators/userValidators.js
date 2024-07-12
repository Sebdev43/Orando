import { body } from 'express-validator';
import * as userDataMappers from '../dataMappers/userDataMappers.js';
export const passwordValidator = body('password')
    .isLength({ min: 8 }).withMessage('Le mot de passe doit contenir au moins 8 caractères')
    .matches(/[A-Z]/).withMessage('Le mot de passe doit contenir au moins une lettre majuscule')
    .matches(/[a-z]/).withMessage('Le mot de passe doit contenir au moins une lettre minuscule')
    .matches(/[0-9]/).withMessage('Le mot de passe doit contenir au moins un chiffre')
    .matches(/[^A-Za-z0-9]/).withMessage('Le mot de passe doit contenir au moins un caractère spécial');

export const emailValidator = body('email')
    .isEmail().withMessage('Adresse email invalide')
    .custom(async email => {
        const user = await userDataMappers.getUserByEmail(email);
        if (user) {
            return Promise.reject('Adresse email déjà utilisé');
        }
    });

export const nicknameValidator = body('nickname')
    .not().isEmpty().withMessage('Le pseudo est obligatoire')
    .custom(async nickname => {
        const user = await userDataMappers.getUserByNickname(nickname);
        if (user) {
            return Promise.reject('Pseudo déjà utilisé');
        }
    });
    