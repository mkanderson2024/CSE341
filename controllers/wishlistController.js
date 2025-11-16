const { Wishlist } = require('../models/book'); // import directly from models

// Get all wishlist items
const getAllWishlistItems = async (req, res) => {
    const items = await Wishlist.find({});
    res.status(200).json(items);
};

// Get one wishlist item by ID
const getWishlistItemById = async (req, res) => {
    const item = await Wishlist.findById(req.params.id);
    if (!item) return res.status(404).json({ error: 'Wishlist item not found' });
    res.status(200).json(item);
};

// Add item to wishlist
const addWishlistItem = async (req, res) => {
    const newItem = await Wishlist.create({
        authorFirstName: req.body.authorFirstName,
        authorLastName: req.body.authorLastName,
        bookTitle: req.body.bookTitle,
        bookGenre: req.body.bookGenre,
        numberOfPages: req.body.numberOfPages,
        printType: req.body.printType,
        numberOfCopies: req.body.numberOfCopies
    });
    res.status(201).json(newItem);
};

// Update item in wishlist
const updateWishlistItem = async (req, res) => {
    const updatedItem = await Wishlist.findByIdAndUpdate(
        req.params.id,
        {
            authorFirstName: req.body.authorFirstName,
            authorLastName: req.body.authorLastName,
            bookTitle: req.body.bookTitle,
            bookGenre: req.body.bookGenre,
            numberOfPages: req.body.numberOfPages,
            printType: req.body.printType,
            numberOfCopies: req.body.numberOfCopies
        },
        { new: true }
    );

    if (!updatedItem) return res.status(404).json({ error: 'Wishlist item not found' });
    res.status(200).json(updatedItem);
};

// Delete item from wishlist
const deleteWishlistItem = async (req, res) => {
    const deletedItem = await Wishlist.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ error: 'Wishlist item not found' });
    res.status(200).json({ message: 'Wishlist item deleted successfully' });
};

module.exports = {
    getAllWishlistItems,
    getWishlistItemById,
    addWishlistItem,
    updateWishlistItem,
    deleteWishlistItem
};
