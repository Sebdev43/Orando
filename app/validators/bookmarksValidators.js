import { body, validationResult } from 'express-validator';

export const bookmarksValidators = [
    body('hikeId')
        .exists().withMessage('Le paramètre hikeId est requis.')
        .isInt().withMessage('Le paramètre hikeId doit être un entier.'),
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
