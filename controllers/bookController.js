const { Book } = require('../models/book');

// Get all books
const getAllbooks = async (req, res) => {
    console.log("Get all books controller reached");
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (err) {
        console.error('Error fetching all books:', err);
        res.status(500).json({ error: 'Failed to fetch books' });
    }
};

// Get one book by ID
const getbookById = async (req, res) => {
    console.log("Get book by id reached");
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ error: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (err) {
        console.error('Error fetching book by ID:', err);
        res.status(500).json({ error: 'Failed to fetch book' });
    }
};

// Create a new book
const createbook = async (req, res) => {
    console.log("Create book controller reached");
    try {
        const newBook = new Book({
            authorFirstName: req.body.authorFirstName,
            authorLastName: req.body.authorLastName,
            bookTitle: req.body.bookTitle,
            bookGenre: req.body.bookGenre,
            numberOfPages: req.body.numberOfPages,
            printType: req.body.printType,
            numberOfCopies: req.body.numberOfCopies
        });
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        console.error('Error creating new book:', err);
        res.status(500).json({ error: 'Failed to create new book' });
    }
};

// Update book by ID
const updatebook = async (req, res) => {
    console.log("Update book controller reached");
    try {
        const { id } = req.params;
        const bookToUpdate = await Book.findById(id);
        if (!bookToUpdate) {
            return res.status(404).json({ error: 'Book to update not found' });
        }

        bookToUpdate.authorFirstName = req.body.authorFirstName ?? bookToUpdate.authorFirstName;
        bookToUpdate.authorLastName = req.body.authorLastName ?? bookToUpdate.authorLastName;
        bookToUpdate.bookTitle = req.body.bookTitle ?? bookToUpdate.bookTitle;
        bookToUpdate.bookGenre = req.body.bookGenre ?? bookToUpdate.bookGenre;
        bookToUpdate.numberOfPages = req.body.numberOfPages ?? bookToUpdate.numberOfPages;
        bookToUpdate.printType = req.body.printType ?? bookToUpdate.printType;
        bookToUpdate.numberOfCopies = req.body.numberOfCopies ?? bookToUpdate.numberOfCopies;

        const updatedBook = await bookToUpdate.save();
        res.status(200).json(updatedBook);
    } catch (err) {
        console.error('Error updating book:', err);
        res.status(500).json({ error: 'Failed to update book' });
    }
};

// Delete book by ID
const deletebook = async (req, res) => {
    console.log("Delete book controller reached");
    try {
        const { id } = req.params;
        const bookToDelete = await Book.findById(id);
        if (!bookToDelete) {
            return res.status(404).json({ error: 'Book to delete not found' });
        }
        await bookToDelete.deleteOne();
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (err) {
        console.error('Error deleting book:', err);
        res.status(500).json({ error: 'Failed to delete book' });
    }
};

module.exports = { getAllbooks, getbookById, createbook, updatebook, deletebook };
