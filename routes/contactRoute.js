const express = require('express');
const router = express.Router();
const { getAllContacts } = require('../controllers/contactController');
const { getContactById } = require('../controllers/contactController');

//Gets all
router.get('/', getAllContacts);

//Get one by id
router.get('/:id', getContactById);

module.exports = router;