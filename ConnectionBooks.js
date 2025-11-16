const mongoose = require('mongoose');
require('dotenv').config();

const uriBase = process.env.MONGODB_URI; // should end with no slash
const dbName = 'cse341db-books';

// Create the connection and export it
const booksDB = mongoose.createConnection(`${uriBase}/${dbName}?retryWrites=true&w=majority`);

booksDB.once('open', () => console.log(`Connected to ${dbName}`));
booksDB.on('error', (err) => console.error(`${dbName} connection error:`, err));

module.exports = { booksDB };
