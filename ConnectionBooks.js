const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

console.log('Connecting to MongoDB Books DB at:', uri);

mongoose.connect(uri)
  .then(() => console.log('Connected to cse341db-books successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;