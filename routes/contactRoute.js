const express = require('express');
const router = express.Router();
const { getAllContacts, getContactById } = require('../controllers/contactController');

//Gets all
router.get('/professional', getAllContacts);

//Get one by id
router.get('/contact/:id', getContactById);

module.exports = router;