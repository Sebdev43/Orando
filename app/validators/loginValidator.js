import { body, validationResult } from 'express-validator';

export const loginValidator = [
    body('email')
        .exists().withMessage('L\'email est requis.')
        .isEmail().withMessage('L\'email doit être valide.'),
    body('password')
        .exists().withMessage('Le mot de passe est requis.')
        .isString().withMessage('Le mot de passe doit être une chaîne de caractères.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: "error",
                message: "Données de requête invalides",
                errors: errors.array(),
            });
        }
        next();
    }
];
