const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');
const errorHandler = require('../utility/errorHandler');
const validate = require('../utility/validationUtility');
const { validationRules } = require ('../utility/validatorRules');

// Get all wishlist items
router.get('/', errorHandler(wishlistController.getAllWishlistItems));

// Get one wishlist item by ID
router.get('/:id', errorHandler(wishlistController.getWishlistItemById));

// Add book to wishlist
router.post('/', validationRules,validate,errorHandler(wishlistController.addWishlistItem));

// Update wishlist item by ID
router.put('/:id', validationRules,validate,errorHandler(wishlistController.updateWishlistItem));

// Delete wishlist item by ID
router.delete('/:id', errorHandler(wishlistController.deleteWishlistItem));

module.exports = router;
