const mongoose = require('mongoose');

// Commented out original schema in case its needed later
// const contactSchema = new mongoose.Schema({
//     professionalName: {type: String, required: true },
//     base64Image: { type: String },
//     primaryDescription: String,
//     workDescription1: String,
//     workDescription2: String,
//     linkTitleText: String,
//     linkedInLink: { text: String, link: String },
//     githubLink: { text: String, link: String },
//     nameLink: {firstName: String, url: String}
// });

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    favoriteColor: { type: String, required: true },
    birthday: {type: String, required: true}

});

contactSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.model('Contact', contactSchema)