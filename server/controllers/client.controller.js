const Client = require('../models/Client');

// converts mongo validation error to user friendly error
function buildValidationMessage(dbError) {
    const errors = {};
    for (field in dbError) {
        if (field)
            errors[field] = dbError[field].message;
    }
    return errors;
}

module.exports = {
    getClients: function(req, res) {
        // return client list - make sure to populate related documents
        Client.find()
            .populate({ path: 'user', select: 'username firstname lastname email' })
            .populate({ path: 'coach', select: 'username' })
            .exec((err, clients) => {

            if (err) {
                return res.status(500).json({
                  message: 'Could not retrieve clients'
                });
            }
            return res.json({
                clients
            });
        });
    },
    findClientById: function(req, res) {
        // return single client
        Client.findById(req.params.id)
            .populate({ path: 'user', select: 'username firstname lastname email' })
            .populate({ path: 'coach', select: 'username' })
            .exec((err, client) => {

            if (err) {
                return res.status(500).json({
                    message: "Failed to find client"
                });
            }
            return res.json({
                client
            });
        });
    },
    // check version to handle multiple concurrent updates
    checkVersion: function(req, res, next) {
        let c = req.body.client;
        Client.findById(req.params.id).exec((err, client) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to find client"
                })
            }
            // if the version is incorrect then they are looking at an old record
            if (client.__v != c.__v) {
                return res.json({
                    success: false,
                    message: "Unable to update. Please refresh and try again"
                });
            }
            // continue to update client
            next();
        });
    },
    updateClient: function(req, res, next) {
        let c = req.body.client;
        // only get fields that have been provided. Stops the db from updating fields to null values
        let update = {};
        if (c.firstname) update.firstname = c.firstname;
        if (c.lastname) update.lastname = c.lastname;
        if (c.email) update.email = c.email;
        if (c.phone) update.phone = c.phone;

        // make sure to update the version after changes
        Client.findByIdAndUpdate(
            req.params.id,
            { $set: update, $inc: {__v: 1} }
        ).exec((err) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to update client"
                });
            }

            return res.json({
                success: true
            })
        });
    },
    newClient: function(req, res, next) {
        const newClient = new Client(req.body.client);

        newClient.save((err, saved) => {
            if (err) {
                // build error from validation messages
                if (err.name == 'ValidationError') {
                    var validation = buildValidationMessage(err.errors);
                    return res.json({
                        success: false,
                        errors: validation
                    });
                } else {
                    return res.status(500).json({
                        message: "Failed to create client"
                    });
                }
            } else {
                return res.json({
                    client: saved,
                    success: true
                });
            }
        });
    }
}
