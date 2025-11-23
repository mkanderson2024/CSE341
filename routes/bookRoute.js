const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const errorHandler = require('../utility/errorHandler');
const validate = require('../utility/validationUtility');
const { validationRules } = require('../utility/validatorRules');
const authenticationToken = require('../utility/authenticate');

// Get all books (public)
router.get('/', errorHandler(bookController.getAllbooks));

// Get one book by id (public)
router.get('/:id', errorHandler(bookController.getbookById));

// Create a new book (protected)
router.post('/', authenticationToken, validationRules, validate, errorHandler(bookController.createbook));

// Update a book by id (protected)
router.put('/:id', authenticationToken, validationRules, validate, errorHandler(bookController.updatebook));

// Delete a book by id (protected)
router.delete('/:id', authenticationToken, errorHandler(bookController.deletebook));

module.exports = router;
