const mongoose = require('mongoose');
//mongoose.set('useFindAndModify', false);
const Signin = mongoose.model('Signin');

exports.createSignin = (req, res) => {
        // Log the incoming request body
        //console.log('request: ', req)
        console.log('Incoming data:', req.body); // This will log the entire body

        // If you want to log individual fields
        console.log('Email:', req.body.email);
        console.log('Password:', req.body.password);

        const signin = new Signin({
                            email: req.body.email,
                            password: req.body.password
                           });

// Save a Inventroy in the MongoDB 
signin.save().then(data => {
                res.status(200).json(data);
            }).catch(err => {
                res.status(500).json({
                    message: "Fail!",
                    error: err.message
                });
            });
};


//getInventory Function
exports.getSignin = (req, res) => {
    Signin.findById(req.params.id).select('-___v')
        .then(signin => {
            res.status(200).json(signin);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Inventory not found with id " + req.params.id,
                    error: err
                });
        }
        return res.status(500).send({
            message: "Error retrieving Inventroy with id " + req.params.id,
            error: err
        });
    });
}; 

//get All Inventory Function
exports.signins = (req, res) => {
    Signin.find().select('-___v').then(signininfos => {
        res.status(200).json(signininfos);
    }).catch(error => {
        // log on console
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