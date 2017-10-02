const Client = require('../models/client');

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
        Client.findByid(req.params.id)
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
        if (!req.body.client) {
            console.log("Missing body");
            res.status(403).end();
        } else {
            if (!req.body.client.firstname || !req.body.client.lastname || !req.body.client.phone ||
                !req.body.client.email || !req.body.client.email) {
                console.log("missing field");
                res.status(403).end();
            }

            const newClient = new Client(req.body.client);

            // TODO Santize inputs
            // newClient.firstname = sanitizeHtml(newClient.firstname);
            newClient.save((err, saved) => {
                if (err) {
                    err.message = 'Could not save new client';
                    next(err);
                }
                return res.json({
                    client: saved
                });
            });
        }

    }
}
