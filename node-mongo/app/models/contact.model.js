const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
}, {
    versionKey: false // Disable the __v field
});

module.exports = mongoose.model('Contact', ContactSchema);