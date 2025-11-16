const mongoose = require('mongoose');
require('dotenv').config();

const uriBase = process.env.MONGODB_URI.replace(/\/$/, ''); // remove trailing slash if exists
const contactsDBUri = `${uriBase}/cse341db?retryWrites=true&w=majority`;

const connectContactsDB = async () => {
  try {
    console.log('Connecting to MongoDB Contacts DB at:', contactsDBUri);
    await mongoose.connect(contactsDBUri);
    console.log("Connected to cse341db on MongoDB");
  } catch (err) {
    console.error("MongoDB Connection to Contacts Database error:", err);
  }
};

module.exports = { connectContactsDB, mongoose };
