const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const errorHandler = require('../utility/errorHandler');
const validate = require('../utility/validationUtility');
const { validationRules } = require('../utility/validatorRules');

// Get all books
router.get('/', errorHandler(bookController.getAllbooks));

// Get one book by id
router.get('/:id', errorHandler(bookController.getbookById));

// Create a new book

router.post('/', validationRules, validate, errorHandler(bookController.createbook));

// Update a book by id

router.put('/:id', validationRules, validate, errorHandler(bookController.updatebook));

// Delete a book by id
router.delete('/:id', errorHandler(bookController.deletebook));

module.exports = router;
