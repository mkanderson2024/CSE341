const { Wishlist } = require('../models/book');

// Get all wishlist items
const getAllWishlistItems = async (req, res) => {
    console.log("Get all wishlist items controller reached");
    try {
        const items = await Wishlist.find({});
        res.status(200).json(items);
    } catch (err) {
        console.error('Error fetching all wishlist items:', err);
        res.status(500).json({ error: 'Failed to fetch wishlist items' });
    }
};

// Get one wishlist item by ID
const getWishlistItemById = async (req, res) => {
    console.log("Get wishlist item by id reached");
    try {
        const { id } = req.params;
        const item = await Wishlist.findById(id);
        if (!item) {
            return res.status(404).json({ error: 'Wishlist item not found' });
        }
        res.status(200).json(item);
    } catch (err) {
        console.error('Error fetching wishlist item by ID:', err);
        res.status(500).json({ error: 'Failed to fetch wishlist item' });
    }
};

// Add wishlist item
const addWishlistItem = async (req, res) => {
    console.log("Add wishlist item controller reached");
    try {
        const newItem = new Wishlist({
            authorFirstName: req.body.authorFirstName,
            authorLastName: req.body.authorLastName,
            bookTitle: req.body.bookTitle,
            bookGenre: req.body.bookGenre,
            numberOfPages: req.body.numberOfPages,
            printType: req.body.printType,
            numberOfCopies: req.body.numberOfCopies
        });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        console.error('Error adding wishlist item:', err);
        res.status(500).json({ error: 'Failed to add wishlist item' });
    }
};

// Update wishlist item by ID
const updateWishlistItem = async (req, res) => {
    console.log("Update wishlist item controller reached");
    try {
        const { id } = req.params;
        const itemToUpdate = await Wishlist.findById(id);
        if (!itemToUpdate) {
            return res.status(404).json({ error: 'Wishlist item to update not found' });
        }

        itemToUpdate.authorFirstName = req.body.authorFirstName ?? itemToUpdate.authorFirstName;
        itemToUpdate.authorLastName = req.body.authorLastName ?? itemToUpdate.authorLastName;
        itemToUpdate.bookTitle = req.body.bookTitle ?? itemToUpdate.bookTitle;
        itemToUpdate.bookGenre = req.body.bookGenre ?? itemToUpdate.bookGenre;
        itemToUpdate.numberOfPages = req.body.numberOfPages ?? itemToUpdate.numberOfPages;
        itemToUpdate.printType = req.body.printType ?? itemToUpdate.printType;
        itemToUpdate.numberOfCopies = req.body.numberOfCopies ?? itemToUpdate.numberOfCopies;

        const updatedItem = await itemToUpdate.save();
        res.status(200).json(updatedItem);
    } catch (err) {
        console.error('Error updating wishlist item:', err);
        res.status(500).json({ error: 'Failed to update wishlist item' });
    }
};

// Delete wishlist item by ID
const deleteWishlistItem = async (req, res) => {
    console.log("Delete wishlist item controller reached");
    try {
        const { id } = req.params;
        const itemToDelete = await Wishlist.findById(id);
        if (!itemToDelete) {
            return res.status(404).json({ error: 'Wishlist item to delete not found' });
        }
        await itemToDelete.deleteOne();
        res.status(200).json({ message: 'Wishlist item deleted successfully' });
    } catch (err) {
        console.error('Error deleting wishlist item:', err);
        res.status(500).json({ error: 'Failed to delete wishlist item' });
    }
};

module.exports = {
    getAllWishlistItems,
    getWishlistItemById,
    addWishlistItem,
    updateWishlistItem,
    deleteWishlistItem
};
