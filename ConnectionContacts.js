const mongoose = require('mongoose');
require("dotenv").config()

const uri = process.env.MONGODB_URI + "/cse341db";


const connectContactsDB = async () => {
  try {
    await mongoose.connect(uri, {
    });
    console.log("Connected to cse341db on MongoDB");
  } catch (err) {
    console.error("MongoDB Connection to Contacts Database error:", err);
  }
};

module.exports = { connectContactsDB, mongoose }