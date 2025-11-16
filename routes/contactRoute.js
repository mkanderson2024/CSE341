const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
// const { getAllContacts, getContactById } = require('../controllers/contactController'); Originally created

//Gets all contacts
router.get('/', contactController.getAllContacts);

//Get one contact by id
router.get('/:id', contactController.getContactById);

//Post a new contact
router.post('/', contactController.createContact)

//Put (update) a contact by id
router.put('/:id', contactController.updateContact)

//Delete a contact by id
router.delete('/:id', contactController.deleteContact)

module.exports = router;