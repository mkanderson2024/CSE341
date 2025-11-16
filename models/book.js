const mongoose = require('../ConnectionBooks'); // uses the default connection

// Book schema
const bookSchema = new mongoose.Schema({
    authorFirstName: String,
    authorLastName: String,
    bookTitle: String,
    bookGenre: String,
    numberOfPages: Number,
    printType: String,
    numberOfCopies: Number
});

// Wishlist schema
const wishlistSchema = new mongoose.Schema({
    authorFirstName: String,
    authorLastName: String,
    bookTitle: String,
    bookGenre: String,
    numberOfPages: Number,
    printType: String,
    numberOfCopies: Number
});

const Book = mongoose.model('Book', bookSchema);
const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = {
    Book,
    Wishlist
};
