const mongoose = require('mongoose');
require('dotenv').config();

const uriBase = process.env.MONGODB_URI.replace(/\/$/, '');
const dbName = 'cse341db-books';


const booksDBUri = `${uriBase}/${dbName}?retryWrites=true&w=majority`;

console.log('Connecting to MongoDB Books DB at:', booksDBUri);

const booksDB = mongoose.createConnection(booksDBUri);

booksDB.once('open', () => console.log(`Connected to ${dbName}`));
booksDB.on('error', (err) => console.error(`${dbName} connection error:`, err));

module.exports = { booksDB };
