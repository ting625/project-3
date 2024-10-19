const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
}, {
    versionKey: false // Disable the __v field
}); 

module.exports = mongoose.model('Inventory', InventorySchema);