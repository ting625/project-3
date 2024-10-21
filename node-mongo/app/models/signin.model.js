const mongoose = require('mongoose');

const SigninSchema = new mongoose.Schema({
    email: String,
    password: String
}, {
    versionKey: false // Disable the __v field
}); 

module.exports = mongoose.model('Signin', SigninSchema);