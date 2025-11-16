const { check } = require('express-validator');

const validationRules = [
    check('authorFirstName')
        .notEmpty().withMessage('Author first name is required')
        .matches(/^[a-zA-Z'-]+$/).withMessage('Must contain only letters, hyphens, or apostrophes'),
    check('authorLastName')
        .notEmpty().withMessage('Author last name is required')
        .matches(/^[a-zA-Z'-]+$/).withMessage('Must contain only letters, hyphens, or apostrophes'),
    check('bookTitle')
        .notEmpty().withMessage('Book title is required')
        .matches(/^[a-zA-Z0-9\s'-]+$/).withMessage('Must not contain special characters'),
    check('bookGenre')
        .notEmpty().withMessage('Book genre is required')
        .matches(/^[a-zA-Z0-9\s'-]+$/).withMessage('Must not contain special characters'),
    check('numberOfPages')
        .isInt({ min: 1 }).withMessage('Number of pages must be a positive integer'),
    check('printType')
        .notEmpty().withMessage('Print type is required')
        .matches(/^[a-zA-Z0-9\s'-]+$/).withMessage('Must not contain special characters'),
    check('numberOfCopies')
        .isInt({ min: 1 }).withMessage('Number of copies must be a positive integer')
];

module.exports = { validationRules };
