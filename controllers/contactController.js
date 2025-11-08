const Contact = require('../models/contact');

// Old code commented out for now.
// const { normalizeContacts } = require('../utility/contactsUtility');

// Find all contacts
const getAllContacts = async (req, res) => {
  console.log("Get all contacts controller reached")
  try {
    const contacts = await Contact.find({});

    // Old code commented out for now.
    // const normalizedContacts = contacts.map(c => normalizeContacts(c.toObject()));
    // // Return all contacts
    // res.json(normalizedContacts[0]);

    //Return all contacts
    res.status(200).json(contacts)

  } catch (err) {
    console.error('Error fetching all contacts:', err);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

// Find one contact by ID
const getContactById = async (req, res) => {
  console.log("Get contact by id reached")
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id)
    // Old code commented out for now.
    // const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    // Old code commented out for now.
    // const normalizedContact = normalizeContacts(contact.toObject());
    // res.json(normalizedContact);
    // console.log('Normalized contact:', JSON.stringify(normalizedContact, null, 2));

    res.status(200).json(contact);
    console.log('Found contact', JSON.stringify(contact, null, 2));

  } catch (err) {
    console.error('Error fetching contact by ID:', err);
    res.status(500).json({ error: 'Failed to fetch contact' });

  }

};

// Create contact
const createContact = async (req,res) => {
  console.log("Create contactact controller reached")
  try {const contact = new Contact ({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
    });

    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    console.error('Error creating new contact:', err);
    res.status(500).json({ error: 'Failed to create new contact'});
  }
};

// Update contact by id
const updateContact = async (req,res) => {
  console.log("Update contact controller reached")
  try{
    const { id } = req.params
    const contactToUpdate = await Contact.findById(id);
    
    if (!contactToUpdate) {
      return res.status(404).json({ error: 'Contact to update not found'});
    }

    contactToUpdate.firstName = req.body.firstName ?? contactToUpdate.firstName;
    contactToUpdate.lastName = req.body.lastName ?? contactToUpdate.lastName;
    contactToUpdate.email = req.body.email ?? contactToUpdate.email;
    contactToUpdate.favoriteColor = req.body.favoriteColor ?? contactToUpdate.favoriteColor;
    contactToUpdate.birthday = req.body.birthday ?? contactToUpdate.birthday;

    const updatedContact = await contactToUpdate.save()

    res.json(updatedContact);
  } catch (err) {
    console.error('Error updating contact:', err);
    res.status(500).json({ error: 'Failed to update contact' });
  }
};

// Delete contact by id
const deleteContact = async (req,res) => {
  console.log("Delete contact controller reached")
  try{
    const { id } = req.params
    const contactToDelete = await Contact.findById(id)

    if (!contactToDelete) {
      return res.status(404).json({ error: 'Contact to delete not found'});
    }

    await contactToDelete.deleteOne()
    res.json({ message: 'Contact deleted successfully'});
    
  } catch (err) {
    console.error('Error deleting contact:', err);
    res.status(500).json({ error: 'Failed to delete contact'});
  }
};

module.exports = { getAllContacts, getContactById, createContact, updateContact, deleteContact };
