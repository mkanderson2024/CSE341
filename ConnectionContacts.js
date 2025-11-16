const mongoose = require('mongoose');
require("dotenv").config();

const uriBase = process.env.MONGODB_URI;

const connectContactsDB = async () => {
  try {
    await mongoose.connect(`${uriBase}/cse341db?retryWrites=true&w=majority`);
    console.log("Connected to cse341db on MongoDB");
  } catch (err) {
    console.error("MongoDB Connection to Contacts Database error:", err);
  }
};

module.exports = { connectContactsDB, mongoose };
