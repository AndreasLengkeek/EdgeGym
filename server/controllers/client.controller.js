const Client = require('../models/client');

module.exports = {
    getClients: function(req, res) {
        Client.find().exec((err, clients) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.json({
                clients
            });
        });
    },
    findClientById: function(req, res) {
        Client.find({ _id: req.params.id }).exec((err, client) => {
            if (err) {
                return res.status(500).json(err);
            }
            return res.json({
                client
            });
        });
    },
    newClient: function(req, res) {
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
                    return res.status(500).json(err);
                }
                return res.json({
                    client: saved
                });
            });
        }

    }
}
