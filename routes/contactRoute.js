const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
// const { getAllContacts, getContactById } = require('../controllers/contactController'); Originally created

//Gets all contacts
router.get('/contact', contactController.getAllContacts);

//Get one contact by id
router.get('/contact/:id', contactController.getContactById);

//Post a new contact
router.post('/contact', contactController.createContact)

//Put (update) a contact by id
router.put('/contact/:id', contactController.updateContact)

//Delete a contact by id
router.delete('/contact/:id', contactController.deleteContact)

module.exports = router;