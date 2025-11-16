const mongoose = require('mongoose');
require("dotenv").config();

const uri = process.env.MONGODB_URI;

// Create the connection and export it
const booksDB = mongoose.createConnection(uri);

booksDB.once('open', () => {
    console.log("Connected to cse341db-books on MongoDB");
});

booksDB.on('error', (err) => {
    console.error("MongoDB Connection to Books Database error:", err);
});

module.exports = { booksDB };
