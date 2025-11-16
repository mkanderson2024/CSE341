const mongoose = require('mongoose');
require('dotenv').config();

const uriBase = process.env.MONGODB_URI.replace(/\/$/, '');
const dbName = 'cse341db';

const contactsDBUri = `${uriBase}/${dbName}?retryWrites=true&w=majority`;

console.log('Connecting to MongoDB Contacts DB at:', contactsDBUri);

const contactsDB = mongoose.createConnection(contactsDBUri);

contactsDB.once('open', () => console.log(`Connected to ${dbName}`));
contactsDB.on('error', (err) => console.error(`${dbName} connection error:`, err));

module.exports = { contactsDB };
