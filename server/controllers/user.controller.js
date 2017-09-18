const User = require('../models/user');

module.exports = {
    getUsers: function(req, res) {
        User.find().exec((err, users) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json({ users });
        });
    },
    getUser: function(req, res) {
        User.find({ _id: req.params.id }).exec((err, user) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json({ user });
        })
    },
    newUser: function(req, res) {
        // TODO check field is not blank
        const newUser = new User(req.body.user);

        // TODO santize inputs
        newUser.save((err, saved) => {
            if (err) {
                res.status(500).send(err);
            }
            res.json({ saved });
        })
    }
}
