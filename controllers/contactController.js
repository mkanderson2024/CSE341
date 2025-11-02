const Contact = require('../models/contact');
const { normalizeContacts } = require('../utility/contactsUtility');

// Find all contacts
const getAllContacts = async (req, res) => {
  console.log("Get all contacts controller reached")
  try {
    const contacts = await Contact.find({});
    const normalizedContacts = contacts.map(c => normalizeContacts(c.toObject()));

    // Return the first contact for now
    res.json(normalizedContacts[0]);
  } catch (err) {
    console.error('Error fetching all contacts:', err);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

// Find one by ID
const getContactById = async (req, res) => {
  console.log("Get contact by id reached")
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    const normalizedContact = normalizeContacts(contact.toObject());
    res.json(normalizedContact);
  } catch (err) {
    console.error('Error fetching contact by ID:', err);
    res.status(500).json({ error: 'Failed to fetch contact' });
    console.log('Normalized contact:', JSON.stringify(normalizedContact, null, 2));
  }

};

module.exports = { getAllContacts, getContactById };
