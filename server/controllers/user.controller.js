const User = require('mongoose').model('User');

module.exports = {
    getUsers: function(req, res, next) {
        User.find().exec((err, users) => {
            if (err) {
                return res.status(500).json({
                    message: "Could not retrieve users"
                });
            }

            return res.json({
                users
            });
        });
    },
    getUserById: function(req, res, next) {
        User.findById(req.params.id).exec((err, user) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to find user"
                });
            }

            return res.json({
                user
            });
        });
    },
    checkVersion: function(req, res, next) {
        let u = req.body.user;
        User.findById(req.params.id).exec((err, user) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to find user"
                });
            }

            if (user.__v != u.__v) {
                return res.json({
                    success: false,
                    message: "Unable to update. Please refresh and try again"
                })
            }
            next();
        })
    },
    updateUser: function(req, res, next) {
        let u = req.body.user;
        let update = {};
        if (u.username) update.username = u.username;
        if (u.firstname) update.firstname = u.firstname;
        if (u.lastname) update.lastname = u.lastname;
        if (u.email) update.email = u.email;

        User.findByIdAndUpdate(
            req.params.id,
            { $set: update, $inc: {__v:1} }
        ).exec((err) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to update user"
                });
            }

            return res.json({
                success: true
            })
        })
    },
    createUser: function(req, res, next) {
        // TODO figure out how to connect to passport
    },
    removeUser: function(req, res, next) {
        User.findByIdAndRemove(req.params.id).exec((err, user) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to delete user"
                });
            }

            return res.json({
                success: true
            })
        });
    }
}
