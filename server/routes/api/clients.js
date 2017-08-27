const Client = require('../../models/Client');

module.exports = (app) => {
    app.get('/api/clients', (req, res, next) => {
      console.log('Getting clients');
      Client.find()
        .exec()
        .then((client) => res.json(client))
        .catch((err) => next(err));
    });

    app.post('/api/clients', function (req, res, next) {
      if (!req.body.client.firstname || !req.body.client.lastname || !req.body.client.phone
             || !req.body.client.email || !req.body.client.email) {
        res.status(403).end();
      }

      const newClient = new Client(req.body.client);

      // TODO Santize inputs
      // newClient.firstname = sanitizeHtml(newClient.firstname);
      newClient.save((err, saved) => {
        if (err) {
          res.status(500).send(err);
        }
        res.json({ client: saved });
      });
    });
};
