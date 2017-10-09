const Client = require('../models/client');

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
        Client.find()
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
        Client.findById(req.params.id)
            .populate({ path: 'coach', select: 'username' })
            .exec((err, client) => {

            if (err) {
                res.status(500).json(err);
            }
            return res.json({
                client
            });
        });
    },
    updateClient: function(req, res, next) {
        let reqClient = req.body.client;
        let updateClient = {
            firstname: reqClient.firstname,
            lastname: reqClient.lastname,
            email: reqClient.email,
            phone: reqClient.phone
        }
        console.log('Update client:',req.params.id);
        Client.findById(req.params.id)
            .exec((err, client) => {
                console.log(err);
                if (err) return res.status(500).end();

                if (client.__v !== reqClient.__v) {
                    return res.json({
                        success: false,
                        message: "Unable to update. Please refresh and try again"
                    })
                } else {
                    Client.update({ _id: req.params.id }, { $set: updateClient, $inc: {__v: 1}})
                        .exec((err, clients) => {
                            console.log(err);
                            if (err) return res.status(500).end();

                            return res.json({
                                success: true
                            })
                        });
                }
            })
    },
    newClient: function(req, res, next) {
        const newClient = new Client(req.body.client);

        newClient.save((err, saved) => {
            if (err) {
                if (err.name == 'ValidationError') {
                    var validation = buildValidationMessage(err.errors);
                    return res.json({
                        success: false,
                        errors: validation
                    });
                } else {
                    next(err);
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
