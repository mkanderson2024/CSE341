const Contact = require('../models/contact');

// Find all
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    console.error('Error fetching all contacts:', err);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

// Find one by id
const getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ error: 'contact not found' });
    }

    res.json(contact);
  } catch (err) {
    console.error('Error fetching contact:', err);
    res.status(500).json({ error: 'Failed to fetch contact' });
  }
};

module.exports = { getAllContacts, getContactById };
