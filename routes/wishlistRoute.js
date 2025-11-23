const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');
const errorHandler = require('../utility/errorHandler');
const validate = require('../utility/validationUtility');
const { validationRules } = require('../utility/validatorRules');
const authenticationToken = require('../utility/authenticate');

// Get all wishlist items (public)
router.get('/', errorHandler(wishlistController.getAllWishlistItems));

// Get one wishlist item by ID (public)
router.get('/:id', errorHandler(wishlistController.getWishlistItemById));

// Add book to wishlist (protected)
router.post('/', authenticationToken, validationRules, validate, errorHandler(wishlistController.addWishlistItem));

// Update wishlist item by ID (protected)
router.put('/:id', authenticationToken, validationRules, validate, errorHandler(wishlistController.updateWishlistItem));

// Delete wishlist item by ID (protected)
router.delete('/:id', authenticationToken, errorHandler(wishlistController.deleteWishlistItem));

module.exports = router;
