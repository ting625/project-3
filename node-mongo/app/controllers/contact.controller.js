const mongoose = require('mongoose');
const Contact = mongoose.model('Contact');

exports.createContact = (req, res) => {
    console.log('Incoming data:', req.body);
    const contact = new Contact({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    contact.save()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({
                message: "Fail!",
                error: err.message
            });
        });
};

exports.getContact = (req, res) => {
    Contact.findById(req.params.id).select('-___v')
        .then(contact => {
            res.status(200).json(contact);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Contact not found with id " + req.params.id,
                    error: err
                });
            }
            return res.status(500).send({
                message: "Error retrieving contact with id " + req.params.id,
                error: err
            });
        });
};

exports.contacts = (req, res) => {
    Contact.find().select('-___v')
        .then(contactInfos => {
            res.status(200).json(contactInfos);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

/*
//Delete Inventory Based on ID 
exports.deleteInventory = (req, res) => {
    Inventory.findByIdAndDelete(req.params.id).select('-___v-_id')
        .then(inventory => {
            if(!inventory) {
                res.status(404).json({
                    message: "No inventory found with id = " + req.params.id,
                    error: "404",
                });
            }
            res.status(200).json({});  
        }).catch(err => {
            return res.status(500).send({
                message: "Error -> Can't delete inventory with id = " + req.params.id,
                error: err.message
        });     
    });
}; 

//Find Inventory and Update it  
exports.updateInventory = (req, res) => {
    Inventory.findByIdAndUpdate(
    req.body._id,
        {
            title: req.body.title,
            author: req.body.author
        },
         {new: false}
    ).select('-___v')
        .then(inventory => {
          if(!inventory) {
            return res.status(404).send({
                message: "Error ->  Can't update an inventory with id = " + req.params.id,
                error: "Not Found!",
              });
            }
            res.status(200).json(inventory);  
        }).catch(err => {
            return res.status(500).send({
                message: "Error -> Can't update a inventory with id = " + req.params.id,
                error: err.message
            });     
        });
};
*/