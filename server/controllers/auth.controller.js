const User = require('../models/User');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const validator = require('validator');

const mail = require('../services/sendgrid');

// create token
function tokenForUser(user) {
    const timestamp = new Date().getTime();
    const expireTime = timestamp + (1000 * 60 * 60 * 24 * 7); // expires in 7 days
    // the subject (sub) of this token is the user id, iat = issued at time, exp = expiry time
    return jwt.sign({ sub: user._id, iat: timestamp, exp: expireTime }, config.jwtSecret);
}

// create link code
// for confirming email and forgotten passwords
function createLinkCode(type) {
    // timestamp so can check age and random number to create linkCode
    const timestamp = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    const linkCode = timestamp + '-' + randomNum + '-' + type;
    return linkCode;
}

function validateLoginForm(payload) {
    const errors = {};
    let isValid = true;
    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length == 0) {
        console.log('email error');
        isValid = false;
        errors.email = 'Please provide your email address';
    }

    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length == 0) {
        console.log('password error');
        isValid = false;
        errors.password = 'Please provide your password';
    }

    return {
        success: isValid,
        errors
    };
}

function validateSignupForm(payload) {
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
    login: function(req, res, next) {
        return res.json({
            success: true,
            message: 'You have successfully logged in',
            token: tokenForUser(req.user),
            user: req.user
        });
    },
    facebookLogin: function(req, res, next) {
        let token = tokenForUser(req.user);
        res.redirect('/auth?'+token);
    },
    signup: function(req, res, next) {
        // validate form inputs
        const result = validateSignupForm(req.body);
        if (!result.success) {
            return res.json(result);
        }

        User.findOne({ email: req.body.email }).exec((err, user) => {
            if (err) {
                return res.status(500).json({
                    message: "Failed to create user"
                });
            }

            if (user) {
                console.log('found matching user = ', user.email)
                return res.json({
                    success: false,
                    errors: { email: "Email is already taken" }
                })
            }

            const u = req.body;
            const newUser = new User({
                email: u.email,
                password: u.password,
                permissions: {
                    role: "user"
                }
            });
            if (u.username) newUser.username = u.username;
            if (u.firstname) newUser.firstname = u.firstname;
            if (u.lastname) newUser.lastname = u.lastname;

            newUser.save((err, user) => {
                if (err) {
                    if (err.name == 'ValidationError')
                        return res.json({ success: false, errors: buildValidationMessage(err.errors) });
                    return res.status(500).json({
                        message: "Failed to create user"
                    });
                }
                return res.json({
                    success: true,
                    token: tokenForUser(user),
                    user
                });
            })
        })
    },
    forgotPassword: function(req, res, next) {
        const EMAIL = req.body.email;

        if (!EMAIL || typeof EMAIL !== 'string' || !validator.isEmail(EMAIL))
            return res.status(422).json({ error: "You must provide a valid email address" });

        User.findOne({ email: EMAIL }, (err, existing) => {
            if (err) {
                return res.status(500).json({ error: "A server error occured"});
            }

            if (existing) {
                const resetToken = createLinkCode("pwr");

                User.findByIdAndUpdate(existing._id, { $set: { resetPassword: resetToken } }, (err, updated) => {
                    if (err) {
                        return res.status(500).json({ error: "A server error occured"});
                    }
                    console.log('send fp to = ',updated.email);

                    mail.forgotPasswordEmail(updated.email, resetToken, (err, response) => {
                        if (err) {
                            return res.status(500).json({ error: "A server error occured"});
                        }

                        return res.json({ message: "Thank you, please check your email" });
                    });
                });
            } else {
                // email does not exist, return same message to not indicate whether a user has an account or not (privacy)
                return res.json({ message: "Thank you, please check your email" });
            }
        });
    },
    resetPassword: function(req, res, next) {

    }
}
