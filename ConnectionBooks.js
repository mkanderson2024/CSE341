const mongoose = require('mongoose');
require("dotenv").config();

const uriBase = process.env.MONGODB_URI;

// Create the connection and export it
const booksDB = mongoose.createConnection(`${uriBase}cse341db-books`);

booksDB.once('open', () => console.log('Connected to cse341db-books'));
booksDB.on('error', (err) => console.error('Books DB connection error:', err));

module.exports = { booksDB };
