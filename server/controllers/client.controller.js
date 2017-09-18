const Client = require('../models/client');

module.exports = {
    getClients: function(req, res) {
        Client.find().exec((err, clients) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json({
                clients
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
                    res.status(500).send(err);
                }
                res.json({
                    client: saved
                });
            });
        }

    }
}
