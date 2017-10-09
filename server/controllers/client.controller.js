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
