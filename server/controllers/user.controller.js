const User = require('mongoose').model('User');
const validator = require('validator');

function validateCreateUser(payload) {
    const EMAIL = payload.email;
    const PASSWORD = payload.password;
    // check if any data missing
    if (!EMAIL || !PASSWORD) {
      return { errors: { summary: 'You must provide email and password' }, success: false };
    }
    let errors = {};
    let isSuccess = true
    // check if email is a string and a valid email format
    if (typeof(EMAIL) !== 'string' || !validator.isEmail(EMAIL)) {
        errors.email = 'Not a valid email format';
        isSuccess = false;
    }
    // check if password is a string
    if (typeof(PASSWORD) !== 'string') {
        errors.password = 'Password is not valid';
        isSuccess = false;
    }
    // check if password is long enough
    if (!validator.isLength(PASSWORD, { min: 4, max: 100})) {
        errors.password = 'Password is too short';
        isSuccess = false;
    }
    // check if password and email match each other
    if (EMAIL === PASSWORD) {
      errors.password = 'Password must not match email address';
      isSuccess = false;
    }

    return {
        success: isSuccess,
        errors
    };
}

// convert mongo validation error to user friendly error
function buildValidationMessage(dbError) {
    console.log(dbError);
    const errors = {};
    for (field in dbError) {
        if (field)
            errors[field] = dbError[field].message;
    }
    return errors;
}

module.exports = {
    getUsers: function(req, res, next) {
        // returns coaches and admins
        User.find({ 'permissions.role': { $in: ['coach', 'admin'] } }).exec((err, users) => {
            if (err) {
                return res.status(500).json({
                    error: "Could not retrieve users"
                });
            }

            return res.json({
                users
            });
        });
    },
    // return details for one user
    getUserById: function(req, res, next) {
        User.findById(req.params.id).exec((err, user) => {
            if (err) {
                return res.status(500).json({
                    error: "Failed to find user"
                });
            }

            return res.json({
                user
            });
        });
    },
    // check version to handle multiple concurrent updates
    checkVersion: function(req, res, next) {
        let u = req.body.user;
        User.findById(req.params.id).exec((err, user) => {
            if (err) {
                return res.status(500).json({
                    error: "Failed to find user"
                });
            }

            // if the version is incorrect then they are looking at an old record
            if (user.__v != u.__v) {
                return res.json({
                    success: false,
                    message: "Unable to update. Please refresh and try again"
                })
            }
            // continue to update user
            next();
        })
    },
    updateUser: function(req, res, next) {
        let u = req.body.user;
        // only get fields that have been provided. Stops the db from updating fields to null values
        let update = {};
        if (u.username) update.username = u.username;
        if (u.firstname) update.firstname = u.firstname;
        if (u.lastname) update.lastname = u.lastname;
        if (u.email) update.email = u.email;
        if (u.permissions) {
            update.permissions = u.permissions
            update.permissions.updatedAt = Date.now()
        }

        // make sure to update the version after changes
        User.findByIdAndUpdate(
            req.params.id,
            { $set: update, $inc: {__v:1} }
        ).exec((err) => {
            if (err) {
                return res.status(500).json({
                    error: "Failed to update user"
                });
            }

            return res.json({
                success: true
            })
        })
    },
    createUser: function(req, res, next) {
        // validate form inputs
        const result = validateCreateUser(req.body);
        if (!result.success) {
            return res.json(result);
        }

        User.findOne({ email: req.body.email }).exec((err, user) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to create user"
                });
            }
            // user already exists
            if (user) {
                console.log('found matching user = ', user.email)
                return res.json({
                    success: false,
                    errors: { email: "Email is already taken" }
                })
            }

            // setup user as coach
            let newUser = new User({
                username: req.body.username,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                permissions: {
                    role: 'coach'
                }
            });

            newUser.save((err) => {
                if (err) {
                    if (err.name == 'ValidationError')
                        return res.json({ success: false, errors: buildValidationMessage(err.errors) });
                    return res.status(500).json({
                        message: "Failed to create user"
                    });
                }

                return res.json({
                    success: true
                })
            });
        });
    },
    // remove user by id from db
    removeUser: function(req, res, next) {
        User.findById(req.params.id).exec((err, user) => {
            if (err || !user) {
                return res.status(500).json({
                    error: "Could not find user"
                });
            }

            if (user.permissions && user.permissions.role == 'admin') {
                return res.status(500).json({
                    error: "Can not delete admin users"
                })
            }

            User.findByIdAndRemove(user._id, (err) => {
                if (err) {
                    return res.status(500).json({
                        error: "Server error while deleting user"
                    });
                }

                return res.json({
                    success: true
                })
            });
        });
    }
}
