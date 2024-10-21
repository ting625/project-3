module.exports = function(app) {
    var contacts = require('../controllers/contact.controller.js');

    app.post('/api/contact', contacts.createContact);
    app.get('/api/contact/:id', contacts.getContact);
    app.get('/api/contacts', contacts.contacts);
    //app.put('/api/contact', contacts.updateContact);
    //app.delete('/api/contact/:id', contacts.deleteContact);
}