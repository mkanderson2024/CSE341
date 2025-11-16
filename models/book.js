const mongoose = require('mongoose');

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

const wishlistSchema = new mongoose.Schema({
    authorFirstName: String,
    authorLastName: String,
    bookTitle: String,
    bookGenre: String,
    numberOfPages: Number,
    printType: String,
    numberOfCopies: Number
});

function bookSchemaExport(db) {
    return db.model('Book', bookSchema);
}

function wishlistSchemaExport(db) {
    return db.model('Wishlist', wishlistSchema);
}

module.exports = {
    bookSchemaExport,
    wishlistSchemaExport
};
