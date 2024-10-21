const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())

require('./app/models/contact.model.js');
require('./app/models/signin.model.js');


// Configuring the database
require('dotenv').config();
const mongoose = require('mongoose');

// Connecting to the database 
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); 

mongoose.connection
.on('open', () => {
    console.log('Mongoose connection open');
})
.on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
});

require('./app/routes/contact.router.js')(app);
require('./app/routes/signin.router.js')(app);

// Create a Server
const server = app.listen(8080, function () {
    const host = server.address().address
    const port = server.address().port

    console.log("App listening at https://%s:%s", host, port)
})
