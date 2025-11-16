const { booksDB } = require('../ConnectionBooks');
const { bookSchemaExport } = require('../models/book');

// Create the Book model using the booksDB connection
const Book = bookSchemaExport(booksDB);

// Get all books
const getAllbooks = async (req, res) => {
    const books = await Book.find({});
    res.status(200).json(books);
};

// Get one book by ID
const getbookById = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(book);
};

// Create a new book
const createbook = async (req, res) => {
    const newBook = await Book.create({
        authorFirstName: req.body.authorFirstName,
        authorLastName: req.body.authorLastName,
        bookTitle: req.body.bookTitle,
        bookGenre: req.body.bookGenre,
        numberOfPages: req.body.numberOfPages,
        printType: req.body.printType,
        numberOfCopies: req.body.numberOfCopies
    });
    res.status(201).json(newBook);
};

// Update book by ID
const updatebook = async (req, res) => {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(updatedBook);
};

// Delete book by ID
const deletebook = async (req, res) => {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
};

module.exports = { getAllbooks, getbookById, createbook, updatebook, deletebook };
