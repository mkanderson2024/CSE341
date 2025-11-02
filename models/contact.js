const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    professionalName: {type: String, required: true },
    base64Image: { type: String },
    primaryDescription: String,
    workDescription1: String,
    workDescription2: String,
    linkTitleText: String,
    linkedInLink: { text: String, link: String },
    githubLink: { text: String, link: String }
});

module.exports = mongoose.model('Contact', contactSchema)