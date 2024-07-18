import { body, validationResult } from 'express-validator';
import { hikesDataMappers } from '../dataMappers/index.dataMappers.js';

export const bookmarksValidators = [
    body('hikeId')
        .exists().withMessage('Le paramètre hikeId est requis.')
        .isInt().withMessage('Le paramètre hikeId doit être un entier.')
        .custom(async hikeId => {
            const hike = await hikesDataMappers.getHikeById(hikeId);
            if (!hike) {
                return Promise.reject('Aucun hike trouvé avec cet ID.');
            }
        }),
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
