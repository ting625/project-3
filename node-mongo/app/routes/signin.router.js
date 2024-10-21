module.exports = function(app) {

    var signins = require('../controllers/signin.controller.js');

    app.post('/api/signin', signins.createSignin);
    app.get('/api/signin/:id', signins.getSignin);
    app.get('/api/signins', signins.signins);
    //app.put('/api/inventory', inventories.updateInventory);
    //app.delete('/api/inventory/:id', inventories.deleteInventory);
}