import { body } from 'express-validator';

export const bookmarksValidators = [
    body('hikeId')
        .exists().withMessage('Le paramètre hikeId est requis.')
        .isInt().withMessage('Le paramètre hikeId doit être un entier.'),
];
