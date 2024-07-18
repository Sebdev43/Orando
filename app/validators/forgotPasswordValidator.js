import { body, validationResult } from 'express-validator';


export const forgotPasswordValidator = [
    body('email')
        .exists().withMessage('L\'email est requis.')
        .isEmail().withMessage('L\'email doit être valide.'),

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
