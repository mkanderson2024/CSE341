const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error('ERROR: MONGODB_URI is not defined in .env');
  process.exit(1); // stop app if URI missing
}

console.log('Connecting to MongoDB Books DB');

mongoose.connect(uri)
  .then(() => console.log('Connected to cse341db-books successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

module.exports = mongoose;
